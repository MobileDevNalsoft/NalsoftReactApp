import React from 'react';
import { FeatureItem } from '../../types';

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: 'Assessment and Strategy Development',
      description: 'We implemented multi-layered cybersecurity measures including firewall protection, real-time threat',
      image: '/static/images/feature-two1.jpg',
      tags: ['Cyber Security'],
      link: '#features'
    },
    {
      title: 'Enhanced Cybersecurity Protocols solutions',
      description: 'We implemented multi-layered cybersecurity measures including firewall protection, real-time threat',
      image: '/static/images/feature-two2.jpg',
      tags: ['IT Service'],
      link: '#features'
    },
    {
      title: 'Enhanced Cybersecurity Protocols solutions',
      description: 'We implemented multi-layered cybersecurity measures including firewall protection, real-time threat',
      image: '/static/images/feature-two3.jpg',
      tags: ['Cloud'],
      link: '#features'
    }
  ];

  const handleFeatureClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="features-area-two pt-130 rpt-100 rel z-1" id="features">
      <div className="container-fluid">
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="col-xxl-4 col-md-6" 
              data-aos="fade-up" 
              data-aos-delay="200" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img 
                    decoding="async" 
                    src={feature.image} 
                    alt={feature.title} 
                    title={feature.title} 
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    {feature.tags.map((tag, tagIndex) => (
                      <a key={tagIndex} href={feature.link} onClick={(e) => handleFeatureClick(feature.link, e)}>
                        {tag}
                      </a>
                    ))}
                  </div>
                  <h3 className="title">
                    <a href={feature.link} onClick={(e) => handleFeatureClick(feature.link, e)}>
                      {feature.title}
                    </a>
                  </h3>
                  <div className="inner-content">
                    <p>{feature.description}</p>
                    <a 
                      className="details-btn" 
                      href={feature.link}
                      onClick={(e) => handleFeatureClick(feature.link, e)}
                    >
                      <i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;