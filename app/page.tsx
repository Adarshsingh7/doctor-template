import Script from "next/script";
import { SiteFooter, SiteHeader } from "./components/site-chrome";

export default function Home() {
  return (
    <>
      <StitchRuntime />
      <SiteHeader active="home" />
      <main className="pt-20 overflow-x-hidden">
        <HeroSection />
        <StatsSection />
        <DoctorProfileSection />
        <NeurosurgeryServicesSection />
        <ConditionsTreatedSection />
        <AdvancedTechnologySection />
        <PatientJourneySection />
        <Testimonials />
        <AppointmentBooking />
        <FAQSection />
        <ContactMapSection />
      </main>
      <SiteFooter />
      <HomeInteractions />
    </>
  );
}

function StitchRuntime() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    </>
  );
}


function HeroSection() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-primary-container overflow-hidden">
                  <div className="absolute inset-0 z-0">
                      <div
                          className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent z-10">
                      </div>
                      <img alt="Dr. Elena Vance" className="w-full h-full object-cover object-center"
                          src="/stitch/asset-01.jpg" />
                  </div>
                  <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full py-20">
                      <div className="max-w-2xl">
                          <div
                              className="inline-flex items-center gap-2 bg-on-primary-fixed-variant/20 backdrop-blur-sm border border-outline-variant/30 px-4 py-2 rounded-full mb-6">
                              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                              <span className="text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest">Global
                                  Leader in Neurosurgery</span>
                          </div>
                          <h2
                              className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6">
                              Precision in Neurological Care. <br />
                              <span className="text-secondary-fixed">Compassion in Every Recovery.</span>
                          </h2>
                          <p className="font-body-lg text-body-lg text-primary-fixed-dim/90 mb-10 max-w-lg leading-relaxed">
                              Specializing in minimally invasive neurosurgery and advanced brain and spine treatments,
                              utilizing space-age technology for surgical precision.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                              <button
                                  className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg hover:shadow-secondary/20 transition-all flex items-center justify-center gap-2">
                                  Book a Consultation <span className="material-symbols-outlined">arrow_forward</span>
                              </button>
                              <button
                                  className="bg-transparent border border-outline-variant text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                  View Our Services
                              </button>
                          </div>
                      </div>
                  </div>
                  {/* Background Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none">
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.2,-0.9C83.6,13.8,77.1,27.7,68.2,39.3C59.3,50.9,48.1,60.2,35.5,67.6C22.9,75,8.9,80.5,-5.8,80.5C-20.5,80.5,-35.9,75,-48.9,67.3C-61.9,59.6,-72.5,49.7,-79.8,37.3C-87.1,24.9,-91.1,10,-90,-4.5C-88.9,-19,-82.7,-33.1,-73.4,-45C-64.1,-56.9,-51.7,-66.6,-38.3,-73.8C-24.9,-81,-10.7,-85.7,2.2,-89.5C15.1,-93.3,31.3,-83.6,44.7,-76.4Z"
                              fill="#89f5e7" transform="translate(100 100)"></path>
                      </svg>
                  </div>
              </section>
    </>
  );
}

function StatsSection() {
  return (
    <>
      <section className="bg-surface py-16 -mt-10 relative z-30 px-margin-mobile md:px-margin-desktop">
                  <div
                      className="max-w-container-max mx-auto bg-surface-container-lowest shadow-clinical rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
                      <div className="p-10 flex flex-col items-center text-center">
                          <span className="font-headline-lg text-headline-lg text-primary mb-2">2,500+</span>
                          <span
                              className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Successful
                              Surgeries</span>
                      </div>
                      <div className="p-10 flex flex-col items-center text-center">
                          <span className="font-headline-lg text-headline-lg text-primary mb-2">20+ Years</span>
                          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Clinical
                              Excellence</span>
                      </div>
                      <div className="p-10 flex flex-col items-center text-center">
                          <span className="font-headline-lg text-headline-lg text-primary mb-2">98%</span>
                          <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Patient
                              Satisfaction</span>
                      </div>
                  </div>
              </section>
    </>
  );
}

function DoctorProfileSection() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
                  <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
                      <div className="w-full md:w-1/2 relative">
                          <div className="aspect-square rounded-2xl overflow-hidden shadow-modal">
                              <img alt="Dr. Elena Vance" className="w-full h-full object-cover"
                                  src="/stitch/asset-01.jpg" />
                          </div>
                          <div
                              className="absolute -bottom-6 -right-6 bg-secondary text-on-secondary p-8 rounded-2xl hidden md:block shadow-clinical">
                              <p className="font-headline-sm text-headline-sm mb-1">Board Certified</p>
                              <p className="font-body-md text-body-md opacity-90">American Board of Neurological Surgery</p>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2">
                          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">Lead
                              Neurosurgeon</span>
                          <h2 className="font-headline-md text-headline-md text-primary mb-6">Dr. Elena Vance, MD, PhD</h2>
                          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                              With over two decades of experience in complex neurological interventions, Dr. Vance has
                              pioneered several minimally invasive techniques now used globally. Her approach combines
                              surgical precision with a deep commitment to patient recovery and quality of life.
                          </p>
                          <ul className="space-y-4 mb-10">
                              <li className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-secondary">verified</span>
                                  <span className="font-label-md text-label-md text-on-surface">20+ Years of Surgical
                                      Practice</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-secondary">festival</span>
                                  <span className="font-label-md text-label-md text-on-surface">Affiliated with Mayo Clinic &amp;
                                      Johns Hopkins</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-secondary">school</span>
                                  <span className="font-label-md text-label-md text-on-surface">Harvard Medical School
                                      Alumna</span>
                              </li>
                          </ul>
                          <button
                              className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-4 transition-all">
                              View Full Clinical Profile <span className="material-symbols-outlined">arrow_forward</span>
                          </button>
                      </div>
                  </div>
              </section>
    </>
  );
}

function NeurosurgeryServicesSection() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
                  <div className="max-w-container-max mx-auto text-center mb-16">
                      <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">Our
                          Specialties</span>
                      <h2 className="font-headline-md text-headline-md text-primary">Comprehensive Surgical Services</h2>
                  </div>
                  <div className="max-w-container-max mx-auto bento-grid">
                      {/* Brain Tumors */}
                      <div
                          className="bento-item-4 bg-surface-container-lowest p-8 rounded-2xl shadow-clinical hover:shadow-modal transition-all border border-outline-variant/10 group">
                          <div
                              className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-on-secondary-container"
                                  style={{ fontVariationSettings: `'FILL' 1` }}>neurology</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Brain Tumors</h3>
                          <p className="text-on-surface-variant mb-6">Expert excision of benign and malignant tumors using
                              real-time intraoperative imaging.</p>
                          <a className="text-secondary font-label-md text-label-md hover:underline" href="#">Learn more</a>
                      </div>
                      {/* Spine Surgery */}
                      <div
                          className="bento-item-4 bg-surface-container-lowest p-8 rounded-2xl shadow-clinical hover:shadow-modal transition-all border border-outline-variant/10 group">
                          <div
                              className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-on-secondary-container"
                                  style={{ fontVariationSettings: `'FILL' 1` }}>accessibility_new</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Spine Surgery</h3>
                          <p className="text-on-surface-variant mb-6">Corrective procedures for spinal deformities, fractures, and
                              degenerative conditions.</p>
                          <a className="text-secondary font-label-md text-label-md hover:underline" href="#">Learn more</a>
                      </div>
                      {/* Minimally Invasive */}
                      <div
                          className="bento-item-4 bg-surface-container-lowest p-8 rounded-2xl shadow-clinical hover:shadow-modal transition-all border border-outline-variant/10 group">
                          <div
                              className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-on-secondary-container"
                                  style={{ fontVariationSettings: `'FILL' 1` }}>precision_manufacturing</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Minimally Invasive</h3>
                          <p className="text-on-surface-variant mb-6">Advanced endoscopic techniques to reduce recovery time and
                              post-operative discomfort.</p>
                          <a className="text-secondary font-label-md text-label-md hover:underline" href="#">Learn more</a>
                      </div>
                      {/* Stroke Care */}
                      <div
                          className="bento-item-4 bg-surface-container-lowest p-8 rounded-2xl shadow-clinical hover:shadow-modal transition-all border border-outline-variant/10 group">
                          <div
                              className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-on-secondary-container"
                                  style={{ fontVariationSettings: `'FILL' 1` }}>emergency</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Stroke Care</h3>
                          <p className="text-on-surface-variant mb-6">Rapid intervention for ischemic and hemorrhagic strokes to
                              preserve brain function.</p>
                          <a className="text-secondary font-label-md text-label-md hover:underline" href="#">Learn more</a>
                      </div>
                      {/* Epilepsy */}
                      <div
                          className="bento-item-4 bg-surface-container-lowest p-8 rounded-2xl shadow-clinical hover:shadow-modal transition-all border border-outline-variant/10 group">
                          <div
                              className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-on-secondary-container"
                                  style={{ fontVariationSettings: `'FILL' 1` }}>bolt</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Epilepsy</h3>
                          <p className="text-on-surface-variant mb-6">Surgical solutions for drug-resistant epilepsy, including
                              VNS and deep brain stimulation.</p>
                          <a className="text-secondary font-label-md text-label-md hover:underline" href="#">Learn more</a>
                      </div>
                      {/* Nerve Disorders */}
                      <div
                          className="bento-item-4 bg-surface-container-lowest p-8 rounded-2xl shadow-clinical hover:shadow-modal transition-all border border-outline-variant/10 group">
                          <div
                              className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                              <span className="material-symbols-outlined text-on-secondary-container"
                                  style={{ fontVariationSettings: `'FILL' 1` }}>account_tree</span>
                          </div>
                          <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Nerve Disorders</h3>
                          <p className="text-on-surface-variant mb-6">Treatment for peripheral nerve compression, carpal tunnel,
                              and chronic pain syndromes.</p>
                          <a className="text-secondary font-label-md text-label-md hover:underline" href="#">Learn more</a>
                      </div>
                  </div>
              </section>
    </>
  );
}

