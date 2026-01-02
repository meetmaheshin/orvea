import { useState } from 'react';
import { faqs } from '../data/properties';
import { useInView } from '../hooks/useInView';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="sm:py-14 py-8 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 transform ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="xl:text-5xl lg:text-4xl sm:text-[40px] text-[26px] xl:leading-[58px] lg:leading-[48px] sm:leading-[48px] leading-[28px] font-bold text-text-heading mb-3">
            Frequently Asked <span className="text-teal">Questions</span>
            <span className="text-teal">.</span>
          </h2>
          <p className="text-lg text-text-primary max-w-2xl mx-auto font-medium">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-stone-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-1000 transform ${
                headerInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-teal/5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-text-heading pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-teal transform transition-all duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-text-primary leading-relaxed font-medium border-t border-teal/10">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 transform ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: `${faqs.length * 100}ms` }}
        >
          <p className="text-text-primary mb-4 font-medium">Still have questions?</p>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center bg-teal text-white px-8 py-3 rounded-3xl font-semibold hover:bg-teal-dark transition-all duration-300 transform hover:scale-105"
          >
            Contact Our Support Team
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

export default FAQ;
