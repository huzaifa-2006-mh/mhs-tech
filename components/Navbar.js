'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail } from 'lucide-react';
import Logo from './Logo';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PROJECTS', href: '/portfolio' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="w-full bg-[#1a1a1a]/80 text-white font-sans border-b border-white/5 pb-4 sticky top-0 z-50 backdrop-blur-lg">
      {/* Top Banner Row (Email, Logo, Socials) */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Email */}
          <div className="hidden md:flex items-center gap-3 group cursor-pointer w-1/3">
            <div className="w-10 h-10 rounded-full border border-neon/40 flex items-center justify-center group-hover:border-neon transition-all duration-300">
              <Mail className="w-4 h-4 text-neon" />
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">
              MHSOFTWAREHOUSE77@GMAIL.COM
            </span>
          </div>

          {/* Center: Logo (Now CSS Based) */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/3">
            <Link href="/" className="group">
              <Logo className="transform transition-transform duration-500 group-hover:scale-110" />
            </Link>
          </div>

          {/* Right: Socials */}
          <div className="hidden md:flex items-center justify-end gap-3 w-1/3">
             <a href="https://www.facebook.com/share/1PHG1Se6H9/" target="_blank" className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:border-neon hover:text-neon transition-all duration-300">
              <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/mhssoftwarehouse/" target="_blank" className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:border-neon hover:text-neon transition-all duration-300">
              <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/mhsoftwarehouse77/?hl=en" target="_blank" className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:border-neon hover:text-neon transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-neon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Bottom Nav Bar (Pill Shape) */}
      <nav className={`${isOpen ? 'flex' : 'hidden md:flex'} justify-center px-4`}>
        <div className="bg-[#0a0a0a]/90 border border-white/10 rounded-full px-6 md:px-12 py-3.5 flex flex-col md:flex-row items-center gap-6 md:gap-14 shadow-2xl shadow-black/50">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[11px] font-black tracking-[0.25em] hover:text-neon uppercase transition-colors ${pathname === link.href ? 'text-neon' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
