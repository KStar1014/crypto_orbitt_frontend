"use client"

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Explainers() {
  return (
    <section className="py-20 max-w-[1200px] w-11/12 mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <h2 className="text-3xl font-bold mb-4">Token + Metrics</h2>
            <p className="text-gray-400 mb-6">
              Orbitt MM delivers measurable results through our proprietary volume boosting algorithms,
              backed by real-time metrics and transparent reporting.
            </p>
            
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OB</span>
                </div>
                <div>
                  <div className="font-medium">Orbitt Token</div>
                  <div className="text-sm text-blue-400">$0.42 (+5.2%)</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Market Cap</span>
                  <span className="font-medium">$84M</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">24h Volume</span>
                  <span className="font-medium">$9.2M</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Holders</span>
                  <span className="font-medium">12,458</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl h-[300px] bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-500/20"
          >
            <div className="absolute inset-0">
              <div className="absolute bottom-[30%] right-[20%] w-40 h-40 rounded-full bg-blue-500/30 blur-3xl"></div>
              <div className="absolute top-[20%] left-[30%] w-32 h-32 rounded-full bg-purple-500/30 blur-3xl"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-bold mb-2">More transactions</h3>
                <p className="text-gray-300 text-sm">
                  Increase your trading activity without affecting price stability.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl h-[300px] bg-gradient-to-br from-purple-600/30 to-blue-600/30 border border-purple-500/20"
          >
            <div className="absolute inset-0">
              <div className="absolute top-[40%] left-[20%] w-40 h-40 rounded-full bg-purple-500/30 blur-3xl"></div>
              <div className="absolute bottom-[30%] right-[10%] w-32 h-32 rounded-full bg-blue-500/30 blur-3xl"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Better performance</h3>
                <p className="text-gray-300 text-sm">
                  Optimize order execution and reduce slippage on all trades.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}