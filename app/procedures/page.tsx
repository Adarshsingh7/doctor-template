import Script from "next/script";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

const pageStyles = "body {\n            background-color: #f7f9fb;\n            color: #191c1e;\n            font-family: 'Inter', sans-serif;\n            -webkit-font-smoothing: antialiased;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(255, 255, 255, 0.3);\n        }\n        .procedural-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .elevation-2 {\n            box-shadow: 0 4px 20px rgba(0, 3, 11, 0.04);\n        }\n        .surgical-mask {\n            mask-image: linear-gradient(to bottom, black 80%, transparent 100%);\n        }";

export default function ProceduresPage() {
  return (
    <>
      <ProceduresRuntime />
      <SiteHeader active="technology" />
      <main className="pt-20">
        <HeroSection />
        <BrainSurgerySection />
        <SpineSurgerySection />
        <TechnologyIntegrationBento />
        <PatientSafetyPrep />
        <RecoveryFollowUp />
      </main>
      <SiteFooter />
      <ProceduresInteractions />
    </>
  );
}

function ProceduresRuntime() {
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
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-primary-container">
      <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent z-10"></div>
      <div className="w-full h-full bg-cover bg-center" data-alt="A cinematic, high-definition wide shot of a modern, clinical neurosurgery operating room. The lighting is cold and precise with surgical blue accents. In the background, sophisticated medical equipment and large monitors display neural scans, creating an atmosphere of advanced medical excellence and surgical precision in a minimalist, corporate healthcare environment." style={{ backgroundImage: "url('/stitch/asset-04.jpg')" }}></div>
      </div>
      <div className="relative z-20 px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="max-w-2xl">
      <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full mb-6">Expertise &amp; Precision</span>
      <h1 className="font-headline-lg text-headline-lg text-white mb-6">Advanced Surgical Procedures</h1>
      <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                              NeuroLink Excellence integrates world-class surgical expertise with sub-millimeter robotic precision. We are dedicated to delivering the highest standards of neurological care through innovation and patient-centered safety protocols.
                          </p>
      </div>
      </div>
      </section>
    </>
  );
}

