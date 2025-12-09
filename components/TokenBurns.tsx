"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TokenBurns() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="token-burns"
      className="relative py-20 md:py-28 lg:py-36 bg-black"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Token <span className="text-red-600">Burns</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mt-6 font-medium">
            The VampCatCoin Monthly Burn Ritual, For All Of Us Cat Nerds
          </p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden order-2 lg:order-1 shadow-2xl"
          >
            <Image
              src="/assets/vampcat-token-burn.avif"
              alt="VampCat Token Burn"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <h3 className="text-3xl md:text-4xl font-black text-white">
              Here's How It Works
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Monthly Ritual</h4>
                  <p className="text-lg text-gray-400">
                    Every month, we burn a portion of the $VCC supply in a public, transparent ceremony.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Reduce Supply</h4>
                  <p className="text-lg text-gray-400">
                    This helps reduce the total supply, making each token more valuable over time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Community Event</h4>
                  <p className="text-lg text-gray-400">
                    Join us each month and witness our VampCats feed the eternal fire! 🔥🐾
                  </p>
                </div>
              </div>
            </div>

            <div className="w-32 h-1 bg-red-600 my-8" />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              This monthly ritual helps <span className="text-white font-semibold">strengthen our ecosystem</span>, reward holders, 
              and keep the VampCat community engaged and entertained.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <Link
                href="https://www.weex.com/spot/VCC-USDT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Buy $VCC
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
