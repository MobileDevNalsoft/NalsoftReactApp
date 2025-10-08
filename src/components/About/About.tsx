import React from 'react';

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const features: FeatureItemProps[] = [
    {
      icon: 'flaticon-experts',
      title: '300+ Dedicated Professionals',
      description: 'Experienced team with exclusive focus on Oracle applications & technologies for over 23+ years.'
    },
    {
      icon: 'flaticon-loyal-customer',
      title: '100% On-time Rollouts',
      description: 'Successfully implemented Enterprise Applications for a wide range of verticals including Manufacturing, Banking, Real Estate, and more.'
    }
  ];

  const images = [
    '/static/images/why-choose1.jpg',
    '/static/images/why-choose2.jpg',
    '/static/images/why-choose3.jpg',
    '/static/images/why-choose4.jpg'
  ];

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="why-choose-us-area pb-100 rpb-70 rel z-1" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div 
              className="why-choose-content rmb-55" 
              data-aos="fade-right" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <div className="section-title mb-25">
                <span className="sub-title mb-10">Why Choose Nalsoft</span>
                <h2>Trusted Oracle Partner with 23+ Years of Excellence</h2>
              </div>
              <p className="summary-text">
                With over 300+ experienced professionals and exclusive focus on Oracle applications & technologies, 
                we provide implementation, upgrade & support services for Oracle Enterprise Applications.
              </p>
              <a 
                href="#about" 
                className="theme-btn mt-20 mb-50"
                onClick={handleLearnMoreClick}
              >
                Learn More About Us
              </a>
              
              <div 
                className="row" 
                data-aos="fade-right" 
                data-aos-duration="1500" 
                data-aos-offset="50"
              >
                {features.map((feature, index) => (
                  <div key={index} className="col-lg-6">
                    <div className="feature-item-two">
                      <div className="icon">
                        <i aria-hidden="true" className={feature.icon}></i>
                      </div>
                      <h5>
                        <a href="#about" onClick={handleLearnMoreClick}>
                          {feature.title}
                        </a>
                      </h5>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="why-choose-images">
              <div 
                className="left" 
                data-aos="fade-up" 
                data-aos-duration="1500" 
                data-aos-offset="50"
              >
                <img 
                  decoding="async" 
                  src={images[0]} 
                  alt="Oracle Team" 
                  title="Oracle Team" 
                />
                <img 
                  decoding="async" 
                  src={images[1]} 
                  alt="Business Team" 
                  title="Business Team" 
                />
              </div>
              <div 
                className="right" 
                data-aos="fade-up" 
                data-aos-delay="100" 
                data-aos-duration="1500" 
                data-aos-offset="50"
              >
                <img 
                  decoding="async" 
                  src={images[2]} 
                  alt="Oracle Solutions" 
                  title="Oracle Solutions" 
                />
                <img 
                  decoding="async" 
                  src={images[3]} 
                  alt="Professional Team" 
                  title="Professional Team" 
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