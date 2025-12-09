"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      >
        <div className={`transition-all duration-300 ${
          isScrolled ? 'w-[95%] md:w-[90%] lg:w-[85%]' : 'w-[95%] md:w-[88%] lg:w-[80%]'
        } max-w-7xl`}>
          <div className={`bg-black/90 backdrop-blur-md border border-zinc-800 rounded-2xl px-6 md:px-8 py-4 shadow-2xl transition-all duration-300 ${
            isScrolled ? 'shadow-black/50' : 'shadow-black/30'
          }`}>
            <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl md:text-2xl font-bold text-white hover:text-red-500 transition-colors"
            >
              VampCat<span className="text-red-600">Coin</span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('how-it-started')}
                className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors"
              >
                Story
              </button>
              <button
                onClick={() => scrollToSection('goals')}
                className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors"
              >
                Goals
              </button>
              <button
                onClick={() => scrollToSection('token-burns')}
                className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors"
              >
                Burns
              </button>
              <button
                onClick={() => scrollToSection('artwork')}
                className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors"
              >
                Artwork
              </button>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Social Links - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="https://x.com/VampCatCoinSOL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors p-2"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link
                  href="https://t.me/VampCatCoinSOL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors p-2"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.093.036.305.02.472z"/>
                  </svg>
                </Link>
              </div>

              {/* CTA Button - Hidden on small mobile */}
              <Link
                href="https://www.weex.com/spot/VCC-USDT"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block px-6 py-2.5 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105"
              >
                Buy $VCC
              </Link>

              {/* Hamburger Menu Button - Visible on mobile/tablet */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:text-red-500 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-0 right-0 z-40 flex justify-center lg:hidden"
          >
            <div className="w-[90%] max-w-md">
              <div className="bg-black/95 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 shadow-2xl">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-lg font-medium text-white hover:text-red-500 transition-colors text-left py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('how-it-started')}
                  className="text-lg font-medium text-white hover:text-red-500 transition-colors text-left py-2"
                >
                  Story
                </button>
                <button
                  onClick={() => scrollToSection('goals')}
                  className="text-lg font-medium text-white hover:text-red-500 transition-colors text-left py-2"
                >
                  Goals
                </button>
                <button
                  onClick={() => scrollToSection('token-burns')}
                  className="text-lg font-medium text-white hover:text-red-500 transition-colors text-left py-2"
                >
                  Burns
                </button>
                <button
                  onClick={() => scrollToSection('artwork')}
                  className="text-lg font-medium text-white hover:text-red-500 transition-colors text-left py-2"
                >
                  Artwork
                </button>

                {/* Divider */}
                <div className="border-t border-zinc-800 my-2"></div>

                {/* Social Links in Mobile Menu */}
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href="https://x.com/VampCatCoinSOL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://t.me/VampCatCoinSOL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    aria-label="Telegram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.093.036.305.02.472z"/>
                    </svg>
                  </Link>
                </div>

                {/* Buy Button in Mobile Menu */}
                <Link
                  href="https://www.weex.com/spot/VCC-USDT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-red-600 text-white text-center font-bold rounded-full hover:bg-red-700 transition-all duration-300 mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Buy $VCC
                </Link>
              </nav>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
