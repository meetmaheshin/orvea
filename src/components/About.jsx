import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

const StatCounter = ({ value, suffix = '', label, delay = 0 }) => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const count = useCountUp(value, 2500, isInView);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center">
        <div className="xl:text-5xl lg:text-4xl text-3xl font-black text-white">
          {isInView ? count.toLocaleString() : '0'}{suffix}
        </div>
        <div className="text-sm ml-3 font-semibold text-white max-w-[150px]">
          {label}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <section
      id="about"
      className="sm:py-14 py-8 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop')`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-5 text-white relative">
            <div
              ref={headerRef}
              className={`transition-all duration-1000 transform ${
                headerInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <h2 className="xl:text-5xl lg:text-4xl sm:text-[40px] text-[26px] xl:leading-[58px] lg:leading-[48px] sm:leading-[48px] leading-[28px] font-bold text-white mb-3">
                <span>About</span>
                <br />
                <span className="text-teal">Orvea Estates</span>
                <span className="text-white">.</span>
              </h2>

              <p className="mb-4 whitespace-pre-line font-semibold text-white/90 leading-relaxed">
                Orvea Estates is a new age digital platform that aims to change the way resale transactions are done.{'\n'}
                Sellers & Buyers can now avoid the long & tedious traditional process and conclude the transaction at the best price, at the click of a button.{'\n'}
                Our platform offers seamless and direct flow of information to all stakeholders, thereby bringing complete transparency and trust.
              </p>

              {/* CTA Buttons */}
              <div className="sm:space-x-5 sm:flex grid grid-cols-2 gap-3">
                <a
                  href="#contact"
                  className="group font-semibold text-[12px] border rounded-3xl sm:min-w-[160px] px-7 sm:py-4 py-[9px] sm:h-[50px] h-[40px] text-center inline-flex items-center justify-center text-teal bg-white hover:bg-teal hover:text-white hover:border-teal transition-all duration-300"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="sm:w-5 sm:h-5 w-4 h-4 inline sm:ml-2 ml-1 duration-300 group-hover:translate-x-3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="group font-semibold text-[12px] border border-teal rounded-3xl sm:min-w-[160px] px-7 sm:py-4 py-[9px] sm:h-[50px] h-[40px] text-center inline-flex items-center justify-center bg-teal text-white hover:bg-teal-dark hover:border-teal-dark transition-all duration-300"
                >
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="sm:w-5 sm:h-5 w-4 h-4 inline sm:ml-2 ml-1 duration-300 group-hover:translate-x-3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Stats - Full Width */}
          <div className="lg:col-span-12 lg:mt-20 mt-12 relative text-white">
            <div className="flex flex-wrap justify-between lg:space-y-0 sm:space-y-5 space-y-3">
              {/* Stat 1 */}
              <div className="lg:w-2/5 w-full">
                <StatCounter
                  value={1000000}
                  suffix="+"
                  label="Data Points for Arriving at the Best Price"
                  delay={0}
                />
              </div>

              {/* Stat 2 */}
              <div className="lg:w-1/4 w-full">
                <StatCounter
                  value={10000}
                  suffix="+"
                  label="Happy Customers"
                  delay={200}
                />
              </div>

              {/* Stat 3 */}
              <div className="lg:w-1/4 w-full">
                <StatCounter
                  value={50}
                  suffix="+"
                  label="Cities Covered Across India"
                  delay={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
