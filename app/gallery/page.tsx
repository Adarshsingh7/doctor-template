"use client";

import { useState } from "react";
import Script from "next/script";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { galleryData } from "@/lib/site-data";

const galleryStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}`;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryData.items
    : galleryData.items.filter(item => item.category === activeCategory);

  function getBentoSpan(size: "normal" | "wide" | "tall" | "large") {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2 min-h-[380px] md:min-h-0";
      case "wide":
        return "md:col-span-2 min-h-[220px] md:min-h-0";
      case "tall":
        return "md:row-span-2 min-h-[380px] md:min-h-0";
      case "normal":
      default:
        return "col-span-1 min-h-[220px] md:min-h-0";
    }
  }

  return (
    <>
      <GalleryRuntime />
      <SiteHeader active="gallery" />
      <main className="pt-20 overflow-x-hidden bg-surface">
        <HeroSection />
        
        {/* Category Filters */}
        <section className="py-12 bg-surface px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto flex flex-wrap justify-center gap-3">
            {galleryData.categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-secondary text-on-secondary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <section className="pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[280px]">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl overflow-hidden group shadow-clinical hover:shadow-modal border border-outline-variant/10 transition-all flex flex-col justify-end ${getBentoSpan(item.size)}`}
              >
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                  src={item.src}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10"></div>
                
                {/* Content */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end text-white">
                  <span className="inline-block self-start px-3 py-1 bg-secondary text-on-secondary font-label-xs text-[10px] rounded-full uppercase tracking-wider mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <GalleryInteractions />
    </>
  );
}

function GalleryRuntime() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: galleryStyles }} />
    </>
  );
}

function HeroSection() {
  const { hero } = galleryData;
  return (
    <section className="relative min-h-[40vh] md:h-[400px] py-16 md:py-0 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Gallery Hero" className="w-full h-full object-cover" src={hero.backgroundImage} />
        <div className="absolute inset-0 bg-primary/45 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-on-primary-fixed-variant/20 backdrop-blur-sm border border-outline-variant/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest">{hero.tagline}</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg mb-6 leading-tight">{hero.title}</h1>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim/90">{hero.description}</p>
        </div>
      </div>
    </section>
  );
}

function GalleryInteractions() {
  return (
    <Script
      id="gallery-interactions"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mousedown', () => button.classList.add('scale-95'));
            button.addEventListener('mouseup', () => button.classList.remove('scale-95'));
            button.addEventListener('mouseleave', () => button.classList.remove('scale-95'));
        });
    `,
      }}
    />
  );
}
