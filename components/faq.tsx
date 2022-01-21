"use client"

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { ChevronDown, DotIcon, Play } from "lucide-react";

const faqItems = [
  {
    question: "Strategic Volume Boost",
    answer: "Our platform uses advanced algorithms to strategically increase trading volume without artificially manipulating prices. The system distributes trades across multiple time intervals and works within market parameters to maintain natural price discovery."
  },
  {
    question: "Token Visibility Enhancement",
    answer: "By increasing legitimate trading volume, your token gains higher visibility on exchanges and tracking platforms. This increased exposure can attract organic interest from new traders and investors without relying on artificial methods."
  },
  {
    question: "Investor Trust Migration",
    answer: "Consistent, healthy trading volumes are a key metric investors look for. Our system helps build confidence by demonstrating market activity and liquidity, crucial for attracting serious investors looking for viable projects."
  },
  {
    question: "Exchange Ranking Optimization",
    answer: "Higher trading volumes directly impact your token's ranking and visibility on exchanges. Our platform helps improve these metrics legitimately, increasing your project's prominence in listings and search results."
  },
  {
    question: "Liquidity Improvement Process",
    answer: "Beyond volume, our system also optimizes liquidity pools to reduce slippage and improve trading experience. This creates a more attractive environment for traders and can lead to sustained organic growth."
  },
  {
    question: "Dedicated Support Network",
    answer: "Our team provides continuous monitoring and support to ensure optimal performance. We offer regular strategy adjustments based on market conditions and your specific goals, with 24/7 technical assistance."
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:flex max-w-[1200px] w-11/12 mx-auto">
      <div className="container mx-auto px-4">
        <div className="lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-8">
                Key Features<br />
                Tailored for Your<br />
                Project
              </h1>
              <p className="text-gray-400 text-lg max-w-xl">
                Orbitt MM increases your project's trading volume and adds new holders with every swap, creating a dynamic environment that attracts potential investors and builds long-term trust.
              </p>
              <div className="flex flex-wrap gap-4 mx-auto">
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
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Strategic Volume Boost</h2>
          <p className="text-gray-400">
            Common questions about our volume boosting service and how it can benefit your project
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        // viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 px-3">
                <AccordionTrigger className="text-left py-6 text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}