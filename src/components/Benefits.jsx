import { useInView } from '../hooks/useInView';

const Benefits = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  const benefits = [
    {
      id: 1,
      title: "Best Price Guaranteed",
      description: "Our ML-powered algorithm analyzes market data to ensure you get the best deal on every property.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Insured Properties",
      description: "Every property comes with comprehensive insurance coverage to protect your investment.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Refurbished Apartments",
      description: "Move into professionally refurbished homes with modern amenities and premium finishes.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Trustworthy Transactions",
      description: "Complete legal verification and transparent documentation for worry-free transactions.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="sm:py-14 py-8 bg-stone-50">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 transform ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="xl:text-5xl lg:text-4xl sm:text-[40px] text-[26px] xl:leading-[58px] lg:leading-[48px] sm:leading-[48px] leading-[28px] font-bold text-text-heading mb-3">
            Why Buy From <span className="text-teal">Orvea Estates</span>
            <span className="text-teal">.</span>
          </h2>
          <p className="text-lg text-text-primary max-w-2xl mx-auto font-medium">
            Experience the difference with our comprehensive services and guarantees
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`text-center group hover:scale-105 transition-all duration-1000 transform ${
                headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-teal/10 text-teal mb-6 group-hover:bg-teal group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-3 group-hover:text-teal transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-text-primary leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-gradient-to-r from-teal to-teal-dark rounded-2xl p-8 md:p-12 text-center text-white transition-all duration-1000 transform ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h3>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of happy homeowners who trusted Orvea Estates
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center bg-white text-teal px-8 py-3 rounded-3xl font-semibold hover:bg-teal-dark hover:text-white hover:border-2 hover:border-white transition-all duration-300 text-lg"
          >
            Start Your Journey Today
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

export default Benefits;
