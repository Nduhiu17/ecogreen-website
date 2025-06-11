import React, { useState, useEffect, useRef } from 'react';
import cabrosImg from './assets/work-in-progress-cabros.jpg';
import cabrosImg1 from './assets/cabros1.jpeg';
import drainageImg from './assets/drainage-construction-work.jpg';
import drainageImg1 from './assets/drainage1.jpeg';
import roadImg1 from './assets/road.jpeg';
import roadImg from './assets/road1.jpg';
import whatsappIcon from './assets/whatsapp.svg';
import landscaping1 from './assets/landscaping1.png'
import landscaping from  './assets/landscaping.png'
import cabros1 from './assets/cabros1.png'
import cabros from './assets/cabros.png'
import drain1 from './assets/drain1.png'
import drain from './assets/drain.png'
import kerbs1 from './assets/kerbs1.png'
import kerbs from './assets/kerbs.png'

// Visually Appealing About Us Section Component
function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-emerald-700 sm:text-4xl mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Ecogreen Landscapers & Contractors, where we believe in transforming outdoor spaces into havens of beauty and functionality. Founded on the principles of sustainability and quality craftsmanship, we have been serving the Nairobi community and beyond with dedication and expertise.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our journey began with a simple vision: to create landscapes that not only enhance the aesthetic appeal of properties but also contribute to a greener environment. Over the years, we have grown into a comprehensive landscaping and construction service provider, offering everything from lush garden designs to robust infrastructure solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Ecogreen, we are more than just a company; we are a team of passionate individuals committed to excellence and environmental stewardship. We work closely with our clients to understand their needs and deliver bespoke solutions that exceed their expectations.
            </p>
            <div className="mt-8">
              <a href="#contact" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
                Download Our Company Profile
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/800x600/228B22/FFFFFF?text=Our+Team+or+Projects"
                alt="Ecogreen Team or Projects"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 to-green-500/70"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xl font-bold">
                Creating Sustainable Spaces
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main App Component
function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // New state for scroll shadow

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Add or remove shadow based on scroll position
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = (elementOffset) => {
    const triggerPoint = window.innerHeight * 0.8; // Trigger when 80% of element is in view
    // Ensure elementOffset is not null or undefined
    if (elementOffset === null || typeof elementOffset === 'undefined') {
      return 'opacity-0 translate-y-10'; // Default to hidden if offset can't be determined
    }
    return scrollY > elementOffset - triggerPoint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter antialiased">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${
          hasScrolled ? 'shadow-lg py-3' : 'shadow-md py-4' // Dynamic shadow and padding
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img src="https://placehold.co/40x40/228B22/FFFFFF?text=Logo" alt="Ecogreen Logo" className="h-10 w-10 rounded-full shadow-md" />
            <span className="text-xl font-bold text-emerald-700 text-center">Ecogreen</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium">Home</a>
            <a href="#services" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium">Projects</a>
            <a href="#testimonials" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium">Testimonials</a>
            <a href="#project-generator" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium">Get Ideas</a>
            <a
              href="https://wa.me/254796515157"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              title="Chat with us on WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay with Slide-in/Slide-out */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium py-2" onClick={toggleMobileMenu}>Home</a>
            <a href="#services" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium py-2" onClick={toggleMobileMenu}>Services</a>
            <a href="#projects" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium py-2" onClick={toggleMobileMenu}>Projects</a>
            <a href="#testimonials" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium py-2" onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#project-generator" className="text-gray-600 hover:text-emerald-700 transition duration-200 font-medium py-2" onClick={toggleMobileMenu}>Get Ideas</a>
            <a
              href="https://wa.me/2547967515157"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              title="Chat with us on WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-16 w-16" /> {/* Adjusted size for mobile menu */}
            </a>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section (Adjusted padding-top to account for fixed navbar) */}
      <header className="relative h-screen flex items-center justify-center text-center bg-cover bg-center pt-16 md:pt-24" // Added padding-top
        style={{ backgroundImage: `url(https://placehold.co/1920x1080/228B22/FFFFFF?text=Ecogreen+Landscapers&Contractors)` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/80 to-green-600/70"></div> {/* Green gradient */}
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight animate-fade-in-down drop-shadow-lg">
            Ecogreen: Building Dreams, Nurturing Nature
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-emerald-100 font-light animate-fade-in-up delay-200 drop-shadow"> {/* Emerald text */}
            Your Trusted Partner in Landscaping, Construction & Drainage Solutions.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-emerald-700 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition duration-300 transform hover:scale-105 active:scale-95 animate-bounce-slow">
            <a
                  href="https://wa.me/254796515157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                  title="Chat with us on WhatsApp"
                >
                    Get a Free Quote
                </a>
          </button>
        </div>
      </header>

      {/* About Us Section */}
      <AboutUs />

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white shadow-inner">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 mb-12 animate-fade-in-up"> {/* Emerald heading */}
            Our Expert Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Landscaping */}
            <ServiceCard
              title="Professional Landscaping"
              description="Creating beautiful and sustainable outdoor environments tailored to your vision and budget."
              images={
                [landscaping,landscaping1]
              }
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            {/* Cabros */}
            <ServiceCard
              title="Cabro Paving"
              description="Transform your outdoor spaces with durable and aesthetically pleasing cabro paving. Perfect for driveways, pathways, and patios."
              images={[
                cabrosImg1,
                cabrosImg,
                cabros1,
                cabros
              ]}
              // Using a ref to get offsetTop more reliably
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            {/* Drainage */}
            <ServiceCard
              title="Advanced Drainage Solutions"
              description="Effective drainage systems to protect your property from water damage and ensure proper water management."
              images={[
                drainageImg,
                drainageImg1,
                drain1 ,
                drain
              ]}
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            {/* Roads */}
            <ServiceCard
              title="Road Construction"
              description="Building robust and smooth roads, from design to execution, ensuring longevity and safety."
              images={[
                roadImg1,
                roadImg
              ]}
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            {/* Cartarats */}
            <ServiceCard
              title="Cartarats & Kerbs"
              description="Precision-engineered cartarats and kerbs for effective boundary definition and structural integrity."
              images={[
                kerbs1,
                kerbs
              ]}
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 mb-12 animate-fade-in-up"> {/* Emerald heading */}
            Our Past Successful Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Residential Garden Oasis"
              image="https://placehold.co/800x600/86EFAC/FFFFFF?text=Project+1:+Garden+Oasis"
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            <ProjectCard
              title="Commercial Road Network"
              image="https://placehold.co/800x600/6B7280/FFFFFF?text=Project+2:+Road+Network"
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            <ProjectCard
              title="Urban Drainage System"
              image="https://placehold.co/800x600/6B7280/FFFFFF?text=Project+3:+Drainage+System"
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            <ProjectCard
              title="Cabro Pathway Installation"
              image="https://placehold.co/800x600/6B7280/FFFFFF?text=Project+4:+Cabro+Path"
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            <ProjectCard
              title="Large-Scale Landscaping"
              image="https://placehold.co/800x600/86EFAC/FFFFFF?text=Project+5:+Large+Landscaping"
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white shadow-inner">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 mb-12 animate-fade-in-up"> {/* Emerald heading */}
            What Our Happy Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Ecogreen transformed our garden into a beautiful oasis. Their attention to detail and professionalism were outstanding!"
              author="Jane Doe, Homeowner"
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            <TestimonialCard
              quote="The drainage system they installed saved our property from heavy rains. Highly recommend their expertise!"
              author="John Smith, Business Owner"
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
            <TestimonialCard
              quote="Excellent road construction work. Completed on time and within budget. A truly reliable partner."
              author="A. Sharma, Property Developer"
              elementRef={(el) => el && fadeIn(el.offsetTop)}
            />
          </div>
        </div>
      </section>

      {/* NEW: AI-Powered Project Idea Generator Section */}
      <section id="project-generator" className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 to-green-800 text-white shadow-lg"> {/* Green gradient */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
            Need Inspiration? ✨ Get Custom Project Ideas!
          </h2>
          <ProjectIdeaGenerator />
        </div>
      </section>

      {/* Footer Section (Removed redundant navigation as it's now in the header) */}
      <footer className="bg-gray-950 text-gray-200 py-16"> {/* Darker background, lighter text, more padding */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Responsive grid layout */}

          {/* Column 1: Logo and Company Name */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center space-x-3 mb-4">
              <img src="https://placehold.co/40x40/228B22/FFFFFF?text=Logo" alt="Ecogreen Logo" className="h-10 w-10 rounded-full shadow-md" />
              <span className="text-2xl font-bold text-emerald-500">Ecogreen</span> {/* Use emerald for logo text */}
            </a>
            <p className="text-sm text-center md:text-left">Building Dreams, Nurturing Nature.</p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="md:col-span-1 text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <p className="mb-2">Nairobi, Kenya</p>
            <p className="mb-2">Phone: <a href="tel:+254796515157" className="hover:text-emerald-400 transition-colors duration-200">+254 796515157</a></p>
            <p className="mb-2 text-xs sm:text-sm break-words">
              Email: <a href="mailto:info@ecogreencontractors.solutions" className="hover:text-emerald-400 transition-colors duration-200">info@ecogreencontractors.solutions</a>
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div className="md:col-span-1 text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-emerald-400 transition-colors duration-200">Home</a></li>
              <li className="mb-2"><a href="#services" className="hover:text-emerald-400 transition-colors duration-200">Services</a></li>
              <li className="mb-2"><a href="#projects" className="hover:text-emerald-400 transition-colors duration-200">Projects</a></li>
              <li className="mb-2"><a href="#testimonials" className="hover:text-emerald-400 transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media / CTA (WhatsApp) */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold text-white mb-4">Connect With Us</h4>
            <a
              href="https://wa.me/254796515157"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              title="Chat with us on WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-6 w-6" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>

        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ecogreen Landscapers & Contractors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Service Card Component
function ServiceCard({ title, description, images, elementRef }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const intervalRef = useRef(null);

  const startAutoCycle = () => {
    if (images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
  };

  const stopAutoCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (cardRef.current && elementRef) {
      elementRef(cardRef.current);
    }

    if (!isHovered) {
      startAutoCycle();
    }

    return () => stopAutoCycle();
  }, [images.length, elementRef, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    stopAutoCycle();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startAutoCycle();
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    stopAutoCycle();
    startAutoCycle();
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    stopAutoCycle();
    startAutoCycle();
  };

  const motionClass = elementRef ? elementRef(cardRef.current) : '';

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-103 transition-all duration-500 ease-in-out ${motionClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-60 overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} - ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            onError={(e) => { e.target.src = 'https://placehold.co/800x600/CCCCCC/000000?text=Image+Error'; }}
          />
        ))}

        {images.length > 1 && (
          <>
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-r-lg focus:outline-none hover:bg-opacity-90 transition-opacity duration-300 transform hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-l-lg focus:outline-none hover:bg-opacity-90 transition-opacity duration-300 transform hover:scale-110"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentImageIndex(idx);
                    stopAutoCycle();
                    startAutoCycle();
                  }}
                  className={`w-3 h-3 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-gray-400'} opacity-75 focus:outline-none hover:opacity-100 transition-colors duration-300`}
                  aria-label={`Go to image ${idx + 1}`}
                ></button>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Landscaping Specific Card Component (Before & After)
