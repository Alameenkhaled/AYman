"use client";

import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [dubaiTime, setDubaiTime] = useState('');

  useEffect(() => {
    const updateDubaiTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const timeString = new Date().toLocaleTimeString('en-US', options);
      setDubaiTime(timeString);
    };

    const intervalId = setInterval(updateDubaiTime, 1000);
    updateDubaiTime(); // Initial call

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="relative pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-black text-gray-100">
      <div className="mb-24 border-b border-gray-800 pb-12">
        <h1 className="font-stencil text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter text-center">
          The Gate <span className="text-[#C68E59]">is Narrow</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 font-sans font-light tracking-wide text-sm">
        {/* Contact Column */}
        <div>
          <h3 className="text-[#C68E59] uppercase tracking-[0.2em] text-xs font-bold mb-2">Contact</h3>
          <div className="space-y-4 text-gray-400">
            <p>concierge@aneef.com</p>
            <p>+971 4 123 4567</p>
            <div className="pt-8 mt-2 border-t border-gray-800 w-3/4">
              <h3 className="text-[#C68E59] uppercase tracking-[0.2em] text-[10px] font-bold mb-3">Live Time / DXB</h3>
              <p className="font-mono text-xl font-medium text-white tracking-widest tabular-nums">{dubaiTime || '--:--:--'}</p>
            </div>
          </div>
        </div>
        {/* Stalk Column */}
        <div>
          <h3 className="text-[#C68E59] uppercase tracking-[0.2em] text-xs font-bold mb-2">Stalk</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-[#C68E59] transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-[#C68E59] transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-[#C68E59] transition-colors">Behance</a></li>
            <li><a href="#" className="hover:text-[#C68E59] transition-colors">Twitter / X</a></li>
          </ul>
        </div>
        {/* Links Column */}
        <div>
          <h3 className="text-[#C68E59] uppercase tracking-[0.2em] text-xs font-bold mb-2">Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
            <li><a href="#" className="hover:text-white transition-colors">The Archive</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Selected Works</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Private Access</a></li>
          </ul>
        </div>
        {/* Legal Column */}
        <div>
          <h3 className="text-[#C68E59] uppercase tracking-[0.2em] text-xs font-bold mb-2">Legal</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-[#C68E59] transition-colors">Imprint</a></li>
            <li><a href="#" className="hover:text-[#C68E59] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#C68E59] transition-colors">Terms of Service</a></li>
            <li className="pt-4 text-xs opacity-50">© 2024 Aneef Visual Sovereignty.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
