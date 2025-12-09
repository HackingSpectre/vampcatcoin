"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "9x5CLPb3SeYSBKvautqpJWPjX9TUCVcWTS12Xawapump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/vamcatupbackground.avif"
          alt="VampCat"
          fill
          className="object-cover object-center md:object-center object-[left_30%_bottom_30%]"
          priority
          quality={100}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-5xl w-full"
          >
            <motion.h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-none"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              $VCC
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-white">The Original </span>
              <span className="text-red-600 font-bold">VampCat</span>
              <span className="text-white"> Meme Coin</span>
            </motion.p>
            
            {/* Contract Address - Copyable */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-10 md:mb-12"
            >
              <button
                onClick={copyToClipboard}
                className="group relative inline-block bg-black/60 backdrop-blur-md border border-white/30 hover:border-red-600 rounded-xl px-4 md:px-6 py-3 transition-all duration-300 cursor-pointer"
              >
                <p className="text-xs md:text-sm text-gray-100 font-mono break-all group-hover:text-red-500 transition-colors">
                  CA: {contractAddress}
                </p>
                {/* Copy feedback tooltip */}
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg"
                  >
                    ✓ Copied!
                  </motion.div>
                )}
              </button>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Link
                href="https://www.weex.com/spot/VCC-USDT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 md:px-14 py-4 md:py-5 bg-red-600 text-white text-base md:text-lg font-bold rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-red-600/60"
              >
                Buy $VCC Now
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="pb-8 md:pb-12">
          <motion.button
            onClick={scrollToAbout}
            className="mx-auto block cursor-pointer group focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
             
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-red-600 group-hover:text-red-500 transition-colors"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
