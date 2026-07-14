"use client";

import { useState } from "react";
import Link from "next/link";
import { globalData } from "@/lib/site-data";

type ActivePage = "home" | "conditions" | "technology" | "patients" | "blog";

export function SiteHeader({ active }: Readonly<{ active: ActivePage }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface-container-lowest/90 backdrop-blur-md border-b border-surface-container-high dark:border-outline-variant shadow-sm h-20">
        <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container flex items-center justify-center rounded-lg">
              <span
                className="material-symbols-outlined text-primary-fixed"
                style={{ fontVariationSettings: `'FILL' 1` }}
              >
                {globalData.logoIcon}
              </span>
            </div>
            <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">
              {globalData.brandName}
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-label-md text-label-md">
            {globalData.navItems.map((item) => {
              const isActive = item.key === active;
              const className = isActive
                ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                : "text-on-surface-variant hover:text-secondary transition-colors";

              return item.href === "#" ? (
                <a key={item.label} className={className} href="#">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} className={className} href={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/book" className="hidden sm:inline-flex bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-clinical items-center justify-center">
              Book Appointment
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-on-surface p-2 rounded-lg hover:bg-surface-container-high transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined select-none">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-surface/95 dark:bg-surface-container-lowest/95 backdrop-blur-md transition-all duration-300 md:hidden flex flex-col ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6 font-headline-sm text-headline-sm font-semibold border-t border-surface-container-high dark:border-outline-variant">
          {globalData.navItems.map((item) => {
            const isActive = item.key === active;
            const className = isActive
              ? "text-secondary font-bold pl-4 border-l-4 border-secondary py-1"
              : "text-on-surface-variant hover:text-secondary pl-4 border-l-4 border-transparent py-1 transition-all";

            return (
              <Link
                key={item.label}
                className={className}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-6 border-t border-surface-container-high dark:border-outline-variant px-4">
            <Link
              href="/book"
              className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-label-lg text-label-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-clinical flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export function SiteFooter() {
  const { footer } = globalData;
  return (
    <footer className="bg-primary-container dark:bg-tertiary-container w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-primary-fixed">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img alt="Logo" className="w-12 h-12 object-contain brightness-0 invert" src={footer.logoImage} />
            <h4 className="font-headline-md text-headline-md font-extrabold text-primary-fixed">{footer.brandName}</h4>
          </div>
          <p className="font-body-md text-body-md text-on-primary-container leading-relaxed mb-6">
            {footer.description}
          </p>
          <div className="flex gap-4">
            {footer.socialLinks.map((link, idx) => (
              <a key={idx} className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-secondary transition-colors text-white" href={link.href}>
                <span className="material-symbols-outlined text-sm">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-label-md text-label-md uppercase tracking-widest mb-6">Patient Links</h5>
          <ul className="space-y-3 font-body-md text-body-md text-on-primary-container">
            {footer.patientLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-primary-fixed-dim transition-colors hover:underline" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-label-md text-label-md uppercase tracking-widest mb-6">Clinical Hours</h5>
          <ul className="space-y-3 font-body-md text-body-md text-on-primary-container">
            {footer.clinicalHours.map((hour, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{hour.days}</span> <span>{hour.time}</span>
              </li>
            ))}
            <li className="pt-4 text-secondary-fixed font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">notification_important</span>
              {footer.supportTagline}
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-label-md text-label-md uppercase tracking-widest mb-6">Newsletter</h5>
          <p className="text-sm text-on-primary-container mb-4">{footer.newsletterText}</p>
          <div className="flex gap-2">
            <input
              className="bg-primary/40 border-outline-variant/30 rounded-lg p-2 text-white text-sm w-full outline-none focus:border-secondary"
              placeholder="Email"
              type="email"
            />
            <button className="bg-secondary text-on-secondary px-4 py-2 rounded-lg">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant/10 text-center">
        <p className="font-body-md text-body-md text-on-primary-container opacity-60">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}