function ConditionsTreatedSection() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
                  <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-16">
                      <div className="w-full md:w-1/3">
                          <h2 className="font-headline-md text-headline-md text-primary mb-6">Expertise in Complex Conditions</h2>
                          <p className="text-body-lg text-on-surface-variant mb-8">We provide diagnosis and treatment for a wide
                              spectrum of neurological and spinal conditions, focusing on long-term wellness.</p>
                          <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md">View
                              Condition Guide</button>
                      </div>
                      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div
                              className="flex items-center p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
                              <span className="material-symbols-outlined text-secondary mr-4">fiber_manual_record</span>
                              <span className="font-label-md text-label-md text-on-surface">Herniated Discs</span>
                          </div>
                          <div
                              className="flex items-center p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
                              <span className="material-symbols-outlined text-secondary mr-4">fiber_manual_record</span>
                              <span className="font-label-md text-label-md text-on-surface">Sciatica &amp; Nerve Pain</span>
                          </div>
                          <div
                              className="flex items-center p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
                              <span className="material-symbols-outlined text-secondary mr-4">fiber_manual_record</span>
                              <span className="font-label-md text-label-md text-on-surface">Brain Aneurysms</span>
                          </div>
                          <div
                              className="flex items-center p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
                              <span className="material-symbols-outlined text-secondary mr-4">fiber_manual_record</span>
                              <span className="font-label-md text-label-md text-on-surface">Chronic Back Pain</span>
                          </div>
                          <div
                              className="flex items-center p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
                              <span className="material-symbols-outlined text-secondary mr-4">fiber_manual_record</span>
                              <span className="font-label-md text-label-md text-on-surface">Trigeminal Neuralgia</span>
                          </div>
                          <div
                              className="flex items-center p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
                              <span className="material-symbols-outlined text-secondary mr-4">fiber_manual_record</span>
                              <span className="font-label-md text-label-md text-on-surface">Spinal Stenosis</span>
                          </div>
                      </div>
                  </div>
              </section>
    </>
  );
}

