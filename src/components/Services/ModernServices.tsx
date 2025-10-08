import React from 'react';
import { ServiceItem } from '../../types';

const ModernServices: React.FC = () => {
  const modernServices: ServiceItem[] = [
    {
      title: 'Managed IT Services',
      description: 'Comprehensive support for all aspects of your IT infrastructure, including monitoring, maintenance, and technical support.',
      icon: 'flaticon-it',
      image: '/static/images/service1.jpg',
      link: '#services'
    },
    {
      title: 'Cybersecurity Services',
      description: 'Comprehensive support for all aspects of your IT infrastructure, including monitoring, maintenance, and technical support.',
      icon: 'flaticon-network-security',
      image: '/static/images/service2.jpg',
      link: '#services'
    },
    {
      title: 'Cloud Solutions',
      description: 'Comprehensive support for all aspects of your IT infrastructure, including monitoring, maintenance, and technical support.',
      icon: 'flaticon-cloud',
      image: '/static/images/service3.jpg',
      link: '#services'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive support for all aspects of your IT infrastructure, including monitoring, maintenance, and technical support.',
      icon: 'flaticon-data-management',
      image: '/static/images/service4.jpg',
      link: '#services'
    }
  ];

  const handleServiceClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-area bgc-blue pt-130 rpt-100 rel z-1">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div 
              className="section-title text-white text-center mb-70" 
              data-aos="fade-up" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <span className="sub-title color-primary mb-10">Modern IT Solutions</span>
              <h2>Empowering Businesses With Advanced IT Solutions</h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          {modernServices.map((service, index) => (
            <div 
              key={index}
              className="col-xxl-3 col-lg-4 col-sm-6" 
              data-aos="fade-up" 
              data-aos-delay={(index + 1) * 100} 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img 
                    decoding="async" 
                    src={service.image} 
                    alt={service.title} 
                    title={service.title} 
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href={service.link} onClick={(e) => handleServiceClick(service.link, e)}>
                      <i aria-hidden="true" className={service.icon}></i> {service.title}
                    </a>
                  </h4>
                  <div className="inner-content">
                    <p>{service.description}</p>
                    <a 
                      className="read-more" 
                      href={service.link}
                      onClick={(e) => handleServiceClick(service.link, e)}
                    >
                      Read More <i className="far fa-arrow-right"></i>
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

export default ModernServices;