"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const artworks = [
  { src: "/assets/vampcat-1.avif", alt: "VampCat 1" },
  { src: "/assets/vampcat-2.avif", alt: "VampCat 2" },
  { src: "/assets/vampcat-3.avif", alt: "VampCat 3" },
  { src: "/assets/vampcat-4.avif", alt: "VampCat 4" },
  { src: "/assets/vampcat-5.avif", alt: "VampCat 5" },
  { src: "/assets/vampcat-6.avif", alt: "VampCat 6" },
  { src: "/assets/vampcat-7.avif", alt: "VampCat 7" },
  { src: "/assets/vampcat-8.avif", alt: "VampCat 8" },
];

// Split artworks into two rows for mobile
const firstRow = artworks.slice(0, 4);
const secondRow = artworks.slice(4, 8);

export default function Artwork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="artwork"
      className="relative py-20 md:py-28 lg:py-36 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight">
            VampCat <span className="text-red-600">Artwork</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Exclusive collection celebrating our mysterious feline friends
          </p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6" />
        </motion.div>

        {/* Mobile: Infinite Scrolling Rows */}
        <div className="block lg:hidden space-y-6">
          {/* First Row - Moving Right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the array 3 times for seamless loop */}
              {[...firstRow, ...firstRow, ...firstRow].map((artwork, index) => (
                <div
                  key={index}
                  className="relative w-64 h-64 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={artwork.src}
                    alt={artwork.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [-1000, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the array 3 times for seamless loop */}
              {[...secondRow, ...secondRow, ...secondRow].map((artwork, index) => (
                <div
                  key={index}
                  className="relative w-64 h-64 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={artwork.src}
                    alt={artwork.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop: Static Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4 md:gap-6">
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each piece captures the enigmatic essence of VampCat - mysterious, independent, and absolutely captivating.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
