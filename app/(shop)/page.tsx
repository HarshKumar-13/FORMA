import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Header from "@/components/navigation/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#111111]">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row pt-24 md:pt-0">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10">
          <div className="mb-6 flex gap-4 text-[10px] tracking-widest text-[#66645F] uppercase font-medium">
            <span>Indian Roads</span>
            <span>Your Stories</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight font-medium mb-6">
            Designed<br />for here.<br />
            <span className="text-[#8A8882]">By you.</span>
          </h1>
          
          <p className="max-w-md text-[#66645F] text-base md:text-lg mb-10 leading-relaxed">
            Custom sneakers made for your everyday — from city streets to mountain getaways.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-24">
            <Link 
              href="/customise/forma-01" 
              className="bg-[#111111] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#C85A35] transition-colors flex items-center gap-3"
            >
              Create Your FORMA <ArrowRight size={16} />
            </Link>
            <Link 
              href="/shop" 
              className="text-sm font-medium border-b border-[#111111] pb-1 hover:text-[#66645F] hover:border-[#66645F] transition-colors"
            >
              Explore Collection
            </Link>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-6 mt-auto pb-12">
            <span className="text-xs font-medium">01/04</span>
            <div className="w-24 h-[1px] bg-[#DDDAD3] relative">
              <div className="absolute left-0 top-0 h-full w-1/4 bg-[#111111]" />
            </div>
            <div className="flex gap-4">
              <button className="hover:opacity-50 transition-opacity"><ChevronLeft size={20} strokeWidth={1.5} /></button>
              <button className="hover:opacity-50 transition-opacity"><ChevronRight size={20} strokeWidth={1.5} /></button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative min-h-[60vh] md:min-h-full">
          <Image 
            src="https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=2000&auto=format&fit=crop" 
            alt="Person stepping up in FORMA sneakers" 
            fill 
            className="object-cover object-center"
            priority
          />
          
          {/* Floating Product Badge */}
          <div className="absolute bottom-24 left-[-40px] md:left-[-80px] bg-white/90 backdrop-blur-md p-3 pr-6 rounded-lg shadow-lg flex items-center gap-4 z-20">
            <div className="w-16 h-12 relative bg-[#F1F0EB] rounded">
               <Image 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&auto=format&fit=crop" 
                alt="Forma 01" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="text-[10px] tracking-wider text-[#66645F] uppercase mb-0.5">Forma 01</p>
              <p className="text-sm font-medium">City Edition</p>
            </div>
          </div>

          <div className="absolute top-32 right-12 text-[10px] tracking-widest text-right uppercase text-[#111111] font-medium hidden md:block mix-blend-overlay">
            Made in India<br />For every journey
          </div>
        </div>
      </section>

      {/* 2. CATEGORY GRID */}
      <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Made for<br />every kind of you.
          </h2>
          <Link href="/shop" className="text-sm font-medium flex items-center gap-2 hover:opacity-70">
            View all <span className="w-6 h-6 border border-[#DDDAD3] rounded-full flex items-center justify-center"><ChevronRight size={14} /></span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Lifestyle", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop" },
            { title: "Running", img: "https://images.unsplash.com/photo-1536922246289-88c42f957773?q=80&w=800&auto=format&fit=crop" },
            { title: "Customise", img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop" },
            { title: "Limited Editions", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" }
          ].map((category, idx) => (
            <Link href="/shop" key={idx} className="group relative aspect-[4/5] overflow-hidden bg-[#F1F0EB]">
              <Image 
                src={category.img} 
                alt={category.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center text-white">
                <span className="text-sm font-medium tracking-wide">{category.title}</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. CUSTOMIZER PROMO */}
      <section className="bg-[#111111] text-white py-24 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-3 z-10">
            <p className="text-[10px] tracking-widest text-[#8A8882] uppercase mb-4">Your Design Studio</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-6">
              Turn your<br />ideas into<br />one of one.
            </h2>
            <p className="text-[#8A8882] text-sm mb-10 max-w-[280px]">
              Choose the materials, colours and details. We'll bring your vision to life.
            </p>
            <Link 
              href="/customise/forma-01" 
              className="bg-white text-[#111111] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F1F0EB] transition-colors inline-flex items-center gap-3"
            >
              Start Customising <ChevronRight size={16} />
            </Link>
          </div>

          {/* Center 3D/Floating Shoe */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[600px] flex items-center justify-center">
            {/* Placeholder for 3D Canvas */}
            <div className="relative w-full max-w-[800px] aspect-video">
              <Image 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop" 
                alt="Floating customized sneaker" 
                fill 
                className="object-contain drop-shadow-2xl scale-125 transform -rotate-12"
              />
            </div>
            
            {/* Ambient glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
          </div>

          {/* Right Menu */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 z-10">
            {[
              { label: "Base", active: false },
              { label: "Material", active: false },
              { label: "Colour", active: true, color: "#C85A35" },
              { label: "Sole", active: false },
              { label: "Laces", active: false },
              { label: "Details", active: false }
            ].map((step, idx) => (
              <div key={idx} className={`flex items-center gap-4 ${step.active ? "opacity-100" : "opacity-50"}`}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${step.active ? "border-white" : "border-[#333]"}`}>
                  {step.color ? (
                    <div className="w-5 h-5 rounded-full" style={{ backgroundColor: step.color }} />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
                <span className="text-sm tracking-wide">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STORY SECTION */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Large Image */}
          <div className="lg:col-span-7 relative aspect-[4/3] group cursor-pointer">
            <Image 
              src="https://images.unsplash.com/photo-1610423027989-106ea4a48ee7?q=80&w=1600&auto=format&fit=crop" 
              alt="Person sitting in urban environment" 
              fill 
              className="object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute bottom-8 left-8 flex items-center gap-4 text-white">
              <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center backdrop-blur-sm bg-black/10 group-hover:bg-white group-hover:text-black transition-all">
                <Play size={16} className="ml-1" />
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-0.5">A Closer Look</p>
                <p className="text-sm font-medium">Our Story</p>
              </div>
            </div>
          </div>

          {/* Text Block */}
          <div className="lg:col-span-5 lg:-ml-12 lg:mt-[-20%] bg-white p-8 lg:p-12 z-10 shadow-sm border border-[#F1F0EB]">
            <p className="text-[10px] tracking-widest text-[#8A8882] uppercase mb-4">More than sneakers</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Crafted for<br />a new India.
            </h2>
            <p className="text-[#66645F] text-sm leading-relaxed mb-8">
              Inspired by the streets, landscapes and people who keep moving forward. FORMA is a celebration of individuality, craftsmanship and a more conscious tomorrow.
            </p>
            <Link 
              href="/stories" 
              className="text-sm font-medium border-b border-[#111111] pb-1 hover:text-[#66645F] hover:border-[#66645F] transition-colors inline-flex items-center gap-2"
            >
              Discover Our Story <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. MATERIALS SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image 
          src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2000&auto=format&fit=crop" 
          alt="Macro shot of sneaker materials" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-end text-white gap-8">
          <div>
            <p className="text-[10px] tracking-widest uppercase mb-4 opacity-80">Our Materials</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              Thoughtfully<br />chosen. Built to last.
            </h2>
          </div>
          
          <div className="max-w-sm">
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              From Indian-sourced leathers to recycled materials, every detail is selected for performance, comfort and a lower impact.
            </p>
            <Link 
              href="/materials" 
              className="text-sm font-medium border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition-colors inline-flex items-center gap-2"
            >
              Explore Materials <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}