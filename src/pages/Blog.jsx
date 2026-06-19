import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { Link } from 'react-router-dom';

const Blog = () => {
  useScrollAnimation();

  return (
    <main>
      {/* Blog Hero Section */}
      <header className="portfolio-hero" style={{ backgroundImage: "linear-gradient(135deg, rgba(30, 80, 150, 0.2) 0%, rgba(10, 25, 60, 0.6) 100%), url('https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/blue-stage-new.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '120px 5% 60px 5%', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <p className="hero-tagline" data-animate data-delay="100ms">✦ Design & Decor Journal ✦</p>
          <h2 data-animate data-delay="250ms">The <span className="gold-text">Bespoke Event Blog</span></h2>
          <p data-animate data-delay="400ms" style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}>Tips, trends, and inspiration from Pune's premier luxury event management and design team.</p>
      </header>

      {/* Blog Content Section */}
      <section className="blog-section" style={{ paddingTop: '50px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
              
              {/* Article 1 */}
              <article className="portfolio-card" data-animate style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="portfolio-img-wrapper" style={{ height: '220px' }}>
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-3.jpg?v=9" alt="Top Wedding Trends 2026" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="portfolio-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                          <span style={{ color: 'var(--gold-primary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>Wedding Decor & Stage</span>
                          <h3 style={{ fontSize: '1.45rem', lineHeight: '1.3', marginBottom: '12px' }}>Top Wedding Trends 2026: Elevating Pune's Royal Celebrations</h3>
                          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '20px' }}>Discover the shift toward monocromatic emerald backdrops, custom 3D monograms, and warm glowing ambient designs shaping Pune's elite wedding stages this year...</p>
                      </div>
                      <Link to="/inquire" className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '8px 20px', fontSize: '0.75rem' }}>Discuss Trends</Link>
                  </div>
              </article>

              {/* Article 2 */}
              <article className="portfolio-card" data-animate style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="portfolio-img-wrapper" style={{ height: '220px' }}>
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-4.jpg?v=9" alt="Gourmet Catering Presentation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="portfolio-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                          <span style={{ color: 'var(--gold-primary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>Gourmet Catering</span>
                          <h3 style={{ fontSize: '1.45rem', lineHeight: '1.3', marginBottom: '12px' }}>Designing the Menu: Luxury Food Counter Displays & Trends</h3>
                          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '20px' }}>A great banquet feast requires top tier serving aesthetics. Learn how custom live pasta blocks, dessert towers, and uniformed staff hospitality elevate your guest experiences...</p>
                      </div>
                      <Link to="/inquire" className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '8px 20px', fontSize: '0.75rem' }}>Discuss Catering</Link>
                  </div>
              </article>

              {/* Article 3 */}
              <article className="portfolio-card" data-animate style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="portfolio-img-wrapper" style={{ height: '220px' }}>
                      <img src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-5.jpg?v=9" alt="Vibrant Haldi Swings" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="portfolio-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                          <span style={{ color: 'var(--gold-primary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>Traditional Ceremonies</span>
                          <h3 style={{ fontSize: '1.45rem', lineHeight: '1.3', marginBottom: '12px' }}>The Perfect Haldi Setup: Blending Heritage with Modern Props</h3>
                          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '20px' }}>Traditional yellow silk draping is timeless. See how we integrate heavy brass vessels, ceremonial marigold swings, and colorful fabric structures into Pune courtyards...</p>
                      </div>
                      <Link to="/inquire" className="btn btn-secondary" style={{ alignSelf: 'flex-start', padding: '8px 20px', fontSize: '0.75rem' }}>Discuss Decor</Link>
                  </div>
              </article>

          </div>
      </section>

      {/* Consultation CTA */}
      <section className="cta-banner" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', textAlign: 'center', padding: '60px 5%' }}>
          <h3 style={{ fontSize: '2.2rem', marginBottom: '15px' }}>Have an event in mind? <span className="gold-text">Let's Craft It.</span></h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Book your free 1-on-1 design layout consultation in Pune with Mr. Ayush Kale.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/inquire" className="btn btn-primary">Book Consultation</Link>
              <a href="https://wa.me/918459398321?text=Hi%20Dream%20Day%20Events%2C%20I%20am%20interested%20in%20booking%20an%20event." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }}></i>WhatsApp Chat
              </a>
          </div>
      </section>
    </main>
  );
};

export default Blog;
