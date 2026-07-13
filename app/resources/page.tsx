import Script from "next/script";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

const pageStyles = ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .clinical-shadow {\n            box-shadow: 0 4px 20px rgba(0, 106, 97, 0.04);\n        }\n        .active-nav-link {\n            border-bottom: 2px solid #006a61;\n            color: #006a61;\n            font-weight: 700;\n            padding-bottom: 0.25rem;\n        }";

export default function ResourcesPage() {
  return (
    <>
      <ResourcesRuntime />
      <SiteHeader active="patients" />
      <main className="pt-20">
        <HeroSection />
        <SurgicalPreparationGuides />
        <TelehealthPortalBentoSection />
        <AdministrativeResourcesFAQ />
        <ContactSupportCTA />
      </main>
      <SiteFooter />
      <ResourcesInteractions />
    </>
  );
}

function ResourcesRuntime() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
    </>
  );
}

function HeroSection() {
  return (
    <>
      <section className="relative h-[614px] flex items-center overflow-hidden bg-primary-container">
      <div className="absolute inset-0 opacity-40">
      <img alt="" className="w-full h-full object-cover" data-alt="A high-end, bright clinical lobby with a modern information desk. A professional healthcare administrator is helping a patient. The atmosphere is calm, clean, and filled with soft natural light. The color palette features deep navy accents and crisp whites, embodying clinical excellence and reassurance." src="/stitch/asset-12.jpg"/>
      </div>
      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="max-w-2xl">
      <h1 className="font-headline-lg text-headline-lg text-on-tertiary mb-6">Patient Resources</h1>
      <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                              Empowering your neurological journey through transparent communication, comprehensive preparation guides, and clinical excellence. Your recovery begins with the right information.
                          </p>
      </div>
      </div>
      </section>
    </>
  );
}

function SurgicalPreparationGuides() {
  return (
    <>
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-12">
      <h2 className="font-headline-md text-headline-md text-primary mb-2">Surgical Preparation Guides</h2>
      <div className="w-16 h-1 bg-secondary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest clinical-shadow p-8 rounded-xl border border-surface-container-high transition-all hover:-translate-y-1">
      <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-6">
      <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "&apos;FILL&apos; 1" }}>assignment</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Pre-Operative Instructions</h3>
      <p className="text-on-surface-variant mb-8 line-clamp-3">Essential guidelines including fasting requirements, medication adjustments, and required diagnostic imaging prior to your procedure.</p>
      <button className="flex items-center gap-2 text-secondary font-label-md group">
                              Download PDF <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-y-0.5">download</span>
      </button>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest clinical-shadow p-8 rounded-xl border border-surface-container-high transition-all hover:-translate-y-1">
      <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-6">
      <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "&apos;FILL&apos; 1" }}>fact_check</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Day of Surgery Checklist</h3>
      <p className="text-on-surface-variant mb-8 line-clamp-3">A step-by-step guide on what to bring, arrival times, and what to expect during the admission process at our neurosurgical facility.</p>
      <button className="flex items-center gap-2 text-secondary font-label-md group">
                              Download PDF <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-y-0.5">download</span>
      </button>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container-lowest clinical-shadow p-8 rounded-xl border border-surface-container-high transition-all hover:-translate-y-1">
      <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-lg mb-6">
      <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "&apos;FILL&apos; 1" }}>healing</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Post-Operative Recovery</h3>
      <p className="text-on-surface-variant mb-8 line-clamp-3">Comprehensive recovery protocols including wound care, activity restrictions, and pain management strategies for a successful rehabilitation.</p>
      <button className="flex items-center gap-2 text-secondary font-label-md group">
                              Download PDF <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-y-0.5">download</span>
      </button>
      </div>
      </div>
      </section>
    </>
  );
}

