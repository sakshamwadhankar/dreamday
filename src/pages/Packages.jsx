import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { useData } from '../context/DataContext';

const Packages = () => {
  useScrollAnimation();
  const { packagesData } = useData();

  const [estimatorState, setEstimatorState] = useState({
    royalStage: true,
    entranceArch: false,
    saffronMandap: false,
    haldiSwing: false,
    ledWall: false,
    ambientLight: true,
    cateringToggle: true,
    guestCount: 150
  });

  const prices = packagesData || {
    royalStage: 80000,
    entranceArch: 30000,
    saffronMandap: 50000,
    haldiSwing: 20000,
    ledWall: 40000,
    ambientLight: 25000,
    cateringToggle: 800 // per guest
  };

  const labels = {
    royalStage: 'Royal Stage Backdrop Setup',
    entranceArch: 'Luxury Entrance Arch Decor',
    saffronMandap: 'Traditional Saffron Mandap Setup',
    haldiSwing: 'Haldi Ceremonial Swing & Props',
    ledWall: 'High-Def LED Stage Wall Display',
    ambientLight: 'Venue Ambient Uplighting & Truss',
    cateringToggle: 'Premium Gourmet Catering'
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setEstimatorState(prev => ({ ...prev, [id]: checked }));
  };

  const handleGuestCountChange = (e) => {
    setEstimatorState(prev => ({ ...prev, guestCount: parseInt(e.target.value) || 0 }));
  };

  const formatPrice = (price) => {
    return '₹' + price.toLocaleString('en-IN');
  };

  const generateWhatsAppLink = () => {
    let msg = `Hi! I am interested in a Custom Event Package:\n\n`;
    let total = 0;
    Object.keys(prices).forEach(key => {
      if (key !== 'cateringToggle' && estimatorState[key]) {
        msg += `- ${labels[key]}\n`;
        total += prices[key];
      }
    });
    if (estimatorState.cateringToggle) {
        let cateringTotal = prices.cateringToggle * estimatorState.guestCount;
        msg += `- ${labels['cateringToggle']} (${estimatorState.guestCount} guests)\n`;
        total += cateringTotal;
    }
    msg += `\nEstimated Total: ${formatPrice(total)}\n\nPlease share more details.`;
    return `https://wa.me/918459398321?text=${encodeURIComponent(msg)}`;
  };

  const totalEstimate = () => {
    let total = 0;
    if (estimatorState.royalStage) total += prices.royalStage;
    if (estimatorState.entranceArch) total += prices.entranceArch;
    if (estimatorState.saffronMandap) total += prices.saffronMandap;
    if (estimatorState.haldiSwing) total += prices.haldiSwing;
    if (estimatorState.ledWall) total += prices.ledWall;
    if (estimatorState.ambientLight) total += prices.ambientLight;
    if (estimatorState.cateringToggle) total += (prices.cateringToggle * estimatorState.guestCount);
    return total;
  };

  return (
    <main>
      {/* Packages Hero Section */}
      <header className="portfolio-hero" style={{ backgroundImage: "linear-gradient(135deg, rgba(30, 80, 150, 0.2) 0%, rgba(10, 25, 60, 0.6) 100%), url('https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/blue-stage-new.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '120px 5% 60px 5%', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
          <p className="hero-tagline">✦ Pricing & Tiers ✦</p>
          <h2>Luxury <span className="gold-text">Event Packages</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}>Curated design packages tailored for your dream celebrations, stages, and premium feasts.</p>
      </header>

      {/* Pricing Packages Section */}
      <section className="packages-section" style={{ paddingTop: '50px' }}>
          <div className="packages-grid">
              {/* Package 1 */}
              <div className="package-card" data-animate>
                  <div className="package-header">
                      <span className="package-tag">Premium Choice</span>
                      <h3>Royal Elite Wedding Stage</h3>
                      <div className="package-price">
                          <span className="currency">₹</span>
                          <span className="amount">{(prices.royalStage + prices.entranceArch + prices.ledWall).toLocaleString('en-IN')}</span>
                          <span className="period">Starting</span>
                      </div>
                  </div>
                  <ul className="package-features">
                      <li><i className="fa-solid fa-check"></i> Grand 40ft Stage Backdrop Setup</li>
                      <li><i className="fa-solid fa-check"></i> Fresh and Silk Floral Arches</li>
                      <li><i className="fa-solid fa-check"></i> Royal Maharaja Couch / Sofa Seating</li>
                      <li><i className="fa-solid fa-check"></i> Walkway Red Carpet & Light Pillars</li>
                      <li><i className="fa-solid fa-check"></i> Elegant Selfie Photo Booth Spot</li>
                      <li><i className="fa-solid fa-check"></i> Custom 3D Monogram & Cold Pyro Entry</li>
                      <li><i className="fa-solid fa-check"></i> Complete Ambient LED Venue Lighting</li>
                  </ul>
                  <div className="package-footer">
                      <a href="https://wa.me/918459398321?text=Hi%21%20I%20am%20interested%20in%20your%20*Royal%20Elite%20Wedding%20Stage%20Package*%20%28Starting%20at%20%E2%82%B91%2C50%2C000%29.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="btn btn-primary package-btn">Book on WhatsApp</a>
                  </div>
              </div>

              {/* Package 2 */}
              <div className="package-card featured-card" data-animate>
                  <div className="package-header">
                      <span className="package-tag" style={{ background: 'var(--gold-gradient)', color: '#070d1e' }}>Most Popular</span>
                      <h3>Vibrant Shahnaz Haldi</h3>
                      <div className="package-price">
                          <span className="currency">₹</span>
                          <span className="amount">{(prices.haldiSwing + 40000).toLocaleString('en-IN')}</span>
                          <span className="period">Starting</span>
                      </div>
                  </div>
                  <ul className="package-features">
                      <li><i className="fa-solid fa-check"></i> Traditional Yellow/Pink Silk Draping</li>
                      <li><i className="fa-solid fa-check"></i> Decorated Wooden swing Setup</li>
                      <li><i className="fa-solid fa-check"></i> Cascading Heavy Marigold Garlands</li>
                      <li><i className="fa-solid fa-check"></i> Brass Vessels & Ceremonial Urali Bowl</li>
                      <li><i className="fa-solid fa-check"></i> Festive Guest Seating Cushions & Mats</li>
                      <li><i className="fa-solid fa-check"></i> Sound System for Traditional Sangeet</li>
                      <li><i className="fa-solid fa-check"></i> Haldi Photo backdrop Props</li>
                  </ul>
                  <div className="package-footer">
                      <a href="https://wa.me/918459398321?text=Hi%21%20I%20am%20interested%20in%20your%20*Vibrant%20Shahnaz%20Haldi%20Package*%20%28Starting%20at%20%E2%82%B960%2C000%29.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="btn btn-primary package-btn" style={{ background: 'var(--gold-gradient)', color: '#070d1e' }}>Book on WhatsApp</a>
                  </div>
              </div>

              {/* Package 3 */}
              <div className="package-card" data-animate>
                  <div className="package-header">
                      <span className="package-tag">Corporate Elite</span>
                      <h3>Imperial Gala Stage</h3>
                      <div className="package-price">
                          <span className="currency">₹</span>
                          <span className="amount">{(prices.royalStage + prices.ledWall).toLocaleString('en-IN')}</span>
                          <span className="period">Starting</span>
                      </div>
                  </div>
                  <ul className="package-features">
                      <li><i className="fa-solid fa-check"></i> Modern Panel Staging & Matte Flooring</li>
                      <li><i className="fa-solid fa-check"></i> High-Def LED Wall Backdrop Integration</li>
                      <li><i className="fa-solid fa-check"></i> Professional Truss and Spotlight Rigs</li>
                      <li><i className="fa-solid fa-check"></i> Elite VIP Seating Sofa Lounge Setup</li>
                      <li><i className="fa-solid fa-check"></i> Registration Counter & Media Wall Decor</li>
                      <li><i className="fa-solid fa-check"></i> Luxury Centerpieces for Banquet Tables</li>
                      <li><i className="fa-solid fa-check"></i> Sound System & Wireless Podium Mics</li>
                  </ul>
                  <div className="package-footer">
                      <a href="https://wa.me/918459398321?text=Hi%21%20I%20am%20interested%20in%20your%20*Imperial%20Gala%20Corporate%20Package*%20%28Starting%20at%20%E2%82%B91%2C20%2C000%29.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="btn btn-primary package-btn">Book on WhatsApp</a>
                  </div>
              </div>

              {/* Package 4 */}
              <div className="package-card" data-animate>
                  <div className="package-header">
                      <span className="package-tag">Gourmet Feasts</span>
                      <h3>Signature Catering</h3>
                      <div className="package-price">
                          <span className="currency">₹</span>
                          <span className="amount">{prices.cateringToggle.toLocaleString('en-IN')}</span>
                          <span className="period">Per Plate</span>
                      </div>
                  </div>
                  <ul className="package-features">
                      <li><i className="fa-solid fa-check"></i> Tailored Veg & Non-Veg Multi-Cuisine</li>
                      <li><i className="fa-solid fa-check"></i> Luxury 5-Star Buffet Layout Presentation</li>
                      <li><i className="fa-solid fa-check"></i> 3 Live Food Counters (Chat, Pasta, etc.)</li>
                      <li><i className="fa-solid fa-check"></i> Premium Mocktails & Welcome Drinks Bar</li>
                      <li><i className="fa-solid fa-check"></i> Royal Dessert Display & Hot Jalebi Counter</li>
                      <li><i className="fa-solid fa-check"></i> Professional Uniformed Service Staff</li>
                      <li><i className="fa-solid fa-check"></i> Full Banquet Table Setting & Clean Cutlery</li>
                  </ul>
                  <div className="package-footer">
                      <a href="https://wa.me/918459398321?text=Hi%21%20I%20am%20interested%20in%20your%20*Signature%20Gourmet%20Catering*%20%28Starting%20at%20%E2%82%B9800%20per%20plate%29.%20Please%20share%20details." target="_blank" rel="noopener noreferrer" className="btn btn-primary package-btn">Book on WhatsApp</a>
                  </div>
              </div>
          </div>

          {/* Package Tier Comparison Table */}
          <div className="comparison-container" data-animate style={{ marginTop: '80px' }}>
              <div className="section-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
                  <p className="hero-tagline" data-animate data-delay="100ms">✦ Compare Tiers ✦</p>
                  <h2 data-animate data-delay="250ms">What's Included <span className="gold-text">In Each Tier</span></h2>
              </div>
              
              <div className="table-responsive">
                  <table className="comparison-table">
                      <thead>
                          <tr>
                              <th>Service Category</th>
                              <th>Basic Setup</th>
                              <th>Premium Setup</th>
                              <th className="highlight-column">Luxury Elite Setup</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="feature-name">Stage & Backdrop Size</td>
                              <td>20-25 ft standard draping</td>
                              <td>30-40 ft mixed silk & floral</td>
                              <td className="highlight-column">40+ ft grand 3D royal panels</td>
                          </tr>
                          <tr>
                              <td className="feature-name">Floral Decor Type</td>
                              <td>Artificial silk floral arches</td>
                              <td>70% Fresh flowers + 30% Silk</td>
                              <td className="highlight-column">100% Exotic fresh flowers (imported)</td>
                          </tr>
                          <tr>
                              <td className="feature-name">Maharaja Sofa / Seating</td>
                              <td>Standard high-back sofa</td>
                              <td>Premium royal couch</td>
                              <td className="highlight-column">Exquisite antique gold carved sofa</td>
                          </tr>
                          <tr>
                              <td className="feature-name">Lighting Package</td>
                              <td>Basic LED spot lights (4)</td>
                              <td>Full ambient wash & LED wall setup</td>
                              <td className="highlight-column">Intelligent truss lighting, spot beams, & LED walls</td>
                          </tr>
                          <tr>
                              <td className="feature-name">Entrance Arch & Passage</td>
                              <td>Standard archway</td>
                              <td>Floral passage with carpet & pillars</td>
                              <td className="highlight-column">Grand tunnel entry, red carpet, & cold pyro entries</td>
                          </tr>
                          <tr>
                              <td className="feature-name">Selfie & Photo Booths</td>
                              <td>None (Available as add-on)</td>
                              <td>1 Elegant themed booth</td>
                              <td className="highlight-column">2 Interactive high-concept photo zones</td>
                          </tr>
                          <tr>
                              <td className="feature-name">Consultation & Planning</td>
                              <td>Phone & email support</td>
                              <td>1-on-1 designer session</td>
                              <td className="highlight-column">Dedicated event designer + 3D virtual walkthroughs</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </section>

      {/* Custom Package Estimator Section */}
      <section className="estimator-section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="section-header" style={{ marginBottom: '50px' }}>
              <p className="hero-tagline" data-animate data-delay="100ms">✦ Tailor-Made Calculations ✦</p>
              <h2 data-animate data-delay="250ms">Bespoke <span className="gold-text">Package Estimator</span></h2>
              <p>Select your desired services below to generate a real-time price estimate and export it directly to WhatsApp.</p>
          </div>

          <div className="estimator-container">
              {/* Left: Options Selector */}
              <div className="estimator-options-card" data-animate>
                  <h3>Select Services</h3>
                  
                  <div className="estimator-category">
                      <h4>Stage & Decor Settings</h4>
                      <label className="estimator-checkbox-wrapper">
                          <input type="checkbox" className="estimator-item" id="royalStage" checked={estimatorState.royalStage} onChange={handleCheckboxChange} />
                          <span className="custom-checkbox"></span>
                          <span className="item-name">Royal Stage Backdrop Setup <span className="item-price">₹80,000</span></span>
                      </label>
                      <label className="estimator-checkbox-wrapper">
                          <input type="checkbox" className="estimator-item" id="entranceArch" checked={estimatorState.entranceArch} onChange={handleCheckboxChange} />
                          <span className="custom-checkbox"></span>
                          <span className="item-name">Luxury Entrance Arch Decor <span className="item-price">₹30,000</span></span>
                      </label>
                      <label className="estimator-checkbox-wrapper">
                          <input type="checkbox" className="estimator-item" id="saffronMandap" checked={estimatorState.saffronMandap} onChange={handleCheckboxChange} />
                          <span className="custom-checkbox"></span>
                          <span className="item-name">Traditional Saffron Mandap Setup <span className="item-price">₹50,000</span></span>
                      </label>
                      <label className="estimator-checkbox-wrapper">
                          <input type="checkbox" className="estimator-item" id="haldiSwing" checked={estimatorState.haldiSwing} onChange={handleCheckboxChange} />
                          <span className="custom-checkbox"></span>
                          <span className="item-name">Haldi Ceremonial Swing & Props <span className="item-price">₹20,000</span></span>
                      </label>
                  </div>

                  <div className="estimator-category">
                      <h4>Lighting & Sound</h4>
                      <label className="estimator-checkbox-wrapper">
                          <input type="checkbox" className="estimator-item" id="ledWall" checked={estimatorState.ledWall} onChange={handleCheckboxChange} />
                          <span className="custom-checkbox"></span>
                          <span className="item-name">High-Def LED Stage Wall Display <span className="item-price">₹40,000</span></span>
                      </label>
                      <label className="estimator-checkbox-wrapper">
                          <input type="checkbox" className="estimator-item" id="ambientLight" checked={estimatorState.ambientLight} onChange={handleCheckboxChange} />
                          <span className="custom-checkbox"></span>
                          <span className="item-name">Venue Ambient Uplighting & Truss <span className="item-price">₹25,000</span></span>
                      </label>
                  </div>

                  <div className="estimator-category">
                      <h4>Catering Spread</h4>
                      <label className="estimator-checkbox-wrapper">
                          <input type="checkbox" className="estimator-item" id="cateringToggle" checked={estimatorState.cateringToggle} onChange={handleCheckboxChange} />
                          <span className="custom-checkbox"></span>
                          <span className="item-name">Premium Gourmet Catering <span className="item-price">₹800 / Plate</span></span>
                      </label>
                      <div className="catering-guests-input" style={{ marginTop: '15px', marginLeft: '30px' }}>
                          <label htmlFor="guest-count" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Estimated Guest Count:</label>
                          <input 
                              type="number" 
                              id="guest-count" 
                              className="form-control" 
                              value={estimatorState.guestCount}
                              onChange={handleGuestCountChange}
                              min="50" 
                              max="2000" 
                              style={{ maxWidth: '150px', padding: '8px 15px', background: 'rgba(7, 13, 30, 0.45)', color: '#fff', border: '1px solid var(--border-color)', borderRadius: '8px' }}
                          />
                      </div>
                  </div>
              </div>

              {/* Right: Receipt Summary */}
              <div className="estimator-receipt-card" data-animate>
                  <div className="receipt-header">
                      <h3>Estimate Summary</h3>
                      <p>Dream Day Events | Custom Quote</p>
                  </div>
                  <div className="receipt-body">
                      <ul className="receipt-items-list" id="receipt-list">
                          {Object.keys(prices).filter(k => k !== 'cateringToggle' && estimatorState[k]).map(key => (
                              <li key={key}>
                                  <span>{labels[key]}</span>
                                  <span>{formatPrice(prices[key])}</span>
                              </li>
                          ))}
                          {estimatorState.cateringToggle && (
                              <li>
                                  <span>{labels.cateringToggle} ({estimatorState.guestCount} guests)</span>
                                  <span>{formatPrice(prices.cateringToggle * estimatorState.guestCount)}</span>
                              </li>
                          )}
                      </ul>
                      <div className="receipt-divider"></div>
                      <div className="receipt-total-row">
                          <span>Grand Estimate</span>
                          <span className="total-price" id="receipt-total">{formatPrice(totalEstimate())}</span>
                      </div>
                  </div>
                  <div className="receipt-footer" style={{ marginTop: '30px' }}>
                      <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', fontSize: '0.85rem' }}>
                          <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px', fontSize: '1.1rem' }}></i>
                          Inquire this Plan on WhatsApp
                      </a>
                      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '15px', fontStyle: 'italic' }}>*Note: This is an estimated baseline quote. Final pricing will be customized by Mr. Ayush Kale after final review.*</p>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
};

export default Packages;
