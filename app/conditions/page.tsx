import Script from "next/script";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

const conditionsStyles = ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .clinical-shadow {\n            box-shadow: 0 4px 20px rgba(0, 106, 97, 0.04);\n        }\n        .hero-gradient {\n            background: linear-gradient(135deg, rgba(247, 249, 251, 0.9) 0%, rgba(227, 242, 253, 0.4) 100%);\n        }";

export default function ConditionsPage() {
  return (
    <>
      <ConditionsRuntime />
      <SiteHeader active="conditions" />
      <main className="pt-20">
        <HeroSection />
        <ConditionCategoriesBentoGridStyle />
        <SymptomCheckerSection />
        <CTASection />
      </main>
      <SiteFooter />
      <ConditionsInteractions />
    </>
  );
}

function ConditionsRuntime() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: conditionsStyles }} />
    </>
  );
}


function HeroSection() {
  return (
    <>
      <section className="relative h-[614px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
      <img alt="" className="w-full h-full object-cover" data-alt="A serene, high-end medical clinic interior with soft, natural morning light filtering through large windows. The scene features a clean, minimalist reception area with subtle teal accents and polished surfaces, embodying a calm and professional neurological healthcare environment. Soft focus on architectural details creates a sense of premium clinical excellence." src="/stitch/asset-09.jpg"/>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="max-w-2xl">
      <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full mb-6">Expert Neurological Care</span>
      <h1 className="font-headline-lg text-headline-lg text-primary mb-6 leading-tight">Specialized Care for Complex Neurological Conditions</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Utilizing surgical-grade precision and world-class expertise to treat conditions of the brain, spine, and peripheral nerves.</p>
      <div className="flex gap-4">
      <button className="px-8 py-3 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md transition-all hover:bg-secondary/90">Find a Specialist</button>
      <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-label-md text-label-md transition-all hover:bg-primary hover:text-white">View Procedures</button>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function ConditionCategoriesBentoGridStyle() {
  return (
    <>
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-16 text-center">
      <h2 className="font-headline-md text-headline-md text-primary mb-4">Core Specializations</h2>
      <div className="w-20 h-1 bg-secondary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Brain Conditions */}
      <div className="md:col-span-7 bg-white p-10 rounded-xl clinical-shadow group hover:translate-y-[-4px] transition-transform duration-300 border border-surface-container">
      <div className="flex items-start justify-between mb-8">
      <div className="w-16 h-16 bg-secondary/5 rounded-full flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined !text-4xl">psychology</span>
      </div>
      <span className="text-surface-variant font-headline-lg opacity-20">01</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Brain Conditions</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">Our neurosurgical team employs advanced mapping and minimally invasive techniques for complex cerebral pathologies, ensuring maximum preservation of neurological function.</p>
      <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border border-transparent hover:border-secondary/20 transition-colors">
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: `'FILL' 1` }}>circle</span>
      <span className="font-label-md text-label-md">Brain Tumors</span>
      </div>
      <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border border-transparent hover:border-secondary/20 transition-colors">
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: `'FILL' 1` }}>circle</span>
      <span className="font-label-md text-label-md">Aneurysms</span>
      </div>
      <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border border-transparent hover:border-secondary/20 transition-colors">
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: `'FILL' 1` }}>circle</span>
      <span className="font-label-md text-label-md">Hydrocephalus</span>
      </div>
      <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border border-transparent hover:border-secondary/20 transition-colors">
      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: `'FILL' 1` }}>circle</span>
      <span className="font-label-md text-label-md">Epilepsy</span>
      </div>
      </div>
      </div>
      {/* Right Column: Medical Image */}
      <div className="md:col-span-5 relative rounded-xl overflow-hidden clinical-shadow">
      <img alt="" className="w-full h-full object-cover" data-alt="A close-up, high-detail clinical photograph of a modern neuro-navigation system display in a dimly lit operating room. The screen shows a sophisticated 3D model of a human brain with precision mapping markers in glowing teal and white. The background is a soft-focus clinical blue, emphasizing the state-of-the-art technology and surgical accuracy." src="/stitch/asset-11.jpg"/>
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent">
      <p className="text-white font-label-md text-label-md">Advanced Precision Mapping</p>
      </div>
      </div>
      {/* Spine Conditions */}
      <div className="md:col-span-5 bg-primary p-10 rounded-xl clinical-shadow text-white">
      <div className="flex items-start justify-between mb-8">
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-secondary-fixed">
      <span className="material-symbols-outlined !text-4xl">height</span>
      </div>
      <span className="text-white opacity-10 font-headline-lg">02</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm mb-4">Spine Conditions</h3>
      <p className="font-body-md text-body-md text-primary-fixed-dim mb-8 leading-relaxed">Comprehensive management of spinal disorders through both conservative and innovative surgical interventions tailored to each patient&apos;s lifestyle.</p>
      <ul className="space-y-4">
      <li className="flex items-center gap-3">
      <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
      <span className="font-label-md text-label-md">Herniated Discs</span>
      </li>
      <li className="flex items-center gap-3">
      <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
      <span className="font-label-md text-label-md">Spinal Stenosis</span>
      </li>
      <li className="flex items-center gap-3">
      <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
      <span className="font-label-md text-label-md">Degenerative Disc Disease</span>
      </li>
      <li className="flex items-center gap-3">
      <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
      <span className="font-label-md text-label-md">Sciatica</span>
      </li>
      </ul>
      </div>
      {/* Peripheral Nerve Disorders */}
      <div className="md:col-span-7 bg-surface-container-low p-10 rounded-xl clinical-shadow border border-surface-container-high relative overflow-hidden">
      <div className="relative z-10">
      <div className="flex items-start justify-between mb-8">
      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined !text-4xl">lan</span>
      </div>
      <span className="text-surface-variant font-headline-lg opacity-20">03</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Peripheral Nerve Disorders</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">Focused treatment for nerve compression and entrapment syndromes, utilizing microsurgical decompression to restore sensation and motor function.</p>
      <div className="flex flex-wrap gap-4">
      <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-outline-variant/30 flex-1 min-w-[200px]">
      <h4 className="font-label-md text-label-md text-primary mb-2">Carpal Tunnel</h4>
      <p className="text-sm text-on-surface-variant">Minimally invasive release procedures for rapid recovery.</p>
      </div>
      <div className="bg-white px-6 py-4 rounded-lg shadow-sm border border-outline-variant/30 flex-1 min-w-[200px]">
      <h4 className="font-label-md text-label-md text-primary mb-2">Nerve Entrapment</h4>
      <p className="text-sm text-on-surface-variant">Precision decompression for chronic pain relief.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function SymptomCheckerSection() {
  return (
    <>
      <section className="bg-primary-container py-24">
      <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      <img alt="" className="rounded-xl shadow-2xl relative z-10 grayscale-[30%]" data-alt="A professional yet empathetic interaction between a senior neurosurgeon in a white clinical coat and an elderly patient. They are looking at a digital tablet together in a bright, modern consultation room. The lighting is soft and warm, reflecting a supportive and trustworthy medical environment focused on patient communication and reassurance." src="/stitch/asset-07.jpg"/>
      </div>
      <div>
      <h2 className="font-headline-md text-headline-md text-white mb-6">When to See a Specialist</h2>
      <p className="text-on-primary-container font-body-lg text-body-lg mb-8">Early intervention is critical in neurological health. If you are experiencing persistent symptoms, our diagnostic team is here to provide clarity.</p>
      <div className="space-y-6">
      <div className="flex gap-6 p-6 bg-white/5 rounded-lg border border-white/10">
      <span className="material-symbols-outlined text-secondary-fixed-dim !text-3xl">warning</span>
      <div>
      <h4 className="text-white font-label-md text-label-md mb-2">Persistent Neurological Deficits</h4>
      <p className="text-on-primary-container text-sm">Chronic headaches, sudden vision changes, or recurring seizures require immediate specialist evaluation.</p>
      </div>
      </div>
      <div className="flex gap-6 p-6 bg-white/5 rounded-lg border border-white/10">
      <span className="material-symbols-outlined text-secondary-fixed-dim !text-3xl">bolt</span>
      <div>
      <h4 className="text-white font-label-md text-label-md mb-2">Radiating Pain &amp; Numbness</h4>
      <p className="text-on-primary-container text-sm">Sharp, electric-like pain radiating down arms or legs, or persistent muscle weakness in extremities.</p>
      </div>
      </div>
      <div className="flex gap-6 p-6 bg-white/5 rounded-lg border border-white/10">
      <span className="material-symbols-outlined text-secondary-fixed-dim !text-3xl">balance</span>
      <div>
      <h4 className="text-white font-label-md text-label-md mb-2">Balance &amp; Coordination Issues</h4>
      <p className="text-on-primary-container text-sm">Difficulty walking, frequent falls, or unexplained loss of motor control and fine motor skills.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}

function CTASection() {
  return (
    <>
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto text-center">
      <div className="max-w-3xl mx-auto p-12 rounded-2xl bg-secondary-container border border-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
      <div className="relative z-10">
      <h2 className="font-headline-md text-headline-md text-primary mb-4">Start Your Journey to Recovery</h2>
      <p className="font-body-lg text-body-lg text-on-secondary-container mb-10">Schedule a comprehensive consultation with our world-renowned neurosurgical team today.</p>
      <button className="px-12 py-4 bg-secondary text-on-secondary rounded-lg font-headline-sm text-headline-sm shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all active:scale-95">
                              Book a Consultation
                          </button>
      <p className="mt-6 text-sm text-on-secondary-container/60 font-label-sm">No referral required for initial evaluations.</p>
      </div>
      </div>
      </section>
    </>
  );
}


function ConditionsInteractions() {
  return (
    <Script id="conditions-interactions" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mousedown', () => button.classList.add('scale-95'));
            button.addEventListener('mouseup', () => button.classList.remove('scale-95'));
            button.addEventListener('mouseleave', () => button.classList.remove('scale-95'));
        });

        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-md', 'bg-surface/95');
            } else {
                nav.classList.remove('shadow-md', 'bg-surface/95');
            }
        });
    ` }} />
  );
}
