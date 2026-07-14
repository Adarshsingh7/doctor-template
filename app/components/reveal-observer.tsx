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
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "0px 0px -40px 0px", // Offset triggering slightly before entering viewport
      }
    );

    // Select all sections on the page
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      // If the section doesn't have 'is-visible' yet, prep it with the 'reveal' class and observe it
      if (!section.classList.contains("is-visible")) {
        section.classList.add("reveal");
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
