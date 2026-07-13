import Script from "next/script";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { resourcesData } from "@/lib/site-data";

const resourcesStyles = ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }";

export default function ResourcesPage() {
  return (
    <>
      <ResourcesRuntime />
      <SiteHeader active="patients" />
      <main className="pt-20">
        <HeroSection />
        <GuidesSection />
        <TelehealthSection />
        <AdministrativeSection />
        <FAQSection />
        <SupportCTASection />
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
      <style dangerouslySetInnerHTML={{ __html: resourcesStyles }} />
    </>
  );
}

function HeroSection() {
  const { hero } = resourcesData;
  return (
    <>
      <section className="relative h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Resources Hero" className="w-full h-full object-cover" src={hero.image} />
          <div className="absolute inset-0 bg-primary/45 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl text-white">
            <h1 className="font-headline-lg text-headline-lg mb-6 leading-tight">{hero.title}</h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim/90">{hero.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function GuidesSection() {
  const { guides } = resourcesData;
  return (
    <>
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto bg-surface">
        <div className="mb-16 text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">{guides.title}</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {guides.items.map((guide, idx) => (
            <div key={idx} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined !text-2xl">{guide.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">{guide.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{guide.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function TelehealthSection() {
  const { telehealth } = resourcesData;
  return (
    <>
      <section className="py-24 bg-surface-container-low">
        <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">{telehealth.portal.title}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{telehealth.portal.description}</p>
            <div className="flex gap-6 p-6 bg-white rounded-lg border border-outline-variant/10 shadow-sm max-w-md">
              <span className="material-symbols-outlined text-secondary !text-3xl">{telehealth.telehealthCard.icon}</span>
              <div>
                <h4 className="font-label-md text-label-md text-primary mb-2">{telehealth.telehealthCard.title}</h4>
                <p className="text-on-surface-variant text-sm">{telehealth.telehealthCard.description}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
            <img alt="HIPAA Compliant Patient Portal Screenshot" className="rounded-xl shadow-clinical relative z-10" src={telehealth.portal.image} />
          </div>
        </div>
      </section>
    </>
  );
}

function AdministrativeSection() {
  const { administrative } = resourcesData;
  return (
    <>
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-12">{administrative.title}</h2>
          <div className="divide-y divide-outline-variant/30 border-y border-outline-variant/30">
            {administrative.items.map((item, idx) => (
              <a key={idx} className="flex justify-between items-center py-6 hover:px-4 transition-all duration-200 group hover:bg-surface-container-low" href="#">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                  <span className="font-label-md text-label-md text-on-surface">{item.label}</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQSection() {
  const { faqs } = resourcesData;
  return (
    <>
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-margin-desktop">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-16">{faqs.title}</h2>
          <div className="space-y-4">
            {faqs.items.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-outline-variant/10 shadow-sm" open={idx === 0 ? true : undefined}>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-label-md text-label-md text-on-surface">{faq.question}</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SupportCTASection() {
  const { supportCta } = resourcesData;
  return (
    <>
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">{supportCta.title}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{supportCta.description}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3 text-secondary">
              <span className="material-symbols-outlined">{supportCta.phoneIcon}</span>
              <span className="font-headline-sm text-headline-sm font-bold">{supportCta.phoneLabel}: {supportCta.phoneValue}</span>
            </div>
            <button className="px-8 py-3 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md transition-all hover:bg-secondary/90 flex items-center gap-2">
              {supportCta.buttonText} <span className="material-symbols-outlined">{supportCta.buttonIcon}</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ResourcesInteractions() {
  return (
    <Script
      id="resources-interactions"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mousedown', () => button.classList.add('scale-95'));
            button.addEventListener('mouseup', () => button.classList.remove('scale-95'));
            button.addEventListener('mouseleave', () => button.classList.remove('scale-95'));
        });

        // FAQ accordion logic
        document.querySelectorAll('details').forEach((el) => {
            el.addEventListener('toggle', () => {
                if (el.open) {
                    document.querySelectorAll('details').forEach((otherEl) => {
                        if (otherEl !== el) otherEl.open = false;
                    });
                }
            });
        });
    `,
      }}
    />
  );
}
