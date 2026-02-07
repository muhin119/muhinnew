"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Share2, MousePointerClick, Heart, ChevronDown, Home, Info, Phone, BookOpen, ArrowRight, X, Trophy } from 'lucide-react';

function AgencySite() {  const [view, setView] = useState('home'); 

  // Themes that change the whole screen color based on selection
  const themes = {
    home: { bg: 'bg-[#0F0F0F]', accent: '#00ac62' },
    seo: { bg: 'bg-[#1a2c24]', accent: '#55efab' },
    smm: { bg: 'bg-[#2d1b33]', accent: '#ff7eb9' },
    ads: { bg: 'bg-[#1b2733]', accent: '#4db8ff' },
    about: { bg: 'bg-[#0F0F0F]', accent: '#00ac62' },
    contact: { bg: 'bg-[#0a0a0a]', accent: '#00ac62' }
  };

  const currentTheme = themes[view];

  return (
    <main className={`min-h-screen transition-colors duration-1000 ${currentTheme.bg} text-white selection:bg-[#00ac62] selection:text-black overflow-hidden font-sans`}>
      
      {/* --- DYNAMIC NAV BAR --- */}
      <nav className="fixed w-full z-[100] py-6 px-10 flex justify-between items-center backdrop-blur-md bg-black/10 border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter cursor-pointer" onClick={() => setView('home')}>
          MUHIN<span style={{ color: currentTheme.accent }}>.WAVE</span>
        </div>

        <div className="hidden md:flex gap-10 items-center font-bold text-[11px] tracking-[0.2em] uppercase">
          <button onClick={() => setView('home')} className="hover:text-[#00ac62] transition-colors flex items-center gap-2 font-black uppercase"><Home size={14}/> Home</button>
          <button className="hover:text-[#00ac62] transition-colors flex items-center gap-2 font-black uppercase"><BookOpen size={14}/> Blog</button>
          <button onClick={() => setView('about')} className="hover:text-[#00ac62] transition-colors flex items-center gap-2 font-black uppercase"><Info size={14}/> About</button>
          
          {/* Services with Sub-menu */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#00ac62] transition-colors font-black uppercase">Services <ChevronDown size={14}/></button>
            <div className="absolute top-full left-0 pt-4 hidden group-hover:block">
              <div className="bg-[#161616] border border-white/10 p-5 rounded-3xl w-52 shadow-2xl">
                <button onClick={() => setView('seo')} className="block w-full text-left py-2.5 hover:text-[#55efab] transition-all font-black uppercase">SEO Mastery</button>
                <button onClick={() => setView('smm')} className="block w-full text-left py-2.5 hover:text-[#ff7eb9] transition-all font-black uppercase">SMM Growth</button>
                <button onClick={() => setView('ads')} className="block w-full text-left py-2.5 hover:text-[#4db8ff] transition-all font-black uppercase">Google Ads</button>
              </div>
            </div>
          </div>

          <button onClick={() => setView('contact')} className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-[#00ac62] hover:text-black transition-all font-black uppercase">Contact</button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        
        {/* --- HOME VIEW --- */}
        {view === 'home' && (
          <motion.section key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.9] uppercase">Digital <br/><span style={{ color: currentTheme.accent }}>Wave.</span></h1>
            <p className="mt-8 text-gray-500 tracking-[0.5em] font-black uppercase text-xs">Manager at Talentpull | Expert Digital Marketer</p>
          </motion.section>
        )}

        {/* --- SEO VISUAL DIRECTION --- */}
        {view === 'seo' && (
          <motion.section key="seo" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} className="h-screen flex flex-col md:flex-row items-center justify-center gap-20 px-20">
            <div className="flex-1 relative h-64 w-full flex justify-center items-center">
              <motion.div animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute text-[#55efab] opacity-20"><Search size={200}/></motion.div>
              <div className="flex items-end gap-3">
                {[50, 80, 60, 100, 75, 90].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: h }} transition={{ delay: i*0.1 }} className="w-10 bg-[#55efab] rounded-t-xl shadow-[0_0_20px_#55efab]" />
                ))}
              </div>
            </div>
            <div className="flex-1 max-w-xl">
              <h2 className="text-6xl font-black mb-6 uppercase tracking-tight">SEO Direction</h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">"Our crawlers scan your structure. Keywords are mapped. Your rankings rise as a visual trend."</p>
            </div>
          </motion.section>
        )}

        {/* --- SMM VISUAL DIRECTION --- */}
        {view === 'smm' && (
          <motion.section key="smm" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="h-screen flex flex-col items-center justify-center px-6 text-center">
            <div className="relative mb-12">
               <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[#ff7eb9]"><Share2 size={120}/></motion.div>
               {[...Array(8)].map((_, i) => (
                 <motion.div key={i} animate={{ opacity: [0, 1, 0], y: -180, x: Math.random() * 400 - 200 }} transition={{ repeat: Infinity, duration: 2.5, delay: i*0.3 }} className="absolute top-0 text-[#ff7eb9]"><Heart fill="currentColor" size={24}/></motion.div>
               ))}
            </div>
            <h2 className="text-6xl font-black mb-6 uppercase">SMM Growth</h2>
            <p className="text-xl text-gray-300 max-w-2xl font-medium">Every post triggers a reaction. We visualize your brand engagement as it spreads across the digital landscape.</p>
          </motion.section>
        )}

        {/* --- GOOGLE ADS VISUAL DIRECTION --- */}
        {view === 'ads' && (
          <motion.section key="ads" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="h-screen flex flex-col md:flex-row items-center justify-center gap-20 px-20">
            <div className="flex-1 text-right">
              <h2 className="text-6xl font-black mb-6 uppercase tracking-tighter">Ads Performance</h2>
              <p className="text-xl text-gray-300 italic">"Targeted CPC. High-intent ROI engine."</p>
            </div>
            <div className="flex-1 bg-black/30 p-12 rounded-[50px] border border-white/10 w-full max-w-lg shadow-2xl">
               <div className="flex justify-between items-end mb-6">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4db8ff]">ROI Multiplier</span>
                 <span className="text-6xl font-black">8.4x</span>
               </div>
               <div className="w-full bg-white/5 h-5 rounded-full overflow-hidden mb-10">
                 <motion.div initial={{ width: 0 }} animate={{ width: '84%' }} transition={{ duration: 2.5 }} className="h-full bg-[#4db8ff] shadow-[0_0_30px_#4db8ff]" />
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5 text-center"><div className="text-[#4db8ff] font-black text-2xl tracking-tighter">LOW CPC</div></div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5 text-center"><div className="text-[#4db8ff] font-black text-2xl tracking-tighter">HIGH CTR</div></div>
               </div>
            </div>
          </motion.section>
        )}
</AnimatePresence>

<footer className="fixed bottom-10 w-full text-center text-[10px] tracking-[0.4em] font-black opacity-20 uppercase">
  © 2026 MUHIN.WAVE - Digital Marketing Manager in Sylhet
</footer>
</main>
);
}

export default AgencySite;