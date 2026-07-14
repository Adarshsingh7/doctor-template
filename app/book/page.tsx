"use client";

import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { homeData, bookingPageData, globalData } from "@/lib/site-data";

export default function BookConsultationPage() {
  const { appointment, contactMap } = homeData;
  const { hero, preparation } = bookingPageData;
  const { footer } = globalData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your appointment request has been received. Our clinical coordinator will contact you shortly.");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <SiteHeader active="patients" />
      <main className="pt-20 overflow-x-hidden min-h-screen bg-surface-container-low">
        {/* Page Hero */}
        <section className="relative h-[280px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt={hero.title}
              className="w-full h-full object-cover brightness-[0.7]"
              src={hero.backgroundImage}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/80 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full py-8">
            <div className="max-w-2xl text-white">
              <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full mb-3 uppercase tracking-wider">
                {hero.tagline}
              </span>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-3">
                {hero.title}
              </h1>
              <p className="font-body-md text-body-md text-primary-fixed-dim/90 max-w-xl leading-relaxed">
                {hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reused Form Card - Span 2 Columns on large screens */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-clinical border border-outline-variant/15">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-2">
              {appointment.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              {appointment.description}
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant/50 rounded-lg p-3.5 focus:border-secondary focus:ring-2 focus:ring-secondary/15 outline-none transition-all text-on-surface"
                    placeholder="John Doe"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant/50 rounded-lg p-3.5 focus:border-secondary focus:ring-2 focus:ring-secondary/15 outline-none transition-all text-on-surface"
                    placeholder="(555) 000-0000"
                    required
                    type="tel"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Requested Specialty Service
                </label>
                <select className="w-full bg-surface border border-outline-variant/50 rounded-lg p-3.5 focus:border-secondary focus:ring-2 focus:ring-secondary/15 outline-none transition-all text-on-surface">
                  {appointment.services.map((service, idx) => (
                    <option key={idx}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">
                  Preferred Consultation Date
                </label>
                <input
                  className="w-full bg-surface border border-outline-variant/50 rounded-lg p-3.5 focus:border-secondary focus:ring-2 focus:ring-secondary/15 outline-none transition-all text-on-surface"
                  required
                  type="date"
                />
              </div>
              <button
                className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-4 rounded-lg hover:opacity-95 active:scale-98 transition-all shadow-clinical font-semibold"
                type="submit"
              >
                {appointment.buttonText}
              </button>
            </form>
          </div>

          {/* Sidebar Section - Span 1 Column */}
          <div className="flex flex-col gap-6">
            {/* Support contact info card */}
            <div className="bg-primary-container text-white p-8 rounded-3xl shadow-clinical border border-outline-variant/10 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-secondary/15 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white shrink-0">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-white font-bold">
                      {appointment.supportTitle}
                    </h4>
                    <p className="text-xs text-primary-fixed-dim">
                      {appointment.supportDesc}
                    </p>
                  </div>
                </div>
                <p className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">
                  {appointment.supportPhone}
                </p>
              </div>
            </div>

            {/* Reused Clinical Hours card */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-clinical border border-outline-variant/15">
              <h3 className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
                Clinical Hours
              </h3>
              <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                {footer.clinicalHours.map((hour, idx) => (
                  <li className="flex justify-between border-b border-outline-variant/10 pb-2" key={idx}>
                    <span className="font-medium text-on-surface">{hour.days}</span>
                    <span>{hour.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reused Location details card */}
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-clinical border border-outline-variant/15">
              <h3 className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-sm">location_on</span>
                Clinic Address
              </h3>
              {contactMap.details.filter(d => d.title === "Address").map((detail, idx) => (
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed" key={idx}>
                  {detail.lines.map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* First Visit Preparation Section */}
        <section className="bg-surface py-16 border-t border-outline-variant/15">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md text-primary font-bold mb-3">
                {preparation.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {preparation.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {preparation.items.map((item, idx) => (
                <div
                  className="bg-surface-container-lowest p-6 rounded-2xl shadow-clinical border border-outline-variant/10 flex flex-col hover:border-secondary/20 transition-all duration-200"
                  key={idx}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-5">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <h3 className="font-label-md text-label-md text-primary font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
