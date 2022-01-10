import { Header } from '@/components/header';
import { Landing } from '@/components/landing';
// import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { Features } from '@/components/features';
import { Statistics } from '@/components/statistics';
import { VolumeCalculator } from '@/components/calculator';
import { Networks } from '@/components/networks';
import { Explainers } from '@/components/explainers';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
// import { FloatingElements } from '@/components/floating-elements';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Landing />
      <Hero />
      <HowItWorks />
      <Features />
      {/* <Statistics /> */}
      <VolumeCalculator />
      <Networks />
      <Explainers />
      <FAQ />
      <Footer />
    </main>
  );
}