function AdvancedTechnologySection() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary-container text-white">
                  <div className="max-w-container-max mx-auto bento-grid items-center">
                      <div className="bento-item-6 order-2 md:order-1">
                          <span
                              className="text-secondary-fixed font-label-md text-label-md uppercase tracking-widest mb-4 block">Precision
                              Instruments</span>
                          <h2 className="font-headline-md text-headline-md mb-8">Surgical Technology of the Future</h2>
                          <div className="space-y-8">
                              <div className="flex gap-6">
                                  <div
                                      className="shrink-0 w-12 h-12 rounded-full border border-secondary-fixed/50 flex items-center justify-center">
                                      <span className="material-symbols-outlined text-secondary-fixed">navigation</span>
                                  </div>
                                  <div>
                                      <h4 className="font-headline-sm text-headline-sm mb-2 text-primary-fixed">StealthStation™
                                          Neuronavigation</h4>
                                      <p className="text-primary-fixed-dim opacity-80 leading-relaxed">3D GPS-like guidance for
                                          the brain, allowing surgeons to precisely locate tumors with sub-millimeter
                                          accuracy.</p>
                                  </div>
                              </div>
                              <div className="flex gap-6">
                                  <div
                                      className="shrink-0 w-12 h-12 rounded-full border border-secondary-fixed/50 flex items-center justify-center">
                                      <span
                                          className="material-symbols-outlined text-secondary-fixed">precision_manufacturing</span>
                                  </div>
                                  <div>
                                      <h4 className="font-headline-sm text-headline-sm mb-2 text-primary-fixed">Robotic-Assisted
                                          Platforms</h4>
                                      <p className="text-primary-fixed-dim opacity-80 leading-relaxed">Enhanced dexterity and
                                          stability for delicate spinal procedures, significantly reducing incision sizes.</p>
                                  </div>
                              </div>
                              <div className="flex gap-6">
                                  <div
                                      className="shrink-0 w-12 h-12 rounded-full border border-secondary-fixed/50 flex items-center justify-center">
                                      <span className="material-symbols-outlined text-secondary-fixed">biotech</span>
                                  </div>
                                  <div>
                                      <h4 className="font-headline-sm text-headline-sm mb-2 text-primary-fixed">Digital Microscope
                                          Systems</h4>
                                      <p className="text-primary-fixed-dim opacity-80 leading-relaxed">High-definition
                                          visualization with integrated fluorescence to distinguish healthy tissue from
                                          pathology.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="bento-item-6 order-1 md:order-2">
                          <div className="rounded-3xl overflow-hidden shadow-modal border border-white/10">
                              <img alt="Operating Room Technology" className="w-full h-[500px] object-cover"
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkp9NlDpN6nFlyxR3XYZvN2DOCevTPS0dhIcs9SKsms0fa4dJQz0nLp7Jnj0pp3j-ss9L1NWx0wlyjri1h7TZYQUyKQK4QJpHwau4vPt__U4LV_o2w7Pw5Q2UayzSNUwFhT9bdfz7wa-AQmnxbaiK7A7TN-Q09QO0Y9lJn7NwPWAKStPWysCHZ4lFIbwFldjsz6V8okBfmyxKM014FmMMM0ERUbQSfyj1LC4Z1REVHHfKw6Uc0zc5J-T0_m6Hld52Zx_x6fhCxd5y0" />
                          </div>
                      </div>
                  </div>
              </section>
    </>
  );
}

