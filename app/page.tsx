"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

const HERO_SLIDES = [
  "/home/hero.png",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=2000&auto=format&fit=crop"
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <main suppressHydrationWarning className="min-h-screen bg-[#F7F6F2] text-[#111111] flex flex-col">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen min-h-[700px] max-h-[900px] flex items-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={HERO_SLIDES[currentSlide]} 
              alt={`FORMA Campaign ${currentSlide + 1}`}
              fill 
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative z-10 w-full h-full flex flex-col px-6 md:px-12 lg:px-16 pb-12 lg:pb-0">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col justify-center max-w-[640px] pt-16"
          >
            <div className="mb-8 flex gap-4 text-[10px] md:text-[14px] tracking-[0.18em] text-[#8A8982] uppercase font-medium">
              <span>Indian Roads</span>
              <span>Your Stories</span>
            </div>
            <h1 className="text-[56px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.045em] font-medium mb-6 text-[#111111]">
              <span className="whitespace-nowrap">Designed for here.</span><br />
              <span className="text-[#8A8982]">By you.</span>
            </h1>
            <p className="max-w-[380px] text-[#686761] text-[16px] mb-10 leading-relaxed">
              Custom sneakers made for your everyday — from city streets to mountain getaways.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link 
                href="/customise/forma-01" 
                className="bg-[#111111] text-white px-8 py-4 rounded-full text-[14px] md:text-[18px] font-medium hover:bg-[#C6532D] transition-colors flex items-center gap-3"
              >
                Create Your FORMA <ArrowRight size={16} />
              </Link>
              <Link 
                href="/shop" 
                className="text-[15px] md:text-[18px] font-medium border-b border-[#111111] pb-0.5 hover:text-[#686761] hover:border-[#686761] transition-colors text-[#111111]"
              >
                Explore Collection
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-6 mt-auto pb-12 lg:pb-16"
          >
            <span className="text-[13px] md:text-[14px] font-medium text-[#111111] w-12">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
            <div className="w-24 h-[1px] bg-[#DDDAD3] relative overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-[#111111]" 
                initial={{ width: "0%" }}
                animate={{ width: `${((currentSlide + 1) / HERO_SLIDES.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex gap-4 text-[#111111]">
              <button onClick={prevSlide} className="hover:opacity-50 transition-opacity p-2 -ml-2"><ChevronLeft size={18} strokeWidth={1.5} /></button>
              <button onClick={nextSlide} className="hover:opacity-50 transition-opacity p-2"><ChevronRight size={18} strokeWidth={1.5} /></button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY GRID */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-white overflow-hidden">
         <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <div>
            <p className="text-[10px] md:text-[14px] tracking-[0.18em] text-[#C6532D] uppercase mb-3 font-semibold">
              Shop by
            </p>
            <h2 className="text-4xl md:text-[50px] font-medium tracking-tight leading-[1.05] whitespace-nowrap">
              Made for every kind of you.
            </h2>
          </div>
          <Link href="/shop" className="text-[12px] md:text-[14px] font-medium flex items-center gap-2 hover:opacity-70 transition-opacity uppercase border-b border-[#111111] pb-0.5 tracking-wider">
            VIEW ALL <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            { title: "Lifestyle", img: "/home/Lifestyle.png" },
            { title: "Running", img: "/home/Running.png" },
            { title: "Customise", img: "/home/Customise.png" },
            { title: "Limited Editions", img: "/home/Limited Editions.png" }
          ].map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
            >
              <Link href="/shop" className="group relative aspect-[4/5] overflow-hidden bg-[#F7F6F2] block">
                <Image 
                  src={category.img} 
                  alt={category.title} 
                  fill 
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center text-white">
                  <span className="text-[19px] md:text-[22px] font-medium">{category.title}</span>
                  <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CUSTOMIZER STUDIO */}
      <section className="relative w-full min-h-[700px] flex items-center py-32 overflow-hidden bg-[#111111]">
        <Image 
          src="/home/3.png" 
          alt="Bespoke Configurator Background" 
          fill 
          className="object-cover z-0"
        />
        <div className="absolute inset-0 z-0 bg-black/40" />

        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-16 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 z-10 text-white"
          >
            <p className="text-[10px] md:text-[14px] tracking-[0.18em] text-white/60 uppercase mb-6">Bespoke Configurator</p>
            <h2 className="text-4xl md:text-[50px] font-medium tracking-tight leading-[1.05] mb-6">
              Turn your ideas<br />into one of one.
            </h2>
            <p className="text-white/70 text-[16px] mb-10 max-w-[340px] leading-relaxed">
              Choose the materials, colours and details. We'll bring your vision to life in our Bengaluru atelier.
            </p>
            
            <div className="flex items-center gap-3 text-[11px] md:text-[14px] tracking-widest text-white/60 mb-10 uppercase">
              <span>01 Base</span>
              <span className="opacity-40">·</span>
              <span>02 Material</span>
              <span className="opacity-40">·</span>
              <span>03 Colour</span>
              <span className="opacity-40">·</span>
              <span>04 Sole</span>
              <span className="opacity-40">·</span>
              <span>05 Laces</span>
            </div>

            <Link 
              href="/customise/forma-01" 
              className="bg-white text-[#111111] px-8 py-3.5 rounded-full text-[14px] md:text-[18px] font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
            >
              Start Customising <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. STORY SECTION */}
      <section className="flex flex-col lg:flex-row w-full bg-white min-h-[600px] border-b border-[#E9E7E1] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-[45%] relative min-h-[400px] lg:min-h-full"
        >
          <Image 
            src="/home/4.png" 
            alt="Person sitting in urban environment overlooking city" 
            fill 
            className="object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex flex-col justify-center p-12 lg:p-24 text-[#111111]"
        >
          <div className="max-w-[480px]">
            <p className="text-[10px] md:text-[14px] tracking-[0.18em] text-[#C6532D] uppercase mb-6 font-semibold">
              More than sneakers
            </p>
            <h2 className="text-4xl md:text-[50px] font-medium tracking-tight mb-8 leading-[1.05] text-[#111111]">
              Crafted for a<br />new India.
            </h2>
            <p className="text-[#686761] text-[16px] leading-relaxed mb-10">
              Inspired by the streets, landscapes and people who keep moving forward. FORMA is a celebration of individuality, craftsmanship and a more conscious tomorrow.
            </p>
            <Link 
              href="/stories" 
              className="text-[11px] md:text-[14px] tracking-[0.18em] font-medium uppercase text-[#111111] hover:text-[#686761] transition-colors inline-flex items-center gap-4"
            >
              DISCOVER OUR STORY <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 5. MATERIALS SECTION */}
      <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
        <motion.div
           initial={{ scale: 1.05 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="absolute inset-0"
        >
          <Image 
            src="/home/Materials-bg.png" 
            alt="Macro shot of sneaker materials and texture" 
            fill 
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-end text-white gap-8 max-w-[1440px] mx-auto w-full"
        >
          <div>
            <p className="text-[10px] md:text-[14px] tracking-[0.18em] uppercase mb-4 opacity-80">Our Materials</p>
            <h2 className="text-4xl md:text-[50px] font-medium tracking-tight leading-[1.05]">
              Thoughtfully<br />chosen. Built to last.
            </h2>
          </div>
          
          <div className="max-w-[340px]">
            <p className="text-[16px] text-white/70 leading-relaxed mb-6">
              From Indian-sourced leathers to recycled materials, every detail is selected for performance, comfort and a lower impact.
            </p>
            <Link 
              href="/materials" 
              className="text-[14px] md:text-[18px] font-medium border-b border-white pb-0.5 hover:text-white/70 hover:border-white/70 transition-colors inline-flex items-center gap-2"
            >
              Explore Materials <ChevronRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}