function TelehealthPortalBentoSection() {
  return (
    <>
      <section className="bg-surface-container-low py-24">
      <div className="px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Patient Portal (Large) */}
      <div className="md:col-span-8 bg-primary-container rounded-xl overflow-hidden flex flex-col md:flex-row relative group cursor-pointer">
      <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30">
      
      </div>
      <div className="p-12 relative z-10 flex flex-col justify-center max-w-md">
      <h3 className="font-headline-md text-headline-md text-on-tertiary mb-4">Patient Portal</h3>
      <p className="text-on-primary-container mb-8">Access your surgical records, schedule follow-ups, and message your care team through our encrypted, HIPAA-compliant gateway.</p>
      <button className="bg-secondary text-on-secondary self-start px-8 py-3 rounded-lg font-label-md hover:bg-on-secondary-container transition-colors">Access Portal</button>
      </div>
      <div className="hidden md:block flex-1 relative min-h-[400px]">
      <img alt="" className="absolute inset-0 w-full h-full object-cover" data-alt="A clean, close-up shot of a modern medical tablet interface showing a secure login screen with clinical teal accents. The lighting is crisp and sterile yet professional. Deep navy background reinforces the security and medical authority of the NeuroLink clinic&apos;s patient portal." src="/stitch/asset-13.jpg"/>
      </div>
      </div>
      {/* Telehealth (Vertical) */}
      <div className="md:col-span-4 bg-secondary text-on-secondary p-12 rounded-xl flex flex-col justify-between">
      <div>
      <span className="material-symbols-outlined text-[48px] mb-6">videocam</span>
      <h3 className="font-headline-md text-headline-md mb-4">Telehealth</h3>
      <p className="opacity-90">Book a virtual consultation with our specialists from the comfort of your home. Ideal for pre-consultations and routine follow-ups.</p>
      </div>
      <button className="border border-on-secondary text-on-secondary px-8 py-3 rounded-lg font-label-md mt-12 hover:bg-on-secondary hover:text-secondary transition-all">Schedule Call</button>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function AdministrativeResourcesFAQ() {
  return (
    <>
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Administrative */}
      <div>
      <h2 className="font-headline-md text-headline-md text-primary mb-8">Administrative Resources</h2>
      <ul className="space-y-4">
      <li className="flex items-center justify-between p-6 bg-surface-container-lowest border border-surface-container-high rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer group">
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-secondary">payments</span>
      <span className="font-label-md text-primary">Insurance &amp; Billing</span>
      </div>
      <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">chevron_right</span>
      </li>
      <li className="flex items-center justify-between p-6 bg-surface-container-lowest border border-surface-container-high rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer group">
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-secondary">clinical_notes</span>
      <span className="font-label-md text-primary">Medical Records Request</span>
      </div>
      <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">chevron_right</span>
      </li>
      <li className="flex items-center justify-between p-6 bg-surface-container-lowest border border-surface-container-high rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer group">
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-secondary">gavel</span>
      <span className="font-label-md text-primary">Patient Rights &amp; Responsibilities</span>
      </div>
      <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">chevron_right</span>
      </li>
      </ul>
      </div>
      {/* FAQ Preview */}
      <div>
      <h2 className="font-headline-md text-headline-md text-primary mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
      <details className="group border-b border-surface-container-high pb-4">
      <summary className="flex justify-between items-center cursor-pointer list-none">
      <span className="font-label-md text-primary pr-8">How early should I arrive for my surgery?</span>
      <span className="material-symbols-outlined text-outline transition-transform group-open:rotate-180">expand_more</span>
      </summary>
      <p className="mt-4 text-on-surface-variant font-body-md leading-relaxed">We generally recommend arriving at least 2 hours prior to your scheduled surgical time to complete the admission process and preoperative preparation.</p>
      </details>
      <details className="group border-b border-surface-container-high pb-4">
      <summary className="flex justify-between items-center cursor-pointer list-none">
      <span className="font-label-md text-primary pr-8">Will I need someone to drive me home?</span>
      <span className="material-symbols-outlined text-outline transition-transform group-open:rotate-180">expand_more</span>
      </summary>
      <p className="mt-4 text-on-surface-variant font-body-md leading-relaxed">Yes, for all neurosurgical procedures, you must have a designated adult driver to take you home as anesthesia and neuro-recovery protocols prohibit operating a vehicle.</p>
      </details>
      <a className="inline-flex items-center gap-2 text-secondary font-bold mt-4 hover:underline" href="#">
                                  View All FAQs <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
      </a>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function ContactSupportCTA() {
  return (
    <>
      <section className="mb-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="bg-surface-container text-primary p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-surface-container-high">
      <div className="text-center md:text-left">
      <h2 className="font-headline-md text-headline-md mb-2">Need direct assistance?</h2>
      <p className="text-on-surface-variant font-body-lg">Our patient coordinators are here to support you through every step of your care.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
      <div className="bg-surface-container-lowest px-6 py-4 rounded-lg flex items-center gap-4 border border-outline-variant">
      <span className="material-symbols-outlined text-secondary">call</span>
      <div>
      <div className="text-label-sm text-on-surface-variant">Support Line</div>
      <div className="font-bold text-primary">1-800-NEURO-LX</div>
      </div>
      </div>
      <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                              Contact Coordinator <span className="material-symbols-outlined text-[20px]">send</span>
      </button>
      </div>
      </div>
      </section>
    </>
  );
}

function ResourcesInteractions() {
  return (
    <Script id="ResourcesInteractions" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
      document.querySelectorAll('details').forEach((el) => {
        el.addEventListener('toggle', () => {
          if (el.open) {
            document.querySelectorAll('details').forEach((otherEl) => {
              if (otherEl !== el) otherEl.open = false;
            });
          }
        });
      });
    ` }} />
  );
}
