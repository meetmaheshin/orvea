import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { properties } from '../data/properties';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Properties = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="properties" className="sm:py-14 py-8 relative pb-0 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with Navigation Buttons */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="xl:text-5xl lg:text-4xl sm:text-[40px] text-[26px] xl:leading-[58px] lg:leading-[48px] sm:leading-[48px] leading-[28px] font-bold text-text-heading mb-3">
              <span>Buyer Property</span>
              <span className="text-teal">.</span>
            </h2>
            <p className="text-lg text-text-primary font-medium">
              Explore some of the top-listed properties on our website.
            </p>
          </div>
          <div className="flex sm:space-x-4 space-x-2">
            <button
              ref={prevRef}
              type="button"
              className="prevSlide sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] border-2 border-teal rounded-full text-center text-teal cursor-pointer hover:bg-teal hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="sm:w-6 sm:h-6 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              type="button"
              className="nextSlide sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] border-2 border-teal rounded-full text-center text-teal cursor-pointer hover:bg-teal hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="sm:w-6 sm:h-6 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={false}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!pb-4"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="relative group">
                  <Link to={`/property-detail/${property.slug}`}>
                    <div className="relative sm:h-80 h-56 rounded-2xl overflow-hidden before:bg-gradient-to-t before:from-black before:via-black/60 before:to-transparent before:absolute before:w-full before:h-[70%] before:bottom-0 before:right-0 before:z-10 before:duration-300 group-hover:before:h-[90%]">
                      <img
                        alt={property.name}
                        loading="lazy"
                        decoding="async"
                        className="duration-300 group-hover:scale-110 w-full h-full object-cover"
                        src={property.image}
                      />
                    </div>
                    <div className="absolute w-full sm:p-6 p-4 bottom-0 z-10 text-white">
                      <h4 className="sm:text-xl text-sm font-semibold my-1">
                        {property.name}
                      </h4>
                      <p className="mt-4 sm:text-[12px] sm:leading-[18px] text-[10px] leading-[14px] line-clamp-3">
                        {property.bhk} • {property.area}
                      </p>
                      <div className="flex justify-between content-evenly text-xs mt-4">
                        <div className="sm:text-[12px] text-[8px] sm:leading-[20px] leading-[12px]">
                          View More
                        </div>
                        <div className="text-right sm:text-[12px] text-[8px] sm:leading-[20px] leading-[12px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            className="inline sm:w-5 sm:h-5 w-3 h-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>{' '}
                          {property.address || property.location}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Properties;
