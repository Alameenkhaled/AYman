"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCount = 160;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  // Scroll-driven animations
  const scrollFrameIndex = useTransform(scrollYProgress, [0, 1], [25, frameCount - 1]);
  const blur = useTransform(scrollYProgress, [0.1, 0.3], [15, 0]); // Start blur fade later
  const letterSpacing = useTransform(scrollYProgress, [0.1, 0.3], ['1.5em', '0.2em']);

  useEffect(() => {
    const preloadImages = () => {
      let loadedCount = 0;
      const imagePromises: Promise<void>[] = [];
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        imagesRef.current[i] = img;
        const promise = new Promise<void>((resolve) => {
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(loadedCount / frameCount);
            resolve();
          };
          img.onerror = () => {
            console.error(`Failed to load image frame: ${i}`);
            resolve(); // Don't block loading
          };
        });
        img.src = `https://fhshakiacgnsnsvbrsdz.supabase.co/storage/v1/object/public/Ayman/webp-frames/frame_${i.toString().padStart(3, '0')}_delay-0.04s.jpg`;
        imagePromises.push(promise);
      }

      Promise.all(imagePromises).then(() => {
        // A brief delay to allow the loading bar to hit 100%
        setTimeout(() => setIsLoading(false), 200);
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const render = (index: number) => {
      const clampedIndex = Math.floor(Math.max(0, Math.min(frameCount - 1, index)));
      const img = imagesRef.current[clampedIndex];
      if (!img || !img.complete || img.naturalHeight === 0) return;

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(introComplete ? scrollFrameIndex.get() : 0);
    };

    handleResize();

    let introFrame = 0;
    const introInterval = setInterval(() => {
      if (introFrame <= 24) {
        render(introFrame);
        introFrame++;
      } else {
        clearInterval(introInterval);
        setIntroComplete(true);
        // Ensure the first scroll-driven frame is rendered immediately
        render(scrollFrameIndex.get());
      }
    }, 1000 / 12); // 12fps

    window.addEventListener('resize', handleResize);

    const unsubscribeScroll = scrollFrameIndex.on("change", (latest) => {
        if (introComplete) {
            render(latest);
        }
    });

    return () => {
      clearInterval(introInterval);
      window.removeEventListener('resize', handleResize);
      unsubscribeScroll();
    };
  }, [isLoading, introComplete, scrollFrameIndex]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
          <p className="font-sans text-white tracking-widest text-sm mb-4">INITIALIZING PROTOCOLS...</p>
          <div className="w-1/2 max-w-xs h-px bg-gray-800">
            <div
              className="h-full bg-[#C68E59]"
              style={{ width: `${loadingProgress * 100}%`, transition: 'width 0.1s linear' }}
            />
          </div>
        </div>
      )}

      <div ref={heroRef} className="relative h-[500vh] w-full bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />

          <motion.div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
            style={{
                filter: useTransform(blur, v => `blur(${v}px)`),
                letterSpacing,
            }}
            animate={{ opacity: introComplete ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-center">
              <h1 className="font-stencil text-6xl md:text-9xl text-white tracking-widest uppercase">
                Visual Sovereignty
              </h1>
              <h2 className="font-arabic text-3xl md:text-5xl text-[#C68E59] mt-4">
                السيادة البصرية
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
