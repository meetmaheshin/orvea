import { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.phone && formData.email) {
      try {
        // Google Apps Script Web App URL - Replace with your actual deployed script URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzyC9yYp3UFt9daTx-6glhDyYLe-9MQUt__FMX1k5JSAubOgeg4mpuDVBTNgojYKUUXuw/exec';

        const response = await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
          })
        });

        alert(`Thank you ${formData.name}! We'll contact you soon at ${formData.email}`);
        setFormData({ name: '', phone: '', email: '' });
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Thank you for your interest! We have received your details.');
        setFormData({ name: '', phone: '', email: '' });
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="home" className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop')"}}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Find Your Dream Home with <span className="text-teal">Orvea Estates</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-md">
              Your most trusted real estate partner. Buy, sell, and explore properties with complete transparency and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium">50-Point Quality Check</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium">Insured Properties</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium">Best Price Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Start Your Home Buying Journey</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal text-white py-3 rounded-lg font-semibold hover:bg-teal-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Find Me A Home
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
