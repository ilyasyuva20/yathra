import React, { useState, useEffect } from 'react';
import { Menu, Star, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 transition-all duration-500 border-b border-gray-100">
      <nav className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12" aria-label="Main Navigation">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" aria-label="Yathra Trendy Collections Home" className="flex flex-col items-center justify-center text-center">
              <span className="font-serif text-2xl md:text-3xl font-medium tracking-[0.15em] text-premium-black leading-none">YATHRA</span>
              <span className="text-premium-gold text-[0.65rem] font-sans tracking-[0.3em] uppercase mt-2">Trendy Collections</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center">
            <a href="#about" className="nav-link text-xs uppercase tracking-widest font-medium text-premium-charcoal hover:text-premium-gold transition-colors">The Store</a>
            <a href="#collections" className="nav-link text-xs uppercase tracking-widest font-medium text-premium-charcoal hover:text-premium-gold transition-colors">Curations</a>
            <a href="#visit" className="nav-link text-xs uppercase tracking-widest font-medium text-premium-charcoal hover:text-premium-gold transition-colors">Visit Us</a>
            <a href="tel:07907225945" aria-label="Call Yathra Boutique at 079072 25945" className="ml-4 px-8 py-3 border border-premium-gold text-premium-gold text-xs uppercase tracking-widest font-medium hover:bg-premium-gold hover:text-white transition-all duration-500">
              Call Boutique
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation Menu" aria-expanded={isOpen} className="text-premium-black focus:outline-none">
              <Menu className="h-6 w-6 stroke-[1.5]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-6 py-8 space-y-6 flex flex-col items-center text-center">
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-sm uppercase tracking-widest font-medium text-premium-charcoal">The Store</a>
            <a href="#collections" onClick={() => setIsOpen(false)} className="block text-sm uppercase tracking-widest font-medium text-premium-charcoal">Curations</a>
            <a href="#visit" onClick={() => setIsOpen(false)} className="block text-sm uppercase tracking-widest font-medium text-premium-charcoal">Visit Us</a>
            <a href="tel:07907225945" aria-label="Call Yathra Boutique at 079072 25945" className="block w-full max-w-xs py-3 border border-premium-gold text-premium-gold text-sm uppercase tracking-widest font-medium text-center">Call Now</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      subtitle: "Vaduthala, Kerala",
      title: "The Art of <br/> <i class='font-light text-premium-pearl'>Dressing Well.</i>",
      description: "An exclusive curation of contemporary fashion and timeless traditional wear, designed for the modern aesthete."
    },
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      subtitle: "Premium Quality",
      title: "Elevate Your <br/> <i class='font-light text-premium-pearl'>Everyday Style.</i>",
      description: "Discover our premium selection of tailored menswear and elegant womenswear for every occasion."
    },
    {
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      subtitle: "Heritage & Tradition",
      title: "The Festive <br/> <i class='font-light text-premium-pearl'>Collection.</i>",
      description: "Celebrate in style with our breathtaking ethnic and traditional wear crafted with exquisite details."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-black" aria-label="Welcome to Yathra Trendy Collections Carousel">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={`Yathra Trendy Collections slide ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
            {/* Dark overlays to make text readable */}
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center pt-24 px-4">
            <div className="text-center text-white flex flex-col items-center">
              <span className="uppercase tracking-[0.3em] text-premium-pearl text-xs md:text-sm mb-6 block font-light">
                {slide.subtitle}
              </span>
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8 max-w-4xl tracking-tight drop-shadow-lg"
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <p className="text-sm md:text-base text-gray-200 font-light tracking-wide max-w-lg mx-auto drop-shadow-md">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? 'w-12 bg-premium-gold' : 'w-6 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-premium-pearl" aria-label="About Our Heritage">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 lg:col-start-2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-premium-gold"></div>
              <span className="uppercase tracking-[0.2em] text-premium-gold text-xs font-semibold">Our Heritage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-premium-black mb-8 leading-tight">
              Redefining Elegance <br/>in <i className="text-premium-gold">Kerala.</i>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-loose font-light text-sm md:text-base">
              Nestled in the esteemed Galleria Shopping Complex, <strong>Yathra Trendy Collections</strong> is more than a boutique—it is a destination for sartorial excellence. We specialize in curating high-quality apparel that bridges the gap between contemporary trends and timeless tradition.
            </p>
            <p className="text-gray-600 mb-10 leading-loose font-light text-sm md:text-base">
              Our dedicated team of style consultants ensures that every garment on our racks meets the highest standards of fabric quality, craftsmanship, and comfort, offering an unparalleled shopping experience.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex flex-col" aria-label="Rating: 4.8 out of 5 stars based on 3831 Google reviews">
                <span className="text-3xl font-serif text-premium-black" aria-hidden="true">4.8</span>
                <div className="flex text-premium-gold mt-1" aria-hidden="true">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
              <div className="h-10 w-[1px] bg-gray-300"></div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">Loved by our<br/>Local Community</p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="lg:col-span-5 lg:col-start-8 relative">
            <div className="relative z-10 img-container aspect-[3/4]">
              <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="High Quality fabric details at Yathra Trendy Collections Boutique" className="w-full h-full object-cover img-zoom" />
            </div>
            {/* Decorative subtle offset frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-premium-gold/30 z-0 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Collections = () => {
  return (
    <section id="collections" className="py-32 bg-white" aria-label="Curated Fashion Collections">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col items-center text-center mb-20">
          <span className="uppercase tracking-[0.2em] text-premium-gold text-xs font-semibold mb-4">The Lookbook</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-premium-black">Curated Collections</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          
          {/* Collection 1 */}
          <div className="group cursor-pointer" tabIndex="0" aria-label="View Womenswear Collection">
            <div className="relative overflow-hidden h-[600px] mb-6">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern and Elegant Womenswear Collection at Yathra Trendy Collections, Vaduthala" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif text-premium-black mb-2">Womenswear</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">Modern & Elegant</p>
            </div>
          </div>

          {/* Collection 2 */}
          <div className="group cursor-pointer md:mt-16" tabIndex="0" aria-label="View Menswear Collection">
            <div className="relative overflow-hidden h-[600px] mb-6">
              <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tailored and Casual Menswear Collection at Yathra Trendy Collections, Kerala" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif text-premium-black mb-2">Menswear</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">Tailored & Casual</p>
            </div>
          </div>

          {/* Collection 3 */}
          <div className="group cursor-pointer" tabIndex="0" aria-label="View Festive and Traditional Wear Collection">
            <div className="relative overflow-hidden h-[600px] mb-6">
              <img src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Heritage and Ethnic Traditional Festive Edit at Yathra Trendy Collections" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif text-premium-black mb-2">Festive Edit</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">Heritage & Ethnic</p>
            </div>
          </div>

        </div>

        {/* Small Dress Images / Lookbook Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10">
          
          <div className="group cursor-pointer" tabIndex="0" aria-label="View Casual Dresses">
            <div className="relative overflow-hidden h-[300px] md:h-[400px]">
              <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Casual Summer Dress Collection at Yathra Trendy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
            <div className="text-center mt-4 mb-4 md:mb-0">
              <h4 className="text-sm font-serif text-premium-black">Casual Edit</h4>
            </div>
          </div>

          <div className="group cursor-pointer md:mt-12" tabIndex="0" aria-label="View Evening Dresses">
            <div className="relative overflow-hidden h-[300px] md:h-[400px]">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Evening and Party Wear Dress Collection at Yathra Trendy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
            <div className="text-center mt-4 mb-4 md:mb-0">
              <h4 className="text-sm font-serif text-premium-black">Evening Wear</h4>
            </div>
          </div>

          <div className="group cursor-pointer" tabIndex="0" aria-label="View Ethnic Details">
            <div className="relative overflow-hidden h-[300px] md:h-[400px]">
              <img src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Ethnic Dress and Saree Details at Yathra Trendy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
            <div className="text-center mt-4 mb-4 md:mb-0">
              <h4 className="text-sm font-serif text-premium-black">Ethnic Touch</h4>
            </div>
          </div>

          <div className="group cursor-pointer md:mt-12" tabIndex="0" aria-label="View Designer Accessories">
            <div className="relative overflow-hidden h-[300px] md:h-[400px]">
              <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Boutique Accessories and Jewelry at Yathra Trendy Collections" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
            <div className="text-center mt-4">
              <h4 className="text-sm font-serif text-premium-black">Accessories</h4>
            </div>
          </div>

        </div>
        
        <div className="mt-20 flex justify-center">
          <a href="#visit" aria-label="Visit the store to view all collections" className="group flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium text-premium-black hover:text-premium-gold transition-colors">
            Visit Store to View All <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Visit = () => {
  return (
    <section id="visit" className="py-32 bg-premium-cream" aria-label="Store Location and Contact Information">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 md:p-20 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-16">
          
          {/* Info Column */}
          <div className="flex-1">
            <span className="uppercase tracking-[0.2em] text-premium-gold text-xs font-semibold mb-4 block">Concierge</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-premium-black mb-10">Plan Your Visit</h2>
            
            <address className="space-y-8 not-italic">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Location</p>
                <p className="text-premium-charcoal font-light leading-relaxed">
                  Galleria Shopping Complex<br/>
                  V82G+GX9, Cherthala - Arookutty Rd<br/>
                  Arookutty, Vaduthala, Kerala 688535
                </p>
              </div>
              
              <div className="h-[1px] w-full bg-gray-100"></div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Boutique Hours</p>
                <p className="text-premium-charcoal font-light">Open Daily until 9:30 PM</p>
              </div>
              
              <div className="h-[1px] w-full bg-gray-100"></div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Inquiries</p>
                <a href="tel:07907225945" aria-label="Call our concierge at 079072 25945" className="text-xl font-serif text-premium-black hover:text-premium-gold transition-colors">079072 25945</a>
              </div>
            </address>
          </div>

          {/* Interactive Google Map Graphic */}
          <div className="flex-1 relative min-h-[400px]">
            <iframe 
              title="Yathra Trendy Collections Location"
              src="https://maps.google.com/maps?q=Galleria%20shopping%20complex%20Vaduthala&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full absolute inset-0 filter grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Elegant overlay shadow around the edges of the map */}
            <div className="absolute inset-0 pointer-events-none border border-gray-100 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]"></div>
            
            <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
              <a href="https://maps.google.com/?q=Galleria+shopping+complex+Vaduthala" target="_blank" rel="noreferrer" aria-label="Get Google Maps Directions to Yathra Trendy Collections" className="block w-full py-4 bg-white/90 backdrop-blur-sm text-center text-xs uppercase tracking-widest text-premium-black font-medium hover:bg-premium-black hover:text-white transition-colors duration-500 pointer-events-auto border border-gray-200">
                Open in Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-premium-black text-white py-16" aria-label="Site Footer">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center">
        
        <a href="#" aria-label="Yathra Trendy Collections Home" className="flex flex-col items-center justify-center text-center mb-10">
          <span className="font-serif text-2xl font-medium tracking-[0.15em] text-white leading-none">YATHRA</span>
          <span className="text-premium-gold text-[0.55rem] font-sans tracking-[0.3em] uppercase mt-2">Trendy Collections</span>
        </a>

        <div className="flex space-x-8 mb-12">
          <a href="#" aria-label="Visit our Instagram page" className="text-xs uppercase tracking-widest text-gray-400 hover:text-premium-gold transition-colors">Instagram</a>
          <a href="#" aria-label="Visit our Facebook page" className="text-xs uppercase tracking-widest text-gray-400 hover:text-premium-gold transition-colors">Facebook</a>
          <a href="https://maps.google.com/?q=Galleria+shopping+complex+Vaduthala" target="_blank" rel="noreferrer" aria-label="View our location on Google Maps" className="text-xs uppercase tracking-widest text-gray-400 hover:text-premium-gold transition-colors">Google Maps</a>
        </div>

        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
          &copy; {new Date().getFullYear()} Yathra Trendy Collections. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collections />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
