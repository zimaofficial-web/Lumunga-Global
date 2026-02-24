
import React, { useState, useEffect } from 'react';
import {
  Building2,
  Home,
  ShieldCheck,
  TrendingUp,
  Paintbrush,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Compass,
  Briefcase,
  Award,
  Star,
  Quote
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-[#003366] p-2 rounded-full">
            <Home className="text-white w-6 h-6" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-[#003366]' : 'text-white'}`}>
            LUMUNGA <span className="text-[#D4AF37]">GLOBAL</span>
          </span>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#contact"
            className="bg-[#D4AF37] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#b8972f] transition-all transform hover:scale-105 inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#003366]/70 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">

          <h1 className="text-4xl md:text-7xl text-white font-bold leading-tight mb-6">
            Building for Africans <br />
            <span className="text-[#D4AF37]">Home and Abroad</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light italic">
            "ONE HOME AT A TIME" — Real Estate Construction, Finishing, Property Management, and Investment Solutions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#services" className="bg-[#D4AF37] text-white px-8 py-4 rounded-md font-bold text-center hover:bg-[#b8972f] transition-all transform hover:scale-105 shadow-xl">
              Our Services
            </a>
            <a href="#about" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold text-center hover:bg-white/20 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Geometric Overlay (PDF style) */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 hidden lg:block opacity-50">
        <div className="w-full h-full bg-[#D4AF37]/20 transform rotate-12 translate-y-20 translate-x-10"></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl relative z-10">
              <img
                src="/Construction.jpeg"
                alt="Construction"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D4AF37] -z-0 rounded-lg hidden md:block"></div>
          </div>
          <div>
            <h2 className="text-[#003366] text-3xl md:text-4xl font-bold mb-6">Introduction</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong className="text-[#003366]">Lumunga Global</strong> is a multi-disciplinary real estate, construction, and property investment company committed to delivering quality, transparency, and value-driven solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our focus is on helping individuals, families, and investors, particularly Africans in the diaspora, build, invest, manage, and enhance properties back home with confidence. We provide end-to-end services from concept to completion while ensuring efficiency, professionalism, and long-term value.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-[#D4AF37]" />
                <span className="font-semibold text-gray-800">Trusted Partner</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-[#D4AF37]" />
                <span className="font-semibold text-gray-800">Proven Results</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-[#D4AF37]" />
                <span className="font-semibold text-gray-800">Quality Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-[#D4AF37]" />
                <span className="font-semibold text-gray-800">Global Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const serviceList = [
    {
      title: "Construction & Building",
      desc: "Comprehensive construction solutions for residential and commercial projects. Concept to completion with strict quality standards.",
      icon: <Building2 className="w-10 h-10" />,
      image: "/Construction.jpeg"
    },
    {
      title: "Investment & Advisory",
      desc: "Professional guidance for local and diaspora clients. Ensuring investments are protected, high-value, and strategically developed.",
      icon: <TrendingUp className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Real Estate Sales",
      desc: "Comprehensive support for buying, selling, and investing in real estate with secure and transparent transactions.",
      icon: <Home className="w-10 h-10" />,
      image: "/Real_Estate.jpeg"
    },
    {
      title: "Property Management",
      desc: "Especial focus for diaspora clients. Protecting your investments through professional, on-the-ground management services.",
      icon: <ShieldCheck className="w-10 h-10" />,
      image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Interior Solutions",
      desc: "Transforming buildings into functional, aesthetically pleasing spaces through expert finishing, furnishing, and design.",
      icon: <Paintbrush className="w-10 h-10" />,
      image: "/Interior_Design.jpeg"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#003366] text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide holistic property solutions designed to create lasting value and peace of mind for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-[#D4AF37] p-2 rounded-lg text-white">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-[#003366] text-xl font-bold mb-4 uppercase tracking-wide">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "{service.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="py-20 bg-[#003366] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 p-10 rounded-2xl border border-white/10 flex flex-col h-full">
            <div className="bg-[#D4AF37] w-16 h-16 flex items-center justify-center rounded-xl mb-6">
              <Compass className="w-8 h-8 text-[#003366]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37] uppercase">Mission Statement</h3>
            <p className="text-xl leading-relaxed font-light">
              "To provide reliable construction, property investment, and finishing solutions that empower Africans locally and in the diaspora, to own, manage, and grow valuable real estate assets with peace of mind."
            </p>
          </div>
          <div className="bg-white/5 p-10 rounded-2xl border border-white/10 flex flex-col h-full">
            <div className="bg-[#D4AF37] w-16 h-16 flex items-center justify-center rounded-xl mb-6">
              <Briefcase className="w-8 h-8 text-[#003366]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37] uppercase">Vision Statement</h3>
            <p className="text-xl leading-relaxed font-light">
              "To become a leading African-owned real estate and construction brand trusted globally for integrity, quality delivery, and innovative property solutions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    { title: "Integrity", text: "Transparency and honesty in every transaction." },
    { title: "Quality", text: "Excellence in materials, workmanship, and delivery." },
    { title: "Accountability", text: "Clear reporting and professional project management." },
    { title: "Client-Centered", text: "Your goals drive our solutions." },
    { title: "Sustainability", text: "Long-term value and responsible building practices." },
  ];

  return (
    <section id="values" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#003366] text-4xl font-bold mb-4 text-center">Core Values</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mb-12 mx-auto"></div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {values.map((v, i) => (
              <div key={i} className="flex space-x-5 items-start group">
                <div className="mt-1 bg-[#D4AF37] p-2.5 rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg shadow-[#D4AF37]/20">
                  <CheckCircle2 size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-xl mb-2">{v.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg italic">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    "Proven experience across construction, finishing, and management",
    "Strong focus on diaspora clients and remote project management",
    "Transparent reporting and clear communication",
    "Quality workmanship and trusted vendor network",
    "One-stop solution for building, investing, and managing property"
  ];

  return (
    <section id="why-us" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto bg-[#003366] rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#D4AF37]"></div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
              <Award className="w-16 h-16 text-[#D4AF37] mx-auto md:mx-0 mb-4" />
            </div>
            <div className="md:w-2/3 space-y-4">
              {reasons.map((r, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all cursor-default">
                  <div className="bg-[#D4AF37] rounded-full p-1 text-[#003366] shrink-0">
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                  <p className="text-white font-medium">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Additional Brand Content Sections ---

const OurLegacy = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#003366] text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">Our Legacy</h2>
        <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Lumunga Global is building a legacy of trust, excellence, and African-owned real estate solutions. Every project reflects our commitment to quality, innovation, and client satisfaction. We aim to leave lasting value in the communities we serve and help Africans in the diaspora secure profitable and well-managed investments back home.
        </p>
      </div>
    </div>
  </section>
);

const Leadership = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100">
        <div className="flex items-center space-x-4 mb-8">
          <Briefcase className="w-10 h-10 text-[#D4AF37]" />
          <h2 className="text-[#003366] text-3xl md:text-4xl font-bold uppercase tracking-wider">Leadership</h2>
        </div>
        <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Our management team ensures operational efficiency, product excellence, and strategic growth. They focus on maintaining high standards across all projects, driving innovation, and ensuring every team member aligns with the company’s mission, vision, and objectives. Leadership responsibilities include overseeing construction, investment advisory, property management, and finishing operations to deliver consistent client satisfaction.
        </p>
      </div>
    </div>
  </section>
);

const GrowthStrategies = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#003366] text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">Strategies for Growth and Success</h2>
        <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Lumunga Global employs a multi-pronged approach to ensure sustainable growth, operational excellence, and long-term client satisfaction. Our strategies are designed to strengthen our market position, enhance service delivery, and build lasting value for clients, especially Africans in the diaspora.
        </p>
      </div>
    </div>
  </section>
);

const Craftsmanship = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Star className="w-10 h-10 text-[#D4AF37]" />
          <h2 className="text-[#003366] text-3xl md:text-4xl font-bold uppercase tracking-wider">Craftsmanship and Quality</h2>
        </div>
        <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          At Lumunga Global, craftsmanship and quality are at the core of everything we do. We combine skilled professionals, premium materials, and rigorous quality control processes to deliver projects that consistently meet and exceed client expectations.
        </p>
      </div>
    </div>
  </section>
);

const OurClients = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#003366] text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">Our Clients</h2>
        <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Lumunga Global serves a diverse range of clients, providing tailored real estate, construction, and property investment solutions to meet their unique needs.
        </p>
      </div>
    </div>
  </section>
);

const OurPromise = () => (
  <section className="py-24 bg-[#003366] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full translate-x-32 -translate-y-32"></div>
    <div className="container mx-auto px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="w-16 h-16 text-[#D4AF37] opacity-50 mx-auto mb-8" />
        <h2 className="text-[#D4AF37] text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest">Our Promise</h2>
        <p className="text-white text-2xl md:text-3xl font-light italic leading-relaxed">
          "At Lumunga Global, we do more than build structures. We build trust, long-term value, and legacies. Every project, whether a home, commercial property, or investment development, is handled with professionalism, transparency, and attention to detail."
        </p>
      </div>
    </div>
  </section>
);

const Conclusion = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#003366] text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wider">Conclusion</h2>
        <div className="w-24 h-1 bg-[#D4AF37] mb-12"></div>
        <div className="space-y-8 text-gray-600 text-lg md:text-xl leading-relaxed">
          <p>
            Lumunga Global is committed to delivering exceptional real estate, construction, and property management services with transparency, quality, and reliability. We prioritize the needs of our clients, ensuring that every project is executed with professionalism, attention to detail, and long-term value.
          </p>
          <p>
            Our focus is on building trust, creating lasting legacies, and enhancing investments. Whether helping Africans in the diaspora develop properties, guiding investors, or constructing dream homes, Lumunga Global ensures every project meets the highest standards of functionality, durability, and aesthetic appeal.
          </p>
          <p className="font-semibold text-[#003366]">
            We stand as a trusted partner, providing comprehensive solutions that empower clients to confidently build, manage, and grow their real estate assets. With Lumunga Global, every home, investment, and development is more than a project, it is a commitment to excellence, longevity, and client satisfaction.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[#003366] text-4xl font-bold mb-6">Contact Information</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mb-10"></div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-[#003366] p-4 rounded-2xl text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-1">Call Us</p>
                  <p className="text-[#003366] text-xl font-bold">+234 816 794 8578</p>
                  <p className="text-[#003366] text-xl font-bold">+234 708 544 1327</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#003366] p-4 rounded-2xl text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-1">Email Us</p>
                  <p className="text-[#003366] text-xl font-bold">lumungaglobal@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#003366] p-4 rounded-2xl text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-[#003366] text-xl font-bold leading-snug">Plot 31 Ipent7 Estate,<br />Gwarinpa, Abuja</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-white rounded-2xl shadow-sm border-l-4 border-[#D4AF37]">
              <h4 className="text-[#003366] font-bold text-lg mb-2 italic">Building a Legacy</h4>
              <p className="text-gray-600">
                "Lumunga Global is building a legacy of trust, excellence, and African-owned real estate solutions. Every project reflects our commitment to quality, innovation, and client satisfaction."
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="bg-[#D4AF37] p-2 rounded-lg">
              <Home className="text-[#003366] w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">LUMUNGA <span className="text-[#D4AF37]">GLOBAL</span></span>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lumunga Global Resources Limited. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Project Gallery</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <MissionVision />
        <CoreValues />
        <WhyChooseUs />
        <OurLegacy />
        <Leadership />
        <GrowthStrategies />
        <Craftsmanship />
        <OurClients />
        <OurPromise />
        <Conclusion />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
