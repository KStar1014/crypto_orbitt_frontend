import Link from 'next/link';
import { CircleIcon, Twitter, Globe, Github } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-16 pb-8 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] w-11/12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div>
                <Image src="/footerLogo.8d8961e6.svg" alt="footer-logo" width={130} height={30} />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Advanced market making and volume boosting solutions for the modern crypto ecosystem.
              Enhance liquidity, optimize trading, and drive visibility.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Globe className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Github className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Volume Boost</FooterLink>
              <FooterLink href="#">Liquidity Provider</FooterLink>
              <FooterLink href="#">Market Making</FooterLink>
              <FooterLink href="#">Trading Bots</FooterLink>
              <FooterLink href="#">Analytics</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Press Kit</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Risk Disclosure</FooterLink>
              <FooterLink href="#">Compliance</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Orbitt MM. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-sm">Privacy Policy</span>
            <span className="text-gray-500 text-sm">Terms of Service</span>
            <span className="text-gray-500 text-sm">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-800/50 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </a>
    </li>
  );
}