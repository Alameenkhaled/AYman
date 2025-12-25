"use client";
import React, { useRef, useEffect } from 'react';

const portfolioData = [
    {
        category: "SOVEREIGNTY",
        title: "The Obsidian Tower",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXiooNDz4eSfd9Xh2P8vZdvBXf6hT_G6bKB8hACfhR40g2VAUG51cKUd_UXusvd8zpRRqFpjD1eLfdRm_Ly5rqUE6yx_ijiPS5UDg2DylE5Do_zyd1aYV7Gun43--U8ivof5kmDruZC6RcHqtPTlhOTk9qwe1ErnnBPjXwMt0NlbdproM0Gx1zNARCfManmuhSrGHjo5vnpkNxaFbdl8aIyycS7X-c_shVBqMtyRYUjvD5KQhNvsZq9RDVjgc8_2rQKu1N_AgRC_3-"
    },
    {
        category: "LEGACY",
        title: "Silent Dynasty",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3snIZHHP53RfPFwpqVMg92NFf9TeYutz1F8y9P9nP3ocXIxtuDr7qWrPD3xQeQDZzDCCGr0m3-Rp1Dmugfg5QkVXttdswxGPRYDgALnn-Lxk_pLvr7xKFWbjPQSQS2qcYypfgJilo4njcZMv4wojlt2WHF5RDRRJNTHVkjqfmtegv1HLcOz7DEGSqaiJLkiiT8-OXahYAJT3psSFhJiThvM2rWl2oXfnwAjYYE2A_chvuoySL-kPFL1Hz2i-XX12fVFJMy4VxRbi0"
    },
    {
        category: "ESTATES",
        title: "Concrete Eden",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIsIsFqvHjD9b8xsooPYyhTsN39t9_B7DEiQg0oP88a2Cwi5EWHjVyqHtM63NaozZI0bXtaydtyh00M5rZ9nMnaWRu3eknc1yDchJKbF4kwKAmUmZjP5RadbbYVLqfiAcv5MGqset7vd5JVk8z9uhbCN-5-KEeNmdFHZtfGUHFg0Xp2ReeKAhp4S_ahVh3qyVbzmfAQcz37LQ53BADtX2RFm4RcwZKa-kGC8QEa3oyHcQKdyryG1UcT7japyb4gC5S8Cc9i-H5ICq5"
    },
    {
        category: "AUTHORITY",
        title: "Time & Steel",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkHHyIIYbQC_mB8mUEPN2DWkaRkn3tXC4ZG73ndadud2ch_HI6wmHlpQejnn4Prt2NL-w0vXCrR0N-IfMq6fwt63kdoTdtLvoVNylEc_oUKPTKxYWdXnvAzBt3VZ0G6Pzwh47TU8rbRcr5trM2lJgfVhV3MBvfjJgLIWoly3IlFmZXLkyGZ7XwHy143lkb_IYnfKza_TtjMzuNyycoJJ-pkldq0KUZM3L6_meaCqS784VAD0ugMHjPZ9wdCf1aroj9v3YG4luK17-U"
    },
];

const Archive: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleWheel = (evt: WheelEvent) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
      };
      scrollContainer.addEventListener('wheel', handleWheel);
      return () => scrollContainer.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <section className="bg-black text-white py-24 px-6">
      <header className="max-w-screen-2xl mx-auto mb-12 md:mb-20">
        <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wide">
          The <span className="text-[#C68E59]">Archive</span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-8 text-xs font-bold tracking-[0.2em] uppercase">
          <button className="text-[#C68E59] border-b-2 border-[#C68E59] pb-2">All Works</button>
          <button className="text-gray-500 hover:text-[#C68E59] transition-colors">SOVEREIGNTY</button>
          <button className="text-gray-500 hover:text-[#C68E59] transition-colors">LEGACY</button>
          <button className="text-gray-500 hover:text-[#C68E59] transition-colors">ESTATES</button>
          <button className="text-gray-500 hover:text-[#C68E59] transition-colors">AUTHORITY</button>
        </div>
      </header>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto pb-8 flex space-x-6 md:space-x-8 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
      >
        {portfolioData.map((item) => (
          <div key={item.title} className="group relative w-[300px] md:w-[420px] h-[450px] md:h-[650px] overflow-hidden bg-gray-900 flex-shrink-0">
            <img alt={item.title} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src={item.image} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="text-[#C68E59] text-xs font-bold tracking-[0.3em] uppercase">{item.category}</span>
              <h3 className="font-display text-3xl md:text-4xl text-white font-medium mt-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archive;
