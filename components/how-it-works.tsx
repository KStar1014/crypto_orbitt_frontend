"use client"

// import { motion } from '@/lib/motion-wrapper';
import { motion } from 'framer-motion';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative max-w-[1200px] w-11/12 mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How it works?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform simplifies the complex process of boosting trading volume
            while maintaining market integrity.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // viewport={{ once: true }}
            className="flex-1 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -z-10 left-0 right-0 bottom-0 top-[10%] bg-gradient-to-b from-blue-500/10 to-purple-500/10 blur-2xl rounded-full"></div>
              
              <div className="relative lg:ml-10 h-[500px] w-[250px] mx-auto bg-gray-900 rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-[32px]"></div>
                
                {/* App Screen Content */}
                <div className="h-full bg-gray-950 p-4 pt-8">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                      <span className="text-xs text-white font-bold">O</span>
                    </div>
                    <div className="text-white text-sm font-medium">Orbitt Market</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-gray-400">Volume</div>
                        <div className="text-xs text-green-500">+12.4%</div>
                      </div>
                      <div className="text-sm text-white font-semibold">241,420 USDC</div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-xs text-gray-400">Trades</div>
                        <div className="text-xs text-green-500">+8.7%</div>
                      </div>
                      <div className="text-sm text-white font-semibold">1,245</div>
                    </div>
                    
                    <div className="h-32 bg-gray-800 rounded-xl overflow-hidden">
                      <div className="h-4 bg-gray-700 w-full"></div>
                      <div className="p-3 flex items-end h-[calc(100%-16px)]">
                        <div className="w-[10%] h-[30%] bg-blue-600 rounded-sm mx-1"></div>
                        <div className="w-[10%] h-[40%] bg-blue-600 rounded-sm mx-1"></div>
                        <div className="w-[10%] h-[60%] bg-blue-600 rounded-sm mx-1"></div>
                        <div className="w-[10%] h-[50%] bg-blue-600 rounded-sm mx-1"></div>
                        <div className="w-[10%] h-[70%] bg-blue-600 rounded-sm mx-1"></div>
                        <div className="w-[10%] h-[90%] bg-blue-600 rounded-sm mx-1"></div>
                        <div className="w-[10%] h-[75%] bg-blue-600 rounded-sm mx-1"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-0 right-0 px-4">
                    <div className="bg-blue-600 text-white text-sm font-medium py-3 rounded-lg text-center">
                      Activate Booster
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 1, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 order-1 lg:order-2"
          >
            <div className="space-y-8 max-w-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                  <span className="text-blue-500 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connect Your Wallet</h3>
                  <p className="text-gray-400">
                    Simply connect your preferred wallet to our platform and access powerful volume boosting tools in just one click.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0">
                  <span className="text-purple-500 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Configure Strategy</h3>
                  <p className="text-gray-400">
                    Set your target volume, trading pairs, and preferred networks. Our intelligent system will optimize based on your parameters.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center shrink-0">
                  <span className="text-green-500 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Activate & Monitor</h3>
                  <p className="text-gray-400">
                    Launch your volume booster and monitor performance in real-time. Adjust parameters as needed for optimal results.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center shrink-0">
                  <span className="text-cyan-500 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analyze Results</h3>
                  <p className="text-gray-400">
                    Review comprehensive analytics on volume impact, trade distribution, and market response to refine your strategy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}