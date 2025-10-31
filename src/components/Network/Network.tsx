import React, { useState } from 'react';
import './Network.css';

// Define the structure for a location
interface Location {
  id: number;
  name: string;
  country: string;
  region: string;
  type: 'headquarters' | 'office' | 'development-hub';
  description: string;
  backgroundImage: string;
}

// Main Network component
const Network: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  // Location data
  const locations: Location[] = [
    {
      id: 1,
      name: 'Dubai',
      country: 'UAE',
      region: 'Middle East',
      type: 'headquarters',
      description: 'Our global headquarters driving innovation and strategic vision across all operations.',
      backgroundImage: `${process.env.PUBLIC_URL}/static/images/locations/dubai.jpg`,
    },
    {
      id: 2,
      name: 'Hyderabad',
      country: 'India',
      region: 'South Asia',
      type: 'development-hub',
      description: 'Primary development center with cutting-edge technology expertise and innovation labs.',
      backgroundImage: `${process.env.PUBLIC_URL}/static/images/locations/hyderabad.jpg`,
    },
    {
      id: 3,
      name: 'Riyadh',
      country: 'Saudi Arabia',
      region: 'Middle East',
      type: 'office',
      description: 'Regional office serving clients across the Kingdom with dedicated support teams.',
      backgroundImage: `${process.env.PUBLIC_URL}/static/images/locations/saudi.jpg`,
    },
    {
      id: 4,
      name: 'Doha',
      country: 'Qatar',
      region: 'Middle East',
      type: 'office',
      description: 'Strategic office supporting our growing presence in the Gulf region.',
      backgroundImage: `${process.env.PUBLIC_URL}/static/images/locations/qatar.jpg`,
    },
  ];


  return (
    <section className="our-presence-area pt-60 rpt-100 pb-60 rpb-70" id="network">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div
              className="section-title text-center mb-60"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="50"
            >
              <span className="sub-title color-primary mb-10">Our Global Presence</span>
              <h2>Connecting the World, One Project at a Time</h2>
              <p className="mt-20">
                From our headquarters in Dubai to our development hubs and regional offices, 
                we maintain a strategic global presence to serve our clients better.
              </p>
            </div>
          </div>
        </div>

        {/* Location Cards */}
        <div className="row g-4">
          {locations.map((location, index) => (
            <div 
              key={location.id} 
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={100 * (index + 1)}
            >
              <div
                className={`presence-card ${activeLocation === location.id ? 'active' : ''} ${location.type}`}
                onClick={() => setActiveLocation(activeLocation === location.id ? null : location.id)}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
                style={{
                  backgroundImage: `url(${location.backgroundImage})`,
                }}
              >
                <div className="presence-card-overlay"></div>
                
                <div className="presence-card-body">
                  <h3 className="location-name">{location.name}</h3>
                  <div className="location-meta">
                    <span className="country">{location.country}</span>
                    <span className="separator">•</span>
                    <span className="region">{location.region}</span>
                  </div>
                  <p className="location-description">{location.description}</p>
                </div>

                <div className="presence-card-footer">
                  <div className="connection-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;