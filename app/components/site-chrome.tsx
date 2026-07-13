import Link from "next/link";

type ActivePage = "home" | "conditions" | "technology" | "patients";

const navItems = [
  { label: "Services", href: "/", key: "home" },
  { label: "Conditions", href: "/conditions", key: "conditions" },
  { label: "Technology", href: "/procedures", key: "technology" },
  { label: "Patients", href: "/resources", key: "patients" },
  { label: "FAQ", href: "#" },
] satisfies Array<{ label: string; href: string; key?: ActivePage }>;

export function SiteHeader({ active }: Readonly<{ active: ActivePage }>) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface-container-lowest/90 backdrop-blur-md border-b border-surface-container-high dark:border-outline-variant shadow-sm h-20">
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container flex items-center justify-center rounded-lg">
            <span
              className="material-symbols-outlined text-primary-fixed"
              style={{ fontVariationSettings: `'FILL' 1` }}
            >
              neurology
            </span>
          </div>
          <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">
            NeuroLink Excellence
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-label-md text-label-md">
          {navItems.map((item) => {
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
          <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-clinical">
            Book Appointment
          </button>
          <button className="md:hidden text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary-container dark:bg-tertiary-container w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-primary-fixed">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img alt="Logo" className="w-12 h-12 object-contain brightness-0 invert" src="/stitch/asset-06.jpg" />
            <h4 className="font-headline-md text-headline-md font-extrabold text-primary-fixed">NeuroLink</h4>
          </div>
          <p className="font-body-md text-body-md text-on-primary-container leading-relaxed mb-6">
            Global excellence in neurosurgical innovation and compassionate patient care since 2004.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-secondary transition-colors text-white" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-secondary transition-colors text-white" href="#">
              <span className="material-symbols-outlined text-sm">video_call</span>
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-white font-label-md text-label-md uppercase tracking-widest mb-6">Patient Links</h5>
          <ul className="space-y-3 font-body-md text-body-md text-on-primary-container">
            <li><a className="hover:text-primary-fixed-dim transition-colors hover:underline" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary-fixed-dim transition-colors hover:underline" href="#">Terms of Service</a></li>
            <li><a className="hover:text-primary-fixed-dim transition-colors hover:underline" href="#">Patient Rights</a></li>
            <li><a className="hover:text-primary-fixed-dim transition-colors hover:underline" href="#">Medical Disclaimer</a></li>
            <li><a className="hover:text-primary-fixed-dim transition-colors hover:underline" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-label-md text-label-md uppercase tracking-widest mb-6">Clinical Hours</h5>
          <ul className="space-y-3 font-body-md text-body-md text-on-primary-container">
            <li className="flex justify-between"><span>Monday - Friday</span> <span>8am - 6pm</span></li>
            <li className="flex justify-between"><span>Saturday</span> <span>Emergencies</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            <li className="pt-4 text-secondary-fixed font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">notification_important</span>
              24/7 Surgical Support
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-label-md text-label-md uppercase tracking-widest mb-6">Newsletter</h5>
          <p className="text-sm text-on-primary-container mb-4">Subscribe to neurological health insights.</p>
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
          © 2024 NeuroLink Neurosurgery Clinic. All rights reserved. Professional Excellence in Neurological Care.
        </p>
      </div>
    </footer>
  );
}
