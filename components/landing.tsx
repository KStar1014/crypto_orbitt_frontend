"use client"

import { Button } from '@/components/ui/button';
// import Image from 'next/image';
import { DotIcon, ChevronDown, Play, Calculator, Package } from "lucide-react";
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Landing() {
  return (
    <section className="mt-20 pt-32 pb-16 relative max-w-[1200px] w-11/12 m-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Orbitt MM:<br />
              Crypto Volume<br />
              Booster
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Just three clicks stand between you and a $10 million boost in your project's volume.
              Now on Solana, BSC, and BASE! Every swap also adds a new holder, growing your community
              and driving engagement. Don't wait—act now to create a FOMO effect!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="outline" className="group flex border-gray-800 rounded-full py-7 hover:bg-black hover:text-white overflow-hidden">
                <span className='text-xl opacity-0 max-w-0 group-hover:max-w-[50px] group-hover:opacity-100 ml-0 group-hover:ml-0 mr-0 group-hover:mr-2 transition-all duration-300 ease-in-out'>{"->"}</span>
                Access Bot
                <DotIcon className="ml-0 -mr-4 text-blue-800 opacity-100 group-hover:opacity-0 transition-all duration-300" size={36} />
              </Button>
              <Button size="lg" variant="outline" className="group flex border-gray-800 rounded-full py-7 hover:bg-black hover:text-white overflow-hidden">
                <span className='text-xl opacity-0 max-w-0 group-hover:max-w-[50px] group-hover:opacity-100 ml-0 group-hover:ml-0 mr-0 group-hover:mr-2 transition-all duration-300 ease-in-out'>{"->"}</span>
                Access WebApp
                <DotIcon className="ml-0 -mr-4 text-blue-800 opacity-100 group-hover:opacity-0 transition-all duration-300" size={36} />
              </Button>
            </div>
          </div>

          <div className="flex-1 bg-[url(/component_5.webp)] bg-contain bg-center bg-no-repeat">
            <div className="relative">
              <motion.div
                animate={{ x: ['-10%', '3%', '-10%'], y: ['-30%', '3%', '-30%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeIn' }}
                className="absolute top-0 -left-16"
              >
                <div>
                  <Image src="bot_1.webp" alt="bot1" width={140} height={140} />
                </div>
              </motion.div>
              <motion.div
                animate={{ x: ['-20%', '-45%', '-20%'], y: ['-30%', '3%', '-30%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute bottom-0 -right-10 overflow-hidden"
              >
                <div>
                  <Image src="bot_2.webp" alt="bot1" width={180} height={180} />
                </div>
              </motion.div>
              <div className="absolute -z-10 inset-0  from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
              {/* <div className="relative bg-gray-900/80 rounded-2xl p-6 border border-gray-800"> */}
              <div className="relative rounded-2xl p-6 ">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold backdrop-blur-md rounded-lg p-1 mt-6">Welcome to Orbitt MM! 🚀</h3>
                  <Button size="lg" className="bg-transparent hover:bg-transparent ">
                    <div className="w-12 h-12 relative mr-2">
                      <div className="absolute inset-0 rounded-full bg-[#f94b60] opacity-60 animate-ping" style={{ animationDuration: '2s' }}></div>
                      <Play className="w-12 h-12 mr-2 bg-[#f94b60] rounded-full p-2 hover:bg-blue-700 transition duration-100 ease-in-out" fill="white" />
                    </div>
                    Watch Preview
                  </Button>
                </div>
                <p className="text-white mb-6 backdrop-blur-md">
                  Ready to elevate your project? Our Volume Bot boosts trading volume,
                  enhances token visibility, and draws investors.
                </p>
                <p className="text-white mb-8">
                  Let's make your project stand out!
                </p>
                <div className="flex flex-col gap-4">
                  <motion.div
                    animate={{ x: ['-3%', '3%', '-3%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                  >
                    <div className='flex gap-2'>
                    
                    <Button className="w-11/12 bg-gray-800 hover:bg-gray-700 rounded-full ">
                      Boost Volume 📈
                    </Button>
                    <Button className="w-11/12 bg-gray-800 hover:bg-gray-700 rounded-full">
                      Referrals 💰
                    </Button>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ x: ['3%', '-3%', '3%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                  >
                    <div className='flex gap-2'>
                      <Button className="w-11/12 bg-gray-800 hover:bg-gray-700 rounded-full">
                        Support 📬
                      </Button>
                      <Button className="w-11/12 bg-gray-800 hover:bg-gray-700 rounded-full">
                        Learn more 🔗
                      </Button>

                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-pulse">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 left-0 animate-pulse delay-300">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      </div>
    </section>
  );
}