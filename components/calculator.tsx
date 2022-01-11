"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Rocket, BarChart2, ArrowUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export function VolumeCalculator() {
  const [multiplier, setMultiplier] = useState(5);
  const [selectedPackage, setSelectedPackage] = useState(0);

  // Package data
  const packages = [
    {
      id: 0,
      name: 'Starter Booster',
      price: 9,
      color: 'purple',
      bgColor: 'bg-purple-600',
      textColor: 'text-purple-500',
      borderColor: 'border-purple-500',
      sliderColor: 'bg-purple-500',
      volumeMultiplier: 1
    },
    {
      id: 1,
      name: 'Growth Accelerator',
      price: 18,
      color: 'blue',
      bgColor: 'bg-blue-600',
      textColor: 'text-blue-500',
      borderColor: 'border-blue-500',
      sliderColor: 'bg-blue-500',
      volumeMultiplier: 2.5
    },
    {
      id: 2,
      name: 'Alpha Dominance',
      price: 30,
      color: 'green',
      bgColor: 'bg-green-600',
      textColor: 'text-green-500',
      borderColor: 'border-green-500',
      sliderColor: 'bg-green-500',
      volumeMultiplier: 4
    },
    {
      id: 3,
      name: 'Ecosystem Pioneer',
      price: 60,
      color: 'orange',
      bgColor: 'bg-orange-600',
      textColor: 'text-orange-500',
      borderColor: 'border-orange-500',
      sliderColor: 'bg-orange-500',
      volumeMultiplier: 6
    }
  ];

  const currentPackage = packages[selectedPackage];
  const baseVolume = 272000; // Base volume in dollars
  const packageMultiplier = currentPackage.volumeMultiplier;
  const estimatedVolume = baseVolume * multiplier * packageMultiplier;
  const formattedVolume = `$${(estimatedVolume / 1000000).toFixed(2)}M`;
  const solPrice = 152.02;

  // Handle package selection
  const handlePackageSelect = (packageId: number) => {
    setSelectedPackage(packageId);
  };

  return (
    <div id="calculator" className="flex flex-col lg:flex-row gap-20 w-5/6 max-w-6xl mx-auto pt-20">
      {/* Left Panel - Calculator */}
      <div className={`rounded-3xl p-8 flex-1 relative bg-gray-900`}>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex flex-col">
            <div className="text-gray-400 mb-2">Package:</div>
            <div className={`${currentPackage.textColor} text-xl font-bold`}>{currentPackage.name.split(' ')[0]}</div>
            <div className={`${currentPackage.textColor} text-xl font-bold`}>{currentPackage.name.split(' ')[1]}</div>
            <div className={`${currentPackage.textColor} text-xl font-bold`}>{currentPackage.price} SOL</div>
            <div className="flex items-center mt-2 mb-6">
              <span className="text-gray-400 mr-2">SOL Price:</span>
              <span className="text-white font-bold">${solPrice}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 top-6 right-6 pb-4 mx-auto md:mx-0">
            <Button
              className={`w-16 h-16 rounded-3xl p-3 flex justify-center items-center ${selectedPackage === packages[0].id ? packages[0].bgColor : 'bg-gray-800'}`}
              onClick={() => handlePackageSelect(packages[0].id)}
            >
              <BarChart2 className={selectedPackage === packages[0].id ? 'text-white' : 'text-gray-400'} size={30} />
            </Button>
            <Button
              className={`w-16 h-16 rounded-3xl p-3 flex justify-center items-center ${selectedPackage === packages[1].id ? packages[1].bgColor : 'bg-gray-800'}`}
              onClick={() => handlePackageSelect(packages[1].id)}
            >
              <ArrowUp className={selectedPackage === packages[1].id ? 'text-white' : 'text-gray-400'} size={30} />
            </Button>
            <Button
              className={`w-16 h-16 rounded-3xl p-3 flex justify-center items-center ${selectedPackage === packages[2].id ? packages[2].bgColor : 'bg-gray-800'}`}
              onClick={() => handlePackageSelect(packages[2].id)}
            >
              <Crown className={selectedPackage === packages[2].id ? 'text-white' : 'text-gray-400'} size={30} />
            </Button>
            <Button
              className={`w-16 h-16 rounded-3xl p-3 flex justify-center items-center ${selectedPackage === packages[3].id ? packages[3].bgColor : 'bg-gray-800'}`}
              onClick={() => handlePackageSelect(packages[3].id)}
            >
              <Rocket className={selectedPackage === packages[3].id ? 'text-white' : 'text-gray-400'} size={30} />
            </Button>
          </div>
        </div>

        <div className="text-gray-400 mb-4">Your token price change:</div>

        <div className="mb-8">
          <div className="flex justify-between text-gray-400 mb-2">
            <span className={currentPackage.textColor}>1x</span>
            <span className={`${currentPackage.textColor} font-bold`}>Current: {multiplier}x</span>
            <span className={currentPackage.textColor}>20x</span>
          </div>
          <Slider
            value={[multiplier]}
            min={1}
            max={20}
            step={1}
            onValueChange={(value) => setMultiplier(value[0])}
            className="py-4"
            rangeColor={currentPackage.sliderColor}
          />
        </div>

        <div className="text-4xl font-bold text-white text-center mb-2">
          {formattedVolume}
        </div>
        <div className="text-gray-400 text-center">
          Estimate Boost Volume
        </div>
      </div>

      {/* Right Panel - Info */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-blue-500 text-lg mb-2">mm.</div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Calculate your<br />
          Estimate Volume
        </h2>

        <p className="text-gray-400 mb-2">
          Get an instant estimate of your trading volume potential with <span className="text-white">Orbit MM</span>. Use the
          <span className="text-white"> adjustable slider</span> to tailor the estimate and discover the power of your project's growth!
        </p>

        <p className="text-gray-400 mb-8">
          Please note: The bot operates for approximately 24 hours. The actual volume boost and
          duration may vary based on the current condition of your token.
        </p>

        <div className="flex space-x-4">
          <Button size="lg" variant="outline" className="group flex border-gray-800 rounded-full py-7 hover:bg-black hover:text-white overflow-hidden">
            <span className='text-xl opacity-0 max-w-0 group-hover:max-w-[50px] group-hover:opacity-100 ml-0 group-hover:ml-0 mr-0 group-hover:mr-2 transition-all duration-300 ease-in-out'>{"->"}</span>
            Access Bot
            <span className="ml-2 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-100 group-hover:opacity-0 transition-all duration-300"></span>
          </Button>
          <Button size="lg" variant="outline" className="group flex border-gray-800 rounded-full py-7 hover:bg-black hover:text-white overflow-hidden">
            <span className='text-xl opacity-0 max-w-0 group-hover:max-w-[50px] group-hover:opacity-100 ml-0 group-hover:ml-0 mr-0 group-hover:mr-2 transition-all duration-300 ease-in-out'>{"->"}</span>
            Access WebApp
            <span className="ml-2 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-100 group-hover:opacity-0 transition-all duration-300"></span>
          </Button>
        </div>
      </div>
    </div>
  );
}