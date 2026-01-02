import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';

const DeveloperPage = () => {
  const { slug } = useParams();
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  // Find the project by slug
  const project = properties.find(prop => prop.slug === slug);

  // Get all properties for this developer/project
  const developerProperties = properties.filter(prop => prop.developer === project?.developer);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-text-heading mb-4">Project Not Found</h1>
          <Link to="/" className="text-teal hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="scroll-smooth bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <h1 className="text-5xl font-bold text-white mb-3">{project.name}</h1>
          <p className="text-xl text-white/90">By {project.developer}</p>
          <div className="flex items-center gap-4 mt-4 text-white">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {project.location}
            </span>
            <span className="px-3 py-1 bg-teal rounded-full text-sm font-semibold">{project.status}</span>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-text-heading mb-4">
                About <span className="text-teal">{project.name}</span>
              </h2>
              <p className="text-lg text-text-primary mb-6 leading-relaxed">
                {project.name} by {project.developer} is a premium residential project located in {project.location}.
                Experience luxury living with world-class amenities and modern architecture designed for contemporary lifestyles.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-text-heading mb-1">Configuration</h4>
                  <p className="text-teal font-bold">{project.bhk}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-text-heading mb-1">Price</h4>
                  <p className="text-teal font-bold">{project.price}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-text-heading mb-12 text-center">
            World-Class <span className="text-teal">Amenities</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏊', name: 'Swimming Pool' },
              { icon: '💪', name: 'Gymnasium' },
              { icon: '🎮', name: 'Kids Play Area' },
              { icon: '🌳', name: 'Landscaped Gardens' },
              { icon: '🏃', name: 'Jogging Track' },
              { icon: '🎾', name: 'Sports Facilities' },
              { icon: '🚗', name: 'Covered Parking' },
              { icon: '🔒', name: '24/7 Security' }
            ].map((amenity, index) => (
              <div
                key={index}
                className="bg-stone-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h4 className="font-semibold text-text-heading">{amenity.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Units */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-1000 transform ${
              headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-text-heading mb-3">
              Explore Units in <span className="text-teal">{project.name}</span>
            </h2>
            <p className="text-lg text-text-primary max-w-2xl mx-auto font-medium">
              {developerProperties.length} available configurations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {developerProperties.map((property, index) => (
              <Link
                key={property.id}
                to={`/property-detail/${property.slug}`}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-1000 transform hover:-translate-y-2 ${
                  headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative sm:h-80 h-56 overflow-hidden before:bg-gradient-to-t before:from-black before:via-black/60 before:to-transparent before:absolute before:w-full before:h-[70%] before:bottom-0 before:right-0 before:z-10 before:duration-300 group-hover:before:h-[90%]">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute w-full sm:p-6 p-4 bottom-0 z-10 text-white">
                  <h4 className="sm:text-xl text-sm font-semibold my-1">{property.name}</h4>
                  <p className="sm:text-sm text-xs font-medium mb-2">{property.bhk}</p>
                  <p className="sm:text-lg text-base font-bold text-teal-300">{property.price}</p>
                  <div className="flex justify-between text-xs mt-4">
                    <div className="font-medium">View Details →</div>
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {property.location}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-teal to-teal-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Interested in {project.name}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our expert consultants for site visits, pricing, and availability
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919911114978"
              className="bg-white text-teal px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              📞 Call +91 99111 14978
            </a>
            <a
              href="https://wa.me/919911114978?text=Hi, I'm interested in {project.name}"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default DeveloperPage;
