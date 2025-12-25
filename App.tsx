
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowUpRight,
  MousePointer2,
  CheckCircle2,
  BarChart3,
  Linkedin,
  Twitter,
  Facebook,
  Quote,
  Calendar,
  MessageCircle,
  Accessibility,
  Send
} from 'lucide-react';
import { 
  NAV_ITEMS, 
  LOGO_URL, 
  VALUE_PROPS, 
  FEATURES, 
  INDUSTRIES, 
  KPIS,
  TESTIMONIALS,
  BLOG_POSTS
} from './constants';

// --- Sub-components ---

const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value, 10);
      if (isNaN(numericValue)) return;

      const controls = animate(0, numericValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 shrink-0">
          <img src={LOGO_URL} alt="Coresys Logo" className="h-10 lg:h-12 w-auto" />
          <div className="flex flex-col -space-y-1 hidden sm:flex">
            <span className="text-xl font-black tracking-tight uppercase text-navy">CORESYS</span>
            <span className="text-[8px] tracking-widest font-bold text-navy/40">BY CEGID</span>
          </div>
        </a>

        {/* Desktop Menu - ml-auto added to push menu to the right and avoid logo overlap */}
        <nav className="hidden xl:flex items-center space-x-8 ml-auto">
          <div className="flex items-center space-x-8 mr-8 border-r border-navy/5 pr-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-xs font-bold text-navy/70 hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 shrink-0">
            <a href="#" className="text-xs font-bold text-navy/60 hover:text-navy transition-colors uppercase tracking-widest">Support</a>
            <a href="#" className="px-6 py-2.5 bg-navy text-white hover:bg-navy-light rounded-full text-xs font-black transition-all shadow-lg shadow-navy/10 whitespace-nowrap">
              Demander une démo
            </a>
          </div>
        </nav>

        {/* Mobile Burger */}
        <button 
          className="xl:hidden text-navy p-2 ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl xl:hidden border-t border-navy/5"
          >
            <div className="flex flex-col p-8 space-y-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-lg font-bold text-navy"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-navy text-white py-4 rounded-full font-black text-sm uppercase tracking-widest">
                Contactez-nous
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Business Environment" 
          className="w-full h-full object-cover"
        />
        {/* Soft white gradient overlay for readability - optimized for left alignment */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 lg:via-white/75" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Version Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 px-4 py-2 bg-primary/10 rounded-full mb-8 border border-primary/20"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] lg:text-xs font-black text-primary uppercase tracking-widest">Nouvelle version 2025</span>
          </motion.div>

          {/* Headline - Perfectly aligned and structured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl lg:text-[100px] font-black text-navy leading-[1.05] tracking-tight mb-8">
              Coresys – <span className="text-primary italic font-medium">Le Futur</span> <br />
              de la Gestion ERP
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-navy/60 text-xl lg:text-2xl mb-12 leading-relaxed font-medium">
              Une solution ERP puissante et évolutive pour piloter la performance et accélérer la transformation digitale de votre entreprise au Maroc.
            </p>
            
            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button className="w-full sm:w-auto px-12 py-5 bg-navy text-white rounded-full font-black text-lg transition-all shadow-2xl shadow-navy/20 hover:shadow-navy/40 hover:-translate-y-1 flex items-center justify-center group">
                Demander une démo
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </button>
              <button className="w-full sm:w-auto px-12 py-5 bg-white text-navy border border-navy/10 rounded-full font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center">
                Découvrir la solution
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ValueProps = () => {
  return (
    <section id="solutions" className="py-24 bg-white border-t border-navy/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Piliers de Performance</h2>
          <p className="text-lg text-navy/60">Une technologie de pointe pour répondre aux défis complexes de la gestion d'entreprise moderne au Maroc.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((prop, idx) => (
            <motion.div
              key={prop.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-gray-light hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all border border-transparent hover:border-primary/10 group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{prop.title}</h3>
              <p className="text-navy/60 leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Écosystème Modulaire</h2>
            <p className="text-white/60 text-lg">Choisissez les modules dont vous avez besoin. Coresys s'adapte à la structure de votre organisation.</p>
          </div>
          <button className="text-primary font-bold flex items-center hover:underline group">
            Voir tout le catalogue <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{feature.description}</p>
              <div className="pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-primary text-sm font-bold flex items-center">
                  En savoir plus <ChevronRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyCoresys = () => {
  return (
    <section className="py-24 bg-gray-light">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-8 leading-tight">Pourquoi choisir Coresys ?</h2>
          <div className="space-y-8">
            {[
              { title: "Expertise Métier", desc: "Bénéficiez d'une solution éprouvée, conçue pour répondre aux standards internationaux et locaux." },
              { title: "Déploiement Agile", desc: "Réduisez vos délais de mise en œuvre grâce à nos méthodologies pré-configurées par secteur d'activité." },
              { title: "Innovation Continue", desc: "Profitez des dernières avancées en IA générative pour automatiser vos tâches quotidiennes au Maroc." }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-navy mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">{item.title}</h4>
                  <p className="text-navy/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white rounded-[40px] shadow-2xl p-4 overflow-hidden">
             <img 
               src="https://i.ibb.co/bj2gFvvT/image.png" 
               className="w-full h-full object-cover rounded-[30px]" 
               alt="Pourquoi choisir Coresys"
             />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-navy text-white p-8 rounded-3xl shadow-2xl max-w-xs">
            <p className="text-3xl font-black mb-2 text-primary">20+</p>
            <p className="text-sm font-medium opacity-70">années d'expertise au service du tissu économique national.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Expertise Sectorielle</h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">Coresys s'adapte à la réalité de votre métier avec des fonctionnalités verticales spécifiques au marché marocain.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry) => (
            <div key={industry.name} className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer">
              <img src={industry.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={industry.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl">{industry.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DashboardPreview = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative bg-navy rounded-[40px] p-8 lg:p-20 overflow-hidden shadow-2xl">
          <div className="relative z-10 lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl lg:text-6xl font-black text-white mb-8">Un cockpit de pilotage nouvelle génération</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Visualisez la santé de votre entreprise en un coup d'œil. Notre interface épurée élimine la complexité 
                pour vous permettre de vous concentrer sur ce qui compte vraiment : la décision stratégique.
              </p>
              <div className="flex items-center space-x-4">
                <button className="p-5 bg-primary rounded-full text-navy shadow-xl shadow-primary/40 hover:scale-105 transition-transform">
                  <MousePointer2 fill="#001a5e" />
                </button>
                <span className="text-white font-bold">Essayer l'interface interactive</span>
              </div>
            </div>
            <motion.div style={{ y }} className="lg:w-1/2 flex justify-center">
              <img 
                src="https://www.cegid.com/fr/wp-content/uploads/sites/7/2022/12/vignette-cegid-xrp-flex-1.png" 
                className="rounded-2xl shadow-2xl w-full rotate-2 bg-white" 
                alt="Dashboard detail" 
              />
            </motion.div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
        </div>
      </div>
    </section>
  );
};

const KPIs = () => {
  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {KPIS.map((kpi, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center text-navy"
            >
              <p className="text-5xl lg:text-8xl font-black mb-4 tracking-tighter flex items-center justify-center">
                <AnimatedCounter value={kpi.value} />
                {kpi.suffix.includes('%') ? '%' : ''}
              </p>
              <p className="text-sm lg:text-lg font-bold uppercase tracking-[0.15em] opacity-100 mb-1">{kpi.label}</p>
              {!kpi.suffix.includes('%') && (
                <p className="text-xs lg:text-sm font-medium opacity-80">{kpi.suffix}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Ce qu'en disent nos clients</h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">Découvrez comment Coresys transforme le quotidien des leaders économiques au Maroc.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-xl shadow-navy/5 border border-white relative overflow-hidden group"
            >
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
              <p className="text-navy/70 leading-relaxed mb-8 relative z-10 italic">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-navy">{t.name}</h4>
                  <p className="text-sm text-navy/50">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Actualités & Insights</h2>
            <p className="text-lg text-navy/60">Restez à la pointe des tendances ERP et de la transformation digitale au Maroc.</p>
          </div>
          <button className="text-primary font-bold flex items-center hover:underline group">
            Tout le blog <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-navy text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm text-navy/40 mb-3">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-navy rounded-[50px] p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-7xl font-black text-white mb-8">Transformez votre vision en performance durable</h2>
            <p className="text-xl text-white/70 mb-12">Nos experts basés au Maroc sont prêts à vous accompagner dans votre projet de transformation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 bg-primary text-navy rounded-full font-black text-xl hover:shadow-2xl hover:shadow-primary/40 transition-all">
                Parler à un expert
              </button>
              <button className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold text-xl hover:bg-white/20 transition-all">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy pt-20 pb-10 text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <img src={LOGO_URL} alt="Coresys Logo" className="h-14 w-auto" />
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-bold tracking-tight uppercase text-white">CORESYS</span>
              </div>
            </div>
            <p className="text-white/40 leading-relaxed mb-8">
              Coresys est la plateforme ERP de référence pour les entreprises en quête d'innovation et de performance au Maroc.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-navy transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-navy transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-navy transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Produit</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Roadmap 2025</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Intégrations API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sécurité du Cloud</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Société</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">À propos de Coresys</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Responsabilité (RSE)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Support</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation technique</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status du service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacter le support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">© 2024 Coresys ERP. Tous droits réservés.</p>
          <div className="flex space-x-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-navy">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Features />
        <WhyCoresys />
        <Industries />
        <DashboardPreview />
        <KPIs />
        <FinalCTA />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
