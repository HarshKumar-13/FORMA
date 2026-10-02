"use client";

import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "@/store/useUserStore";
import AuthModal from "@/components/ui/AuthModal";

export default function Header() {
  const { isLoggedIn, openAuthModal } = useUserStore();

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 w-[92%] max-w-[1200px] rounded-full backdrop-blur-xl bg-white/30 border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] text-[#111111]"
      >
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="text-xl tracking-[0.25em] font-medium uppercase drop-shadow-sm">
            Forma
          </Link>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center justify-center gap-12 flex-1 text-[18px] tracking-wide font-medium">
          <Link href="/shop" className="hover:text-black/60 transition-colors drop-shadow-sm">Shop</Link>
          <Link href="/customise/forma-01" className="hover:text-black/60 transition-colors drop-shadow-sm">Customise</Link>
          <Link href="/stories" className="hover:text-black/60 transition-colors drop-shadow-sm">Stories</Link>
          <Link href="/about" className="hover:text-black/60 transition-colors drop-shadow-sm">About</Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center justify-end gap-5 flex-1">
          <button aria-label="Search" className="hover:opacity-60 transition-opacity drop-shadow-sm">
            <Search size={18} strokeWidth={1.5} />
          </button>
          
          <button aria-label="Cart" className="relative hover:opacity-60 transition-opacity flex items-center gap-2 drop-shadow-sm">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="text-[11px] font-medium absolute -top-1.5 -right-2 bg-[#111111] text-white w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {isLoggedIn ? (
            <button aria-label="Account" className="hover:opacity-60 transition-opacity drop-shadow-sm ml-2">
              <User size={18} strokeWidth={1.5} />
            </button>
          ) : (
            <div className="flex items-center gap-2 text-[18px] font-medium tracking-wide ml-2 drop-shadow-sm whitespace-nowrap">
              <button 
                onClick={() => openAuthModal("signup")} 
                className="hover:opacity-60 transition-opacity"
              >
                Sign Up
              </button>
              <span className="text-black/40">|</span>
              <button 
                onClick={() => openAuthModal("login")} 
                className="hover:opacity-60 transition-opacity"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </motion.header>

      <AuthModal />
    </>
  );
}