function PatientJourneySection() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
                  <div className="max-w-container-max mx-auto text-center mb-20">
                      <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">Your Path
                          to Health</span>
                      <h2 className="font-headline-md text-headline-md text-primary">The Patient Journey</h2>
                  </div>
                  <div className="max-w-container-max mx-auto relative">
                      {/* Timeline Line */}
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 hidden md:block"></div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                          <div className="flex flex-col items-center text-center">
                              <div
                                  className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-6 shadow-clinical relative">
                                  <span className="material-symbols-outlined">forum</span>
                                  <div
                                      className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full text-[10px] flex items-center justify-center border-2 border-white">
                                      01</div>
                              </div>
                              <h4 className="font-headline-sm text-headline-sm mb-3">Consultation</h4>
                              <p className="text-on-surface-variant text-body-md">In-depth review of history and initial clinical
                                  evaluation.</p>
                          </div>
                          <div className="flex flex-col items-center text-center">
                              <div
                                  className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-6 shadow-clinical relative">
                                  <span className="material-symbols-outlined">biotech</span>
                                  <div
                                      className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full text-[10px] flex items-center justify-center border-2 border-white">
                                      02</div>
                              </div>
                              <h4 className="font-headline-sm text-headline-sm mb-3">Diagnosis</h4>
                              <p className="text-on-surface-variant text-body-md">Advanced imaging (MRI/CT) and specialized
                                  neurological testing.</p>
                          </div>
                          <div className="flex flex-col items-center text-center">
                              <div
                                  className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-6 shadow-clinical relative">
                                  <span className="material-symbols-outlined">clinical_notes</span>
                                  <div
                                      className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full text-[10px] flex items-center justify-center border-2 border-white">
                                      03</div>
                              </div>
                              <h4 className="font-headline-sm text-headline-sm mb-3">Treatment Plan</h4>
                              <p className="text-on-surface-variant text-body-md">Collaborative development of personalized
                                  surgical or non-surgical plans.</p>
                          </div>
                          <div className="flex flex-col items-center text-center">
                              <div
                                  className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-6 shadow-clinical relative">
                                  <span className="material-symbols-outlined">healing</span>
                                  <div
                                      className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full text-[10px] flex items-center justify-center border-2 border-white">
                                      04</div>
                              </div>
                              <h4 className="font-headline-sm text-headline-sm mb-3">Recovery</h4>
                              <p className="text-on-surface-variant text-body-md">Comprehensive post-op care and physical
                                  rehabilitation tracking.</p>
                          </div>
                      </div>
                  </div>
              </section>
    </>
  );
}

