import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { StatItem } from '../../types';

const Statistics: React.FC = () => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({
    implementations: 0,
    professionals: 0,
    years: 0,
    rollouts: 0
  });

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats: (StatItem & { key: string; target: number })[] = [
    {
      key: 'implementations',
      count: '200',
      suffix: '+',
      title: 'Implementations',
      target: 200
    },
    {
      key: 'professionals',
      count: '300',
      suffix: '+',
      title: 'Dedicated Professionals',
      target: 300
    },
    {
      key: 'years',
      count: '23',
      suffix: '+',
      title: 'Years in Middle East',
      target: 23
    },
    {
      key: 'rollouts',
      count: '100',
      suffix: '%',
      title: 'On-time Rollouts',
      target: 100
    }
  ];

  useEffect(() => {
    if (inView) {
      stats.forEach(stat => {
        animateCounter(stat.key, stat.target, 3000);
      });
    }
  }, [inView]);

  const animateCounter = (key: string, target: number, duration: number) => {
    const start = 0;
    const range = target - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
    }, 16);
  };

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="achievement-area bgc-blue bgs-cover pt-100 rpt-70 pb-130 rpb-130 rel z-1" 
      style={{ backgroundImage: 'url(/static/images/achievement-bg.jpg)' }}
      ref={ref}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div 
              className="achievement-content text-white rmb-55" 
              data-aos="fade-left" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <div className="section-title mb-30">
                <span className="sub-title mb-10">Nalsoft at a Glance</span>
                <h2>Trusted Partner for Oracle Applications & Solutions</h2>
              </div>
              <p>
                Nalsoft is a dynamic and fast-growing IT service provider that has been supporting the digital 
                transformation of its customers for over 2 decades. Headquartered in Dubai with offshore 
                development center in Hyderabad, India.
              </p>
              <a 
                href="#about" 
                className="theme-btn mt-20"
                onClick={handleLearnMoreClick}
              >
                Learn More About Us
              </a>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div 
              className="achievement-counter bg-white" 
              data-aos="fade-right" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <div className="row no-gap">
                {stats.map((stat, index) => (
                  <div key={stat.key} className="col-sm-6">
                    <div 
                      className="counter-item" 
                      data-aos="zoom-in" 
                      data-aos-delay="50" 
                      data-aos-duration="1500" 
                      data-aos-offset="50"
                    >
                      <div className="counter-text-wrap">
                        <span className="count-text">
                          {counters[stat.key]}
                        </span>
                        <span className="after">{stat.suffix}</span>
                      </div>
                      <span className="counter-title">{stat.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;