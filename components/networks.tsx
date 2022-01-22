"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const networks = [
  // { name: "Base", logo: "https://cryptologos.cc/logos/base-base-logo.png" },
  // { name: "Binance Smart Chain", logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png" },
  // { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png" }
  { name: "Base", logo: "/net_logos/full_base_logo_1.jpeg" },
  { name: "Binance Smart Chain", logo: "/net_logos/binance.jpeg" },
  { name: "Solana", logo: "/net_logos/solana(1).jpeg" }
];

const supportedWallets = [
  { name: "MetaMask", logo: "Frame1597881991.svg" },
  { name: "WalletConnect", logo: "white.svg" },
  { name: "Phantom", logo: "/moonshot2.svg" },
  { name: "Coinbase", logo: "logo-meteora-with-text-onLight1.svg" },
  { name: "Trust Wallet", logo: "white.svg" },
];

export function Networks() {
  return (
    <section id="networks" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Networks</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Orbitt MM works seamlessly across multiple blockchain networks,
            providing consistent volume boosting regardless of your preferred chain.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 mb-16 flex-wrap items-center">
          {networks.map((network, index) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-4 flex items-center justify-center w-52 h-24 border border-gray-800"
            >
              <div className="text-center">
                <div className="w-28 h-12 mx-auto bg-transparent rounded-full flex items-center justify-center mb-2">
                  <div>
                    <Image src={network.logo} alt={network.name} width={132} height={58} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Now Supports</h2>
        </motion.div>

        <div className="flex justify-center overflow-hidden">
          {supportedWallets.map((wallet, index) => (
            <motion.div
              key={wallet.name}
              // initial={{ opacity: 0, scale: 0.9 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.3,  delay: index * 0.1 }}
              animate={{ x: ['50%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
              // viewport={{ once: true }}
              className="bg-gray-900 rounded-xl mx-2 p-6 flex items-center gap-3"
            >
              <div className="w-32 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <Image src={wallet.logo} alt={wallet.name} width={190} height={20} />
              </div>
              {/* <span className="text-sm font-medium">{wallet.name}</span> */}
            </motion.div>
          ))}
          {supportedWallets.map((wallet, index) => (
            <motion.div
              key={wallet.name}
              // initial={{ opacity: 0, scale: 0.9 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.3,  delay: index * 0.1 }}
              animate={{ x: ['50%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
              // viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 mx-2 flex items-center gap-3"
            >
              <div className="w-32 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <Image src={wallet.logo} alt={wallet.name} width={190} height={20} />
              </div>
              {/* <span className="text-sm font-medium">{wallet.name}</span> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}