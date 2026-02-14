"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  
  Search, Share2, Heart, ChevronDown, Trophy,
  Facebook, Instagram, Linkedin, MessageCircle, Pin, TrendingUp,
  MessageSquare, ThumbsUp, Send, Target, BarChart, User, Mail, Phone, Clock, BookOpen, ArrowRight
} from 'lucide-react';
const themes = {
  home: { bg: 'bg-[#0F0F0F]', accent: '#00ac62' },
  seo: { bg: 'bg-[#0a0a0a]', accent: '#00ac62' },
  smm: { bg: 'bg-[#0a0a0a]', accent: '#00ac62' },
  ads: { bg: 'bg-[#0a0a0a]', accent: '#00ac62' },
  blog: { bg: 'bg-[#0a0a0a]', accent: '#00ac62' },
  about: { bg: 'bg-[#0a0a0a]', accent: '#00ac62' },
  contact: { bg: 'bg-[#0a0a0a]', accent: '#00ac62' }
};
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
  // 1. STATE DEFINITION
  const [view, setView] = useState('home');

  // 2. CRITICAL FIX: Define currentTheme INSIDE the function
  const currentTheme = themes[view] || themes.home;

  // 3. INTERNAL COMPONENT (Using currentTheme correctly)
  const ServiceText = ({ title, benefit }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.5 }}
      className="mt-12 max-w-2xl text-center px-6"
    >
      <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter" style={{ color: currentTheme.accent }}>
        {title}
      </h3>
      <p className="text-sm opacity-60 leading-relaxed uppercase tracking-widest font-bold">
        {benefit}
      </p>
    </motion.div>
  );

  return (
    <main className={`min-h-screen transition-colors duration-1000 ${currentTheme.bg} text-white selection:bg-[#00ac62] selection:text-black overflow-x-hidden flex flex-col relative`}>
      
      {/* BACKGROUND GLOW - FIXED FOR MOBILE */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[130vw] h-[130vw] rounded-full blur-[100px]"
          style={{ background: `radial-gradient(circle, ${currentTheme.accent} 0%, transparent 70%)` }}
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Your content will show up here now without errors */}
        {view === 'home' && (
          <h1 className="text-[12vw] md:text-[8rem] font-black tracking-tighter uppercase text-center">
            MUHIN<span style={{ color: currentTheme.accent }}>WAVE</span>
          </h1>
        )}
      </div>

    </main>
  );
}

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

    {/* --- ULTRA-DYNAMIC LOCAL SEO MASTERED --- */}
{view === 'seo' && (
  <motion.section 
    key="seo" 
    initial={{ opacity: 0, y: 30 }} 
    animate={{ opacity: 1, y: 0 }}
    className="w-full max-w-[1400px] mx-auto px-6 py-24 flex flex-col lg:flex-row-reverse items-center justify-between gap-16"
  >
    {/* Right: Geographic Scanning Hub */}
    <div className="relative w-full lg:w-[60%] h-[450px] bg-[#0a0a0a] rounded-[3rem] border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#00ac62 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      
      <div className="relative w-full flex justify-center items-center gap-6 md:gap-12 px-6">
        {[
          { Icon: MapPin, label: "MAPS" },
          { Icon: Navigation, label: "TRAFFIC" },
          { Icon: Utensils, label: "DINING" }
        ].map((item, i) => (
          <React.Fragment key={i}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.8 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-[#00ac62]/30 flex items-center justify-center bg-black">
                <item.Icon size={32} className="text-[#00ac62]" />
              </div>
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] text-[#00ac62] uppercase">{item.label}</span>
            </motion.div>
            
            {i < 2 && (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: 60 }} // FIXED: Using a plain number that works on all screens
    transition={{ delay: i * 0.8 + 0.4, duration: 0.5 }}
    className="h-[2px] bg-gradient-to-r from-[#00ac62] to-transparent"
  />
)}
          </React.Fragment>
        ))}
      </div>
    </div>

    {/* Left: Content Area */}
    <div className="w-full lg:w-[35%] text-left space-y-8">
      <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
        SEO <br/> <span style={{ color: '#00ac62' }}>MASTERY</span>
      </h3>
      <p className="text-xl text-white/50 leading-relaxed font-medium">
        We bridge the gap between a digital map search and a physical restaurant booking. Total geographic authority.
      </p>
    </div>
  </motion.section>
)}
        {/* --- ULTRA-DYNAMIC SMM VIRAL HUB --- */}
{view === 'smm' && (
  <motion.section 
    key="smm" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    className="relative flex flex-col items-center justify-center min-h-[500px] py-12"
  >
    <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center">
      
      {/* 1. THE CORE: Your Brand Strategy Hub */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: ["0 0 20px #00ac62", "0 0 60px #00ac62", "0 0 20px #00ac62"] 
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="z-20 w-28 h-28 bg-[#00ac62] rounded-[2.5rem] flex items-center justify-center text-black shadow-lg"
      >
        <Share2 size={48} strokeWidth={2.5} />
      </motion.div>

      {/* 2. THE CHANNELS: Orbital Social Nodes */}
      {[
        { Icon: Facebook, color: '#1877F2', delay: 0 },
        { Icon: Instagram, color: '#E4405F', delay: 1 },
        { Icon: Linkedin, color: '#0A66C2', delay: 2 },
        { Icon: MessageCircle, color: '#25D366', delay: 3 }
      ].map((social, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
          className="absolute w-[260px] md:w-[320px] h-[260px] md:h-[320px] rounded-full border border-white/5"
        >
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }} // Keeps icons upright
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
          >
            {/* The Neon Icon Card */}
            <div 
              className="p-4 bg-black/80 border rounded-2xl backdrop-blur-xl shadow-xl transition-all hover:scale-125"
              style={{ borderColor: `${social.color}66`, color: social.color }}
            >
              <social.Icon size={28} />
              
              {/* Dynamic Data Beam */}
              <motion.div 
                animate={{ height: [0, 80, 0], opacity: [0, 0.8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: social.delay }}
                className="w-[2px] mx-auto mt-2 bg-gradient-to-t from-current to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>

    {/* 3. BRANDING TEXT: UK Restaurant Focus */}
    <div className="mt-12 text-center z-10">
      <h3 className="text-4xl font-black tracking-tighter uppercase mb-4">
        Engagement <span style={{ color: '#00ac62' }}>Ecosystem</span>
      </h3>
      <p className="text-white/60 max-w-md mx-auto text-lg leading-relaxed px-6">
        We don't just post; we create viral momentum that turns followers into 
        <span className="text-white font-bold"> restaurant bookings.</span>
      </p>
    </div>
  </motion.section>
)}

{/* --- ULTRA-DYNAMIC ADS ENGINE --- */}
{view === 'ads' && (
  <motion.section 
    key="ads" 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }}
    className="w-full max-w-[1400px] mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16"
  >
    {/* Left: Cinematic ROI Visual */}
    <div className="relative w-full lg:w-[60%] h-[450px] bg-[#0a0a0a] rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden flex items-end p-12">
      {/* Dynamic ROI Line */}
      <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 5 95 C 10 95, 30 95, 45 60 C 60 25, 85 5, 95 5"
          fill="none"
          stroke="#00ac62"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
        <motion.path
          d="M 5 95 C 10 95, 30 95, 45 60 C 60 25, 85 5, 95 5"
          fill="none"
          stroke="#00ac62"
          strokeWidth="4"
          className="blur-md"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </svg>
      
      <div className="relative z-10 w-full flex justify-between items-end">
        <div className="space-y-1">
          <span className="text-[10px] font-black tracking-[0.4em] opacity-30 uppercase">Investment Phase</span>
          <div className="text-2xl font-black">£0.00</div>
        </div>
        <div className="text-right">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="text-8xl md:text-9xl font-black text-[#00ac62] tracking-tighter leading-none"
          >
            <LiveNumber value="8.4" suffix="X" />
          </motion.div>
          <span className="text-xs font-black tracking-[0.5em] text-white/40 uppercase">Maximum ROI Upgrade</span>
        </div>
      </div>
    </div>

    {/* Right: Copy Content */}
    <div className="w-full lg:w-[35%] text-left space-y-8">
      <h3 className="text-6xl font-black tracking-tighter leading-[0.9] uppercase">
        MONEY <br/> <span style={{ color: '#00ac62' }}>PRINTER</span>
      </h3>
      <p className="text-xl text-white/50 leading-relaxed font-medium">
        We upgrade your current Google Ads from a cost-center into a high-precision revenue machine.
      </p>
    </div>
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