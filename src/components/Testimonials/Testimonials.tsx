import React, { useRef } from 'react';
import Slider from 'react-slick';
import { TestimonialItem } from '../../types';

const Testimonials: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const testimonials: TestimonialItem[] = [
    {
      rating: 5,
      text: 'Working with has completely transformed operations. Their expertise in cloud migration helped us cut down on overhead and improve system reliability!',
      author: {
        name: 'Robert S. Hummel',
        designation: 'CEO & Founder',
        image: `${process.env.PUBLIC_URL}/static/images/team/testi-author1.jpg`
      }
    },
    {
      rating: 5,
      text: 'Working with has completely transformed operations. Their expertise in cloud migration helped us cut down on overhead and improve system reliability!',
      author: {
        name: 'Leonard G. Trahan',
        designation: 'Web Designer',
        image: `${process.env.PUBLIC_URL}/static/images/team/testi-author2.jpg`
      }
    },
    {
      rating: 5,
      text: 'Working with has completely transformed operations. Their expertise in cloud migration helped us cut down on overhead and improve system reliability!',
      author: {
        name: 'Robert S. Hummel',
        designation: 'CEO & Founder',
        image: `${process.env.PUBLIC_URL}/static/images/team/testi-author1.jpg`
      }
    },
    {
      rating: 5,
      text: 'Working with has completely transformed operations. Their expertise in cloud migration helped us cut down on overhead and improve system reliability!',
      author: {
        name: 'Leonard G. Trahan',
        designation: 'Web Designer',
        image: `${process.env.PUBLIC_URL}/static/images/team/testi-author2.jpg`
      }
    }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
    return stars;
  };

  return (
    <section className="testimonials-area rel z-1" id="testimonials">
      <div className="container-fluid">
        <div 
          className="testimonials-inner pt-130 rpt-100 pb-100 rpb-70 bgs-cover" 
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/backgrounds/testimonials-bg.jpg)` }}
        >
          <div className="container">
            <div className="row justify-content-between align-items-end pb-30">
              <div className="col-xl-6 col-lg-7">
                <div 
                  className="section-title text-white mb-25" 
                  data-aos="fade-left" 
                  data-aos-duration="1500" 
                  data-aos-offset="50"
                >
                  <span className="sub-title mb-10">Clients Testimonials</span>
                  <h2 className="sec-title">Hear from Our Partners in Digital Success</h2>
                </div>
              </div>
              <div 
                className="col-lg-4 mb-25 text-lg-end" 
                data-aos="fade-right" 
                data-aos-duration="1500" 
                data-aos-offset="50"
              >
                <div className="testi-arrows mb-10">
                  <button className="testi-arrow-left" onClick={prevSlide}>
                    <i className="far fa-arrow-left"></i>
                  </button>
                  <button className="testi-arrow-right" onClick={nextSlide}>
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="testimonials-active">
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="testimonial-item">
                      <div className="ratting">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="testi-text">
                        "{testimonial.text}"
                      </div>
                      <div className="testi-author">
                        <img 
                          decoding="async" 
                          src={testimonial.author.image} 
                          alt={testimonial.author.name} 
                          title={testimonial.author.name} 
                        />
                        <b>{testimonial.author.name} </b> /{testimonial.author.designation}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;