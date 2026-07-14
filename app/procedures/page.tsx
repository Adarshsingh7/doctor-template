import Script from "next/script";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { proceduresData } from "@/lib/site-data";

const proceduresStyles = ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }";

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
        <PatientSafetyTierSystem />
        <RecoveryMilestones />
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
      <style dangerouslySetInnerHTML={{ __html: proceduresStyles }} />
    </>
  );
}

function HeroSection() {
  const { hero } = proceduresData;
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-primary-container text-white py-20">
        <div className="absolute inset-0 z-0">
          <img alt="Surgical navigation array" className="w-full h-full object-cover opacity-30" src={hero.backgroundImage} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary-container/20 border border-secondary/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest">{hero.tagline}</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg mb-6 leading-tight">{hero.title}</h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim/90 max-w-2xl">{hero.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function BrainSurgerySection() {
  const { brainSurgery } = proceduresData;
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 reveal-card reveal-delay-100">
            <h2 className="font-headline-md text-headline-md text-primary mb-8">{brainSurgery.title}</h2>
            <div className="space-y-8 mb-8">
              {brainSurgery.procedures.map((proc, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary !text-3xl">psychology</span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">{proc.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{proc.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-l-4 border-secondary pl-6 py-2 bg-surface-container-low rounded-r-lg">
              <p className="italic text-on-surface-variant">&quot;{brainSurgery.quote}&quot;</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal-card reveal-delay-200">
            <div className="rounded-2xl overflow-hidden shadow-clinical border border-outline-variant/10 relative">
              <img alt="Intraoperative navigation display" className="w-full h-full object-cover aspect-[4/3]" src={brainSurgery.image} />
              <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-label-sm text-label-sm">
                {brainSurgery.imageTag}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SpineSurgerySection() {
  const { spineSurgery } = proceduresData;
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-card reveal-delay-100">
            <div className="rounded-2xl overflow-hidden shadow-clinical border border-outline-variant/10 relative">
              <img alt="Spinal reconstruction model" className="w-full h-full object-cover aspect-[4/3]" src={spineSurgery.image} />
              <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm text-on-secondary px-4 py-2 rounded-full font-label-sm text-label-sm">
                {spineSurgery.imageTag}
              </div>
            </div>
          </div>
          <div className="reveal-card reveal-delay-200">
            <h2 className="font-headline-md text-headline-md text-primary mb-8">{spineSurgery.title}</h2>
            <div className="space-y-8">
              {spineSurgery.features.map((feat, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary !text-3xl">{feat.icon}</span>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary mb-2">{feat.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TechnologyIntegrationBento() {
  const { technologyIntegration } = proceduresData;
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface">
        <div className="mb-16">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">{technologyIntegration.title}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{technologyIntegration.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Neural Navigation */}
          <div className="md:col-span-8 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 relative overflow-hidden flex flex-col justify-between min-h-[320px] reveal-card reveal-delay-100">
            <div>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined !text-2xl">{technologyIntegration.navigation.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{technologyIntegration.navigation.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">{technologyIntegration.navigation.description}</p>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">{technologyIntegration.navigation.subtitle}</span>
          </div>
          {/* Robotics Status */}
          <div className="md:col-span-4 bg-primary p-8 rounded-xl text-white flex flex-col justify-between min-h-[320px] reveal-card reveal-delay-200">
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">{technologyIntegration.robotics.title}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
              </div>
              <div className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                {technologyIntegration.robotics.description}
              </div>
            </div>
            <div>
              <div className="text-[44px] font-light leading-none mb-2 text-secondary-fixed">{technologyIntegration.robotics.deviationValue}</div>
              <div className="font-label-sm text-label-sm text-primary-fixed opacity-70">{technologyIntegration.robotics.deviationLabel}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PatientSafetyTierSystem() {
  const { patientSafety } = proceduresData;
  return (
    <>
      <section className="py-24 bg-primary-container text-white">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-secondary-fixed font-label-md text-label-md uppercase tracking-widest mb-4 block">Safety Standards</span>
              <h2 className="font-headline-md text-headline-md text-white">{patientSafety.title}</h2>
            </div>
            <button className="px-6 py-3 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:bg-secondary/90 transition-all">{patientSafety.ctaText}</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 hidden md:block z-0"></div>
            {patientSafety.steps.map((step, idx) => {
              const delayClass = idx === 0 ? "reveal-delay-100" : idx === 1 ? "reveal-delay-200" : idx === 2 ? "reveal-delay-300" : "reveal-delay-400";
              return (
                <div key={idx} className={`bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm relative z-10 reveal-card ${delayClass}`}>
                  <div className="text-secondary-fixed font-headline-sm text-headline-sm mb-4">{step.number}</div>
                  <h4 className="text-white font-label-md text-label-md mb-2">{step.title}</h4>
                  <p className="text-primary-fixed-dim text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function RecoveryMilestones() {
  const { recovery } = proceduresData;
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-6">{recovery.title}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">{recovery.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recovery.stats.map((stat, idx) => {
              const delayClass = idx === 0 ? "reveal-delay-100" : idx === 1 ? "reveal-delay-200" : "reveal-delay-300";
              return (
                <div key={idx} className={`p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 reveal-card ${delayClass}`}>
                  <div className="font-headline-lg text-headline-lg text-primary mb-2">{stat.value}</div>
                  <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function ProceduresInteractions() {
  return (
    <Script
      id="procedures-interactions"
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
