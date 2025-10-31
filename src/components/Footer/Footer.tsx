import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isColorToggled, setIsColorToggled] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const handleColorToggle = () => {
    setIsColorToggled(!isColorToggled);
    // Add color toggle functionality here
    document.body.classList.toggle('color-toggled');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="tekprof-site-footer" id="footer">
      <div className="main-footer bgc-blue mt-120 rel z-1">
        {/* Footer Top CTA Section */}
        <div className="container container-1500">
          <div 
            className="footer-top pt-70 pb-40 rpt-60 px-4 bgs-cover" 
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/backgrounds/get-consultation-bg.jpg)` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div 
                    className="section-title text-white mb-20" 
                    data-aos="fade-left" 
                    data-aos-duration="1500" 
                    data-aos-offset="50"
                  >
                    <span className="sub-title mb-5">Book Consultations</span>
                    <h2>Ready to Get IT Consultations ?</h2>
                  </div>
                </div>
                <div 
                  className="col-lg-5" 
                  data-aos="fade-right" 
                  data-aos-duration="1500" 
                  data-aos-offset="50"
                >
                  <div className="cta-right-content">
                    <a 
                      href="#footer" 
                      className="theme-btn style-two mb-20"
                      onClick={handleBookConsultation}
                    >
                      Book Consultation
                    </a>
                    <div className="mail-info mb-20">
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="content">
                        Email Address <br />
                        <a href="mailto:info@nalsoft.net">info@nalsoft.net</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="container">
          <div className="row">
            {/* Footer About */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="footer-widget footer-info" 
                data-aos="fade-up" 
                data-aos-duration="1500" 
                data-aos-offset="50"
              >
                <div className="footer-logo mb-30">
                  <a href="#" onClick={(e) => { e.preventDefault(); handleScrollToTop(); }}>
                    <img 
                      src={`${process.env.PUBLIC_URL}/static/images/logos/nalsoft_logo.png`} 
                      width="168" 
                      height="40" 
                      alt="Nalsoft" 
                      title="Nalsoft" 
                    />
                  </a>
                </div>
                <div className="text mb-25">
                  <p>
                    We are a dynamic and fast-growing IT service provider that focused on 
                    Oracle applications & technologies.
                  </p>
                </div>
                <div className="info-item">
                  <div className="icon">
                    <i className="far fa-phone-rotary"></i>
                  </div>
                  <div className="content">
                    Need Any Help? <br />
                    Call : <a href="tel:+97144484363">+9714 4484 363</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="footer-widget footer-links ps-xl-5" 
                data-aos="fade-up" 
                data-aos-delay="100" 
                data-aos-duration="1500" 
                data-aos-offset="50"
              >
                <h5 className="footer-title">Office Locations</h5>
                <ul>
                  <li><a href="#network"><i className="far fa-angle-right"></i> Dubai, UAE</a></li>
                  <li><a href="#network"><i className="far fa-angle-right"></i> Hyderabad, India</a></li>
                  <li><a href="#services"><i className="far fa-angle-right"></i> Oracle Applications</a></li>
                  <li><a href="#services"><i className="far fa-angle-right"></i> IT Services</a></li>
                  <li><a href="#footer"><i className="far fa-angle-right"></i> Contact Us</a></li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="footer-widget footer-links ps-xl-5" 
                data-aos="fade-up" 
                data-aos-delay="100" 
                data-aos-duration="1500" 
                data-aos-offset="50"
              >
                <h5 className="footer-title">Services</h5>
                <ul>
                  <li><a href="#services"><i className="far fa-angle-right"></i> Oracle Implementation</a></li>
                  <li><a href="#services"><i className="far fa-angle-right"></i> Enterprise Solutions</a></li>
                  <li><a href="#services"><i className="far fa-angle-right"></i> IT Consulting</a></li>
                  <li><a href="#services"><i className="far fa-angle-right"></i> Digital Transformation</a></li>
                  <li><a href="#services"><i className="far fa-angle-right"></i> Support & Maintenance</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="footer-widget newsletter-widget" 
                data-aos="fade-up" 
                data-aos-delay="150" 
                data-aos-duration="1500" 
                data-aos-offset="50"
              >
                <h5 className="footer-title">Newsletter</h5>
                <p>Stay updated with our latest Oracle solutions and IT insights.</p>
                <form className="newsletter-form mt-30 mc-form" onSubmit={handleEmailSubmit}>
                  <input 
                    type="email" 
                    className="mc-form__input" 
                    placeholder="Email here" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                  <button type="submit">
                    <i className="far fa-paper-plane"></i>
                  </button>
                </form>
                <button 
                  id="themeColorToggle" 
                  className="theme-btn btn-small mt-15" 
                  type="button" 
                  aria-pressed={isColorToggled}
                  onClick={handleColorToggle}
                >
                  Toggle Brand Color
                </button>
                <p className="mc-form__feedback text-white"></p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="container">
          <div className="footer-bottom pt-30 pb-15">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Copyright © 2025 Nalsoft Middle East | All rights reserved.</p>
                </div>
              </div>
              <div className="col-lg-6 text-lg-end">
                <ul className="footer-bottom-nav">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
            </div>
            
            {/* Scroll Top Button */}
            <button 
              className="scroll-top scroll-to-target" 
              onClick={handleScrollToTop}
              aria-label="Scroll to top"
            >
              <i aria-hidden="true" className="far fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;