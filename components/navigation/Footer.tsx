"use client";

import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 px-6 md:px-12 lg:px-16 border-t border-[#222]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-4 pr-8">
            <Link href="/" className="text-2xl tracking-[0.25em] font-medium uppercase block mb-6">
              Forma
            </Link>
            <p className="text-[#8A8982] text-[16px] leading-relaxed mb-10 max-w-[320px]">
              Designed for here. By you. Modern Indian sneaker silhouettes crafted with sculptural discipline and quiet precision.
            </p>
            <div>
              <p className="text-[10px] md:text-[14px] tracking-[0.18em] text-[#686761] uppercase mb-3 font-semibold">Region & Currency</p>
              <button className="flex items-center gap-2 border border-[#333] rounded px-4 py-2.5 text-[13px] text-[#8A8982] hover:text-white hover:border-[#666] transition-colors">
                <Globe size={14} />
                India (INR ₹)
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] md:text-[14px] tracking-[0.18em] text-[#686761] uppercase mb-6 font-semibold">Shop</p>
            <ul className="flex flex-col gap-4 text-[16px] text-[#8A8982]">
              <li><Link href="/shop" className="hover:text-white transition-colors">Lifestyle</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Running</Link></li>
              <li><Link href="/customise/forma-01" className="hover:text-white transition-colors">Customise</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Limited Editions</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] md:text-[14px] tracking-[0.18em] text-[#686761] uppercase mb-6 font-semibold">About</p>
            <ul className="flex flex-col gap-4 text-[16px] text-[#8A8982]">
              <li><Link href="/stories" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/materials" className="hover:text-white transition-colors">Materials</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Craftsmanship</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] md:text-[14px] tracking-[0.18em] text-[#686761] uppercase mb-6 font-semibold">Dispatches</p>
            <p className="text-[#8A8982] text-[16px] leading-relaxed mb-6">
              Receive early access to seasonal editions and architectural footwear drops.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border border-[#333] border-r-0 px-4 py-3 text-[14px] text-white w-full focus:outline-none focus:border-[#666] transition-colors"
              />
              <button 
                type="submit" 
                className="bg-[#C6532D] text-white px-6 flex items-center justify-center hover:bg-[#A34323] transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] md:text-[14px] text-[#686761]">
          {/* Updated Copyright Year */}
          <p>© 2026 FORMA Atelier India. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-[#8A8982] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#8A8982] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#8A8982] transition-colors">Sizing & Fit Guide</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}