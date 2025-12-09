"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const goals = [
  { text: "Graduate to PumpSwap", completed: true },
  { text: "Create LP on Raydium", completed: true },
  { text: "Get listed on a CEX", completed: true },
  { text: "Verified on CoinGecko", completed: true },
  { text: "Verified on CoinMarketCap", completed: false },
  { text: "Verified on Solscan", completed: false },
  { text: "Continued community growth", completed: false },
];

export default function Goals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="goals"
      className="relative py-20 md:py-28 lg:py-36 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight">
            <span className="text-red-600">$VCC</span> Goals
          </h2>
          <div className="w-20 h-1.5 bg-red-600" />
        </motion.div>

        {/* Goals List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className={`flex items-center gap-5 md:gap-6 bg-white border-2 rounded-2xl p-5 md:p-6 transition-all duration-300 ${
                goal.completed 
                  ? 'border-red-600 shadow-lg shadow-red-600/10' 
                  : 'border-gray-300 hover:border-red-300'
              }`}>
                {/* Checkbox */}
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl border-3 flex items-center justify-center transition-all duration-300 ${
                  goal.completed 
                    ? 'bg-red-600 border-red-600' 
                    : 'border-gray-400 group-hover:border-red-500'
                }`}>
                  {goal.completed && (
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

                {/* Goal Text */}
                <div className="flex-1">
                  <span className={`text-lg md:text-xl lg:text-2xl font-semibold ${
                    goal.completed ? 'text-black' : 'text-gray-600'
                  }`}>
                    {goal.text}
                  </span>
                </div>

                {/* Status Badge */}
                {goal.completed && (
                  <div className="hidden sm:flex px-4 py-2 bg-red-100 rounded-lg">
                    <span className="text-sm font-bold text-red-600 uppercase tracking-wide">
                      Done
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
