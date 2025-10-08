import React, { useState, useEffect } from 'react';
import { MenuItem } from '../../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHiddenBarOpen, setIsHiddenBarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  const servicesMenu: MenuItem[] = [
    { text: 'Cloud Implementations', href: 'https://nalsoft.net/services/cloud-implementations/' },
    { text: 'E-Business Implementations', href: 'https://nalsoft.net/services/e-business-implementations/' },
    { text: 'Application Extensions & Customizations', href: 'https://nalsoft.net/services/application-extensions-customizations/' },
    { text: 'Managed Services', href: 'https://nalsoft.net/services/managed-services/' }
  ];

  const solutionsMenu: MenuItem[] = [
    { text: 'Oracle ERP Cloud', href: 'https://nalsoft.net/solutions/oracle-erp-cloud/' },
    { text: 'Oracle SCM Cloud', href: 'https://nalsoft.net/solutions/oracle-scm-cloud/' },
    { text: 'Oracle HCM Cloud', href: 'https://nalsoft.net/solutions/oracle-hcm-cloud/' },
    { text: 'Oracle EPM Cloud', href: 'https://nalsoft.net/solutions/oracle-epm-cloud/' },
    { text: 'Oracle Project Management', href: 'https://nalsoft.net/solutions/oracle-project-management/' },
    { text: 'Oracle Logistics Cloud', href: 'https://nalsoft.net/solutions/oracle-logistics-cloud/' },
    { text: 'Oracle Customer Experience (CX)', href: 'https://nalsoft.net/solutions/oracle-customer-experience-cx/' },
    { text: 'Dealer Management System', href: 'https://nalsoft.net/solutions/dealer-management-system/' },
    { text: 'Property Management System', href: 'https://nalsoft.net/solutions/property-management-system/' },
    { text: 'Engineering & Construction System', href: 'https://nalsoft.net/solutions/engineering-construction-system/' },
    { text: 'Time & Attendance System', href: 'https://nalsoft.net/solutions/time-attendance-system/' }
  ];

  const industriesMenu: MenuItem[] = [
    { text: 'BFSI', href: 'https://nalsoft.net/industries/bfsi/' },
    { text: 'Engineering & Construction', href: 'https://nalsoft.net/industries/engineering-construction/' },
    { text: 'Manufacturing', href: 'https://nalsoft.net/industries/manufacturing/' },
    { text: 'Real Estate & Property Management', href: 'https://nalsoft.net/industries/real-estate-property-management/' },
    { text: 'Retail & Trading', href: 'https://nalsoft.net/industries/retail-and-trading/' },
    { text: 'Hospitality & Services', href: 'https://nalsoft.net/industries/hospitality-services/' }
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuItemClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // External link - open in new tab
      window.open(href, '_blank');
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`tekprof-site-header ${isSticky ? 'sticky' : ''}`}>
        <div className="main-header">
          <div className="header-upper">
            <div className="container clearfix">
              <div className="header-inner before-after-none rel d-flex align-items-center">
                <div className="logo-outer">
                  <div className="logo">
                    <a 
                      href="#home" 
                      onClick={handleLogoClick}
                      style={{
                        textDecoration: 'none',
                        color: '#c00101',
                        fontFamily: "'Ethnocentric', Arial, sans-serif",
                        fontSize: '34px',
                        fontWeight: 'normal',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}
                    >
                      NALSOFT
                    </a>
                  </div>
                </div>

                <div className="nav-outer ms-lg-auto clearfix">
                  <nav className="main-menu navbar-expand-lg">
                    <div className="navbar-header py-15">
                      <div className="mobile-logo">
                        <a 
                          href="#home" 
                          onClick={handleLogoClick}
                          style={{
                            textDecoration: 'none',
                            color: '#FC5546',
                            fontFamily: "'Ethnocentric', Arial, sans-serif",
                            fontSize: '24px',
                            fontWeight: 'normal',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                          }}
                        >
                          NALSOFT
                        </a>
                      </div>

                      <button 
                        type="button" 
                        className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>

                    <div className={`navbar-collapse collapse clearfix ${isMenuOpen ? 'show' : ''}`}>
                      <ul className="navigation clearfix">
                        <li className="menu-item">
                          <a href="#about" onClick={() => handleMenuItemClick('#about')} className="menu-item-link">
                            About Us
                          </a>
                        </li>
                        <li 
                          className={`menu-item menu-item-has-children dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
                          onMouseEnter={() => handleDropdownMouseEnter('services')}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <a 
                            href="#services" 
                            className="menu-item-link" 
                            aria-haspopup="true" 
                            aria-expanded={activeDropdown === 'services'}
                            onClick={(e) => {
                              e.preventDefault();
                              handleDropdownToggle('services');
                            }}
                          >
                            Services<span className="submenu-toggler"></span>
                          </a>
                          <ul className={`sub-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                            {servicesMenu.map((item, index) => (
                              <li key={index} className="menu-item">
                                <a 
                                  href={item.href} 
                                  onClick={() => handleMenuItemClick(item.href)}
                                  className="menu-item-link"
                                >
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li 
                          className={`menu-item menu-item-has-children dropdown ${activeDropdown === 'solutions' ? 'active' : ''}`}
                          onMouseEnter={() => handleDropdownMouseEnter('solutions')}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <a 
                            href="#solutions" 
                            className="menu-item-link" 
                            aria-haspopup="true" 
                            aria-expanded={activeDropdown === 'solutions'}
                            onClick={(e) => {
                              e.preventDefault();
                              handleDropdownToggle('solutions');
                            }}
                          >
                            Solutions<span className="submenu-toggler"></span>
                          </a>
                          <ul className={`sub-menu ${activeDropdown === 'solutions' ? 'show' : ''}`}>
                            {solutionsMenu.map((item, index) => (
                              <li key={index} className="menu-item">
                                <a 
                                  href={item.href} 
                                  onClick={() => handleMenuItemClick(item.href)}
                                  className="menu-item-link"
                                >
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li 
                          className={`menu-item menu-item-has-children dropdown ${activeDropdown === 'industries' ? 'active' : ''}`}
                          onMouseEnter={() => handleDropdownMouseEnter('industries')}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <a 
                            href="#industries" 
                            className="menu-item-link" 
                            aria-haspopup="true" 
                            aria-expanded={activeDropdown === 'industries'}
                            onClick={(e) => {
                              e.preventDefault();
                              handleDropdownToggle('industries');
                            }}
                          >
                            Industries<span className="submenu-toggler"></span>
                          </a>
                          <ul className={`sub-menu ${activeDropdown === 'industries' ? 'show' : ''}`}>
                            {industriesMenu.map((item, index) => (
                              <li key={index} className="menu-item">
                                <a 
                                  href={item.href} 
                                  onClick={() => handleMenuItemClick(item.href)}
                                  className="menu-item-link"
                                >
                                  {item.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="#blog" onClick={() => handleMenuItemClick('#blog')} className="menu-item-link">
                            Media/News
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#footer" onClick={() => handleMenuItemClick('#footer')} className="menu-item-link">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                <img 
                  src="/static/images/Oracle-Partner-logo-black-300x89.png" 
                  alt="Oracle Partner" 
                  className="oracle-partner-logo-small me-3" 
                  style={{ height: '45px', width: 'auto', paddingLeft: '10px' }} 
                />

                <div className="menu-btns">
                  <a href="#footer" onClick={() => handleMenuItemClick('#footer')} className="theme-btn btn-small ms-lg-4">
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-back-drop" onClick={() => setIsHiddenBarOpen(false)}></div>
      </header>

      {/* Hidden Sidebar */}
      <section className={`hidden-bar ${isHiddenBarOpen ? 'visible' : ''}`}>
        <div className="inner-box">
          <div className="cross-icon" onClick={() => setIsHiddenBarOpen(false)}>
            <span className="fa fa-times"></span>
          </div>

          <div className="widget widget-search" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
            <form className="default-search-form">
              <input type="text" name="s" placeholder="Search here" />
              <button type="submit" className="searchbutton far fa-search"></button>
            </form>
          </div>

          <div className="widget widget-news" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
            <h4 className="widget-title">Recent Post</h4>
            <ul>
              <li>
                <div className="image">
                  <img src="/static/images/01-80x64.jpg" alt="Recent Post" />
                </div>
                <div className="content">
                  <h5><a href="#blog">Why Your Business Needs..</a></h5>
                  <span className="date">Thu May 2025</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="social-style-one">
            <a href="https://facebook.com/nalsoft" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/nalsoft" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
            <a href="https://instagram.com/nalsoft" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://pinterest.com/nalsoft" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;