import React from 'react';

const Mandates: React.FC = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4 tracking-wider">
          Our Mandates
        </h2>
        <div className="h-0.5 w-24 bg-[#C68E59]"></div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 relative border border-white/10">
        {/* Column 1: The Partnership */}
        <div className="group relative p-6 md:p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col h-full hover:backdrop-blur-xl">
           <div className="hidden md:block absolute right-[-1px] top-0 bottom-0 w-[1px] bg-white/10 transition-all duration-500 z-20 group-hover:bg-[#C68E59] group-hover:shadow-[0_0_15px_rgba(198,142,89,0.6)]"></div>
          <h3 className="text-xl md:text-2xl font-serif font-bold uppercase tracking-wide mb-4 group-hover:text-[#C68E59] transition-colors duration-300">
            THE PARTNERSHIP <span className="block text-base md:text-lg font-normal normal-case opacity-70 mt-1">(Retainer)</span>
          </h3>
          <p className="text-sm md:text-base font-sans font-medium text-gray-400 leading-relaxed flex-grow">
            Monthly Visual Governance.
          </p>
        </div>

        {/* Column 2: The Exclusive */}
        <div className="group relative p-6 md:p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col h-full hover:backdrop-blur-xl">
           <div className="hidden md:block absolute right-[-1px] top-0 bottom-0 w-[1px] bg-white/10 transition-all duration-500 z-20 group-hover:bg-[#C68E59] group-hover:shadow-[0_0_15px_rgba(198,142,89,0.6)]"></div>
          <h3 className="text-xl md:text-2xl font-serif font-bold uppercase tracking-wide mb-4 group-hover:text-[#C68E59] transition-colors duration-300">
            THE EXCLUSIVE <span className="block text-base md:text-lg font-normal normal-case opacity-70 mt-1">(Bespoke)</span>
          </h3>
          <p className="text-sm md:text-base font-sans font-medium text-gray-400 leading-relaxed flex-grow">
            One-of-One Deliverables.
          </p>
        </div>

        {/* Column 3: Asset Valuation */}
        <div className="group relative p-6 md:p-10 flex flex-col h-full hover:backdrop-blur-xl">
          <h3 className="text-xl md:text-2xl font-serif font-bold uppercase tracking-wide mb-4 group-hover:text-[#C68E59] transition-colors duration-300">
            ASSET VALUATION <span className="block text-base md:text-lg font-normal normal-case opacity-70 mt-1">(Real Estate)</span>
          </h3>
          <p className="text-sm md:text-base font-sans font-medium text-gray-400 leading-relaxed flex-grow">
            Visual Correction for 10M+ AED Properties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mandates;
