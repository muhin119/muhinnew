"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  
  Search, Share2, Heart, ChevronDown, Trophy,
  Facebook, Instagram, Linkedin, MessageCircle, Pin, TrendingUp,
  MessageSquare, ThumbsUp, Send, Target, BarChart, User, Mail, Phone, Clock, BookOpen, ArrowRight
} from 'lucide-react';
const LiveNumber = ({ value, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = parseFloat(value);
    const duration = 2000;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * (end - start) + start);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [value]);

  return (
    <span>
      {suffix === "X" ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};
function AgencySite() {
  const [view, setView] = useState('home');

  const themes = {
    home: { bg: 'bg-[#0F0F0F]', accent: '#00ac62' },
    seo: { bg: 'bg-[#1a2c24]', accent: '#55efab' },
    smm: { bg: 'bg-[#2d1b33]', accent: '#ff7eb9' },
    ads: { bg: 'bg-[#1b2733]', accent: '#4db8ff' },
    blog: { bg: 'bg-[#0a0a0a]', accent: '#3b82f6' },
    about: { bg: 'bg-[#1a2c24]', accent: '#55efab' },
    contact: { bg: 'bg-[#0a0a0a]', accent: '#ff7eb9' }
  };

  const currentTheme = themes[view] || themes.home;

  const ServiceText = ({ title, benefit }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
      className="mt-12 max-w-2xl text-center px-6">
      <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter" style={{ color: currentTheme.accent }}>{title}</h3>
      <p className="text-sm opacity-60 leading-relaxed uppercase tracking-widest font-bold">{benefit}</p>
    </motion.div>
  );

  return (
<main className={`min-h-screen transition-colors duration-1000 ${currentTheme.bg} text-white selection:bg-[#00ac62] selection:text-black overflow-x-hidden flex flex-col px-6 md:px-10`}>      
      {/* --- CAPITALIZED NAV BAR --- */}
      <nav className="fixed w-full z-[100] py-6 px-10 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => setView('home')}>
          MUHIN<span style={{ color: currentTheme.accent }}>.WAVE</span>
        </div>
        <div className="flex gap-8 text-[11px] font-black tracking-[0.3em] uppercase opacity-70">
          <button onClick={() => setView('home')} className="hover:opacity-100 transition-opacity">HOME</button>
          <div className="relative group cursor-pointer">
            <button className="flex items-center gap-1 hover:opacity-100 transition-opacity">SERVICES <ChevronDown size={14}/></button>
            <div className="absolute top-full left-[-20px] pt-4 hidden group-hover:block">
              <div className="bg-[#161616] border border-white/10 p-5 rounded-3xl w-52 shadow-2xl backdrop-blur-2xl">
                <button onClick={() => setView('seo')} className="block w-full text-left py-2.5 text-[10px] hover:text-[#55efab] transition-all tracking-widest uppercase">SEO MASTERY</button>
                <button onClick={() => setView('smm')} className="block w-full text-left py-2.5 text-[10px] hover:text-[#ff7eb9] transition-all tracking-widest uppercase">SMM GROWTH</button>
                <button onClick={() => setView('ads')} className="block w-full text-left py-2.5 text-[10px] hover:text-[#4db8ff] transition-all tracking-widest uppercase">GOOGLE ADS</button>
              </div>
            </div>
          </div>
          <button onClick={() => setView('blog')} className="hover:opacity-100 transition-opacity">BLOG</button>
          <button onClick={() => setView('about')} className="hover:opacity-100 transition-opacity">ABOUT</button>
          <button onClick={() => setView('contact')} className="hover:opacity-100 transition-opacity">CONTACT</button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
      {/* --- MASTER IMMERSIVE HOME VIEW --- */}
      {view === 'home' && (
          <motion.section 
            key="home" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden"
          >
            {/* 1. THE MESH BACKGROUND (EMERALD ORBS) */}
            <div className="absolute inset-0 z-0">
               <motion.div 
                 animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} 
                 transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20" 
                 style={{ background: 'radial-gradient(circle, #00ac62 0%, transparent 70%)' }} 
               />
               <motion.div 
                 animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }} 
                 transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute bottom-[5%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[180px] opacity-15" 
                 style={{ background: 'radial-gradient(circle, #55efab 0%, transparent 70%)' }} 
               />
            </div>

            {/* 2. THE MUHIN WAVE SCALE (12vw) */}
            <div className="relative z-10 flex flex-col items-center">
            <motion.h1 className="text-[18vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter text-center uppercase mb-8">
  MUHIN<span style={{ color: '#00ac62' }}>WAVE</span>
</motion.h1>

              {/* 3. STAGGERED ENTRANCE TAGLINE */}
              <div className="flex flex-wrap justify-center gap-x-4 max-w-3xl mb-12">
                {["SCALING", "RESTAURANTS", "WITH", "PRECISION"].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                    className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase opacity-40 italic"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              {/* --- 4. DYNAMIC LIVE COUNTER --- */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="flex flex-col md:flex-row gap-10 md:gap-16 mb-16 mt-8 items-center justify-center">
  <div className="flex flex-col items-center">
    <div className="text-5xl font-black text-white">
      <LiveNumber value="1000" suffix="+" />
    </div>
    <span className="text-[9px] font-black tracking-[0.5em] opacity-30 uppercase mt-2" style={{ color: '#00ac62' }}>
      LEADS GENERATED
    </span>
  </div>

  <div className="flex flex-col items-center">
    <div className="text-5xl font-black text-white">
      <LiveNumber value="8.4" suffix="X" />
    </div>
    <span className="text-[9px] font-black tracking-[0.5em] opacity-30 uppercase mt-2" style={{ color: '#00ac62' }}>
      AVERAGE ROI
    </span>
  </div>
</motion.div>

              {/* 5. INTERACTIVE CTA (GLOW & EXPAND) */}
              <motion.button
                whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 40px rgba(0, 172, 98, 0.4)",
                    backgroundColor: "#55efab"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setView('contact')}
                className="px-14 py-6 bg-[#00ac62] text-black font-black uppercase tracking-[0.4em] rounded-full text-xs transition-all"
              >
                Start The Wave
              </motion.button>
            </div>
          </motion.section>
        )}

        {/* --- SEO VIEW --- */}
        {view === 'seo' && (
          <motion.section key="seo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen flex flex-col justify-center items-center">
            <motion.div animate={{ x: [-20, 20, -20] }} transition={{ repeat: Infinity, duration: 4 }}><Search size={80} style={{ color: currentTheme.accent }} /></motion.div>
            <div className="flex gap-2 items-end h-20 mt-8">
              {[40, 70, 50, 90, 60].map((h, i) => (
                <motion.div key={i} initial={{ height: 0 }} animate={{ height: h }} transition={{ delay: i * 0.1 }} className="w-4 rounded-t-full" style={{ background: currentTheme.accent }} />
              ))}
            </div>
            <ServiceText title="Local Search Authority" benefit="I rank your business #1 on Google Maps and Search. This brings 24/7 organic traffic without paying for eveI rank your business #1 on Google. I drive organic growth so you dominate your local market without relying on expensive ads.r" />
          </motion.section>
        )}y click.

        {/* --- SMM VIEW --- */}
        {view === 'smm' && (
          <motion.section key="smm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen flex flex-col justify-center items-center">
            <div className="relative">
              <Share2 size={80} style={{ color: currentTheme.accent }} />
              {[
                {Icon: Facebook, color: '#1877F2'}, {Icon: Instagram, color: '#E4405F'}, 
                {Icon: ThumbsUp, color: '#ff7eb9'}, {Icon: Heart, color: '#ff4d4d'},
                {Icon: MessageSquare, color: '#55efab'}, {Icon: Send, color: '#4db8ff'}
              ].map(({Icon, color}, i) => (
                <motion.div key={i} initial={{ scale: 0, opacity: 1 }} animate={{ y: -150, x: (i - 2.5) * 60, scale: 1.2, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }} className="absolute inset-0 flex justify-center items-center">
                  <Icon size={32} style={{ color }} />
                </motion.div>
              ))}
            </div>
            <ServiceText title="Engagement Ecosystem" benefit="I don't just post; I create viral buzz. By automating likes, shares, and comments, I ensure your brand stays top-of-mind for every customer." />
          </motion.section>
        )}

        {/* --- ADS VIEW --- */}
        {view === 'ads' && (
          <motion.section key="ads" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen flex flex-col justify-center items-center px-10">
            <div className="w-full max-w-2xl bg-white/5 border border-white/10 p-12 rounded-[50px] backdrop-blur-3xl">
              <div className="flex justify-between items-end mb-8">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-6xl font-black">8.4X ROI</motion.span>
                <TrendingUp size={48} style={{ color: currentTheme.accent }} />
              </div>
              <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={{ width: "84%" }} transition={{ duration: 2 }} className="h-full" style={{ background: currentTheme.accent }} />
              </div>
            </div>
            <ServiceText title="The Revenue Multiplier" benefit="Aggressive Google and Meta ads focused only on high-value bookings. We turn £1 of ad spend into £8.40 of revenue." />
          </motion.section>
        )}

        {/* --- BRAND-CONSISTENT BLOG VIEW --- */}
        {view === 'blog' && (
          <motion.section 
            key="blog" 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -50 }}
            className="pt-40 pb-20 px-10 max-w-7xl mx-auto min-h-screen overflow-y-auto"
          >
            {/* BLOG HEADER */}
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-6xl font-black uppercase tracking-tighter italic"
              >
                LATEST <span style={{ color: '#00ac62' }}>INSIGHTS</span>
              </motion.h2>
              <p className="text-[10px] font-black tracking-[0.5em] opacity-40 uppercase mt-4">
                Strategies for the UK Restaurant Ecosystem
              </p>
            </div>

            {/* BLOG CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ 
                    y: -15,
                    rotateX: 5,
                    rotateY: -5,
                    boxShadow: "0 20px 40px rgba(0, 172, 98, 0.2)" // Emerald Glow
                  }}
                  className="relative group p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  {/* READING TIME BADGE */}
                  <div className="absolute top-6 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Clock size={12} className="opacity-40" />
                    <span className="text-[8px] font-black tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: '#00ac62' }}>
                      {i * 2 + 3} MIN READ
                    </span>
                  </div>

                  {/* BACKGROUND SPOTLIGHT EFFECT (Emerald) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ac62]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    {/* ICON BOX */}
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#00ac62]/50 transition-colors">
                      <BookOpen size={24} className="opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: '#00ac62' }} />
                    </div>
                    
                    {/* TITLE */}
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">
                      INSIGHT <span style={{ color: '#00ac62' }}>#{i}</span>
                    </h3>
                    
                    {/* DESCRIPTION */}
                    <p className="text-sm opacity-50 mb-10 leading-relaxed uppercase font-bold tracking-widest">
                      DIGITAL STRATEGY TRENDS FOR UK BASED RESTAURANT ECOSYSTEMS.
                    </p>
                    
                    {/* CTA LINK */}
                    <motion.div 
                      className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase"
                      style={{ color: '#00ac62' }}
                    >
                      <span>READ FULL CASE STUDY</span>
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </motion.div>
                  </div>

                  {/* BOTTOM GLOW LINE */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ac62] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
        {/* --- ABOUT VIEW WITH INFINITE PORTFOLIO SLIDER --- */}
        {view === 'about' && (
          <motion.section key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="pt-40 pb-20 px-10 max-w-7xl mx-auto min-h-screen overflow-y-auto">
            
            {/* TOP SECTION: STORY & BRAND ORBIT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
              <motion.div initial={{ x: -50 }} animate={{ x: 0 }}>
                <h2 className="text-6xl font-black mb-8 uppercase tracking-tighter">MY <span style={{ color: currentTheme.accent }}>STORY</span></h2>
                <p className="text-xl opacity-70 leading-relaxed mb-8 uppercase font-bold tracking-widest">
                  I MANAGE DIGITAL STRATEGIES AT TALENTPULL UK, DELIVERING GLOBAL MARKETING EXCELLENCE FROM SYLHET.
                </p>
                <div className="p-8 bg-white/5 rounded-[40px] border-l-8" style={{ borderColor: currentTheme.accent }}>
                  <Trophy className="mb-4" size={32} style={{ color: currentTheme.accent }} />
                  <h4 className="font-black text-xl uppercase mb-2">PROVEN SUCCESS</h4>
                  <p className="opacity-60 italic leading-relaxed uppercase text-xs tracking-widest">
                    SUCCESSFULLY SCALED 20+ BUSINESSES USING AN AUTOMATED MARKETING ECOSYSTEM.
                  </p>
                </div>
              </motion.div>
              
              {/* BRAND ORBIT SECTION */}
              <div className="relative flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-[350px] h-[350px] border border-white/5 rounded-full flex items-center justify-center relative">
                  <motion.div className="absolute top-0 p-4 bg-[#4285F4] rounded-full shadow-lg"><Search size={20} color="white" /></motion.div>
                  <motion.div className="absolute right-0 p-4 bg-[#1877F2] rounded-full shadow-lg"><Facebook size={20} color="white" /></motion.div>
                  <motion.div className="absolute bottom-0 p-4 bg-[#00ac62] rounded-full shadow-lg"><TrendingUp size={20} color="white" /></motion.div>
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-white/5 flex items-center justify-center">
                    <span className="text-[10px] font-black opacity-20 uppercase tracking-widest text-center px-4">MUHIN PHOTO</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* INFINITE SLIDER SECTION */}
            <div className="mb-40 overflow-hidden relative">
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 px-4">SUCCESSFUL <span style={{ color: currentTheme.accent }}>PROJECTS</span></h3>
              <p className="text-xs font-black tracking-[0.4em] opacity-40 uppercase mb-12 px-4">20+ UK RESTAURANT TRANSFORMATIONS</p>
              
              {/* FIRST ROW: MOVING LEFT */}
              <div className="flex w-max gap-6 mb-6">
                <motion.div 
                  animate={{ x: [0, -1000] }} 
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex gap-6"
                >
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-80 h-48 bg-white/5 rounded-[30px] border border-white/10 flex-shrink-0 flex items-center justify-center hover:border-white/30 transition-all cursor-pointer group">
                      <span className="text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Project {i + 1}</span>
                    </div>
                  ))}
                </motion.div>
                {/* Duplicate for infinite loop */}
                <motion.div 
                  animate={{ x: [0, -1000] }} 
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex gap-6"
                >
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-80 h-48 bg-white/5 rounded-[30px] border border-white/10 flex-shrink-0 flex items-center justify-center">
                      <span className="text-[10px] font-black opacity-20 uppercase tracking-widest">Project {i + 1}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* TESTIMONIALS SECTION */}
            <div className="mt-20">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-12 text-center">CLIENT <span style={{ color: currentTheme.accent }}>FEEDBACK</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: "LONDON RESTAURANT OWNER", text: "MUHIN'S AD STRATEGY COMPLETELY TRANSFORMED OUR BOOKINGS." },
                  { name: "MANCHESTER DINERY", text: "THE BEST LOCAL SEO ECOSYSTEM WE HAVE EVER IMPLEMENTED." }
                ].map((testimonial, i) => (
                  <motion.div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-xl">
                    <div className="flex gap-1 mb-4">
                       {[...Array(5)].map((_, star) => <Heart key={star} size={14} fill={currentTheme.accent} style={{ color: currentTheme.accent }} />)}
                    </div>
                    <p className="text-sm italic opacity-70 mb-6 tracking-widest uppercase">"{testimonial.text}"</p>
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40">— {testimonial.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
    
        {/* --- CONTACT VIEW (LEAD FORM & DIRECT CONNECT) --- */}
        {view === 'contact' && (
          <motion.section key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-10 flex flex-col items-center min-h-screen overflow-y-auto">
            
            <motion.h2 initial={{ y: -20 }} animate={{ y: 0 }} className="text-6xl font-black uppercase mb-4 italic text-center">GET IN TOUCH</motion.h2>
            <p className="text-[10px] font-black tracking-[0.5em] opacity-40 uppercase mb-16 text-center">Let's Scale Your Brand Together</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
              
              {/* LEFT: DIRECT CONNECT (SOCIALS) */}
              <div className="flex flex-col justify-start gap-8">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2" style={{ color: currentTheme.accent }}>DIRECT CONNECT</h3>
                  <p className="text-xs font-bold opacity-40 uppercase tracking-widest mb-8">Chat with me personally on social media</p>
                </div>
                
                <div className="flex flex-wrap gap-6">
                  {[
                    {Icon: Facebook, label: 'FACEBOOK', color: '#1877F2', link: '#'},
                    {Icon: Instagram, label: 'INSTAGRAM', color: '#E4405F', link: '#'},
                    {Icon: Linkedin, label: 'LINKEDIN', color: '#0A66C2', link: '#'},
                    {Icon: MessageCircle, label: 'WHATSAPP', color: '#25D366', link: '#'}
                  ].map((social, i) => (
                    <motion.a key={i} href={social.link} whileHover={{ y: -10, scale: 1.05 }} 
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all min-w-[200px]">
                      <div className="p-3 rounded-xl bg-white/5" style={{ color: social.color }}>
                        <social.Icon size={20} />
                      </div>
                      <span className="text-[10px] font-black tracking-widest">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* RIGHT: CONSULTANCY (FORM) */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2" style={{ color: '#ff7eb9' }}>CONSULTANCY</h3>
                  <p className="text-xs font-bold opacity-40 uppercase tracking-widest mb-8">Fill the form for a discovery call</p>
                </div>

                <motion.form initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                  className="bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-xl space-y-6 shadow-2xl">
                  
                  <div className="relative group">
                    <User className="absolute left-4 top-4 opacity-20 group-focus-within:opacity-100 transition-opacity" size={18} />
                    <input type="text" placeholder="FULL NAME" className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-[#ff7eb9] transition-all text-[10px] font-black tracking-widest" />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-4 opacity-20 group-focus-within:opacity-100 transition-opacity" size={18} />
                    <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-[#ff7eb9] transition-all text-[10px] font-black tracking-widest" />
                  </div>

                  <div className="relative group">
                    <Phone className="absolute left-4 top-4 opacity-20 group-focus-within:opacity-100 transition-opacity" size={18} />
                    <input type="text" placeholder="WHATSAPP NUMBER" className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-[#ff7eb9] transition-all text-[10px] font-black tracking-widest" />
                  </div>

                  <div className="relative group">
                    <Clock className="absolute left-4 top-4 opacity-20 group-focus-within:opacity-100 transition-opacity" size={18} />
                    <input type="text" placeholder="PREFERRED CONSULTANCY TIME" className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl outline-none focus:border-[#ff7eb9] transition-all text-[10px] font-black tracking-widest" />
                  </div>

                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-[#ff7eb9] text-black font-black uppercase tracking-[0.3em] rounded-2xl shadow-[0_0_30px_rgba(255,126,185,0.3)]">
                    Book Session
                  </motion.button>
                </motion.form>
              </div>

            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="w-full py-10 text-center text-[10px] tracking-[0.4em] font-black opacity-20 uppercase border-t border-white/5 mt-auto">
  © 2026 MUHIN WAVE - DIGITAL MARKETER
</footer>
    </main>
  );
}

export default AgencySite;