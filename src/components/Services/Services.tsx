import React from 'react';
import { ServiceItem } from '../../types';

const Services: React.FC = () => {
  const oracleServices: ServiceItem[] = [
    {
      title: 'Oracle ERP Cloud',
      description: 'Comprehensive ERP for finance, procurement, and projects.',
      icon: 'flaticon-it',
      image: `${process.env.PUBLIC_URL}/static/images/why-choose1.jpg`,
      link: '#services'
    },
    {
      title: 'Oracle HCM Cloud',
      description: 'HCM for talent acquisition, performance, and workforce planning.',
      icon: 'flaticon-network-security',
      image: `${process.env.PUBLIC_URL}/static/images/why-choose2.jpg`,
      link: '#services'
    },
    {
      title: 'Oracle SCM Cloud',
      description: 'Supply Chain for inventory, logistics, and procurement.',
      icon: 'flaticon-cloud',
      image: `${process.env.PUBLIC_URL}/static/images/why-choose3.jpg`,
      link: '#services'
    },
    {
      title: 'Oracle EPM Cloud',
      description: 'Planning, budgeting, and performance management.',
      icon: 'flaticon-cloud',
      image: `${process.env.PUBLIC_URL}/static/images/why-choose4.jpg`,
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
    <section className="features-area rel z-1" id="services">
      <div className="container-fluid features-bg pt-0 rpt-60 pb-100 rpb-70">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div 
              className="section-title text-center mb-35" 
              data-aos="fade-up" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <span className="sub-title color-primary mb-10">Oracle Enterprise Solutions</span>
              <h2>Transforming Business Operations with Oracle Applications</h2>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <p>
                    We provide comprehensive implementation, upgrade & support services for Oracle Enterprise 
                    Applications including Cloud ERP, Cloud HCM, Cloud SCM, Cloud CX, Cloud EPM, and E-Business Suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          {oracleServices.map((service, index) => (
            <div 
              key={index}
              className="col-xxl-3 col-lg-3 col-md-6 col-sm-6" 
              data-aos="fade-up" 
              data-aos-delay={(index + 1) * 100} 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <div className="service-item hover-content">
                <div 
                  className="image bg-cover" 
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>
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

export default Services;