"use client"

import { motion } from 'framer-motion'; 
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
}

export function Statistics() {
  const volumeAmount = useCounter(0.77);
  const [sliderValue, setSliderValue] = useState([50]);
  
  return (
    <section className="py-20 max-w-[1200px] w-11/12 mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <Tabs defaultValue="volume">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
              <motion.h2 
                className="text-2xl font-bold"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                // viewport={{ once: true }}
              >
                Volume Analyzer
              </motion.h2>
              
              <TabsList className="bg-gray-800">
                <TabsTrigger value="volume" className="data-[state=active]:bg-blue-600">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">7d</div>
                    <span>Volume</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="trades" className="data-[state=active]:bg-blue-600">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">T</div>
                    <span>Trades</span>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="volume" className="mt-0">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="bg-gray-800 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-gray-400">Booster Level</div>
                    </div>
                    
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                      className="mb-6"
                    />
                    
                    <div className="flex justify-between text-sm text-gray-500">
                      <div>Eco</div>
                      <div>Balanced</div>
                      <div>Maximum</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-gray-400">Total Volume Generated</div>
                      <div className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded">+14.5%</div>
                    </div>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">${volumeAmount.toFixed(2)}M</span>
                      <span className="text-gray-400">USDC</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Current APY</span>
                        <span className="font-medium">12.4%</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Estimated Monthly Return</span>
                        <span className="font-medium">$4,280</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 min-h-[300px] bg-gray-800 rounded-xl p-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[200px] w-full flex items-end justify-around px-6">
                      {[40, 65, 35, 80, 55, 70, 90].map((height, i) => (
                        <motion.div
                          key={i}
                          className="w-[8%] bg-blue-600 rounded-t"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ duration: 0.7, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-around px-6">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                        <div key={i} className="text-xs text-gray-500">{day}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trades" className="mt-0">
              <div className="bg-gray-800 rounded-xl p-6 text-center h-[300px] flex items-center justify-center">
                <div className="text-gray-400">
                  Select a trading pair to view detailed trade analysis
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}