function Testimonials() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
                  <div className="max-w-container-max mx-auto text-center mb-16">
                      <h2 className="font-headline-md text-headline-md text-primary">Patient Success Stories</h2>
                  </div>
                  <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div
                          className="bg-surface-container-lowest p-10 rounded-2xl shadow-clinical border border-outline-variant/10">
                          <div className="flex text-secondary mb-4">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                          </div>
                          <p className="font-body-lg italic text-on-surface-variant mb-6">&quot;Life-changing spine surgery result. I
                              had been in chronic pain for 5 years, and within 3 weeks post-surgery, I was walking pain-free.&quot;
                          </p>
                          <div className="font-label-md text-label-md text-primary">— Michael R., Patient</div>
                      </div>
                      <div
                          className="bg-surface-container-lowest p-10 rounded-2xl shadow-clinical border border-outline-variant/10">
                          <div className="flex text-secondary mb-4">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                          </div>
                          <p className="font-body-lg italic text-on-surface-variant mb-6">&quot;The precision and care shown by Dr.
                              Vance was incredible. She explained everything clearly and made me feel at ease throughout the
                              brain tumor procedure.&quot;</p>
                          <div className="font-label-md text-label-md text-primary">— Sarah L., Patient</div>
                      </div>
                      <div
                          className="bg-surface-container-lowest p-10 rounded-2xl shadow-clinical border border-outline-variant/10">
                          <div className="flex text-secondary mb-4">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                          </div>
                          <p className="font-body-lg italic text-on-surface-variant mb-6">&quot;Minimal scarring and back to my normal
                              life in record time. The robotics team at NeuroLink is truly world-class.&quot;</p>
                          <div className="font-label-md text-label-md text-primary">— David K., Patient</div>
                      </div>
                  </div>
              </section>
    </>
  );
}

