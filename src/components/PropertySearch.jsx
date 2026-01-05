import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';

const PropertySearch = () => {
  const [location, setLocation] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Get unique locations from properties
  const locations = ['all', ...new Set(properties.map(p => p.location))];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(true);

    if (query.trim().length > 0) {
      const filtered = properties.filter(property => {
        const matchesLocation = location === 'all' || property.location === location;
        const matchesQuery =
          property.name.toLowerCase().includes(query.toLowerCase()) ||
          property.location.toLowerCase().includes(query.toLowerCase()) ||
          property.address?.toLowerCase().includes(query.toLowerCase());

        return matchesLocation && matchesQuery;
      });
      setFilteredProperties(filtered);
      setShowDropdown(true);
    } else {
      setFilteredProperties([]);
      setShowDropdown(false);
    }

    setTimeout(() => setIsSearching(false), 300);
  };

  const handlePropertyClick = (slug) => {
    navigate(`/property-detail/${slug}`);
    setShowDropdown(false);
    setSearchQuery('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filteredProperties.length > 0) {
      navigate(`/property-detail/${filteredProperties[0].slug}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-1 rounded-full flex flex-wrap items-center justify-between shadow-2xl">
        {/* Location Selector */}
        <div className="sm:w-[120px] w-[80px] border-r border-gray-300">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="font-semibold text-gray-800 outline-none sm:max-w-[120px] max-w-[80px] sm:text-sm text-xs text-center cursor-pointer bg-transparent py-3 px-2"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc === 'all' ? 'All' : loc}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="sm:w-[calc(100%-300px)] w-[calc(100%-160px)] relative" ref={dropdownRef}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => searchQuery && setShowDropdown(true)}
            className="w-full sm:py-3 py-2 sm:px-5 px-3 border-none outline-none sm:text-base text-sm"
            placeholder="Search for projects"
            maxLength={50}
          />

          {/* Dropdown with filtered properties */}
          {showDropdown && filteredProperties.length > 0 && (
            <div className="absolute top-full left-0 w-full sm:max-h-[300px] max-h-[200px] bg-white shadow-xl sm:text-sm text-xs text-gray-800 text-left font-medium overflow-auto z-50 rounded-b-2xl border-t border-gray-200 mt-1">
              <ul>
                {filteredProperties.map((property) => (
                  <li
                    key={property.id}
                    onClick={() => handlePropertyClick(property.slug)}
                    className="sm:py-3 py-2 px-4 border-b border-gray-100 cursor-pointer hover:bg-teal hover:text-white last:border-none transition-all duration-200"
                  >
                    <div className="font-semibold">{property.name}</div>
                    <div className="text-xs opacity-75 mt-1">{property.location}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No results message */}
          {showDropdown && searchQuery && filteredProperties.length === 0 && !isSearching && (
            <div className="absolute top-full left-0 w-full bg-white shadow-xl text-sm text-gray-600 text-center py-4 rounded-b-2xl border-t border-gray-200 mt-1 z-50">
              No properties found
            </div>
          )}

          {/* Loading indicator */}
          {isSearching && (
            <span className="absolute sm:right-5 right-3 sm:top-3 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:w-6 sm:h-6 w-5 h-5 inline animate-spin text-teal"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </span>
          )}
        </div>

        {/* Search Button */}
        <div className="sm:w-[160px] w-[70px]">
          <button
            type="submit"
            className="w-full font-semibold sm:text-sm text-xs rounded-full sm:px-6 px-3 sm:py-3 py-2 sm:h-[50px] h-[38px] bg-teal text-white hover:bg-teal-dark transition-all duration-300 transform hover:scale-105"
          >
            <span className="sm:block hidden">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 sm:hidden inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </form>

      <p className="text-white sm:text-base text-xs text-center mt-6 font-medium sm:px-0 px-4">
        Find your dream property from {properties.length} premium listings across Noida, Ghaziabad, and Raj Nagar Extension
      </p>
    </div>
  );
};

export default PropertySearch;
