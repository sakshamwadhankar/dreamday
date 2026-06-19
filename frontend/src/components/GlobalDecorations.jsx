import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GlobalDecorations = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate scroll progress percentage
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      // 2. Toggle Back to Top Button visibility
      setShowBackToTop(winScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar (Top) */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress" 
          id="scroll-progress" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Left & Right Scroll-triggered Vertical Golden Lines */}
      <div className="scroll-line-container left">
        <div 
          className="scroll-line-active" 
          id="scroll-line-left" 
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className="scroll-line-container right">
        <div 
          className="scroll-line-active" 
          id="scroll-line-right" 
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Background Winding Thread */}
      <div 
        className="golden-thread-svg-container" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          overflow: 'hidden', 
          pointerEvents: 'none', 
          zIndex: 0 
        }}
      >
        <svg width="100%" height="100%" style={{ display: 'block', minHeight: '5000px' }}>
          <path d="M 0 500 Q 300 200 600 500 T 1200 500 T 1800 500" fill="none" stroke="rgba(212, 175, 55, 0.07)" strokeWidth="1.5" strokeDasharray="5 5"></path>
          <path d="M 0 1500 Q 400 1200 800 1500 T 1600 1500" fill="none" stroke="rgba(212, 175, 55, 0.07)" strokeWidth="1.5" strokeDasharray="5 5"></path>
          <path d="M 0 3000 Q 500 2600 1000 3000 T 2000 3000" fill="none" stroke="rgba(212, 175, 55, 0.07)" strokeWidth="1.5" strokeDasharray="5 5"></path>
          <path d="M 0 4200 Q 300 3900 700 4200 T 1500 4200" fill="none" stroke="rgba(212, 175, 55, 0.07)" strokeWidth="1.5" strokeDasharray="5 5"></path>
        </svg>
      </div>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/918459398321?text=Hi%20Dream%20Day%20Events%2C%20I%20am%20interested%20in%20your%20luxury%20decorations%20and%20catering." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-cta" 
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Back to Top Button */}
      <div 
        className={`back-to-top ${showBackToTop ? 'show' : ''}`} 
        id="back-to-top"
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </>
  );
};

export default GlobalDecorations;
