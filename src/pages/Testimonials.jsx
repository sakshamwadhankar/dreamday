import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { useData } from '../context/DataContext';

const Testimonials = () => {
  useScrollAnimation();

  const { testimonialsData } = useData();
  
  // Map Firebase data to match frontend structure
  const storedTestimonials = testimonialsData.map(t => ({
    text: t.review,
    author: t.clientName,
    event: t.eventType,
  }));

  // Fallback handled by DataContext defaultTestimonials now

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    if (storedTestimonials.length <= 1) return;
    const intervalId = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % storedTestimonials.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [storedTestimonials.length]);

  return (
    <main>
      {/* Testimonials Page Hero Banner */}
      <header className="portfolio-hero" style={{ backgroundImage: "linear-gradient(135deg, rgba(30, 80, 150, 0.2) 0%, rgba(10, 25, 60, 0.6) 100%), url('https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '120px 5% 60px 5%', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <p className="hero-tagline" data-animate data-delay="100ms">✦ Kind Words ✦</p>
          <h2 data-animate data-delay="250ms">Client <span className="gold-text">Reviews</span></h2>
          <p data-animate data-delay="400ms" style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}>Read how we've brought smiles and royal decors to couples and clients in Nagpur.</p>
      </header>
      
      <section className="reviews-section" id="reviews">
          <div className="section-header">
              <p className="hero-tagline" data-animate data-delay="100ms">✦ Google Reviews ✦</p>
              <h2 data-animate data-delay="250ms">Trusted By <span className="gold-text">Hundreds</span></h2>
          </div>
          <div className="google-reviews-widget" data-animate>
              <div className="reviews-header">
                  <div className="reviews-summary">
                      <i className="fa-brands fa-google reviews-badge-icon"></i>
                      <div>
                          <div className="reviews-rating-value">4.9 / 5.0</div>
                          <div className="reviews-stars">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star-half-stroke"></i>
                          </div>
                          <div className="reviews-count">Based on 158 verified Google Reviews</div>
                      </div>
                  </div>
                  <a href="https://g.page/r/google-review-link/review" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '10px 22px' }}>
                      Write a Review
                  </a>
              </div>
              
              <div className="reviews-grid">
                  {/* Review 1 */}
                  <div className="review-item-card">
                      <div className="review-user-info">
                          <div className="review-user-avatar">Amit</div>
                          <div className="review-user-details">
                              <h4>Amit Deshpande</h4>
                              <span>Google Reviewer • Nagpur</span>
                          </div>
                      </div>
                      <div className="reviews-stars" style={{ marginBottom: '10px' }}>
                          <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                      </div>
                      <p className="review-text">"Excellent coordination! Mr. Ayush Kale managed the entire sangeet sadas and catering display flawlessly. The guest comments on the food were incredible!"</p>
                  </div>
                  {/* Review 2 */}
                  <div className="review-item-card">
                      <div className="review-user-info">
                          <div className="review-user-avatar">Neha</div>
                          <div className="review-user-details">
                              <h4>Neha Kulkarni</h4>
                              <span>Local Guide • Nagpur</span>
                          </div>
                      </div>
                      <div className="reviews-stars" style={{ marginBottom: '10px' }}>
                          <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                      </div>
                      <p className="review-text">"They transformed a simple banquet hall into a royal wedding palace. The gold frame elements and fresh flowers were outstanding. Highly recommended luxury planner in Nagpur!"</p>
                  </div>
                  {/* Review 3 */}
                  <div className="review-item-card">
                      <div className="review-user-info">
                          <div className="review-user-avatar">Raj</div>
                          <div className="review-user-details">
                              <h4>Rajesh Sen</h4>
                              <span>Google Reviewer • Maharashtra</span>
                          </div>
                      </div>
                      <div className="reviews-stars" style={{ marginBottom: '10px' }}>
                          <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                      </div>
                      <p className="review-text">"Top tier professionalism. Easy booking, premium catering setup, and gorgeous lighting design. The team was prompt and executed exactly what we signed on."</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="testimonials" id="testimonials" style={{ paddingBottom: '60px' }}>
          <div className="section-header">
              <p className="hero-tagline" data-animate data-delay="100ms">✦ Kind Words ✦</p>
              <h2 data-animate data-delay="250ms">Client <span className="gold-text">Experiences</span></h2>
          </div>
          
          <div className="testimonials-slider">
              {storedTestimonials.length > 0 ? (
                  storedTestimonials.map((testimonial, index) => (
                      <div
                          key={index}
                          className={`testimonial-slide ${index === activeTestimonial ? 'active' : ''}`}
                          style={{
                              display: index === activeTestimonial ? 'block' : 'none',
                              opacity: index === activeTestimonial ? 1 : 0,
                              transition: 'opacity 0.5s ease-in-out'
                          }}
                      >
                          <i className="fa-solid fa-quote-left quote-icon"></i>
                          <p>"{testimonial.text}"</p>
                          <h4>{testimonial.author}</h4>
                          <span>{testimonial.event}</span>
                      </div>
                  ))
              ) : (
                  <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No testimonials available yet.</p>
              )}
          </div>

          {storedTestimonials.length > 1 && (
              <div className="slider-dots" id="slider-dots">
                  {storedTestimonials.map((_, index) => (
                      <span
                          key={index}
                          className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                          onClick={() => setActiveTestimonial(index)}
                          style={{ cursor: 'pointer' }}
                      ></span>
                  ))}
              </div>
          )}
      </section>
    </main>
  );
};

export default Testimonials;
