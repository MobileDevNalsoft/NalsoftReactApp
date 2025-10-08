import React from 'react';
import Slider from 'react-slick';
import { TeamMember } from '../../types';

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'David R. Watkins',
      designation: 'IT Consultant',
      image: '/static/images/member1.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'James K. Andrews',
      designation: 'UI Designer',
      image: '/static/images/member2.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Kenneth B. Hebert',
      designation: 'HR Support',
      image: '/static/images/member3.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Alexander M. Burris',
      designation: 'Product Designer',
      image: '/static/images/member4.jpg',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleSocialClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <section className="team-area py-130 rpy-100 rel z-1" id="team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div 
              className="section-title text-center mb-50" 
              data-aos="fade-up" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <span className="sub-title color-primary mb-10">Meet Our Team</span>
              <h2>Experience Technical Team</h2>
            </div>
          </div>
        </div>
        
        <div className="team-slider">
          <Slider {...settings}>
            {teamMembers.concat(teamMembers).map((member, index) => (
              <div key={index} className="px-2"  style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <div 
                  className="team-item style-two" 
                  data-aos="fade-up" 
                  data-aos-delay={(index % 4 + 1) * 100} 
                  data-aos-duration="1500" 
                  data-aos-offset="50"
                    style={{ borderRadius: '16px !important' }}
                >
                  <div className="image">
                    <img 
                      decoding="async" 
                      src={member.image} 
                      alt={member.name} 
                      style={{ borderRadius: '16px 16px 0px 0px' , overflow:'hidden' }}
                    />
                    <div className="icon">
                      <i className="far fa-plus"></i>
                      <div className="social-style-one">
                        {member.socialLinks.facebook && (
                          <a 
                            href={member.socialLinks.facebook}
                            onClick={(e) => handleSocialClick(member.socialLinks.facebook!, e)}
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a 
                            href={member.socialLinks.twitter}
                            onClick={(e) => handleSocialClick(member.socialLinks.twitter!, e)}
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        )}
                        {member.socialLinks.instagram && (
                          <a 
                            href={member.socialLinks.instagram}
                            onClick={(e) => handleSocialClick(member.socialLinks.instagram!, e)}
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h5 className="name">
                      <a href="#">{member.name}</a>
                    </h5>
                    <span className="designations">{member.designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Team;