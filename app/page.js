"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Share2, MousePointerClick, Heart, ChevronDown, 
  Home, Info, Phone, BookOpen, ArrowRight, X, Trophy,
  Facebook, Instagram, Linkedin, MessageCircle, Pin
} from 'lucide-react';

function AgencySite() {
  const [view, setView] = useState('home');

  const themes = {
    home: { bg: 'bg-[#0F0F0F]', accent: '#00ac62' },
    blog: { bg: 'bg-[#0a0a0a]', accent: '#3b82f6' },
    about: { bg: 'bg-[#1a2c24]', accent: '#55efab' },
    contact: { bg: 'bg-[#0a0a0a]', accent: '#ff7eb9' }
  };

  const currentTheme = themes[view] || themes.home;

  return (
    <main className={`min-h-screen transition-colors duration-1000 ${currentTheme.bg} text-white selection:bg-white selection:text-black overflow-hidden`}>
      
      {/* --- DYNAMIC NAV BAR --- */}
      <nav className="fixed w-full z-[100] py-6 px-10 flex justify-between items-center backdrop-blur-md">
        <div className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => setView('home')}>
          MUHIN<span style={{ color: currentTheme.accent }}>.WAVE</span>
        </div>
        <div className="flex gap-8 text-[11px] font-bold tracking-[0.3em] uppercase opacity-60">
          {['home', 'blog', 'about', 'contact'].map((item) => (
            <button key={item} onClick={() => setView(item)} className={`hover:opacity-100 transition-opacity ${view === item ? 'opacity-100' : ''}`}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {/* --- HOME VIEW --- */}
        {view === 'home' && (
          <motion.section key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="h-screen flex flex-col justify-center items-center px-6 relative">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
               <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }}
                 className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ background: currentTheme.accent }} />
            </div>
            <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }} className="text-8xl font-black tracking-tighter text-center">
              WHO IS <span style={{ color: currentTheme.accent }}>MUHIN?</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-6 max-w-xl text-center text-lg opacity-60 leading-relaxed font-medium">
              I am a Digital Marketing Manager based in Sylhet. I specialize in scaling UK-based restaurants through high-conversion Google Ads and Local SEO ecosystems.
            </motion.p>
          </motion.section>
        )}

        {/* --- BLOG VIEW (Stylish Cards) --- */}
        {view === 'blog' && (
          <motion.section key="blog" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
            className="pt-32 px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center" style={{ backgroundColor: currentTheme.accent }}>
                  <BookOpen size={20} color="black" />
                </div>
                <h3 className="text-xl font-bold mb-4">Marketing Insight #{i}</h3>
                <p className="text-sm opacity-50 mb-6">How we increased ROI for Talentpull UK clients by 400% using targeted meta ads.</p>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                  Read More <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </motion.section>
        )}

        {/* --- ABOUT & SUCCESS --- */}
        {view === 'about' && (
          <motion.section key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 px-10 grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-black mb-8">MY STORY</h2>
              <p className="opacity-70 leading-relaxed mb-6">Working with Talentpull UK, I've mastered the "Restaurant Ecosystem"—a blend of automation and advertising that keeps tables full.</p>
              <div className="p-6 bg-white/5 rounded-xl border-l-4" style={{ borderColor: currentTheme.accent }}>
                <Trophy className="mb-2" />
                <h4 className="font-bold">Recent Success</h4>
                <p className="text-sm opacity-60 italic">"Ranked #1 for 15+ London Restaurants in 3 months."</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="w-64 h-64 border-2 border-dashed rounded-full border-white/20 flex items-center justify-center">
                 <div className="w-40 h-40 rounded-full bg-white/10 flex items-center justify-center font-black">RESULTS</div>
               </motion.div>
            </div>
          </motion.section>
        )}

        {/* --- CONTACT & SOCIALS --- */}
        {view === 'contact' && (
          <motion.section key="contact" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-screen flex flex-col justify-center items-center">
            <h2 className="text-6xl font-black mb-12">CONNECT</h2>
            <div className="flex gap-10">
              {[
                { icon: <Facebook />, label: 'FB', color: '#1877F2' },
                { icon: <Instagram />, label: 'IG', color: '#E4405F' },
                { icon: <Linkedin />, label: 'IN', color: '#0A66C2' },
                { icon: <Pin />, label: 'PT', color: '#BD081C' },
                { icon: <MessageCircle />, label: 'WA', color: '#25D366' }
              ].map((social) => (
                <motion.a key={social.label} href="#" whileHover={{ y: -15, scale: 1.2 }} className="flex flex-col items-center gap-3">
                  <div className="p-5 rounded-full bg-white/5 border border-white/10 hover:border-white/40 transition-colors" style={{ color: social.color }}>
                    {social.icon}
                  </div>
                  <span className="text-[10px] font-black opacity-40">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="fixed bottom-10 w-full text-center text-[10px] tracking-[0.4em] font-black opacity-20 uppercase">
        © 2026 MUHIN WAVE - SYLHET
      </footer>
    </main>
  );
}

export default AgencySite;