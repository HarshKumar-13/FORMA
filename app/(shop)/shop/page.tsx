"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, SlidersHorizontal, Check } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

// Mock Product Catalogue data
const PRODUCTS = [
  {
    id: "forma-01-city",
    name: "FORMA 01",
    subtitle: "City Edition",
    price: "₹8,499",
    category: "lifestyle",
    badge: null,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    colors: ["#111111", "#C6532D", "#8A8982"]
  },
  {
    id: "forma-02-trail",
    name: "FORMA 02",
    subtitle: "Trail Runner",
    price: "₹8,999",
    category: "running",
    badge: null,
    image: "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=800&auto=format&fit=crop",
    colors: ["#6B4A38", "#111111", "#C6532D"]
  },
  {
    id: "forma-03-court",
    name: "FORMA 03",
    subtitle: "Court Edition",
    price: "₹8,499",
    category: "lifestyle",
    badge: null,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop",
    colors: ["#111111", "#8A8982"]
  },
  {
    id: "forma-high-utility",
    name: "FORMA High",
    subtitle: "City Utility",
    price: "₹10,999",
    category: "limited",
    badge: "LIMITED",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    colors: ["#8A8982", "#111111"]
  },
  {
    id: "forma-01-monsoon",
    name: "FORMA 01",
    subtitle: "Monsoon Pack",
    price: "₹9,499",
    category: "running",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop",
    colors: ["#111111", "#686761", "#C6532D"]
  },
  {
    id: "forma-02-terracotta",
    name: "FORMA 02",
    subtitle: "Terracotta",
    price: "₹8,999",
    category: "lifestyle",
    badge: null,
    image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?q=80&w=800&auto=format&fit=crop",
    colors: ["#C6532D", "#6B4A38", "#111111"]
  },
  {
    id: "forma-03-bangalore",
    name: "FORMA 03",
    subtitle: "Bangalore Edition",
    price: "₹8,499",
    category: "limited",
    badge: null,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
    colors: ["#686761", "#111111", "#C6532D"]
  },
  {
    id: "forma-01-midnight",
    name: "FORMA 01",
    subtitle: "Midnight",
    price: "₹8,499",
    category: "customise",
    badge: "CUSTOM",
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=800&auto=format&fit=crop",
    colors: ["#111111", "#8A8982", "#6B4A38"]
  }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColours, setSelectedColours] = useState<string[]>([]);

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const toggleSize = (size: number) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColour = (color: string) => {
    setSelectedColours(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedSizes([]);
    setSelectedColours([]);
  };

  return (
    <main suppressHydrationWarning className="min-h-screen bg-[#F7F6F2] text-[#111111] flex flex-col">
      <Header />

      {/* 1. SHOP HERO BANNER */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-end pb-16 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#111111] pt-32">
        <Image 
          src="https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=2000&auto=format&fit=crop" 
          alt="Move Different Campaign" 
          fill 
          className="object-cover opacity-60 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

        <div className="relative z-20 max-w-[1440px] w-full mx-auto text-white">
          <p className="text-[10px] md:text-[14px] tracking-[0.18em] text-[#C6532D] uppercase mb-3 font-semibold">
            Shop
          </p>
          <h1 className="text-5xl md:text-[72px] font-medium tracking-tight mb-4 leading-[1.05]">
            Move Different.
          </h1>
          <p className="text-white/70 text-[16px] max-w-[400px]">
            Sneakers for every pace, place and perspective.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY TILES */}
      <section className="py-12 px-6 md:px-12 lg:px-16 bg-white border-b border-[#E9E7E1]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            { title: "Lifestyle", id: "lifestyle", img: "/home/Lifestyle.png" },
            { title: "Running", id: "running", img: "/home/Running.png" },
            { title: "Customise", id: "customise", img: "/home/Customise.png" },
            { title: "Limited Editions", id: "limited", img: "/home/Limited Editions.png" }
          ].map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedCategory(cat.id)}
              className="group relative aspect-[4/5] overflow-hidden bg-[#F7F6F2] cursor-pointer"
            >
              <Image 
                src={cat.img} 
                alt={cat.title} 
                fill 
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center text-white">
                <span className="text-[21px] font-medium">{cat.title}</span>
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CATALOGUE LAYOUT */}
      <section className="py-16 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto w-full flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 mb-10 border-b border-[#DDDAD3] gap-4">
          <div className="flex items-center gap-6">
            <span className="text-[14px] uppercase tracking-wider font-semibold text-[#111111]">Filter</span>
            {(selectedCategory !== "all" || selectedSizes.length > 0 || selectedColours.length > 0) && (
              <button 
                onClick={clearAllFilters}
                className="text-[12px] text-[#686761] underline hover:text-[#111111] transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-8">
            <h2 className="text-[18px] font-medium tracking-tight">
              All Sneakers <span className="text-[#8A8982] text-[14px] ml-2">({filteredProducts.length} products)</span>
            </h2>

            <div className="flex items-center gap-3">
              <span className="text-[13px] text-[#686761]">Sort by</span>
              <select className="bg-transparent text-[14px] font-medium text-[#111111] border border-[#DDDAD3] rounded px-3 py-1.5 focus:outline-none cursor-pointer">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price low-high</option>
                <option value="price-high">Price high-low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT SIDEBAR FILTERS */}
          <aside className="lg:col-span-3 flex flex-col gap-8 pr-6">
            <div className="border-b border-[#DDDAD3] pb-6">
              <div className="flex justify-between items-center mb-4 cursor-pointer">
                <h3 className="text-[14px] uppercase tracking-wider font-semibold text-[#111111]">Category</h3>
                <span>−</span>
              </div>
              <ul className="flex flex-col gap-3 text-[15px] text-[#686761]">
                {[
                  { label: "All", id: "all", count: 24 },
                  { label: "Lifestyle", id: "lifestyle", count: 8 },
                  { label: "Running", id: "running", count: 6 },
                  { label: "Customise", id: "customise", count: 6 },
                  { label: "Limited Editions", id: "limited", count: 4 }
                ].map((cat) => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex justify-between items-center w-full text-left transition-colors ${selectedCategory === cat.id ? "text-[#111111] font-medium" : "hover:text-[#111111]"}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-3.5 h-3.5 rounded-full border border-[#111111] flex items-center justify-center ${selectedCategory === cat.id ? "bg-[#111111]" : ""}`}>
                          {selectedCategory === cat.id && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                        </span>
                        {cat.label}
                      </span>
                      <span className="text-[#8A8982] text-[13px]">({cat.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-b border-[#DDDAD3] pb-6">
              <div className="flex justify-between items-center mb-4 cursor-pointer">
                <h3 className="text-[14px] uppercase tracking-wider font-semibold text-[#111111]">Size (UK)</h3>
                <span>−</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[6, 7, 8, 9, 10, 11].map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`py-2 text-[14px] font-medium border rounded transition-all ${
                        isSelected 
                          ? "bg-[#111111] text-white border-[#111111]" 
                          : "bg-white text-[#111111] border-[#DDDAD3] hover:border-[#111111]"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-b border-[#DDDAD3] pb-6">
              <div className="flex justify-between items-center mb-4 cursor-pointer">
                <h3 className="text-[14px] uppercase tracking-wider font-semibold text-[#111111]">Colour</h3>
                <span>−</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Sandstone", hex: "#E3DAC9" },
                  { name: "Olive", hex: "#556B2F" },
                  { name: "Black", hex: "#111111" },
                  { name: "Terracotta", hex: "#C6532D" },
                  { name: "Cream", hex: "#F5F5DC" },
                  { name: "Brown", hex: "#6B4A38" }
                ].map((col) => {
                  const isSelected = selectedColours.includes(col.name);
                  return (
                    <button
                      key={col.name}
                      onClick={() => toggleColour(col.name)}
                      className={`w-7 h-7 rounded-full border relative flex items-center justify-center transition-transform ${isSelected ? "ring-2 ring-offset-2 ring-[#111111] scale-110" : "border-[#DDDAD3]"}`}
                      style={{ backgroundColor: col.hex }}
                      title={col.name}
                    >
                      {isSelected && <Check size={12} className={col.hex === "#111111" || col.hex === "#556B2F" || col.hex === "#6B4A38" || col.hex === "#C6532D" ? "text-white" : "text-black"} />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-b border-[#DDDAD3] pb-6">
              <div className="flex justify-between items-center mb-4 cursor-pointer">
                <h3 className="text-[14px] uppercase tracking-wider font-semibold text-[#111111]">Price</h3>
                <span>−</span>
              </div>
              <input type="range" min="3000" max="15000" defaultValue="15000" className="w-full accent-[#111111] cursor-pointer mb-3" />
              <div className="flex justify-between text-[13px] text-[#686761]">
                <span>₹3,000</span>
                <span>₹15,000</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4 cursor-pointer">
                <h3 className="text-[14px] uppercase tracking-wider font-semibold text-[#111111]">Availability</h3>
                <span>−</span>
              </div>
              <ul className="flex flex-col gap-3 text-[15px] text-[#686761]">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#111111] w-4 h-4 rounded" />
                  <span>In stock (24)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="accent-[#111111] w-4 h-4 rounded" />
                  <span>Coming soon (3)</span>
                </label>
              </ul>
            </div>
          </aside>

          {/* RIGHT PRODUCT GRID (Changed to 3 columns for wider cards) */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={`/product/${product.id}`} className="group flex flex-col bg-white border border-[#E9E7E1] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/5] bg-[#F7F6F2] overflow-hidden">
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#111111] text-white text-[9px] font-medium tracking-widest px-2.5 py-1 rounded z-10 uppercase">
                        {product.badge}
                      </span>
                    )}
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-[16px] font-medium text-[#111111]">{product.name}</h3>
                        <span className="text-[15px] font-medium text-[#111111]">{product.price}</span>
                      </div>
                      <p className="text-[13px] text-[#686761] mb-4">{product.subtitle}</p>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-[#F1F0EB]">
                      <div className="flex items-center gap-1.5">
                        {product.colors.map((hex, i) => (
                          <span key={i} className="w-3 h-3 rounded-full border border-black/10" style={{ backgroundColor: hex }} />
                        ))}
                      </div>
                      <span className="w-7 h-7 rounded-full border border-[#DDDAD3] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white group-hover:border-[#111111] transition-all">
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL BANNER */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center px-6 mt-16 overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1528701800487-ba01fea498c0?q=80&w=2000&auto=format&fit=crop" 
          alt="For the movers editorial background" 
          fill 
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />

        <div className="relative z-20 max-w-[700px] text-white flex flex-col items-center">
          <p className="text-[10px] md:text-[14px] tracking-[0.18em] text-[#C6532D] uppercase mb-4 font-semibold">
            More than sneakers
          </p>
          <h2 className="text-4xl md:text-[56px] font-medium tracking-tight mb-6 leading-[1.05]">
            For the movers.
          </h2>
          <p className="text-white/80 text-[16px] leading-relaxed mb-10 max-w-[500px]">
            From morning commutes to weekend getaways, FORMA is made for wherever the day takes you.
          </p>
          <Link 
            href="/shop" 
            className="bg-white text-[#111111] px-8 py-4 rounded-full text-[15px] font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-3"
          >
            Explore the collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}