"use client"

// import { motion } from '@/lib/motion-wrapper';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { DotIcon } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative pt-20 lg:pt-24 pb-16 overflow-hidden max-w-[1200px] w-11/12 mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            className="flex-1 pt-10"
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          >
            <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4 inline-block">
              Revolutionary Crypto Trading
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-primary">
              Orbitt MM:<br />
              Crypto Volume<br />
              Booster
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Accelerate your trading strategy with Orbitt MM's advanced liquidity solutions. Boost volume, reduce slippage, and maximize profitability in today's competitive crypto markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="group flex border-gray-800 rounded-full py-7 hover:bg-black hover:text-white overflow-hidden">
                <span className='text-xl opacity-0 max-w-0 group-hover:max-w-[50px] group-hover:opacity-100 ml-0 group-hover:ml-0 mr-0 group-hover:mr-2 transition-all duration-300 ease-in-out'>{"->"}</span>
                Get Started
                <DotIcon className="ml-0 -mr-4 text-blue-800 opacity-100 group-hover:opacity-0 transition-all duration-300" size={36} />
              </Button>
              <Button size="lg" variant="outline" className="group flex border-gray-800 rounded-full py-7 hover:bg-black hover:text-white overflow-hidden">
                <span className='text-xl opacity-0 max-w-0 group-hover:max-w-[50px] group-hover:opacity-100 ml-0 group-hover:ml-0 mr-0 group-hover:mr-2 transition-all duration-300 ease-in-out'>{"->"}</span>
                View Documentation
                <DotIcon className="ml-0 -mr-4 text-blue-800 opacity-100 group-hover:opacity-0 transition-all duration-300" size={36} />
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800"></div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-medium">1,200+</span> traders already using Orbitt MM
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[500px] w-full max-w-[500px] mx-auto">
              <div className="absolute top-[10%] right-[5%] w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-[20%] left-[10%] w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-[500px] bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-xl">
                  <div className="h-10 bg-gray-800 flex items-center justify-center">
                    <div className="w-20 h-4 bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="p-4">
                    <div className="w-full h-8 bg-gray-800 rounded-lg mb-4"></div>
                    <div className="w-full h-40 bg-blue-900/30 rounded-lg mb-4 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-blue-500/50 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-blue-600/80"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full h-6 bg-gray-800 rounded-lg"></div>
                      <div className="w-3/4 h-6 bg-gray-800 rounded-lg"></div>
                      <div className="w-full h-6 bg-gray-800 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[30%] right-[-5%] transform rotate-12">
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 rounded-full bg-yellow-500 opacity-60 animate-ping" style={{ animationDuration: '3s' }}></div>
                  <div className="relative w-full h-full rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black text-xs font-bold">BTC</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[25%] left-[-10%] transform -rotate-6">
                <div className="w-14 h-14 relative">
                  <div className="relative w-full h-full rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}