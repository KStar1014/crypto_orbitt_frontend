"use client"

import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DotIcon, ChevronDown, Play, Calculator, Package, Send, AppWindow, AlignRight } from "lucide-react";

const featureCards = [[
  {
    key: 0,
    title: "Starter Boost",
    color: "from-violet-600 to-violet-400",
    description: "Ideal for newly launched or small projects aiming to make a significant impact",
    metrics: "9 SOL",
    icon: "⚡",
    features: [
      "Multiplier: No",
      "1444 Wallets",
      "1 per Minute",
      "0% trading fees"
    ]
  },
  {
    key: 1,
    title: "Growth Accelerator",
    color: "from-blue-600 to-blue-400",
    description: "Tailored for projects ready to escalate their presence and attract more attention",
    metrics: "18 SOL",
    icon: "💧",
    features: [
      "Multiplier: x 1.5",
      "1444 Wallets",
      "1.5 per Minute",
      "0% trading fees"
    ]
  },
  {
    key: 2,
    title: "Alpha Dominance",
    color: "from-red-600 to-red-400",
    description: "Designed for projects looking for  significantly boost their visibility",
    metrics: "30 SOL",
    icon: "📊",
    features: [
      "Multiplier: x 2",
      "2888 Wallets",
      "2 per Minute",
      "0% trading fees"
    ]
  },
  {
    key: 3,
    title: "Ecosystem Pioneer",
    color: "from-green-600 to-green-400",
    description: "Designed for projects looking for  significantly boost their visibility",
    metrics: "60 SOL",
    icon: "🔒",
    features: [
      "Multiplier: x 3",
      "4332 Wallets",
      "3 per Minute",
      "0% trading fees"
    ]
  }
],
[
  {
    key: 4,
    title: "Starter Boost",
    color: "from-violet-600 to-violet-400",
    description: "Ideal for newly launched or small projects aiming to make a significant impact",
    metrics: "9 SOL",
    icon: "⚡",
    features: [
      "Multiplier: No",
      "1444 Wallets",
      "6 per Minute",
      "0% trading fees"
    ]
  },
  {
    key: 5,
    title: "Growth Accelerator",
    color: "from-blue-600 to-blue-400",
    description: "Tailored for projects ready to escalate their presence and attract more attention",
    metrics: "18 SOL",
    icon: "💧",
    features: [
      "Multiplier: x 1.5",
      "1444 Wallets",
      "12 per Minute",
      "0% trading fees"
    ]
  },
  {
    key: 6,
    title: "Alpha Dominance",
    color: "from-red-600 to-red-400",
    description: "Designed for projects looking for  significantly boost their visibility",
    metrics: "30 SOL",
    icon: "📊",
    features: [
      "Multiplier: x 2",
      "2888 Wallets",
      "20 per Minute",
      "0% trading fees"
    ]
  },
  {
    key: 7,
    title: "Ecosystem Pioneer",
    color: "from-green-600 to-green-400",
    description: "Designed for projects looking for  significantly boost their visibility",
    metrics: "60 SOL",
    icon: "🔒",
    features: [
      "Multiplier: x 3",
      "4332 Wallets",
      "28 per Minute",
      "0% trading fees"
    ]
  }
],
[
  {
    key: 8,
    title: "Steady 48h",
    color: "from-orange-500 to-orange-400",
    description: "Ideal for newly launched or small projects aiming to make a significant impact",
    metrics: "10 SOL",
    icon: "2d ⚡",
    features: [
      "Multiplier: No",
      "200 Wallets",
      "8 per Minute",
      "0% trading fees"
    ]
  },
  {
    key: 9,
    title: "Steady 48h",
    color: "from-orange-600 to-orange-500",
    description: "Ideal for newly launched or small projects aiming to make a significant impact",
    metrics: "15 SOL",
    icon: "3d ⚡",
    features: [
      "Multiplier: No",
      "300 Wallets",
      "8 per Minute",
      "0% trading fees"
    ]
  },
  {
    key: 10,
    title: "Steady 48h",
    color: "from-orange-700 to-orange-600",
    description: "Designed for projects looking for  significantly boost their visibility",
    metrics: "20 SOL",
    icon: "7d ⚡",
    features: [
      "Multiplier: No",
      "700 Wallets",
      "8 per Minute",
      "0% trading fees"
    ]
  }
]];

const modeData = [
  {
    id: 0,
    name: "Normal",
    value: "24h",
  },
  {
    id: 1,
    name: "Fast",
    value: "6h",
  },
  {
    id: 2,
    name: "Steady",
    value: "7d",
  },
]

export function Features() {
  const [curMode, setMode] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section id="packages" className="py-20 relative max-w-[1200px] w-11/12 mx-auto flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="text-3xl text-white">
          Orbitt MM Packages
        </div>
        <div className="flex items-center text-white bg-gray-800/30 rounded-full py-1 px-2 mr-12 hover:bg-gray-900/60 hover:text-white"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div
            className="relative"
          >
            <Button
              variant="ghost"
              className="text-base text-white bg-gray-600/30 rounded-full py-6 px-4 hover:bg-gray-800 hover:text-white flex items-center"
            >
              Mode: <span className="w-10 h-10 ml-4 bg-black rounded-full flex justify-center items-center">{modeData[curMode].value}</span>
              <ChevronDown className="w-6 h-6 ml-3" />
            </Button>

            {isDropdownOpen && (
              <div className="absolute z-50 mt-1 w-full bg-gray-900 border border-gray-800 rounded-lg p-1">
                {modeData.map((chain, index) => (
                  <div
                    key={chain.name}
                    className={`text-base flex items-center justify-center text-white ${index === curMode ? 'bg-gray-600/30' : 'bg-transparent'} rounded-full py-1 px-4 mb-1 hover:bg-gray-800 hover:text-white cursor-pointer`}
                    onClick={() => {
                      setMode(chain.id);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {chain.name}: <span className="w-10 h-10 ml-2 bg-transparent rounded-full flex justify-center items-center">{modeData[index].value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards[curMode].map((card, index) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              // viewport={{ once: true }}
              className="group cursor-pointer bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden"
            >
              <div className={cn("h-36 bg-gradient-to-r rounded-2xl m-1", card.color)}>
                <div className="p-6">
                  <div className="mb-4 text-2xl opacity-40 group-hover:opacity-100 transition-all">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                  <div className="text-sm text-gray-400">Average increase</div>
                  <div className="text-2xl font-bold text-white flex">{card.metrics}
                    <svg className="ml-3 group-hover:rotate-90 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none"><path d="M21.5752 19.1668L21.7906 6.3166L9.00879 6.5332" stroke="#5d2be9" strokeWidth="1.91428" strokeMiterlimit="10"></path><path d="M21.7909 6.31744L7.16895 21.0176" stroke="#5d2be9" strokeWidth="1.91428" strokeMiterlimit="10"></path></svg>
                  </div>
                </div>
                <ul className="space-y-2">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-500 group-hover:text-white transition-all">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-left text-sm text-gray-500">
          1.  Amount of fresh wallets used to create a volume.<br />
          2.  The number of transactions per minute or hour might be slightly different depending on network congestion.<br />
          3.  Orbitt MM does not charge any extra trading fees on top of transactions.
        </div>
      </div>
    </section>
  );
}