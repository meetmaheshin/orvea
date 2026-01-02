import { useInView } from '../hooks/useInView';

const ProcessStep = ({ number, title, description, icon, delay }) => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative sm:pt-10 pt-5 before:sm:block before:absolute before:-right-10 before:top-0 before:w-[2px] before:h-full before:bg-stone-100 last:before:hidden before:hidden group">
        {/* Giant Background Number */}
        <span className="absolute right-0 top-0 xl:text-[195px] lg:text-[160px] text-[100px] font-bold opacity-40 leading-[150px] group-hover:opacity-100 group-hover:text-teal duration-300 group-hover:-translate-y-4 group-hover:drop-shadow-xl text-gray-300">
          {number}
        </span>

        {/* Icon */}
        {icon}

        {/* Title */}
        <h3 className="sm:text-2xl text-xl text-text-heading my-3 group-hover:text-teal font-bold transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="group-hover:text-teal-dark text-[0.94rem] text-text-primary font-medium transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const Process = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  const steps = [
    {
      number: 1,
      title: "Go Check",
      description: "Check out the many properties we have, filter them basis your needs.",
      icon: (
        <svg className="w-16 h-16 text-teal mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Go Shortlist",
      description: "Shortlist the homes that suit your requirement and, see them in life-like conditions with our AR/VR tools.",
      icon: (
        <svg className="w-16 h-16 text-teal mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Go Close",
      description: "Close online or meet our experts to close the transaction.",
      icon: (
        <svg className="w-16 h-16 text-teal mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="sm:py-14 py-8 relative sm:bg-white bg-stone-50" id="processSection">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className="grid sm:grid-cols-2 grid-cols-1 gap-8 mb-10"
        >
          <div
            className={`transition-all duration-1000 transform ${
              headerInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h2 className="xl:text-5xl lg:text-4xl sm:text-[40px] text-[26px] xl:leading-[58px] lg:leading-[48px] sm:leading-[48px] leading-[28px] font-bold text-text-heading mb-3">
              <span>Our Eazy</span>
              <br />
              <span>3-Step Process</span>
              <span className="text-teal">.</span>
            </h2>
          </div>

          <div
            className={`transition-all duration-1000 transform ${
              headerInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <p className="text-text-primary">
              Today, almost everything has been digitally transformed. It is only fitting that the residential reselling business keeps up with the changing times. We are, therefore, redefining the process through Orvea Estates. Buying through us can be best broken down into three simple steps.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 lg:gap-20 gap-y-5">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={index * 200}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-10 transition-all duration-1000 transform ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="#contact"
            className="group font-semibold text-[12px] border sm:px-7 px-2 py-2 rounded-3xl sm:min-w-[160px] min-w-[110px] max-w-[100%] sm:px-7 px-2 py-4 sm:h-[50px] h-[40px] text-center relative inline-flex items-center justify-center bg-teal text-white border-teal hover:bg-teal-dark hover:text-white hover:border-teal-dark transition-all duration-300"
          >
            Too Busy to Browse? Talk To Our Expert
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="sm:w-5 sm:h-5 w-4 h-4 inline sm:ml-2 ml-1 duration-300 group-hover:translate-x-3 align-middle"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
