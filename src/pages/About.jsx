import React, { useEffect } from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

const About = () => {
  useScrollAnimation();

  // Handle about slideshow
  useEffect(() => {
    const aboutSlideshow = document.querySelector('.about-slideshow');
    if (!aboutSlideshow) return;
    
    const images = aboutSlideshow.querySelectorAll('img');
    let activeIdx = 0;
    let intervalId;
    if (images.length > 1) {
      intervalId = setInterval(() => {
        images[activeIdx].classList.remove('active');
        activeIdx = (activeIdx + 1) % images.length;
        images[activeIdx].classList.add('active');
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      {/* About Page Hero Banner */}
      <header className="portfolio-hero" style={{ backgroundImage: "linear-gradient(135deg, rgba(30, 80, 150, 0.2) 0%, rgba(10, 25, 60, 0.6) 100%), url('https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/wedding-red.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '120px 5% 60px 5%', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <p className="hero-tagline" data-animate data-delay="100ms">✦ Who We Are ✦</p>
          <h2 data-animate data-delay="250ms">About <span className="gold-text">Our Company</span></h2>
          <p data-animate data-delay="400ms" style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}>Discover the passion, values, and meticulous craft behind Pune's finest celebrations.</p>
      </header>

      <section className="about" id="about">
          <div className="about-container">
              <div className="about-img" data-animate>
                  <div className="about-slideshow">
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/wedding-red.jpg" alt="About Slideshow 1" className="active" />
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-1.jpg?v=9" alt="About Slideshow 2" />
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-2.jpg?v=9" alt="About Slideshow 3" />
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-3.jpg?v=9" alt="About Slideshow 4" />
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-5.jpg?v=9" alt="About Slideshow 5" />
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-9.jpg?v=9" alt="About Slideshow 6" />
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-21.jpg?v=9" alt="About Slideshow 7" />
                  </div>
              </div>
              <div className="about-content" data-animate>
                  <p className="hero-tagline">✦ Who We Are ✦</p>
                  <h3>Defining Luxury in <br/><span className="gold-text">Every Single Detail</span></h3>
                  <p>Welcome to <strong>Dream Day Events</strong>, your premier partner in luxury event management, premium decor, and gourmet catering. Led by the visionary event designer <strong>Mr. Ayush Kale</strong>, we transform venues into royal spaces, creating rich, premium designs tailored to your desires.</p>
                  <p>From magnificent wedding stages to vibrant haldi ceremonies, elegant corporate affairs to custom catered delicacies, we ensure perfection in execution. Our signature style blends traditional elegance with modern sophistication.</p>
                  
                  <div className="about-features">
                      <div className="about-feature-item">
                          <i className="fa-solid fa-award"></i>
                          <div>
                              <h4>Elite Designs</h4>
                              <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-secondary)' }}>Bespoke themes and setups</p>
                          </div>
                      </div>
                      <div className="about-feature-item">
                          <i className="fa-solid fa-utensils"></i>
                          <div>
                              <h4>Premium Catering</h4>
                              <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-secondary)' }}>Gourmet multi-cuisine spreads</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
};

export default About;
