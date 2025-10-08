import React, { useEffect } from 'react';

const Network: React.FC = () => {
  useEffect(() => {
    // Add map background image
    const presenceMap = document.getElementById('presenceMap');
    if (presenceMap) {
      presenceMap.style.backgroundImage = `
        radial-gradient(#e5e7eb 1px, rgba(0,0,0,0) 1px),
        url('/static/images/World-map.png')
      `;
      presenceMap.style.backgroundSize = '14px 14px, 100% 100%';
      presenceMap.style.backgroundPosition = '0 0, center center';
      presenceMap.style.backgroundRepeat = 'repeat, no-repeat';
    }
    
    // Add zoom functionality
    const zoomInBtn = presenceMap?.querySelector('button[aria-label="zoom in"]') as HTMLButtonElement;
    const zoomOutBtn = presenceMap?.querySelector('button[aria-label="zoom out"]') as HTMLButtonElement;
    
    if (zoomInBtn && zoomOutBtn && presenceMap) {
      let currentZoom = 1;
      
      const handleZoomIn = () => {
        if (currentZoom < 2) {
          currentZoom += 0.2;
          presenceMap.style.transform = `scale(${currentZoom})`;
        }
      };
      
      const handleZoomOut = () => {
        if (currentZoom > 0.5) {
          currentZoom -= 0.2;
          presenceMap.style.transform = `scale(${currentZoom})`;
        }
      };
      
      zoomInBtn.addEventListener('click', handleZoomIn);
      zoomOutBtn.addEventListener('click', handleZoomOut);
      
      // Cleanup function
      return () => {
        zoomInBtn.removeEventListener('click', handleZoomIn);
        zoomOutBtn.removeEventListener('click', handleZoomOut);
      };
    }
  }, []);

  return (
    <section className="our-network-area pt-30 rpt-100 pb-100 rpb-70 rel z-1" id="network">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div 
              className="section-title text-center mb-50" 
              data-aos="fade-up" 
              data-aos-duration="1500" 
              data-aos-offset="50"
            >
              <span className="sub-title color-primary mb-10">Our Network</span>
              <h2>Our Presence</h2>
            </div>
          </div>
        </div>
        
        <div className="row align-items-center gap-60">
          <div 
            className="col-lg-4 col-12" 
            data-aos="fade-right" 
            data-aos-duration="1500" 
            data-aos-offset="50"
          >
            <ul className="list-style-one mt-25">
              <li>
                <i className="far fa-check"></i> Head Quartered in Dubai
              </li>
              <li>
                <i className="far fa-check"></i> Development Center in India
              </li>
              <li>
                <i className="far fa-check"></i> Clientele across India & GCC
              </li>
            </ul>
          </div>
          
          <div 
            className="col-lg-8 col-12" 
            data-aos="fade-left" 
            data-aos-duration="1500" 
            data-aos-offset="50"
          >
            <div className="presence-card">
              <div className="presence-map" id="presenceMap">
                {/* Dubai location marker */}
                <span 
                  className="presence-marker dubai-marker" 
                  style={{ left: '62.3%', top: '52%' }}
                >
                  <div className="marker-tooltip">
                    Nalsoft Dubai - Headquarters<br />
                    Business Bay, UAE<br />
                    25.2048° N, 55.2708° E
                  </div>
                </span>
                
                {/* Hyderabad location marker */}
                <span 
                  className="presence-marker hyderabad-marker" 
                  style={{ left: '70%', top: '56%' }}
                >
                  <div className="marker-tooltip">
                    Nalsoft Hyderabad - Development Center<br />
                    HITEC City, India<br />
                    17.4485° N, 78.3824° E
                  </div>
                </span>
                
                <div className="presence-zoom">
                  <button type="button" aria-label="zoom in">+</button>
                  <button type="button" aria-label="zoom out">−</button>
                </div>
              </div>
              
              <div className="presence-legend">
                <span className="presence-pill">
                  <span className="presence-dot dubai"></span> Dubai, UAE
                </span>
                <span className="presence-pill">
                  <span className="presence-dot hyderabad"></span> Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;