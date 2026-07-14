import Script from "next/script";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { conditionsData } from "@/lib/site-data";

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
  const { hero } = conditionsData;
  return (
    <>
      <section className="relative min-h-[50vh] md:h-[614px] py-16 md:py-0 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Conditions Hero Background" className="w-full h-full object-cover" src={hero.backgroundImage} />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full mb-6">{hero.tagline}</span>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-6 leading-tight">{hero.title}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="px-8 py-3 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md transition-all hover:bg-secondary/90 inline-block text-center">{hero.primaryBtn}</Link>
              <Link href="/procedures" className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-label-md text-label-md transition-all hover:bg-primary hover:text-white inline-block text-center">{hero.secondaryBtn}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ConditionCategoriesBentoGridStyle() {
  const { categories } = conditionsData;
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">{categories.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Brain Conditions */}
          <div className="md:col-span-7 bg-white p-10 rounded-xl clinical-shadow group hover:translate-y-[-4px] transition-transform duration-300 border border-surface-container reveal-card reveal-delay-100">
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 bg-secondary/5 rounded-full flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined !text-4xl">{categories.brain.icon}</span>
              </div>
              <span className="text-surface-variant font-headline-lg opacity-20">{categories.brain.number}</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">{categories.brain.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">{categories.brain.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.brain.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border border-transparent hover:border-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: `'FILL' 1` }}>circle</span>
                  <span className="font-label-md text-label-md">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column: Medical Image */}
          <div className="md:col-span-5 relative rounded-xl overflow-hidden clinical-shadow reveal-card reveal-delay-200">
            <img alt="Brain mapping visualizer" className="w-full h-full object-cover" src={categories.brainImage} />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent">
              <p className="text-white font-label-md text-label-md">{categories.brainImageTag}</p>
            </div>
          </div>
          {/* Spine Conditions */}
          <div className="md:col-span-5 bg-primary p-10 rounded-xl clinical-shadow text-white reveal-card reveal-delay-300">
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-secondary-fixed">
                <span className="material-symbols-outlined !text-4xl">{categories.spine.icon}</span>
              </div>
              <span className="text-white opacity-10 font-headline-lg">{categories.spine.number}</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-4">{categories.spine.title}</h3>
            <p className="font-body-md text-body-md text-primary-fixed-dim mb-8 leading-relaxed">{categories.spine.description}</p>
            <ul className="space-y-4">
              {categories.spine.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                  <span className="font-label-md text-label-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Peripheral Nerve Disorders */}
          <div className="md:col-span-7 bg-surface-container-low p-10 rounded-xl clinical-shadow border border-surface-container-high relative overflow-hidden reveal-card reveal-delay-400">
            <div className="relative z-10">
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined !text-4xl">{categories.peripheral.icon}</span>
                  </div>
                  <span className="text-surface-variant font-headline-lg opacity-20">{categories.peripheral.number}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">{categories.peripheral.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">{categories.peripheral.description}</p>
                <div className="flex flex-wrap gap-4">
                  {categories.peripheral.cards.map((card, idx) => (
                    <div key={idx} className="bg-white px-6 py-4 rounded-lg shadow-sm border border-outline-variant/30 flex-1 min-w-[200px]">
                      <h4 className="font-label-md text-label-md text-primary mb-2">{card.title}</h4>
                      <p className="text-sm text-on-surface-variant">{card.description}</p>
                    </div>
                  ))}
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
  const { symptomChecker } = conditionsData;
  return (
    <>
      <section className="bg-primary-container py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <img alt="Doctor consulting patient" className="rounded-xl shadow-2xl relative z-10 grayscale-[30%] reveal-card" src={symptomChecker.image} />
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-white mb-6">{symptomChecker.title}</h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-8">{symptomChecker.description}</p>
            <div className="space-y-6">
              {symptomChecker.items.map((item, idx) => {
                const delayClass = idx === 0 ? "reveal-delay-100" : idx === 1 ? "reveal-delay-200" : "reveal-delay-300";
                return (
                  <div key={idx} className={`flex gap-6 p-6 bg-white/5 rounded-lg border border-white/10 reveal-card ${delayClass}`}>
                    <span className="material-symbols-outlined text-secondary-fixed-dim !text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-label-md text-label-md mb-2">{item.title}</h4>
                      <p className="text-on-primary-container text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CTASection() {
  const { cta } = conditionsData;
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-2xl bg-secondary-container border border-secondary/10 relative overflow-hidden reveal-card">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">{cta.title}</h2>
            <p className="font-body-lg text-body-lg text-on-secondary-container mb-10">{cta.description}</p>
            <Link href="/book" className="px-6 sm:px-12 py-4 bg-secondary text-on-secondary rounded-lg font-headline-sm text-headline-sm shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all active:scale-95 inline-block">
              {cta.buttonText}
            </Link>
            <p className="mt-6 text-sm text-on-secondary-container/60 font-label-sm">{cta.footnote}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function ConditionsInteractions() {
  return (
    <Script
      id="conditions-interactions"
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
