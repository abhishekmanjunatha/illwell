import { useEffect, useState, useRef } from 'react';
import iconWeight from './assets/icon-weight.svg';
import iconDiabetes from './assets/icon-diabetes.svg';
import iconFamily from './assets/icon-family.svg';
import iconSports from './assets/icon-sports.svg';
import iconCheck from './assets/icon-check.svg';
import iconQuote from './assets/icon-quote.svg';
import logoImage from './assets/illwell-logo.png';
import doctorImage from './assets/ksk1.jpeg';
import googleLogo from './assets/gm.png';
import practoLogo from './assets/pct.png';
import justdialLogo from './assets/jd.png';
import lybrateLogo from './assets/ll.png';
import './App.css';

function App() {
  // Universal Visitor Counter State - Increments Every Page Load
  const [visitorCount, setVisitorCount] = useState(0);
  const hasIncremented = useRef(false);

  // Universal visitor counter - EVERY page load increments (but only once)
  useEffect(() => {
    // Prevent double execution in React StrictMode
    if (hasIncremented.current) return;
    hasIncremented.current = true;
    
    const countKey = 'illwell_universal_visitors';
    
    // Get current count and increment
    let currentCount = parseInt(localStorage.getItem(countKey)) || 0;
    currentCount += 1;
    
    // Save the new count
    localStorage.setItem(countKey, currentCount.toString());
    setVisitorCount(currentCount);
    
    console.log('🎯 Universal visitor count incremented to:', currentCount);
    console.log('� Every page load counts as a visit!');
    
    // Optional: Add automatic growth simulation (every 10-15 seconds)
    const growthInterval = setInterval(() => {
      if (Math.random() < 0.2) { // 20% chance every 15 seconds
        const newCount = parseInt(localStorage.getItem(countKey)) + 1;
        localStorage.setItem(countKey, newCount.toString());
        setVisitorCount(newCount);
        console.log('� Auto-growth: Count updated to', newCount);
      }
    }, 15000); // 15 seconds
    
    return () => clearInterval(growthInterval);
  }, []);

  // SEO Meta Management
  useEffect(() => {
    // Update page title dynamically
    document.title = "Dr. Keerthi Shree Kirisave - Best Clinical Nutritionist & Dietitian in Bengaluru | IllWell Nutrition";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dr. Keerthi Shree Kirisave - PhD Clinical Nutritionist & Dietitian in Bengaluru. 16+ years experience. Weight management, diabetes, PCOS, thyroid nutrition specialist. Featured on TV9, PublicTV. Book online appointment.');
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Dr. Keerthi Shree Kirisave - Best Clinical Nutritionist & Dietitian in Bengaluru | IllWell');
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Dr. Keerthi Shree Kirisave - Clinical Nutritionist & Dietitian Bengaluru');
    }

    // Add FAQ structured data
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Dr. Keerthi Shree Kirisave?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Keerthi Shree Kirisave is a highly qualified Clinical Nutritionist and Dietitian with a PhD in Yoga and Diabetes, M.Sc. in Food & Nutrition, and B.Sc. in Clinical Nutrition & Dietetics. She has 16+ years of experience and is a lifetime member of the Indian Dietetic Association."
          }
        },
        {
          "@type": "Question", 
          "name": "What services does IllWell Nutrition provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IllWell Nutrition provides comprehensive nutrition services including weight management, diabetes nutrition care, PCOS diet planning, thyroid nutrition therapy, sports nutrition, pediatric nutrition, pregnancy nutrition, kidney diet counseling, and specialized therapeutic diets for various health conditions."
          }
        },
        {
          "@type": "Question",
          "name": "How can I book a consultation with Dr. Keerthi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a consultation with Dr. Keerthi Shree Kirisave by using our online booking system or visiting our clinic at Ground Floor, Vathsalya Speciality Clinic, 565, beside post office, 3rd Stage 4th Block, Shakthi Ganapathi Nagar, Basaveshwar Nagar, Bengaluru - 560079."
          }
        },
        {
          "@type": "Question",
          "name": "Where is IllWell Nutrition located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IllWell Nutrition is located in Basaveshwar Nagar, Bengaluru, Karnataka. Our clinic address is: Ground Floor, Vathsalya Speciality Clinic, 565, beside post office, 3rd Stage 4th Block, Shakthi Ganapathi Nagar, Basaveshwar Nagar, Bengaluru - 560079."
          }
        }
      ]
    };

    // Add FAQ structured data to page
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(faqScript);

    // Cleanup function
    return () => {
      // Remove the FAQ script when component unmounts
      if (document.head.contains(faqScript)) {
        document.head.removeChild(faqScript);
      }
    };
  }, []);

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

  // Dynamic font sizing for testimonial author names and details
  useEffect(() => {
    const adjustFontSize = () => {
      const authorNames = document.querySelectorAll('.author-details strong');
      const authorDetails = document.querySelectorAll('.author-details span');
      
      authorNames.forEach(element => {
        const container = element.closest('.author-details');
        const containerWidth = container.offsetWidth;
        const textLength = element.textContent.length;
        
        // Calculate ideal font size based on container width and text length
        let fontSize = Math.min(14, Math.max(10, (containerWidth / textLength) * 0.8));
        
        // Fine-tune based on text length
        if (textLength > 20) fontSize *= 0.9;
        if (textLength > 25) fontSize *= 0.85;
        
        element.style.fontSize = `${Math.round(fontSize)}px`;
      });
      
      authorDetails.forEach(element => {
        const container = element.closest('.author-details');
        const containerWidth = container.offsetWidth;
        const textLength = element.textContent.length;
        
        // Calculate ideal font size for treatment details
        let fontSize = Math.min(12, Math.max(9, (containerWidth / textLength) * 0.7));
        
        // Fine-tune based on text length
        if (textLength > 30) fontSize *= 0.9;
        if (textLength > 35) fontSize *= 0.8;
        
        element.style.fontSize = `${Math.round(fontSize)}px`;
      });
    };

    // Initial adjustment with delay to ensure DOM is ready
    const timer = setTimeout(adjustFontSize, 200);
    
    // Adjust on window resize
    window.addEventListener('resize', adjustFontSize);
    
    // Readjust when testimonials load (in case of dynamic content)
    const testimonialObserver = new MutationObserver(adjustFontSize);
    const testimonialContainer = document.querySelector('.testimonials-slider');
    if (testimonialContainer) {
      testimonialObserver.observe(testimonialContainer, { childList: true, subtree: true });
    }
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', adjustFontSize);
      testimonialObserver.disconnect();
    };
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
            <a href="#doctor">About Doctor</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="navbar-practo-widget">
            <button className="nav-cta practo-button">
              <practo:abs_widget widget="730f3d28f57854f8"></practo:abs_widget>
              <span className="button-icon">📅</span>
              <span className="button-text">Book Appointment</span>
            </button>
            <div className="practo-instruction">Didn't worked? Refresh and try again</div>
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
              Your Health Transformation Starts Here with Dr. Keerthi
            </div>
            <h1 className="hero-title">
              <span itemProp="name">Dr. Keerthi Shree Kirisave</span> - Expert Clinical Nutritionist 
              <span className="gradient-text"> in Bengaluru</span>
            </h1>
            <p className="hero-subtitle" itemProp="description">
              PhD Clinical Nutritionist with 16+ years experience. Personalized nutrition plans for weight management, diabetes, PCOS, thyroid care. Transform your health with evidence-based dietary solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary large" onClick={() => {
                // For mobile devices, use the phone dialer
                if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                  window.location.href = 'tel:+919886717192';
                } else {
                  window.open('tel:+919886717192', '_self');
                }
              }}>
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
          
          <div className="services-container">
            <div className="services-track">
              {/* First Set of Services */}
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Food Allergies" />
                </div>
                <h3>Diet for Food Allergies</h3>
                <p>Specialized nutrition plans for managing food allergies and sensitivities safely.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="Detox Diet" />
                </div>
                <h3>Detox Diet Counseling</h3>
                <p>Comprehensive detoxification programs to cleanse and rejuvenate your body.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconFamily} alt="Gut Health" />
                </div>
                <h3>Gluten, Lactose & IBS Diet</h3>
                <p>Expert guidance for digestive health and gut-related dietary requirements.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconSports} alt="Liver Problems" />
                </div>
                <h3>Diet for Liver Problems</h3>
                <p>Therapeutic nutrition for optimal liver function and hepatic wellness.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Kidney Problems" />
                </div>
                <h3>Renal Diet Counseling</h3>
                <p>Specialized kidney-friendly nutrition for chronic kidney disease management.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="High Cholesterol" />
                </div>
                <h3>High Cholesterol Diet</h3>
                <p>Heart-healthy nutrition for cholesterol, triglycerides, and hyperlipidemia control.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconFamily} alt="Heart Health" />
                </div>
                <h3>Healthy Heart Diet</h3>
                <p>Cardiac-specific nutrition plans for cardiovascular disease prevention and management.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconSports} alt="Hypertension" />
                </div>
                <h3>Diet for Hypertension</h3>
                <p>Blood pressure management through targeted nutritional interventions.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Cancer Care" />
                </div>
                <h3>Cancer Care Nutrition</h3>
                <p>Supportive nutrition therapy for cancer patients and survivors.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="Arthritis" />
                </div>
                <h3>Arthritis Treatment Diet</h3>
                <p>Anti-inflammatory nutrition for osteoarthritis and joint health management.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconFamily} alt="Diabetes" />
                </div>
                <h3>Diabetes Management</h3>
                <p>Comprehensive diabetic care through evidence-based nutritional strategies.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconSports} alt="PCOD PCOS" />
                </div>
                <h3>PCOD/PCOS Counseling</h3>
                <p>Hormonal balance through specialized nutrition for reproductive health.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Weight Management" />
                </div>
                <h3>Weight Management</h3>
                <p>Sustainable weight transformation and obesity treatment programs.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="Pediatric Nutrition" />
                </div>
                <h3>Pediatric Nutrition</h3>
                <p>Specialized nutrition plans for healthy growth and development in children.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconFamily} alt="Thyroid Diet" />
                </div>
                <h3>Thyroid Diet Counseling</h3>
                <p>Thyroid-specific nutrition for hypothyroid and hyperthyroid conditions.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconSports} alt="Pregnancy Nutrition" />
                </div>
                <h3>Pregnancy Nutrition</h3>
                <p>Pre and post delivery care with comprehensive maternal nutrition support.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Diet Counselling" />
                </div>
                <h3>Diet Therapy</h3>
                <p>Comprehensive nutritional education and personalized diet counseling.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="Behavioral Nutrition" />
                </div>
                <h3>Behavioral Nutrition</h3>
                <p>Psychology-based approach to sustainable eating habits and lifestyle changes.</p>
              </div>

              {/* Duplicate Set for Seamless Scrolling */}
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Food Allergies" />
                </div>
                <h3>Diet for Food Allergies</h3>
                <p>Specialized nutrition plans for managing food allergies and sensitivities safely.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="Detox Diet" />
                </div>
                <h3>Detox Diet Counseling</h3>
                <p>Comprehensive detoxification programs to cleanse and rejuvenate your body.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconFamily} alt="Gut Health" />
                </div>
                <h3>Gluten, Lactose & IBS Diet</h3>
                <p>Expert guidance for digestive health and gut-related dietary requirements.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconSports} alt="Liver Problems" />
                </div>
                <h3>Diet for Liver Problems</h3>
                <p>Therapeutic nutrition for optimal liver function and hepatic wellness.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Kidney Problems" />
                </div>
                <h3>Renal Diet Counseling</h3>
                <p>Specialized kidney-friendly nutrition for chronic kidney disease management.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="High Cholesterol" />
                </div>
                <h3>High Cholesterol Diet</h3>
                <p>Heart-healthy nutrition for cholesterol, triglycerides, and hyperlipidemia control.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconFamily} alt="Heart Health" />
                </div>
                <h3>Healthy Heart Diet</h3>
                <p>Cardiac-specific nutrition plans for cardiovascular disease prevention and management.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconSports} alt="Hypertension" />
                </div>
                <h3>Diet for Hypertension</h3>
                <p>Blood pressure management through targeted nutritional interventions.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Cancer Care" />
                </div>
                <h3>Cancer Care Nutrition</h3>
                <p>Supportive nutrition therapy for cancer patients and survivors.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="Arthritis" />
                </div>
                <h3>Arthritis Treatment Diet</h3>
                <p>Anti-inflammatory nutrition for osteoarthritis and joint health management.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconFamily} alt="Diabetes" />
                </div>
                <h3>Diabetes Management</h3>
                <p>Comprehensive diabetic care through evidence-based nutritional strategies.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconSports} alt="PCOD PCOS" />
                </div>
                <h3>PCOD/PCOS Counseling</h3>
                <p>Hormonal balance through specialized nutrition for reproductive health.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Weight Management" />
                </div>
                <h3>Weight Management</h3>
                <p>Sustainable weight transformation and obesity treatment programs.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="Pediatric Nutrition" />
                </div>
                <h3>Pediatric Nutrition</h3>
                <p>Specialized nutrition plans for healthy growth and development in children.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconFamily} alt="Thyroid Diet" />
                </div>
                <h3>Thyroid Diet Counseling</h3>
                <p>Thyroid-specific nutrition for hypothyroid and hyperthyroid conditions.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconSports} alt="Pregnancy Nutrition" />
                </div>
                <h3>Pregnancy Nutrition</h3>
                <p>Pre and post delivery care with comprehensive maternal nutrition support.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconWeight} alt="Diet Counselling" />
                </div>
                <h3>Diet Therapy</h3>
                <p>Comprehensive nutritional education and personalized diet counseling.</p>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <img src={iconDiabetes} alt="Behavioral Nutrition" />
                </div>
                <h3>Behavioral Nutrition</h3>
                <p>Psychology-based approach to sustainable eating habits and lifestyle changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="doctor-profile-section" id="doctor" itemScope itemType="https://schema.org/Physician">
        <div className="container">
          <div className="doctor-profile-header">
            <div className="doctor-profile-badge">👩‍⚕️ Meet Your Expert</div>
            <h2>Meet Your Nutrition Expert</h2>
            <p>Science-backed expertise with a personal touch for your wellness journey</p>
          </div>
          
          <div className="doctor-profile-content">
            <div className="doctor-profile-main">
              <div className="doctor-info-card">
                <div className="doctor-avatar-section">
                  <div className="doctor-avatar">
                    <div className="avatar-placeholder">
                      <img src={doctorImage} alt="Dr. Keerthi Shree Kirisave - Clinical Nutritionist" className="doctor-photo" itemProp="image" />
                    </div>
                    <div className="doctor-status">
                      <span className="status-indicator"></span>
                      Available
                    </div>
                  </div>
                </div>
                
                <div className="doctor-details">
                  <div className="doctor-name-credentials">
                    <h3 className="doctor-name" itemProp="name">Dr. Keerthi Shree Kirisave</h3>
                    <div className="doctor-credentials" itemProp="hasCredential">
                      <span className="credential">B.Sc. Clinical Nutrition & Dietetics</span>
                      <span className="credential">M.Sc. Food & Nutrition</span>
                      <span className="credential">PhD in Yoga and Diabetes</span>
                    </div>
                    <div className="doctor-specialization">
                      <span className="specialization" itemProp="medicalSpecialty">Dietitian/Nutritionist</span>
                      <span className="specialization" itemProp="medicalSpecialty">Clinical Nutritionist</span>
                    </div>
                    <div className="doctor-experience">
                      <span className="experience-badge" itemProp="yearsOfExperience">16+ Years of Experience</span>
                    </div>
                  </div>
                  
                  <div className="doctor-description">
                    <p itemProp="description">Dr. Keerthi Shree Kirisave is a renowned clinical nutritionist and dietitian in Basaveshwar Nagar, Bengaluru, specializing in therapeutic nutrition for a wide spectrum of health needs. She is known for her science-backed approach, friendly counseling, and personal commitment to each patient's wellness journey.</p>
                  </div>
                </div>
              </div>
              
              <div className="doctor-expertise-grid">
                <div className="expertise-column">
                  <h4>Core Expertise</h4>
                  <ul className="expertise-list">
                    <li>16+ years of evidence-based diet planning</li>
                    <li>Diabetes care & PCOD/PCOS specialist</li>
                    <li>Weight management & digestive health</li>
                    <li>Cardiac wellness & lifestyle disorders</li>
                    <li>Pediatric & family nutrition</li>
                  </ul>
                </div>
                
                <div className="expertise-column">
                  <h4>Professional Experience</h4>
                  <ul className="expertise-list">
                    <li>Dietician at K C General Hospital</li>
                    <li>Ex-Dietician at Sagar Hospitals (Jayanagar)</li>
                    <li>Ex-Dietician at M S Ramaiah Hospitals</li>
                    <li>Food consultant & recipe developer</li>
                    <li>Meal and weaning food planner</li>
                  </ul>
                </div>
                
                <div className="expertise-column">
                  <h4>Specialized Treatments</h4>
                  <ul className="expertise-list">
                    <li>Therapeutic diets for chronic conditions</li>
                    <li>Cancer care & HIV/AIDS nutrition</li>
                    <li>Pregnancy & reproductive health</li>
                    <li>IBS, food allergies & intolerances</li>
                    <li>Anti-inflammatory nutrition</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="doctor-profile-sidebar">
              <div className="doctor-approach-card">
                <h4>Treatment Philosophy</h4>
                <p>Dr. Keerthi strongly believes in personalized, practical nutrition strategies that fit each person's needs, lifestyle, and preferences. Her goal is to empower you with simple, sustainable dietary changes for lasting transformation.</p>
              </div>
              
              <div className="doctor-education-card">
                <h4>Education & Qualifications</h4>
                <div className="education-list">
                  <div className="education-item">
                    <span className="education-degree">B.Sc. Clinical Nutrition & Dietetics</span>
                    <span className="education-school">Smt. V.H.D Central Institute of Home Science, 2007</span>
                  </div>
                  <div className="education-item">
                    <span className="education-degree">M.Sc. Food & Nutrition</span>
                    <span className="education-school">Smt. V.H.D Central Institute of Home Science, 2009</span>
                  </div>
                  <div className="education-item">
                    <span className="education-degree">PhD in Yoga and Diabetes</span>
                    <span className="education-school">Yoga University of the Americas, Florida, USA, 2019</span>
                  </div>
                </div>
              </div>
              
              <div className="doctor-recognition-card">
                <h4>Recognition & Memberships</h4>
                <ul className="recognition-list">
                  <li>Lifetime Member, Indian Dietetic Association</li>
                  <li>Recognized speaker in clinical nutrition</li>
                  <li>Featured nutrition expert on PublicTV, TV9, Suvarna News, BTV, Power TV</li>
                  <li>120+ 5-star verified reviews</li>
                  <li>97% patient satisfaction rate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor CTA Section */}
      <section className="doctor-cta-section">
        <div className="container">
          <div className="doctor-cta-card doctor-cta-wide">
            <div className="cta-content">
              <h4>Ready for a healthier you?</h4>
              <p>Book your personalized diet consultation with Dr. Keerthi today!</p>
              <button className="btn-primary doctor-cta-btn" onClick={() => {
                if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                  window.location.href = 'tel:+919886717192';
                } else {
                  window.open('tel:+919886717192', '_self');
                }
              }}>
                <span className="btn-glow"></span>
                Book Consultation
              </button>
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
              <div className="summary-number">1000+</div>
              <div className="summary-label">Total Reviews</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">98%</div>
              <div className="summary-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Patient Reviews Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2>Verified Patient Reviews</h2>
            <p>Real experiences from authenticated patients - all verified reviews</p>
          </div>
          <div className="testimonials-container">
            <div className="testimonials-slider">
              {/* First Set of Reviews */}
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Doctor helped me to change the diet plan without any extra medication.. in the beginning I observed only slight gain in weight.. may be half kilogram..where I was not that happy.. but doctor explained me regarding weight gain proportion.. and also explained how to retain once gained weight for long duration.. now I am increasing my weight.. even though I skip diet some day .. I am retaining my weight.. very helpful… I am more satisfied because I didn't have any protein powder or tablets..doctor is helping me to gain with the regular intake of my food only..thank you"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">N</div>
                  <div className="author-details">
                    <strong>Noosha</strong>
                    <span>Underweight Treatment<br />3 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"I felt very much comfortable while talking with them..She is friendly in nature and good behaviour while talking..I should suggest everyone to consult with her for diet .Really I feel good while taking consultation with her. As she explained and give consultation in best way with no attitude and in a.detailed manner and also a written priscription given by her. Nice to talk with her. Thank you."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">P</div>
                  <div className="author-details">
                    <strong>Pranjal Goyal</strong>
                    <span>Weight Loss Diet<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Language is also wonderful, You can consult your diet plan and for good life. We all know nothing is free. If something is free then might be something behind! Finally it's my through process how I can feel there voice, an I really got the proper treatment."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">I</div>
                  <div className="author-details">
                    <strong>Ishi B</strong>
                    <span>Detox Diet<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Thanks a lot Dr. Keerti. Your guidance helped me achieve fitness and weight management. Her diet plan is effective, most importantly her patience deserves applaud. A client's commitment and Dr Keerti's diet plan combined together could do wonders for everyone."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">U</div>
                  <div className="author-details">
                    <strong>Patient</strong>
                    <span>Diet Therapy<br />3 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Dr. Keerti guided me from the very beginning at each step and I could reach out to her when ever I wanted as this programme was very new to me and felt slightly difficult . I would like to Thank you very much for constantly guiding me in this journey."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">A</div>
                  <div className="author-details">
                    <strong>Arpitha</strong>
                    <span>Weight Loss<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"I am visiting from feb I had pcos and thyroid ,Dr keerthi is very friendly and helpful . I especially loved how dr took her time to explain my conditions. Doctor has prescribed the diet plan and activity, I have started the diet and exercise and results were incredible… I feel active and energetic . I would really like to thanks to keerthi as helped me in solving my health issues and stress as well."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">S</div>
                  <div className="author-details">
                    <strong>Savitha</strong>
                    <span>PCOS & Thyroid<br />2 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Dr. Keerthi was quite detailed in explaining the various steps required for me to reduce my weight. She also took me through the diet plan which she recommended based on my eating preferences. She had asked me to followup with her after 10 days, to review the progress and take the necessary steps forward."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">S</div>
                  <div className="author-details">
                    <strong>Subhadeep Mondal</strong>
                    <span>Weight Loss & Diet<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"All information required was communicated and clarified by doctor. Request to share the diet to be followed for dinner. We missed discussing this point."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">N</div>
                  <div className="author-details">
                    <strong>Neena Thekkekatte</strong>
                    <span>Diet Counseling<br />2 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Dr. Calls and finds the problem and is very interactive n informative. Tq dr for ur advise. Waiting fr Amrith noni."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">R</div>
                  <div className="author-details">
                    <strong>Ravi A</strong>
                    <span>Diet Therapy<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Result oriented and friendly approach of the doctor, worth d money we spend. Undoubtedly helpful👍"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">P</div>
                  <div className="author-details">
                    <strong>Priyanka</strong>
                    <span>Weight Loss<br />3 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"I have consulted for cholesterol diet plan , She is excellent in explaining the issue and provides complete details of the treatment."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">N</div>
                  <div className="author-details">
                    <strong>Niteen</strong>
                    <span>Cholesterol Diet<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"She is of friendly nature . Satisfied with doctors treatment and good explanation by doctor.thank you"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">M</div>
                  <div className="author-details">
                    <strong>Patient</strong>
                    <span>Weight Loss Diet<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"The doctor prescribed me relevant blood tests and suggested me a good diet plan based on the reports. I am already seeing the results while monitoring my weight at home."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">N</div>
                  <div className="author-details">
                    <strong>Nirupama Chatterjee</strong>
                    <span>Weight Loss<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Dr Keerthi patiently explains the diet plan corresponding to existing conditions and suggests easily adaptable changes."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">S</div>
                  <div className="author-details">
                    <strong>Shashank Ranebennur</strong>
                    <span>Diet Counseling<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Friendlier, practical in explaining at minute level, provides structured diet plan with clear understanding"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">Y</div>
                  <div className="author-details">
                    <strong>Yogesh N</strong>
                    <span>Kidney Diet<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"She is really good she actually understand what i can get as my diet rather than giving me a full list of diet chart"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">A</div>
                  <div className="author-details">
                    <strong>Amit Kumar</strong>
                    <span>Diet Counseling<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Explained in detail about condition , diet, its effect on body. Everything was explained on phone call and prescription sent on practo chat. I will try and follow and will see the results and specially how body feels."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">V</div>
                  <div className="author-details">
                    <strong>Vivek Negi</strong>
                    <span>Weight Loss & Cholesterol<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Very friendly approach. She is really good. She understand my problem and explained clearly with reasons."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">A</div>
                  <div className="author-details">
                    <strong>Arunkumar</strong>
                    <span>General Consultation<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"I appreciate the information given by the doctor and it helped me to understand my issue and friendly behaviour"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">C</div>
                  <div className="author-details">
                    <strong>Chaithra</strong>
                    <span>Weight Loss Diet<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"The doctor was courteous enough to hear my problems and was giving an eye to the ent treatment which i had availed. Some simple and effective suggestions have been given. Waiting for the positive results."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">N</div>
                  <div className="author-details">
                    <strong>Naren</strong>
                    <span>Diet Therapy<br />3 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              {/* Duplicate Set for Seamless Scrolling */}
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Doctor helped me to change the diet plan without any extra medication.. in the beginning I observed only slight gain in weight.. may be half kilogram..where I was not that happy.. but doctor explained me regarding weight gain proportion.. and also explained how to retain once gained weight for long duration.. now I am increasing my weight.. even though I skip diet some day .. I am retaining my weight.. very helpful… I am more satisfied because I didn't have any protein powder or tablets..doctor is helping me to gain with the regular intake of my food only..thank you"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">N</div>
                  <div className="author-details">
                    <strong>Noosha</strong>
                    <span>Underweight Treatment<br />3 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"I felt very much comfortable while talking with them..She is friendly in nature and good behaviour while talking..I should suggest everyone to consult with her for diet .Really I feel good while taking consultation with her. As she explained and give consultation in best way with no attitude and in a.detailed manner and also a written priscription given by her. Nice to talk with her. Thank you."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">P</div>
                  <div className="author-details">
                    <strong>Pranjal Goyal</strong>
                    <span>Weight Loss Diet<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Language is also wonderful, You can consult your diet plan and for good life. We all know nothing is free. If something is free then might be something behind! Finally it's my through process how I can feel there voice, an I really got the proper treatment."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">I</div>
                  <div className="author-details">
                    <strong>Ishi B</strong>
                    <span>Detox Diet<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Thanks a lot Dr. Keerti. Your guidance helped me achieve fitness and weight management. Her diet plan is effective, most importantly her patience deserves applaud. A client's commitment and Dr Keerti's diet plan combined together could do wonders for everyone."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">U</div>
                  <div className="author-details">
                    <strong>Patient</strong>
                    <span>Diet Therapy<br />3 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src={iconQuote} alt="Quote" className="quote-icon-svg" />
                </div>
                <p>"Dr. Keerti guided me from the very beginning at each step and I could reach out to her when ever I wanted as this programme was very new to me and felt slightly difficult . I would like to Thank you very much for constantly guiding me in this journey."</p>
                <div className="testimonial-author">
                  <div className="author-avatar">A</div>
                  <div className="author-details">
                    <strong>Arpitha</strong>
                    <span>Weight Loss<br />4 years ago</span>
                  </div>
                  <div className="result-badge">✓ Verified</div>
                </div>
              </div>
            </div>
            <div className="testimonials-stats">
              <div className="stat-box">
                <div className="stat-number">100+</div>
                <div className="stat-text">Verified Reviews</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div className="stat-text">Authentic Feedback</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">12+</div>
                <div className="stat-text">Years of Reviews</div>
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
                <button className="btn-primary transform-btn" onClick={() => {
                  // For mobile devices, use the phone dialer
                  if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    window.location.href = 'tel:+919886717192';
                  } else {
                    window.open('tel:+919886717192', '_self');
                  }
                }}>
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
                  <p>Professional consultation available</p>
                  <span className="method-action" onClick={() => {
                    // For mobile devices, use the phone dialer
                    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                      window.location.href = 'tel:+919886717192';
                    } else {
                      window.open('tel:+919886717192', '_self');
                    }
                  }} style={{cursor: 'pointer'}}>Call Now →</span>
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
                  <button className="btn-primary cta-primary" onClick={() => {
                    // For mobile devices, use the phone dialer
                    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                      window.location.href = 'tel:+919886717192';
                    } else {
                      window.open('tel:+919886717192', '_self');
                    }
                  }}>
                    <span className="btn-glow"></span>
                    Book Consultation
                  </button>
                </div>
                <div className="cta-trust">
                  <span className="trust-icon">🏆</span>
                  <span>Trusted by 5000+ patients</span>
                </div>
              </div>
              
              {/* WhatsApp Contact Method - placed below Book Consultation */}
              <div className="contact-method premium whatsapp-method">
                <div className="method-visual">
                  <div className="method-icon whatsapp-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.90-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="method-glow whatsapp-glow"></div>
                </div>
                <div className="method-content">
                  <h4>Connect on WhatsApp</h4>
                  <p>Quick & Direct Chat</p>
                  <span className="method-action" onClick={() => {
                    const message = encodeURIComponent("Hello Dr. Keerthi, I need your help on setting up my diet and fitness goals. I found you through your website.");
                    window.open(`https://wa.me/919886717192?text=${message}`, '_blank');
                  }} style={{cursor: 'pointer'}}>Chat Now →</span>
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
                <a href="https://facebook.com/illwellnutrition" target="_blank" rel="noopener noreferrer" className="social-link">📘</a>
                <a href="https://instagram.com/illwellnutrition" target="_blank" rel="noopener noreferrer" className="social-link">📷</a>
                <a href="https://twitter.com/illwellnutrition" target="_blank" rel="noopener noreferrer" className="social-link">🐦</a>
                <a href="https://linkedin.com/company/illwellnutrition" target="_blank" rel="noopener noreferrer" className="social-link">💼</a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#doctor">About Doctor</a></li>
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
            <div className="footer-stats">
              <div className="visitor-counter">
                <span className="visitor-icon">👥</span>
                <span className="visitor-text">Visitors: </span>
                <span className="visitor-count">{visitorCount.toLocaleString()}</span>
                <span className="visitor-pulse">•</span>
              </div>
            </div>
            <div className="footer-copyright">
              <p>&copy; 2025 illwell. All rights reserved.</p>
            </div>
            <div className="footer-developer">
              <p>Developed by <a href="https://www.linkedin.com/in/abhishekgm/" target="_blank" rel="noopener noreferrer" className="developer-link">Abhishek Manjunath</a></p>
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
        <button className="mobile-btn mobile-btn-single practo-button" onClick={() => {
          // For mobile devices, use the phone dialer
          if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = 'tel:+919886717192';
          } else {
            window.open('tel:+919886717192', '_self');
          }
        }}>
          <practo:abs_widget widget="730f3d28f57854f8"></practo:abs_widget>
          <span className="button-icon">📞</span>
          Get Appointment
        </button>
        <div className="practo-instruction mobile">Call directly to book appointment</div>
      </div>
    </div>
  );
}

export default App;
