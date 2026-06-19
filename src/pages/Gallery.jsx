import React, { useState } from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { useLightbox } from '../utils/LightboxContext';

const Gallery = () => {
  useScrollAnimation();
  const { openLightbox } = useLightbox();
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-1.jpg?v=9', title: 'Emerald Dreamcatcher Haldi', category: 'haldi' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-2.jpg?v=9', title: 'Royal Monogram Stage', category: 'wedding' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-3.jpg?v=9', title: 'Royal White Arch Stage', category: 'wedding' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-4.jpg?v=9', title: 'Elysian Banquet Tablescape', category: 'wedding' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-5.jpg?v=9', title: 'Vibrant Haldi Styling', category: 'haldi' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-6.jpg?v=9', title: 'Traditional Yellow Haldi Backdrop', category: 'haldi' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-7.jpg?v=9', title: 'Traditional Saffron Haldi', category: 'haldi' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-8.jpg?v=9', title: 'Outdoor Haldi Swing', category: 'haldi' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-9.jpg?v=9', title: 'Saffron Mandap Layout', category: 'wedding' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-10.jpg?v=9', title: 'Gala Banquet Table Setup', category: 'corporate' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-11.jpg?v=9', title: 'Elite Corporate Stage Setup', category: 'corporate' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-12.jpg?v=9', title: 'Annual Business Award Night', category: 'corporate' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-13.jpg?v=9', title: 'Royal Pink Backdrop Stage', category: 'wedding' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-14.jpg?v=9', title: 'Product Launch Backdrop', category: 'corporate' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-15.jpg?v=9', title: 'Grand Floral Arch Stage', category: 'wedding' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-16.jpg?v=9', title: 'Shareholders Meeting Stage', category: 'corporate' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-17.jpg?v=9', title: 'Corporate Branding Pavilion', category: 'corporate' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-18.jpg?v=9', title: 'Executive VIP Lounge Area', category: 'corporate' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-19.jpg?v=9', title: 'Blue Theme Gala Banquet', category: 'corporate' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-20.jpg?v=9', title: 'Bespoke Monogram Wedding Stage', category: 'wedding' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-21.jpg?v=9', title: 'Elysian Crystal Stage', category: 'wedding' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-22.jpg?v=9', title: 'Symphony of Marigolds', category: 'haldi' },
    { src: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-23.jpg?v=9', title: 'Royal Blue & White Stage', category: 'wedding' }
  ];

  return (
    <main>
      {/* Gallery Hero Section */}
      <header className="portfolio-hero" style={{ backgroundImage: "linear-gradient(135deg, rgba(30, 80, 150, 0.2) 0%, rgba(10, 25, 60, 0.6) 100%), url('https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/blue-stage-new.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '120px 5% 60px 5%', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <p className="hero-tagline">✦ Royal Visual Delights ✦</p>
          <h2>Our <span className="gold-text">Creations Gallery</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}>Explore our stunning royal wedding stages, vibrant traditional haldi setups, and elite corporate decors designed by Mr. Ayush Kale.</p>
      </header>

      {/* Gallery Section */}
      <section className="gallery" id="gallery" style={{ paddingTop: '60px' }}>
          <div className="gallery-filters">
              <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
              <button className={`filter-btn ${filter === 'wedding' ? 'active' : ''}`} onClick={() => setFilter('wedding')}>Wedding</button>
              <button className={`filter-btn ${filter === 'haldi' ? 'active' : ''}`} onClick={() => setFilter('haldi')}>Haldi</button>
              <button className={`filter-btn ${filter === 'corporate' ? 'active' : ''}`} onClick={() => setFilter('corporate')}>Corporate</button>
          </div>
          
          <div className="gallery-grid" id="dynamic-gallery-grid">
              {galleryItems.filter(item => filter === 'all' || item.category === filter).map((item, idx) => (
                  <div key={idx} className="gallery-item" data-category={item.category} data-animate onClick={() => openLightbox(item.src)}>
                      <img src={item.src} alt={item.title} />
                      <div className="gallery-overlay">
                          <h4>{item.title}</h4>
                          <p>{item.category.toUpperCase()}</p>
                      </div>
                  </div>
              ))}
          </div>

          {/* Video Highlights Sub-Section */}
          <div className="video-highlights" style={{ marginTop: '100px' }} data-animate>
              <div className="section-header" style={{ marginBottom: '50px' }}>
                  <p className="hero-tagline" data-animate data-delay="100ms">✦ Experience the Magic ✦</p>
                  <h2 data-animate data-delay="250ms">Cinematic <span className="gold-text">Highlights</span></h2>
              </div>
              <div className="luxury-video-trio">
                  {/* Video 1 */}
                  <div className="video-trio-card" id="trio-player-1">
                      <span className="video-trio-badge">Wedding Teaser</span>
                      <video autoPlay muted playsInline preload="auto" poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style={{ backgroundImage: "url('https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-3.jpg?v=9')" }}>
                          <source src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/video-1.mp4" type="video/mp4" />
                      </video>
                      <div className="video-trio-overlay">
                          <h3>Wedding Entrance Highlights</h3>
                          <p>A cinematic look at a luxury wedding entry setup with gold pillars and floral arches.</p>
                      </div>
                  </div>

                  {/* Video 2 */}
                  <div className="video-trio-card" id="trio-player-2">
                      <span className="video-trio-badge">Stage Walkthrough</span>
                      <video autoPlay muted playsInline preload="auto" poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style={{ backgroundImage: "url('https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-2.jpg?v=9')" }}>
                          <source src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/video-2.mp4" type="video/mp4" />
                      </video>
                      <div className="video-trio-overlay">
                          <h3>Grand Reception Decor Reel</h3>
                          <p>Walkthrough showing the detailed lighting, chandeliers, and setup of a royal stage.</p>
                      </div>
                  </div>

                  {/* Video 3 */}
                  <div className="video-trio-card" id="trio-player-3">
                      <span className="video-trio-badge">Haldi Highlight</span>
                      <video autoPlay muted playsInline preload="auto" poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style={{ backgroundImage: "url('https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-5.jpg?v=9')" }}>
                          <source src="https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/video-3.mp4" type="video/mp4" />
                      </video>
                      <div className="video-trio-overlay">
                          <h3>Vibrant Haldi Ceremony Clip</h3>
                          <p>A fun compilation clip of our signature traditional marigold haldi setups and props.</p>
                      </div>
                  </div>
              </div>
              {/* Direct Instagram Reels Link Button */}
              <div style={{ textAlign: 'center', marginTop: '50px' }} data-animate>
                  <a href="https://www.instagram.com/royal_eventanddecor/reels/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      <i className="fa-brands fa-instagram" style={{ marginRight: '8px', color: 'var(--gold-primary)' }}></i>Check the Reel on Instagram
                  </a>
              </div>
          </div>
      </section>

      {/* Consultation CTA */}
      <section className="cta-banner" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', textAlign: 'center', padding: '60px 5%' }}>
          <h3 style={{ fontSize: '2.2rem', marginBottom: '15px' }}>Have an event in mind? <span className="gold-text">Let's Craft It.</span></h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Book your free 1-on-1 design layout consultation in Pune with Mr. Ayush Kale.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="/inquire" className="btn btn-primary">Book Consultation</a>
              <a href="https://wa.me/918459398321?text=Hi%20Dream%20Day%20Events%2C%20I%20am%20interested%20in%20booking%20an%20event." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }}></i>WhatsApp Chat
              </a>
          </div>
      </section>
    </main>
  );
};

export default Gallery;
