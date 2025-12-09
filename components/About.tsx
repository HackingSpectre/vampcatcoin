"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-20 md:py-28 lg:py-36 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4 tracking-tight">
            About <span className="text-red-600">$VCC</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/vamcat1.avif"
              alt="VampCat"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight uppercase">
                Community Driven Memecoin For Cat Lovers
              </p>
              <p className="text-lg md:text-xl text-gray-600 mt-4 font-medium">
                Even When They Bite Us For No Reason
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                VampCatCoin is more than just another memecoin—it's a celebration of the mysterious, 
                independent spirit of cats combined with the power of community-driven crypto culture.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We're building something real, something fun, and something that lasts. No fake hype, 
                just genuine community vibes and the enigmatic charm of our favorite feline friends.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐱</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Meme Coin</p>
                  <p className="text-xl font-bold text-black">With A Soul</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
