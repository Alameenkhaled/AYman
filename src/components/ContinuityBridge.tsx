import React from 'react';
import Image from 'next/image';

const ContinuityBridge: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            YOUR IDENTITY IS YOUR FINANCIAL ASSET
          </h2>
          <h2 className="text-3xl md:text-4xl font-arabic font-medium text-[#C68E59] tracking-wide mt-4">
            هويتك هي أصلك المالي
          </h2>
          <p className="font-serif text-lg text-gray-400 mt-8 max-w-xl mx-auto md:mx-0">
            In a world of fleeting trends, your visual narrative is the bedrock of your legacy. It is the currency of trust, the language of authority, and the architecture of your financial sovereignty.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://fhshakiacgnsnsvbrsdz.supabase.co/storage/v1/object/public/Ayman/webp-frames/frame_159_delay-0.04s.jpg"
            alt="Final frame of scrollytelling animation"
            width={400}
            height={600}
            className="object-cover w-full h-full"
          />
          <Image
            src="https://github.com/hashimn1980-ux/ANEEF/blob/feat-aneef-portfolio-website-1447752366322429904/Whisk_3599ed1ff2391ad856347b196381147adr.jpeg?raw=true"
            alt="Continuity bridge complementary image"
            width={400}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContinuityBridge;
