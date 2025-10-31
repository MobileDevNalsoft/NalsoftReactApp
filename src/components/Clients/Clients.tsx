import React from 'react';
import Slider from 'react-slick';
import { ClientLogo } from '../../types';

const Clients: React.FC = () => {
  const clientLogos: ClientLogo[] = [
    {
      name: 'Client 1',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-1.png`,
      link: '#'
    },
    {
      name: 'Client 2',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-2.png`,
      link: '#'
    },
    {
      name: 'Client 3',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-3.png`,
      link: '#'
    },
    {
      name: 'Client 4',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-4.png`,
      link: '#'
    },
    {
      name: 'Client 5',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-5.png`,
      link: '#'
    },
    {
      name: 'Client 6',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-6.png`,
      link: '#'
    },
    {
      name: 'Client 7',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-7.png`,
      link: '#'
    },
    {
      name: 'Client 8',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-8.png`,
      link: '#'
    },
    {
      name: 'Client 9',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-9.png`,
      link: '#'
    },
    {
      name: 'Client 10',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-10.png`,
      link: '#'
    },
    {
      name: 'Client 11',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-11.png`,
      link: '#'
    },
    {
      name: 'Client 12',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-12.png`,
      link: '#'
    },
    {
      name: 'Client 13',
      image: `${process.env.PUBLIC_URL}/static/images/clients/client-13.png`,
      link: '#'
    }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleClientClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <section className="client-logo-area" id="clients">
      <div className="container-fluid">
        <div className="client-logo-active pt-70 pb-40">
          <Slider {...settings}>
            {clientLogos.map((client, index) => (
              <div key={index}>
                <div 
                  className="client-logo-item" 
                  data-aos="flip-up" 
                  data-aos-duration="1500" 
                  data-aos-offset="50"
                >
                  <a 
                    href={client.link}
                    onClick={(e) => handleClientClick(client.link, e)}
                  >
                    <img 
                      decoding="async" 
                      src={client.image} 
                      alt={client.name} 
                      title={client.name} 
                    />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;