function AppointmentBooking() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden">
                  <div
                      className="max-w-container-max mx-auto flex flex-col lg:flex-row bg-surface-container-lowest rounded-3xl overflow-hidden shadow-modal">
                      <div className="w-full lg:w-1/2 p-12 md:p-16">
                          <h2 className="font-headline-md text-headline-md text-primary mb-4">Book Your Consultation</h2>
                          <p className="text-on-surface-variant mb-10">Take the first step towards recovery. Complete the form
                              below and our medical coordinator will contact you within 24 hours.</p>
                          <form className="space-y-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                  <div>
                                      <label className="block font-label-md text-label-md text-on-surface mb-2">Full Name</label>
                                      <input
                                          className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                                          placeholder="John Doe" type="text" />
                                  </div>
                                  <div>
                                      <label className="block font-label-md text-label-md text-on-surface mb-2">Phone
                                          Number</label>
                                      <input
                                          className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                                          placeholder="(555) 000-0000" type="tel" />
                                  </div>
                              </div>
                              <div>
                                  <label className="block font-label-md text-label-md text-on-surface mb-2">Requested
                                      Service</label>
                                  <select
                                      className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all">
                                      <option>Brain Surgery Consultation</option>
                                      <option>Spine Evaluation</option>
                                      <option>Minimally Invasive Procedures</option>
                                      <option>Second Opinion</option>
                                  </select>
                              </div>
                              <div>
                                  <label className="block font-label-md text-label-md text-on-surface mb-2">Preferred Date</label>
                                  <input
                                      className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                                      type="date" />
                              </div>
                              <button
                                  className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-4 rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-clinical"
                                  type="submit">
                                  Schedule Appointment
                              </button>
                          </form>
                      </div>
                      <div className="w-full lg:w-1/2 min-h-[400px] relative">
                          <img alt="Doctor Consultation" className="absolute inset-0 w-full h-full object-cover"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4T-Vr3cDM916kQgqg64upLH_bnMioeQwBiGzjfTiJmtRwG4XJF9HC0bR6T_9Ft4XsWq_MzoQwOIFv0tsLM7HemyodTGi4okEGM8-BGXnlClUkOiE7Qmh5HARBPyeEIYOUcGyE9d4UbJXo755YBFw4BYZDk5z4mJgffrsspKFeBCCr56pZ8b4ec5hj0IcKNIWiyiR_J4bjWqhJn2gUS9IEsbS6hkvQ5D190ViaHlYPRIauiT1dIOAq0yaaIOUWxMe966h1zR8Zpe3C" />
                          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
                          <div
                              className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur p-8 rounded-2xl shadow-clinical border border-white/20">
                              <div className="flex items-center gap-4 mb-4">
                                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                                      <span className="material-symbols-outlined text-secondary">support_agent</span>
                                  </div>
                                  <div>
                                      <h4 className="font-label-md text-label-md text-primary">Patient Support</h4>
                                      <p className="text-sm text-on-surface-variant">Available 24/7 for Emergencies</p>
                                  </div>
                              </div>
                              <p className="font-headline-sm text-headline-sm text-primary">+1 (800) NEURO-LINK</p>
                          </div>
                      </div>
                  </div>
              </section>
    </>
  );
}

function FAQSection() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
                  <div className="max-w-3xl mx-auto">
                      <h2 className="font-headline-md text-headline-md text-primary text-center mb-16">Frequently Asked Questions
                      </h2>
                      <div className="space-y-4">
                          <details
                              className="group bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-clinical"
                              open>
                              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                  <span className="font-label-md text-label-md text-on-surface">How long is the typical recovery
                                      period?</span>
                                  <span
                                      className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                              </summary>
                              <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                                  Recovery varies by procedure. For minimally invasive spine surgery, patients often return to
                                  light activity within 1-2 weeks. Major cranial procedures may require 4-8 weeks for a full
                                  return to daily routines. We provide a detailed recovery timeline for every patient.
                              </div>
                          </details>
                          <details
                              className="group bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-clinical">
                              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                  <span className="font-label-md text-label-md text-on-surface">What should I bring to my first
                                      visit?</span>
                                  <span
                                      className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                              </summary>
                              <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                                  Please bring all recent imaging (CDs or digital links of MRIs/CT scans), a list of current
                                  medications, previous surgical records if applicable, and your insurance information.
                              </div>
                          </details>
                          <details
                              className="group bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-clinical">
                              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                  <span className="font-label-md text-label-md text-on-surface">Do you offer second opinions for
                                      outside diagnoses?</span>
                                  <span
                                      className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                              </summary>
                              <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                                  Yes, we frequently provide second opinions. Our team reviews existing scans and records to
                                  offer a comprehensive surgical or non-surgical perspective on complex cases.
                              </div>
                          </details>
                      </div>
                  </div>
              </section>
    </>
  );
}

