"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HowItStarted() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="how-it-started"
      className="relative py-20 md:py-28 lg:py-36 bg-black"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            How It <span className="text-red-600">Started</span>
          </h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-10 md:space-y-12"
        >
          {/* Main Content Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                VampCat was created on values most meme coins ignore: <span className="text-white font-semibold">no pump and dumps</span>, 
                no fake bullshit hype, no race to the exit to sell. This is a <span className="text-red-500 font-semibold">long-term play</span> designed 
                to grow steadily and bring people together around something real and fun.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                It's about building a community that lasts - one that values strong mindsets, patience, 
                and the mystery of the night - just like the cats it's inspired by.
              </p>
              
              <div className="w-32 h-1 bg-red-600 my-8" />
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                At its core, VampCat is for people who want more than just a quick flip. It's 
                for those who want to be a part of a movement that balances <span className="text-white font-semibold">fun with purpose</span>, 
                playfulness, and wisdom.
              </p>

              <div className="pt-6">
                <p className="text-xl md:text-2xl text-white font-bold">
                  A meme coin with an actual soul - and a future.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-8"
          >
            <Link
              href="https://www.weex.com/spot/VCC-USDT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Buy $VCC Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
