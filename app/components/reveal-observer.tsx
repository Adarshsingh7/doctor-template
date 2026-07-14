"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Intersection Observer to add the 'is-visible' class when elements enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Trigger animation only once
          }
        });
      },
      {
        threshold: 0.01, // Trigger as soon as any part of the element enters the viewport
        rootMargin: "0px 0px 80px 0px", // Offset triggering to start 80px before entering viewport
      }
    );

    const setupObservers = () => {
      // Observe all sections
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        // Exclude sections near the top of the page (top coordinate < 400px relative to page start)
        const rect = section.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        if (absoluteTop < 400) {
          section.classList.remove("reveal");
          section.classList.add("is-visible");
        } else if (!section.classList.contains("is-visible")) {
          section.classList.add("reveal");
          observer.observe(section);
        }
      });

      // Observe all individual reveal cards for staggered/fine-grained reveal
      const cards = document.querySelectorAll(".reveal-card");
      cards.forEach((card) => {
        // Exclude cards near the top of the page from transition delay
        const rect = card.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        if (absoluteTop < 400) {
          card.classList.add("is-visible");
        } else if (!card.classList.contains("is-visible")) {
          observer.observe(card);
        }
      });
    };

    // Run setup immediately
    setupObservers();

    // Set up MutationObserver to handle dynamically rendered sections or cards (e.g. search, filtering)
    const mutationObserver = new MutationObserver(() => {
      setupObservers();
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Run setup after a short delay to account for Next.js route transition rendering latency
    const timer = setTimeout(setupObservers, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
