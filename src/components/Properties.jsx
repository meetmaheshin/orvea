import { useState } from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { useInView } from '../hooks/useInView';

const Properties = () => {
  const [filter, setFilter] = useState('All');
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });
  const locations = ['All', 'Noida', 'Ghaziabad', 'Raj Nagar Ext.'];

  const filteredProperties = filter === 'All'
    ? properties
    : properties.filter(prop => prop.location === filter);

  return (
    <section id="properties" className="sm:py-14 py-8 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 transform ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="xl:text-5xl lg:text-4xl sm:text-[40px] text-[26px] xl:leading-[58px] lg:leading-[48px] sm:leading-[48px] leading-[28px] font-bold text-text-heading mb-3">
            Our Premium <span className="text-teal">Properties</span>
            <span className="text-teal">.</span>
          </h2>
          <p className="text-lg text-text-primary max-w-2xl mx-auto font-medium">
            Explore 168 developer projects across Noida, Ghaziabad, and Raj Nagar Extension
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 transform ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setFilter(location)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === location
                  ? 'bg-teal text-white shadow-lg'
                  : 'bg-stone-50 text-text-primary hover:bg-teal/10 hover:text-teal border border-border'
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Properties Grid - HouseEazy Style with Overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <Link
              key={property.id}
              to={`/property-detail/${property.slug}`}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-1000 transform hover:-translate-y-2 ${
                headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Image with Overlay */}
              <div className="relative sm:h-80 h-56 overflow-hidden before:bg-gradient-to-t before:from-black before:via-black/60 before:to-transparent before:absolute before:w-full before:h-[70%] before:bottom-0 before:right-0 before:z-10 before:duration-300 group-hover:before:h-[90%]">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover duration-300 group-hover:scale-110"
                />
                {/* Location Badge */}
                <div className="absolute top-3 right-3 bg-teal text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                  {property.location}
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute w-full sm:p-6 p-4 bottom-0 z-10 text-white">
                <h3 className="sm:text-xl text-base font-bold mb-1">{property.name}</h3>
                <p className="text-xs sm:text-sm text-white/90 mb-1">By {property.developer}</p>

                {property.bhk && (
                  <p className="text-sm font-semibold mb-2 text-white/95">{property.bhk}</p>
                )}

                {property.price && (
                  <p className="text-lg font-bold mb-3 text-teal-300">{property.price}</p>
                )}

                {property.status && (
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded mb-3">
                    {property.status}
                  </span>
                )}

                <div className="flex justify-between items-center text-xs sm:text-sm mt-4">
                  <div className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                    View Details →
                  </div>
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

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-primary text-lg font-medium">No properties found in this location.</p>
          </div>
        )}

        <div
          className={`text-center mt-12 transition-all duration-1000 transform ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="#properties"
            className="group inline-flex items-center justify-center bg-teal text-white px-8 py-3 rounded-3xl font-semibold hover:bg-teal-dark transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Explore All Properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 inline ml-2 duration-300 group-hover:translate-x-3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;
