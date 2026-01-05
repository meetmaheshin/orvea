import PropertySearch from './PropertySearch';

const SearchSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="xl:text-5xl lg:text-4xl sm:text-[40px] text-[26px] font-bold text-text-heading mb-4">
            <span>Find Your Perfect Property</span>
            <span className="text-teal">.</span>
          </h2>
          <p className="text-lg text-text-primary font-medium max-w-2xl mx-auto">
            Search from 168 premium properties across Noida, Ghaziabad, and Raj Nagar Extension
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <PropertySearch />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