function LandscapingCard({ title, description, beforeImage, afterImage, elementRef }) {
  const [showBefore, setShowBefore] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current && elementRef) {
      elementRef(cardRef.current);
    }
  }, [elementRef]);

  const motionClass = elementRef ? elementRef(cardRef.current) : '';

  return (
    <div ref={cardRef} className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-103 transition-all duration-500 ease-in-out ${motionClass}`}>
      <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => setShowBefore(!showBefore)}>
        <img
          src={beforeImage}
          alt="Before Landscaping"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${showBefore ? 'opacity-100' : 'opacity-0'}`}
          onError={(e) => { e.target.src = 'https://placehold.co/800x600/FCA5A5/FFFFFF?text=Before+Image+Error'; }}
        />
        <img
          src={afterImage}
          alt="After Landscaping"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${!showBefore ? 'opacity-100' : 'opacity-0'}`}
          onError={(e) => { e.target.src = 'https://placehold.co/800x600/86EFAC/FFFFFF?text=After+Image+Error'; }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-bold transition-opacity duration-500 opacity-0 hover:opacity-100">
          Click to see {showBefore ? 'After' : 'Before'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-emerald-700 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, image, elementRef }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current && elementRef) {
      elementRef(cardRef.current);
    }
  }, [elementRef]);

  const motionClass = elementRef ? elementRef(cardRef.current) : '';

  return (
    <div ref={cardRef} className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 ease-in-out ${motionClass}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
        onError={(e) => { e.target.src = 'https://placehold.co/800x600/CCCCCC/000000?text=Project+Image+Error'; }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ quote, author, elementRef }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current && elementRef) {
      elementRef(cardRef.current);
    }
  }, [elementRef]);

  const motionClass = elementRef ? elementRef(cardRef.current) : '';

  return (
    <div ref={cardRef} className={`bg-emerald-700 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between transform hover:scale-103 transition-all duration-500 ease-in-out ${motionClass}`}>
      <p className="text-lg italic mb-4">"{quote}"</p>
      <p className="text-right font-medium text-emerald-100">- {author}</p>
    </div>
  );
}

// Project Idea Generator Component
function ProjectIdeaGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateIdea = async () => {
    setLoading(true);
    setGeneratedIdea('');
    setError('');

    if (!prompt.trim()) {
      setError('Please describe your project idea to get inspiration.');
      setLoading(false);
      return;
    }

    try {
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: `Generate a creative and concise landscaping or construction project idea based on the following description, suitable for a company like Ecogreen. Focus on unique features, benefits, and a catchy name. Description: "${prompt}"` }] });

      const ideaPayload = { contents: [chatHistory[0]] };
      const apiKey = "AIzaSyC1q_KJysimHoEnfZgofyIrsahF7NLmP0c";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const ideaResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ideaPayload)
      });
      const ideaResult = await ideaResponse.json();

      let ideaText = '';
      if (ideaResult.candidates && ideaResult.candidates.length > 0 &&
          ideaResult.candidates[0].content && ideaResult.candidates[0].content.parts &&
          ideaResult.candidates[0].content.parts.length > 0) {
        ideaText = ideaResult.candidates[0].content.parts[0].text;
      } else {
        setError('Failed to generate an idea. Please try again or refine your prompt.');
        setLoading(false);
        return;
      }

      const imagePromptChatHistory = [];
      imagePromptChatHistory.push({ role: "user", parts: [{ text: `Based on this project idea: "${ideaText}", suggest a relevant royalty-free image prompt for this project idea. Only output the image prompt, nothing else. The image prompt should be suitable for a general image search engine like Unsplash, avoiding specific brand names.` }] });
      const imagePromptPayload = { contents: imagePromptChatHistory };

      const imagePromptResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(imagePromptPayload)
      });
      const imagePromptResult = await imagePromptResponse.json();

      let imagePrompt = '';
      if (imagePromptResult.candidates && imagePromptResult.candidates.length > 0 &&
          imagePromptResult.candidates[0].content && imagePromptResult.candidates[0].content.parts &&
          imagePromptResult.candidates[0].content.parts.length > 0) {
        imagePrompt = imagePromptResult.candidates[0].content.parts[0].text.replace(/["\n]/g, '').trim();
      }

      let imageUrl = '';
      if (imagePrompt) {
        const encodedPrompt = encodeURIComponent(imagePrompt);
        imageUrl = `https://source.unsplash.com/800x600/?${encodedPrompt}`;
      }

      setGeneratedIdea(
        <>
          <div className="flex flex-col md:flex-row items-center gap-6">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={imagePrompt || 'Generated Project Idea Image'}
            className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0"
            style={{ maxHeight: 300, objectFit: 'cover' }}
            onError={(e) => { e.target.src = 'https://placehold.co/800x600/CCCCCC/000000?text=Image+Not+Found'; }}
          />
        )}
        <div className="w-full md:w-1/2">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{ideaText}</p>
        </div>
          </div>
        </>
      );

    } catch (err) {
      setError('An error occurred while connecting to the AI or generating content. Please check your network and try again.');
      console.error('Error calling Gemini API:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-3xl mx-auto transform transition-all duration-500 ease-in-out animate-fade-in-up">
      <div className="mb-6">
        <label htmlFor="project-prompt" className="block text-gray-700 text-lg font-medium mb-3">
          Tell us about your vision:
        </label>
        <textarea
          id="project-prompt"
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-gray-800 resize-y min-h-[100px]"
          rows="4"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., 'I want a modern garden with a small water feature and space for outdoor dining in a sunny area.'"
        ></textarea>
      </div>
      <button
        onClick={generateIdea}
        className="w-full flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          'Generate Idea ✨'
        )}
      </button>
      {/* Floating WhatsApp Icon (left center) */}
      <a
        href="https://wa.me/254796515157"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
        title="Chat with us on WhatsApp"
        style={{ boxShadow: '0 4px 16px rgba(16, 185, 129, 0.25)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.999 23.003L2.73 17.65a8.97 8.97 0 01-1.34-4.887C1.39 6.84 6.84 1.39 13.007 1.39c3.08 0 5.96 1.2 8.16-3.393s3.39 5.08 3.39 8.16a8.97 8.97 0 01-1.34 4.887L23.003 23.003l-5.353-1.73a9.003 9.003 0 01-4.887 1.34c-6.16 0-11.61-5.45-11.61-11.61a8.97 8.97 0 011.34-4.887L.999 0 .999 23.003zM13.007 3.39c-5.06 0-9.21 4.15-9.21 9.21 0 1.95.6 3.76 1.63 5.25L3.447 21.55l3.227-1.047a7.22 7.22 0 004.887 1.34h.01c5.06 0 9.21-4.15 9.21-9.21s-4.15-9.21-9.21-9.21zM17.007 15.61c-.24 0-.48-.07-.69-.14l-1.92-1.22c-.14-.08-.3-.1-.45-.04l-1.12.35c-.24.08-.5.06-.72-.05-.23-.1-.4-.28-.5-.5l-.35-1.12c-.06-.15-.04-.31.04-.45l1.22-1.92c.07-.21.0-2.07-2.06-2.07-.24 0-.48-.07-.69-.14l-1.92-1.22c-.14-.08-.3-.1-.45-.04l-1.12.35c-.24.08-.5.06-.72-.05-.23-.1-.4-.28-.5-.5l-.35-1.12c-.06-.15-.04-.31.04-.45l1.22-1.92c.07-.21.0-2.07-2.06-2.07" />
        </svg>
      </a>
      {generatedIdea && (
        <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-lg shadow-md animate-fade-in-up">
          <h3 className="text-xl font-semibold text-emerald-800 mb-4">Your Custom Project Idea:</h3>
          {generatedIdea}
        </div>
      )}

      {error && (
        <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-md animate-fade-in-up">
          <p className="font-medium">{error}</p>
        </div>
      )}
    </div>
  );
}


export default App;