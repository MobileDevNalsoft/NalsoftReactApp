import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { HeroSlide } from '../../types';

const Hero: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const heroSlides: HeroSlide[] = [
    {
      backgroundImage: `${process.env.PUBLIC_URL}/static/images/misc/curosel_3.jpg`,
      subtitle: 'Oracle Partner',
      title: 'Trusted Partner for Oracle Applications & Solutions',
      description: 'Nalsoft is a dynamic and fast-growing IT service provider that has been supporting the digital transformation of its customers for over 2 decades. With over 300+ experienced professionals and exclusive focus on Oracle applications & technologies.',
      buttonText: 'Explore Oracle Solutions',
      buttonLink: '#services'
    },
    {
      backgroundImage: `${process.env.PUBLIC_URL}/static/images/misc/curosel_2.jpg`,
      subtitle: 'Oracle Partner',
      title: '23+ Years of Successfully Delivering Solutions Across Verticals',
      description: 'Experience across Manufacturing, BFSI, Real Estate, Retail & Trading, Hospitality and more.',
      buttonText: 'Explore Oracle Solutions',
      buttonLink: '#services'
    },
    {
      backgroundImage: `${process.env.PUBLIC_URL}/static/images/misc/curosel_1.jpg`,
      subtitle: 'Oracle Partner',
      title: 'Drive Your Digital Transformation Journey With Us',
      description: 'Modernize and scale with Oracle ERP, HCM, SCM, CX and EPM delivered by certified experts.',
      buttonText: 'Industry Expertise',
      buttonLink: '#industries'
    }
  ];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    fade: false,
    cssEase: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          autoplaySpeed: 3000,
        }
      }
    ]
  };

  const handleButtonClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Reinitialize AOS after slider changes
    const handleAfterChange = () => {
      if (window.AOS) {
        window.AOS.refresh();
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      // Listen for slider events
      const slickElement = slider.innerSlider?.list?.querySelector('.slick-track');
      if (slickElement) {
        const observer = new MutationObserver(handleAfterChange);
        observer.observe(slickElement, { childList: true, subtree: true });
        
        return () => observer.disconnect();
      }
    }
  }, []);

  return (
    <section className="hero-area pb-130 rpb-100 rel z-1" style={{ paddingTop: 0, marginTop: 0 }}>
      <div className="container-fluid px-0">
        <div className="row align-items-center">
          <div className="col-lg-12 align-self-center">
            <div className="hero-content rmb-55" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
              <div className="hero-text-slider" aria-label="Hero Highlights" role="region">
                <Slider ref={sliderRef} {...settings}>
                  {heroSlides.map((slide, index) => (
                    <div key={index}>
                      <div 
                        className="hero-slide"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('${slide.backgroundImage}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          width: '100%',
                          minHeight: 'calc(100vh - 80px)',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <div className="container" style={{ padding: '40px', textAlign: 'left' }}>
                          <h2>{slide.title}</h2>
                          <p>{slide.description}</p>
                          <a
                            href={slide.buttonLink}
                            className="theme-btn mt-15"
                            onClick={(e) => handleButtonClick(slide.buttonLink, e)}
                          >
                            {slide.buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;