function ContactMapSection() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
                  <div className="max-w-container-max mx-auto bento-grid">
                      <div className="bento-item-4 space-y-8">
                          <div>
                              <h2 className="font-headline-md text-headline-md text-primary mb-4">Contact Information</h2>
                              <p className="text-on-surface-variant">Our facility is located in the heart of the medical district,
                                  designed for easy access and patient comfort.</p>
                          </div>
                          <div className="space-y-6">
                              <div className="flex gap-4">
                                  <span className="material-symbols-outlined text-secondary">location_on</span>
                                  <div>
                                      <h5 className="font-label-md text-label-md text-on-surface">Address</h5>
                                      <p className="text-on-surface-variant">1200 Neural Way, Suite 400<br />Medical District,
                                          Houston, TX 77030</p>
                                  </div>
                              </div>
                              <div className="flex gap-4">
                                  <span className="material-symbols-outlined text-secondary">call</span>
                                  <div>
                                      <h5 className="font-label-md text-label-md text-on-surface">Phone</h5>
                                      <p className="text-on-surface-variant">Direct: (713) 555-0123<br />Emergency: (800) 999-0000
                                      </p>
                                  </div>
                              </div>
                              <div className="flex gap-4">
                                  <span className="material-symbols-outlined text-secondary">schedule</span>
                                  <div>
                                      <h5 className="font-label-md text-label-md text-on-surface">Clinic Hours</h5>
                                      <p className="text-on-surface-variant">Mon-Fri: 8:00 AM - 6:00 PM<br />Sat-Sun: Emergency
                                          Only</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="bento-item-8">
                          <div
                              className="h-full min-h-[400px] bg-surface-container rounded-3xl overflow-hidden relative border border-outline-variant/20 shadow-clinical">
                              <img alt="" className="w-full h-full object-cover grayscale opacity-80"
                                  data-alt="A professional medical facility map illustration showing the clinic location in Houston's medical district. The style is clean and architectural, using a color palette of deep blue, white, and teal accents. The map shows simplified streets and a clear marker for the NeuroLink Excellence clinic."
                                  data-location="Houston, Texas"
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnnkiyKUFIcGTjoEzCfu4kbezUl9fBl9jRtgppGgGzZl4tKpNqLuLf0dkSOJVH1_uESeTUUzKd6uJ2XvdTMvN_oVMArOw6V2z8ByJkj9457catmdDbxzpcjGaTkwGBN6gE-A-ksWZ0omtiJeZuNvbMP9PEpazAxRPvgbXH1Bys5DWfjQfCKQHXlg2aUoy9rPsR594_lxm_LnmkcKppn7UFUozBIh3XvmtyL2dF_LmIt3o7CAu_w9dBVV2kbihsIanXvYqWIMSCR76i" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                  <div
                                      className="bg-white p-4 rounded-xl shadow-modal border border-secondary flex items-center gap-3">
                                      <div className="w-3 h-3 bg-secondary rounded-full animate-ping"></div>
                                      <span className="font-label-md text-label-md text-primary">NeuroLink Excellence
                                          Clinic</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
    </>
  );
}


function HomeInteractions() {
  return (
    <Script id="home-interactions" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mousedown', () => button.classList.add('scale-95'));
            button.addEventListener('mouseup', () => button.classList.remove('scale-95'));
            button.addEventListener('mouseleave', () => button.classList.remove('scale-95'));
        });

        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-clinical');
            } else {
                header.classList.remove('shadow-clinical');
            }
        });
    ` }} />
  );
}
