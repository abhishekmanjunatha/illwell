import { useEffect } from 'react';
import iconWeight from './assets/icon-weight.svg';
import iconDiabetes from './assets/icon-diabetes.svg';
import iconFamily from './assets/icon-family.svg';
import iconSports from './assets/icon-sports.svg';
import iconCheck from './assets/icon-check.svg';
import iconQuote from './assets/icon-quote.svg';
import logoImage from './assets/illwell-logo.png';
import googleLogo from './assets/gm.png';
import practoLogo from './assets/pct.png';
import justdialLogo from './assets/jd.png';
import lybrateLogo from './assets/ll.png';
import './App.css';

function App() {
  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('scroll-animate');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Initialize Practo widgets with enhanced retry mechanism
    const initializePractoWidgets = () => {
      if (window.practoWidgetHelper && typeof window.practoWidgetHelper.init === 'function') {
        window.practoWidgetHelper.init();
        console.log('Practo widgets initialized');
        
        // Force re-scan for widgets after a short delay
        setTimeout(() => {
          if (window.practoWidgetHelper && window.practoWidgetHelper.init) {
            window.practoWidgetHelper.init();
            console.log('Practo widgets re-initialized');
          }
        }, 500);
        
        // Additional initialization for mobile widgets
        setTimeout(() => {
          const mobileWidgets = document.querySelectorAll('.mobile-practo-btn practo\\:abs_widget');
          mobileWidgets.forEach(widget => {
            if (window.practoWidgetHelper && window.practoWidgetHelper.processWidget) {
              window.practoWidgetHelper.processWidget(widget);
            }
          });
        }, 1000);
      } else {
        // Retry after a short delay if Practo script isn't loaded yet
        setTimeout(() => {
          if (window.practoWidgetHelper && typeof window.practoWidgetHelper.init === 'function') {
            window.practoWidgetHelper.init();
            console.log('Practo widgets initialized (retry)');
          }
        }, 1000);
      }
    };

    // Initialize immediately and also after component updates
    initializePractoWidgets();
    
    // Also try to reinitialize when the component updates
    const timer = setTimeout(initializePractoWidgets, 2000);
    
    return () => clearTimeout(timer);
  });

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-animated">
              <img src={logoImage} alt="illwell Logo" className="logo-image" />
              <span className="logo-text">ill<span className="logo-accent">well</span></span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="navbar-practo-widget">
            <button className="nav-cta practo-button">
              <practo:abs_widget widget="730f3d28f57854f8"></practo:abs_widget>
              <span className="button-icon">📅</span>
              <span className="button-text">Book Appointment</span>
            </button>
            <div className="practo-instruction">Doesn't work? Refresh and try</div>
          </div>
          <div className="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <img src={iconCheck} alt="Success" className="badge-icon" />
              Your Health Transformation Starts Here
            </div>
            <h1 className="hero-title">
              Feel Amazing,
              <span className="gradient-text"> Look Amazing</span>
            </h1>
            <p className="hero-subtitle">
              Personalized nutrition plans that fit your lifestyle. Expert guidance for lasting health transformation.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary large" onClick={() => window.open('tel:+919886717192')}>
                Book Consultation
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2000+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-element element-1">
              <span className="element-icon">🥗</span>
              <div className="element-text">
                <strong>Custom Plans</strong>
                <small>Just for you</small>
              </div>
            </div>
            <div className="floating-element element-2">
              <span className="element-icon">⚡</span>
              <div className="element-text">
                <strong>Quick Results</strong>
                <small>In weeks</small>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <div className="services-badge">🎯 Our Expertise</div>
            <h2>Transform Your Health Journey</h2>
            <p>Evidence-based nutrition solutions tailored for every health goal</p>
          </div>
          <div className="services-grid-redesigned">
            <div className="service-card-redesigned">
              <div className="service-icon-redesigned">
                <img src={iconWeight} alt="Weight Management" />
              </div>
              <h3>Weight Management</h3>
              <p>Sustainable weight transformation with personalized meal plans and lifestyle coaching.</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
            <div className="service-card-redesigned">
              <div className="service-icon-redesigned">
                <img src={iconDiabetes} alt="Diabetes Control" />
              </div>
              <h3>Diabetes Control</h3>
              <p>Optimal blood sugar management and prevention through evidence-based nutrition therapy.</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
            <div className="service-card-redesigned">
              <div className="service-icon-redesigned">
                <img src={iconFamily} alt="Family Nutrition" />
              </div>
              <h3>Family Nutrition</h3>
              <p>Comprehensive nutrition plans for every family member, from kids to seniors.</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
            <div className="service-card-redesigned">
              <div className="service-icon-redesigned">
                <img src={iconSports} alt="Sports Nutrition" />
              </div>
              <h3>Sports Nutrition</h3>
              <p>Performance optimization for athletes and fitness enthusiasts at every level.</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Ratings Section */}
      <section className="ratings-section">
        <div className="container">
          <div className="ratings-header">
            <div className="ratings-badge">⭐ Trusted by Thousands</div>
            <h2>What Our Patients Say</h2>
            <p>Our commitment to your health transformation speaks through genuine client reviews</p>
          </div>
          <div className="ratings-grid">
            <div className="rating-card">
              <div className="rating-label-small">Highly Rated</div>
              <div className="platform-logo">
                <img src={googleLogo} alt="Google" className="logo-img" />
              </div>
              <div className="rating-number">4.8/5</div>
              <div className="stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star partial">★</span>
              </div>
              <div className="review-count">150+ reviews</div>
            </div>
            <div className="rating-card">
              <div className="rating-label-small">Top Rated</div>
              <div className="platform-logo">
                <img src={practoLogo} alt="Practo" className="logo-img" />
              </div>
              <div className="rating-number">4.9/5</div>
              <div className="stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
              </div>
              <div className="review-count">200+ reviews</div>
            </div>
            <div className="rating-card">
              <div className="rating-label-small">Trusted</div>
              <div className="platform-logo">
                <img src={justdialLogo} alt="JustDial" className="logo-img" />
              </div>
              <div className="rating-number">4.7/5</div>
              <div className="stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star empty">★</span>
              </div>
              <div className="review-count">80+ reviews</div>
            </div>
            <div className="rating-card">
              <div className="rating-label-small">Verified</div>
              <div className="platform-logo">
                <img src={lybrateLogo} alt="LL" className="logo-img" />
              </div>
              <div className="rating-number">4.8/5</div>
              <div className="stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star partial">★</span>
              </div>
              <div className="review-count">120+ reviews</div>
            </div>
          </div>
          
          <div className="ratings-summary">
            <div className="summary-item">
              <div className="summary-number">4.8</div>
              <div className="summary-label">Average Rating</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">550+</div>
              <div className="summary-label">Total Reviews</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">98%</div>
              <div className="summary-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2>Success Stories</h2>
            <p>Real transformations from real people</p>
          </div>
          <div className="testimonials-container">
            <div className="testimonials-slider">
              <div className="testimonial-card active">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Lost 15kg in 6 months and my diabetes is finally controlled. The personalized approach made all the difference!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">P</div>
                  <div className="author-details">
                    <strong>Priya Sharma</strong>
                    <span>Software Engineer</span>
                  </div>
                  <div className="result-badge">-15kg</div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"The nutrition plan was easy to follow and delicious. I've never felt more energetic and confident!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">R</div>
                  <div className="author-details">
                    <strong>Rajesh Kumar</strong>
                    <span>Business Owner</span>
                  </div>
                  <div className="result-badge">+Energy</div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Amazing support during pregnancy. Both my baby and I stayed healthy with expert guidance!"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">M</div>
                  <div className="author-details">
                    <strong>Meera Patel</strong>
                    <span>Teacher</span>
                  </div>
                  <div className="result-badge">Healthy</div>
                </div>
              </div>
            </div>
            <div className="testimonials-stats">
              <div className="stat-box">
                <div className="stat-number">500+</div>
                <div className="stat-text">Happy Clients</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">95%</div>
                <div className="stat-text">Success Rate</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">12+</div>
                <div className="stat-text">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="transform-section">
        <div className="transform-container">
          <div className="transform-content">
            <div className="transform-visual">
              <div className="floating-element pulse">🌟</div>
              <div className="floating-element float-delay">💚</div>
              <div className="floating-element float-slow">✨</div>
            </div>
            <div className="transform-text">
              <h2>Your Health Transformation Starts Now</h2>
              <p>Join thousands who've discovered the power of personalized nutrition. Your journey to optimal health is just one consultation away.</p>
              <div className="transform-features">
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>Personalized Plans</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📈</span>
                  <span>Proven Results</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🤝</span>
                  <span>Expert Support</span>
                </div>
              </div>
              <div className="transform-actions">
                <button className="btn-primary transform-btn" onClick={() => window.open('tel:+919886717192')}>
                  <span className="btn-shimmer"></span>
                  Book Consultation Now
                </button>
                <div className="transform-guarantee">
                  <span className="guarantee-icon">🛡️</span>
                  <span>100% Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-hero">
            <div className="contact-visual">
              <div className="contact-illustration">
                <div className="illustration-circle primary"></div>
                <div className="illustration-circle secondary"></div>
                <div className="illustration-icon">💬</div>
              </div>
            </div>
            <div className="contact-content">
              <h2>Let's Start Your Journey Together</h2>
              <p>Ready to transform your health? We're here to guide you every step of the way. Connect with us today!</p>
            </div>
          </div>
          <div className="contact-grid">
            <div className="contact-methods">
              <div className="contact-method premium">
                <div className="method-visual">
                  <div className="method-icon">📍</div>
                  <div className="method-glow"></div>
                </div>
                <div className="method-content">
                  <h4>Visit Our Wellness Center</h4>
                  <p>Ground Floor, Vathsalya Speciality Clinic, 565, beside post office<br />
                  3rd Stage 4th Block, Shakthi Ganapathi Nagar<br />
                  Basaveshwar Nagar, Bengaluru, Karnataka 560079</p>
                  <span className="method-action" onClick={() => window.open('https://share.google/2O4U9Ea9EfWkAsq9X', '_blank')} style={{cursor: 'pointer'}}>Get Directions →</span>
                </div>
              </div>
              <div className="contact-method premium">
                <div className="method-visual">
                  <div className="method-icon">📞</div>
                  <div className="method-glow"></div>
                </div>
                <div className="method-content">
                  <h4>Speak with Our Expert</h4>
                  <p>+91-9886717192</p>
                  <span className="method-action" onClick={() => window.open('tel:+919886717192')} style={{cursor: 'pointer'}}>Call Now →</span>
                </div>
              </div>
              <div className="contact-method premium">
                <div className="method-visual">
                  <div className="method-icon">✉️</div>
                  <div className="method-glow"></div>
                </div>
                <div className="method-content">
                  <h4>Send Us a Message</h4>
                  <p>hello@illwell.in</p>
                  <span className="method-action" onClick={() => window.open('mailto:hello@illwell.in', '_blank')} style={{cursor: 'pointer'}}>Email Us →</span>
                </div>
              </div>
            </div>
            <div className="contact-cta-section">
              <div className="cta-card">
                <div className="cta-header">
                  <h3>Book Consultation</h3>
                  <p>Get personalized insights and a custom nutrition roadmap</p>
                </div>
                <div className="cta-benefits">
                  <div className="benefit-item">
                    <span className="benefit-check">✅</span>
                    <span>30-minute consultation</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-check">✅</span>
                    <span>Personalized health insights</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-check">✅</span>
                    <span>Custom nutrition roadmap</span>
                  </div>
                </div>
                <div className="cta-actions">
                  <button className="btn-primary cta-primary" onClick={() => window.open('tel:+919886717192')}>
                    <span className="btn-glow"></span>
                    Book Consultation
                  </button>
                </div>
                <div className="cta-trust">
                  <span className="trust-icon">🏆</span>
                  <span>Trusted by 500+ clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-animated">
                  <img src={logoImage} alt="illwell Logo" className="logo-image" />
                  <span className="logo-text">ill<span className="logo-accent">well</span></span>
                </div>
              </div>
              <p className="footer-tagline">Transforming lives through personalized nutrition and expert guidance since 2013.</p>
              <div className="footer-social">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#testimonials">Success Stories</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#">About Us</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Weight Management</a></li>
                  <li><a href="#">Diabetes Control</a></li>
                  <li><a href="#">Family Nutrition</a></li>
                  <li><a href="#">Sports Nutrition</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact Info</h4>
                <ul>
                  <li>📍 Vathsalya Speciality Clinic, Basaveshwar Nagar</li>
                  <li>📞 +91-9886717192</li>
                  <li>✉️ hello@illwell.in</li>
                  <li>🕒 Mon-Sat: 9AM-6PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; 2025 illwell. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms of Service</a>
              <span>•</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Action Button */}
      <div className="mobile-bottom-actions">
        <button className="mobile-btn mobile-btn-single practo-button">
          <practo:abs_widget widget="730f3d28f57854f8"></practo:abs_widget>
          <span className="button-icon">📞</span>
          Get Appointment
        </button>
        <div className="practo-instruction mobile">Doesn't work? Refresh and try</div>
      </div>
    </div>
  );
}

export default App;
