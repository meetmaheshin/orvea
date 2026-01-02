import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { useState } from 'react';

const PropertyDetailPage = () => {
  const { slug } = useParams();
  const property = properties.find(prop => prop.slug === slug);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  if (!property) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-text-heading mb-4">Property Not Found</h1>
          <Link to="/" className="text-teal hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get similar properties (same location or developer)
  const similarProperties = properties
    .filter(p => p.id !== property.id && (p.location === property.location || p.developer === property.developer))
    .slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (Google Sheets integration can be added here)
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="scroll-smooth bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-stone-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Link to="/" className="hover:text-teal">Home</Link>
            <span>/</span>
            <Link to={`/developer/${property.slug}`} className="hover:text-teal">{property.developer}</Link>
            <span>/</span>
            <span className="text-text-heading font-medium">{property.name}</span>
          </div>
        </div>
      </div>

      {/* Property Header */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-text-heading mb-2">{property.name}</h1>
              <p className="text-xl text-text-primary mb-2">By {property.developer}</p>
              <div className="flex items-center gap-2 text-text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-teal">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-medium">{property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-teal mb-2">{property.price}</p>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                {property.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:row-span-2">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`${property.image}?sig=${i}`}
                  alt={`${property.name} view ${i}`}
                  className="w-full h-48 object-cover rounded-xl shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details Grid */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Property Info */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-text-heading mb-6">
                  Property <span className="text-teal">Overview</span>
                </h2>
                <p className="text-lg text-text-primary leading-relaxed mb-6">
                  {property.name} by {property.developer} offers premium {property.bhk} apartments in the heart of {property.location}.
                  This luxurious residential project combines modern architecture with world-class amenities, providing an unparalleled living experience.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-stone-50 rounded-xl">
                    <h4 className="font-semibold text-text-heading mb-2">Configuration</h4>
                    <p className="text-teal font-bold text-lg">{property.bhk}</p>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-xl">
                    <h4 className="font-semibold text-text-heading mb-2">Status</h4>
                    <p className="text-green-600 font-bold text-lg">{property.status}</p>
                  </div>
                  <div className="text-center p-4 bg-stone-50 rounded-xl">
                    <h4 className="font-semibold text-text-heading mb-2">Location</h4>
                    <p className="text-teal font-bold text-lg">{property.location}</p>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-text-heading mb-6">
                  <span className="text-teal">Specifications</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { label: 'Unit Type', value: property.bhk },
                    { label: 'Price Range', value: property.price },
                    { label: 'Property Type', value: 'Residential Apartment' },
                    { label: 'Project Size', value: 'Premium Development' },
                    { label: 'Total Towers', value: 'Multiple Towers' },
                    { label: 'Total Units', value: 'Limited Units' },
                    { label: 'Possession', value: property.status },
                    { label: 'Car Parking', value: 'Covered Parking' }
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-stone-200">
                      <span className="text-text-muted font-medium">{spec.label}</span>
                      <span className="text-text-heading font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-text-heading mb-6">
                  Premium <span className="text-teal">Amenities</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    '🏊 Swimming Pool',
                    '💪 Modern Gymnasium',
                    '🎮 Kids Play Area',
                    '🌳 Landscaped Gardens',
                    '🏃 Jogging Track',
                    '🎾 Sports Facilities',
                    '🚗 Covered Parking',
                    '🔒 24/7 Security',
                    '🏪 Shopping Complex',
                    '🏥 Healthcare Center',
                    '🎪 Clubhouse',
                    '⚡ Power Backup'
                  ].map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 text-text-primary">
                      <span className="text-2xl">{amenity.split(' ')[0]}</span>
                      <span className="font-medium">{amenity.substring(3)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-teal to-teal-dark rounded-2xl shadow-2xl p-8 text-white sticky top-24">
                <h3 className="text-2xl font-bold mb-2">Interested in this property?</h3>
                <p className="mb-6 text-white/90">Fill out the form and we'll get back to you shortly</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-text-heading focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-text-heading focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-text-heading focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg text-text-heading focus:outline-none focus:ring-2 focus:ring-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-teal font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Inquiry
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="font-semibold mb-4">Or contact us directly:</p>
                  <a
                    href="tel:+919911114978"
                    className="flex items-center gap-3 mb-3 hover:text-teal-200 transition-colors"
                  >
                    <span className="text-2xl">📞</span>
                    <span className="font-medium">+91 99111 14978</span>
                  </a>
                  <a
                    href="mailto:info@orveaestates.com"
                    className="flex items-center gap-3 hover:text-teal-200 transition-colors"
                  >
                    <span className="text-2xl">✉️</span>
                    <span className="font-medium">info@orveaestates.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-text-heading mb-12 text-center">
              Similar <span className="text-teal">Properties</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((prop) => (
                <Link
                  key={prop.id}
                  to={`/property-detail/${prop.slug}`}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden before:bg-gradient-to-t before:from-black before:via-black/60 before:to-transparent before:absolute before:w-full before:h-[70%] before:bottom-0 before:right-0 before:z-10 before:duration-300 group-hover:before:h-[90%]">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full h-full object-cover duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute w-full p-6 bottom-0 z-10 text-white">
                    <h4 className="text-xl font-semibold my-1">{prop.name}</h4>
                    <p className="text-sm font-medium mb-2">{prop.bhk}</p>
                    <p className="text-lg font-bold text-teal-300">{prop.price}</p>
                    <div className="flex justify-between text-xs mt-4">
                      <div className="font-medium">View Details →</div>
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {prop.location}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PropertyDetailPage;
