import React from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { Link } from 'react-router-dom';

const Videos = () => {
  useScrollAnimation();

  const videos = [
    { src: 'images/video-1.mp4', poster: 'images/event-3.jpg?v=9', badge: 'Wedding Teaser', title: 'Wedding Entrance Highlights', desc: 'Cinematic look at a luxury wedding entry setup with gold pillars and red flower arches.' },
    { src: 'images/video-2.mp4', poster: 'images/event-2.jpg?v=9', badge: 'Stage Walkthrough', title: 'Grand Reception Decor Reel', desc: 'Walkthrough showing the detailed lighting, chandeliers, and setup of a royal stage.' },
    { src: 'images/video-3.mp4', poster: 'images/event-5.jpg?v=9', badge: 'Haldi Highlight', title: 'Vibrant Haldi Ceremony Clip', desc: 'Fun compilation clip of our signature marigold haldi setups and props.' },
    { src: 'images/video-4.mp4', poster: 'images/event-4.jpg?v=9', badge: 'Catering Setup', title: 'Catering Buffet Setup Video', desc: 'Professional walkthrough of our premium gourmet multi-cuisine food spread and vessels.' },
    { src: 'images/video-5.mp4', poster: 'images/event-21.jpg?v=9', badge: 'Floral Close-up', title: 'Bespoke Floral Work Highlights', desc: 'Detailed close-up on the handcrafted fresh floral decorations and flower frames.' },
    { src: 'images/video-6.mp4', poster: 'images/event-3.jpg?v=9', badge: 'Lawn Tour', title: 'Lawn Celebration Tour', desc: 'Drone-style walkthrough of a royal outdoor wedding lawn setup with light pillars.' },
    { src: 'images/video-7.mp4', poster: 'images/event-2.jpg?v=9', badge: 'Entrance Setup', title: 'Bride & Groom Entrance Setup', desc: 'A summary clip showing guest entry pathway lighting and structural decorations.' },
    { src: 'images/video-8.mp4', poster: 'images/event-8.jpg?v=9', badge: 'Swing Decor', title: 'Traditional Marigold Swing Tour', desc: 'Beautiful wooden swing setup for the haldi ceremony in action with marigolds.' },
    { src: 'images/video-9.mp4', poster: 'images/event-21.jpg?v=9', badge: 'Stage Timelapse', title: 'Banquet Stage Decoration', desc: 'Grand wedding decoration setup timelapse coordinated by Mr. Ayush Kale.' },
    { src: 'images/video-10.mp4', poster: 'images/event-7.jpg?v=9', badge: 'Haldi Reels', title: 'Haldi Ceremony Highlights', desc: 'Fun clips showing traditional music, yellow fabrics, and decor setups.' },
    { src: 'images/video-11.mp4', poster: 'images/event-22.jpg?v=9', badge: 'Haldi Highlight', title: 'Haldi Ceremony of Eram', desc: 'A beautiful cinematic reel of Eram\'s vibrant Haldi celebration, featuring bright pink drapes and marigolds.' },
    { src: 'images/video-12.mp4', poster: 'images/event-9.jpg?v=9', badge: 'Mandap cinematic', title: 'Saffron Mandap Cinematic', desc: 'Bespoke saffron wedding mandap floral arrangements and candle decor highlights.' }
  ];

  return (
    <main>
      {/* Videos Hero Section */}
      <header className="portfolio-hero" style={{ backgroundImage: "linear-gradient(135deg, rgba(30, 80, 150, 0.2) 0%, rgba(10, 25, 60, 0.6) 100%), url('images/blue-stage-new.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '120px 5% 60px 5%', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <p className="hero-tagline" data-animate data-delay="100ms">✦ Event Teasers & Walks ✦</p>
          <h2 data-animate data-delay="250ms">Cinematic <span className="gold-text">Glimpses</span></h2>
          <p data-animate data-delay="400ms" style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}>Step inside our magical designs through these video reels and setup walkthroughs.</p>
      </header>

      {/* Video Grid Section */}
      <section className="portfolio-section" style={{ paddingTop: '40px', minHeight: '60vh' }}>
          <div className="video-grid">
              {videos.map((vid, idx) => (
                  <div key={idx} className="video-card" data-animate>
                      <div className="video-wrapper">
                          <span className="video-badge">{vid.badge}</span>
                          <video controls muted loop preload="metadata" poster={vid.poster} style={{ backgroundImage: `url('${vid.poster}')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
                              <source src={vid.src} type="video/mp4" />
                          </video>
                      </div>
                      <div className="video-card-info">
                          <h3>{vid.title}</h3>
                          <p>{vid.desc}</p>
                      </div>
                  </div>
              ))}
          </div>
          {/* Direct Instagram Reels Link Button */}
          <div style={{ textAlign: 'center', marginTop: '50px' }} data-animate>
              <a href="https://www.instagram.com/royal_eventanddecor/reels/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="fa-brands fa-instagram" style={{ marginRight: '8px', color: 'var(--gold-primary)' }}></i>Check the Reel on Instagram
              </a>
          </div>
      </section>

      {/* Consultation CTA */}
      <section className="cta-banner" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', textAlign: 'center', padding: '60px 5%' }}>
          <h3 style={{ fontSize: '2.2rem', marginBottom: '15px' }}>Ready to create your <span className="gold-text">Dream Celebration?</span></h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Let Mr. Ayush Kale and our design team craft a premium experience for you.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/inquire" className="btn btn-primary">Send Enquiry</Link>
              <a href="https://wa.me/918459398321?text=Hi%20Dream%20Day%20Events%2C%20I%20am%20interested%20in%20booking%20an%20event." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }}></i>WhatsApp Chat
              </a>
          </div>
      </section>
    </main>
  );
};

export default Videos;
