"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-black text-white">
              VampCat<span className="text-red-600">Coin</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              The original VampCatCoin meme coin, taking over social media one human at a time!
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="https://x.com/VampCatCoinSOL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300"
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
                className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.325.016.093.036.305.02.472z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-gray-400 hover:text-red-500 transition-colors text-lg">
                About $VCC
              </a>
              <a href="#how-it-started" className="text-gray-400 hover:text-red-500 transition-colors text-lg">
                Our Story
              </a>
              <a href="#goals" className="text-gray-400 hover:text-red-500 transition-colors text-lg">
                Goals & Roadmap
              </a>
              <a href="#token-burns" className="text-gray-400 hover:text-red-500 transition-colors text-lg">
                Token Burns
              </a>
              <a href="#artwork" className="text-gray-400 hover:text-red-500 transition-colors text-lg">
                Artwork Gallery
              </a>
            </nav>
          </div>

          {/* Contact & Contract */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Business Inquiries:</p>
                <a 
                  href="mailto:vampcatcoin@hotmail.com"
                  className="text-red-500 hover:text-red-400 transition-colors text-lg font-medium"
                >
                  vampcatcoin@hotmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Contract Address:</p>
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <p className="text-xs md:text-sm text-gray-300 font-mono break-all">
                    9x5CLPb3SeYSBKvautqpJWPjX9TUCVcWTS12Xawapump
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-zinc-800 pt-10"
        >
          <p className="text-sm md:text-base text-gray-500 text-center leading-relaxed max-w-4xl mx-auto">
            This memecoin ($VCC) has no intrinsic value, does not represent any financial
            interest, and offers no guarantees, promises, or rights of any kind. Nothing on
            this website is financial advice, purely for entertainment purposes only. $VCC is
            a community driven memecoin.
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="mt-10 pt-10 border-t border-zinc-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} VampCatCoin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