function BrainSurgerySection() {
  return (
    <>
      <section className="py-24 px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
      <div className="procedural-grid items-center">
      <div className="col-span-12 lg:col-span-7">
      <div className="relative rounded-xl overflow-hidden elevation-2 bg-white p-8">
      <img alt="Brain Surgery Diagram" className="w-full h-auto" src="/stitch/asset-02.jpg"/>
      <div className="absolute bottom-4 right-4 bg-surface/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-outline-variant/30">
      <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px]">visibility</span> Intraoperative Guidance View
                                      </span>
      </div>
      </div>
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
      <h2 className="font-headline-md text-headline-md text-primary mb-6">Cranial Interventions</h2>
      <div className="space-y-8">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-secondary mb-3">Brain Tumor Resection</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Our surgeons utilize real-time neuronavigation to map critical brain pathways. This ensures maximum tumor removal while preserving vital cognitive and motor functions.</p>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-secondary mb-3">Epilepsy Surgery</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Using stereotactic depth electrodes and functional mapping, we identify and neutralize seizure foci with pinpoint accuracy, offering life-changing results for refractory cases.</p>
      </div>
      <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-secondary">
      <p className="font-label-md text-label-md text-on-surface italic">&quot;Technology allows us to see what was once invisible, making the impossible, achievable.&quot;</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function SpineSurgerySection() {
  return (
    <>
      <section className="py-24 px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
      <div className="procedural-grid items-center">
      <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
      <h2 className="font-headline-md text-headline-md text-primary mb-6">Spinal Reconstruction</h2>
      <div className="space-y-8">
      <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-secondary-container">precision_manufacturing</span>
      </div>
      <div>
      <h3 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-2">Robotic Guidance</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Sub-millimeter accuracy in screw placement and structural support, reducing operative time and enhancing stability.</p>
      </div>
      </div>
      <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-secondary-container">rebase_edit</span>
      </div>
      <div>
      <h3 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-2">Minimally Invasive (MISS)</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Small incisions mean faster recovery, less blood loss, and reduced post-operative pain for complex spinal conditions.</p>
      </div>
      </div>
      <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
      <span className="material-symbols-outlined text-on-secondary-container">architecture</span>
      </div>
      <div>
      <h3 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-2">Complex Reconstruction</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">Expert management of deformity, trauma, and degenerative diseases using the latest structural biomaterials.</p>
      </div>
      </div>
      </div>
      </div>
      <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
      <div className="relative rounded-xl overflow-hidden elevation-2 bg-white p-8">
      <img alt="Spine Surgery Diagram" className="w-full h-auto" src="/stitch/asset-10.jpg"/>
      <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
      <span className="font-label-sm text-label-sm text-white flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "&apos;FILL&apos; 1" }}>bolt</span> Robotic Sync Active
                                      </span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function TechnologyIntegrationBento() {
  return (
    <>
      <section className="py-24 px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
      <div className="text-center mb-16">
      <h2 className="font-headline-md text-headline-md text-primary mb-4">Clinical Precision Infrastructure</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Our surgical suites are equipped with a proprietary ecosystem of interconnected technologies.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="md:col-span-2 glass-card rounded-xl p-8 elevation-2">
      <div className="flex items-start justify-between mb-12">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Neural Navigation</h3>
      <p className="font-body-md text-body-md text-on-surface-variant">GPS-like precision for the human brain.</p>
      </div>
      <span className="material-symbols-outlined text-secondary text-4xl">my_location</span>
      </div>
      <div className="w-full h-48 bg-surface-container-high rounded-lg overflow-hidden flex items-center justify-center relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
      <p className="text-on-surface-variant font-label-sm text-center px-12">Real-time mapping synchronized with pre-operative MRI and CT data for dynamic intraoperative visualization.</p>
      </div>
      </div>
      <div className="bg-primary-container rounded-xl p-8 elevation-2 flex flex-col justify-between overflow-hidden relative">
      <div className="relative z-10">
      <h3 className="font-headline-sm text-headline-sm text-white mb-4">Surgical Robotics</h3>
      <p className="font-body-md text-body-md text-on-primary-container">Active compensation for patient movement ensures sub-millimeter surgical accuracy.</p>
      </div>
      <div className="relative z-10 mt-8">
      <div className="flex items-center gap-2 mb-2">
      <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
      <div className="h-full bg-secondary w-[98%]"></div>
      </div>
      <span className="text-white font-label-sm">0.2mm</span>
      </div>
      <span className="text-on-primary-container font-label-sm">Current Deviation Index</span>
      </div>
      <div className="absolute bottom-[-20%] right-[-20%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function PatientSafetyPrep() {
  return (
    <>
      <section className="py-24 px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
      <div className="procedural-grid">
      <div className="col-span-12 lg:col-span-4">
      <h2 className="font-headline-md text-headline-md text-primary mb-6">Personalized Surgical Planning</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8">Every procedure begins long before the operating room. We utilize a 3-tier preparation protocol to ensure maximum safety and optimal outcomes.</p>
      <button className="flex items-center gap-2 text-secondary font-label-md hover:gap-4 transition-all duration-300">
                                  View Safety Protocols <span className="material-symbols-outlined">arrow_forward</span>
      </button>
      </div>
      <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <div className="bg-white p-6 rounded-xl elevation-2">
      <span className="font-headline-sm text-headline-sm text-outline-variant mb-4 block">01</span>
      <h4 className="font-label-md text-label-md text-primary mb-2">Advanced Imaging Tier</h4>
      <p className="font-body-md text-body-md text-on-surface-variant">Ultra-high field MRI (7 Tesla) provides unparalleled structural detail for identifying margins.</p>
      </div>
      <div className="bg-white p-6 rounded-xl elevation-2">
      <span className="font-headline-sm text-headline-sm text-outline-variant mb-4 block">02</span>
      <h4 className="font-label-md text-label-md text-primary mb-2">Virtual Simulation</h4>
      <p className="font-body-md text-body-md text-on-surface-variant">Surgeons perform a &apos;dry-run&apos; of the surgery in a VR environment to anticipate complex anatomy.</p>
      </div>
      <div className="bg-white p-6 rounded-xl elevation-2">
      <span className="font-headline-sm text-headline-sm text-outline-variant mb-4 block">03</span>
      <h4 className="font-label-md text-label-md text-primary mb-2">Multi-Disciplinary Review</h4>
      <p className="font-body-md text-body-md text-on-surface-variant">Every surgical plan is reviewed by a board of neurosurgeons, radiologists, and neurologists.</p>
      </div>
      <div className="bg-white p-6 rounded-xl elevation-2 border-2 border-secondary/20">
      <span className="font-headline-sm text-headline-sm text-secondary mb-4 block">04</span>
      <h4 className="font-label-md text-label-md text-secondary mb-2">Recovery Roadmap</h4>
      <p className="font-body-md text-body-md text-on-surface-variant">Personalized post-op care starts on day one of the consultation, ensuring a clear path to health.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function RecoveryFollowUp() {
  return (
    <>
      <section className="py-24 px-margin-desktop bg-primary text-white">
      <div className="max-w-container-max mx-auto text-center">
      <h2 className="font-headline-md text-headline-md mb-6">The Journey to Recovery</h2>
      <p className="font-body-lg text-body-lg text-on-primary-container max-w-3xl mx-auto mb-16 leading-relaxed">
                          Surgical excellence extends beyond the procedure. Our comprehensive rehabilitation program focuses on restoring function, managing pain, and supporting long-term neurological health through personalized therapy and follow-up care.
                      </p>
      <div className="flex flex-wrap justify-center gap-12">
      <div className="text-center w-48">
      <div className="text-headline-lg font-headline-lg text-secondary-fixed-dim mb-2">24h</div>
      <div className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container">ICU Monitoring</div>
      </div>
      <div className="text-center w-48">
      <div className="text-headline-lg font-headline-lg text-secondary-fixed-dim mb-2">Day 1</div>
      <div className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container">Rehab Initiation</div>
      </div>
      <div className="text-center w-48">
      <div className="text-headline-lg font-headline-lg text-secondary-fixed-dim mb-2">98%</div>
      <div className="font-label-md text-label-md uppercase tracking-widest text-on-primary-container">Patient Satisfaction</div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function ProceduresInteractions() {
  return (
    <Script id="ProceduresInteractions" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
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
