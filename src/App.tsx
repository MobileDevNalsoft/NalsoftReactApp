import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';

// Import styles
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/fonts.css';
import './styles/bootstrap.min.css';
import './styles/all.min.css';
import './styles/flaticon.min.css';
import './styles/style.css';
import './styles/style_1.css';
import './styles/oracle-integration.css';
import './styles/aos.css';
import './styles/slick.min.css';
import './App.css';

// Import components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import ModernServices from './components/Services/ModernServices';
import Statistics from './components/About/Statistics';
import Team from './components/Team/Team';
import Network from './components/Network/Network';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Clients from './components/Clients/Clients';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1500,
      offset: 50,
      once: true,
    });

    // Add preloader functionality
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.remove();
        }, 500);
      }, 1000);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Preloader */}
        <div className="preloader">
          <div className="custom-loader"></div>
        </div>

        <div id="nalsoft-page" className="nalsoft-body-content">
          <Header />
          
          <main id="nalsoft-content" className="nalsoft-content-area">
            <Hero />
            <Services />
            <About />
            <ModernServices />
            <Statistics />
            <Team />
            <Network />
            <Features />
            <Testimonials />
            <Clients />
            <Blog />
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;