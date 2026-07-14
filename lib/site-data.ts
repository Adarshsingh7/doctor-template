export interface NavItem {
  label: string;
  href: string;
  key?: "home" | "conditions" | "technology" | "patients" | "blog" | "about" | "contact" | "gallery";
}

export const globalData = {
  brandName: "Shreyas Neuro",
  logoIcon: "neurology",
  navItems: [
    { label: "Home", href: "/", key: "home" },
    { label: "About Us", href: "/about", key: "about" },
    { label: "Conditions", href: "/conditions", key: "conditions" },
    { label: "Technology", href: "/procedures", key: "technology" },
    { label: "Patients", href: "/resources", key: "patients" },
    { label: "Gallery", href: "/gallery", key: "gallery" },
    { label: "Blog", href: "/blog", key: "blog" },
    { label: "Contact Us", href: "/contact", key: "contact" }
  ] as NavItem[],
  footer: {
    logoImage: "/clinic-entrance.jpg",
    brandName: "Shreyas Clinic",
    description: "Advanced brain, spine & diagnostic care by Dr. Surjeet Singh in Indira Nagar, Lucknow.",
    socialLinks: [
      { label: "Facebook", icon: "facebook", href: "https://facebook.com" },
      { label: "Instagram", icon: "instagram", href: "https://instagram.com" },
      { label: "YouTube", icon: "youtube", href: "https://youtube.com/" }
    ],
    creditText: "Made by STech Web Solutions",
    creditHref: "https://stechwebsolution.com/",
    businessPhone: "+91 8821840512",
    patientLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Patient Rights", href: "#" },
      { label: "Medical Disclaimer", href: "#" },
      { label: "Contact Us", href: "/contact" }
    ],
    clinicalHours: [
      { days: "Mon - Sat (Morning)", time: "9:00 AM - 12:30 PM" },
      { days: "Mon - Sat (Evening)", time: "5:30 PM - 8:00 PM" },
      { days: "Sunday", time: "Off" }
    ],
    supportTagline: "24/7 Diagnostics & Surgical Support",
    copyright: "© 2026 Shreyas Neuro & Spine Clinic. All rights reserved."
  }
};

export const homeData = {
  hero: {
    tagline: "Shreyas Neuro & Spine Clinic",
    title: "Advanced Brain & Spine Care.",
    titleAccent: "Restoring Movement, Reclaiming Life.",
    description: "Expert neurosurgery, comprehensive spinal treatments, specialized physiotherapy, and 24x7 lab diagnostics led by Dr. Surjeet Singh and Dr. Stuti Kumari in Lucknow.",
    backgroundImage: "/clinic-exterior.jpg",
    primaryBtn: "Book a Consultation",
    secondaryBtn: "View Our Services"
  },
  stats: [
    { value: "2,500+", label: "Successful Surgeries" },
    { value: "20+ Years", label: "Clinical Excellence" },
    { value: "98%", label: "Patient Satisfaction" }
  ],
  doctorProfile: {
    tagline: "Lead Consultant Neurosurgeon",
    name: "Dr. Surjeet Singh, MS, MCh",
    description: "Dr. Surjeet Singh is a leading consultant neurosurgeon specializing in complex brain surgeries, spinal reconstructions, and minimally invasive spine interventions. Focused on restoring patient mobility and alleviating chronic pain, he combines clinical expertise with compassionate care.",
    image: "/dr-surjeet-singh.jpg",
    badgeTitle: "Board Certified",
    badgeDesc: "M.Ch. Neurosurgery Specialist",
    bulletPoints: [
      { icon: "verified", text: "Specialist in Brain & Spine Surgeries" },
      { icon: "medical_services", text: "Expertise in Endoscopic Spine Procedures" },
      { icon: "school", text: "M.S., M.Ch. (Neurosurgery) credentials" }
    ],
    ctaText: "View Full Clinical Profile",
    link: "/doctor/dr-surjeet-singh"
  },
  services: {
    tagline: "Our Specialties",
    title: "Comprehensive Clinical & Diagnostic Services",
    items: [
      {
        title: "Brain & Spine Surgery",
        description: "Advanced surgical treatment for brain and spine tumors, hemorrhages, and complex spinal disorders.",
        icon: "neurology",
        link: "/blog/brain-tumors"
      },
      {
        title: "Spine & Pain Care",
        description: "Effective treatment for chronic back pain, neck pain, sciatica, disc herniation, and spondylosis.",
        icon: "accessibility_new",
        link: "/blog/spine-surgery"
      },
      {
        title: "Neurology & Fits",
        description: "Expert management of epilepsy (fits), migraines, vertigo, neuralgia, and tremors.",
        icon: "bolt",
        link: "/blog/epilepsy"
      },
      {
        title: "Physiotherapy Centre",
        description: "Specialized therapy for paralysis rehabilitation, joint pain, frozen shoulder, and post-fracture recovery.",
        icon: "healing",
        link: "/blog/nerve-disorders"
      },
      {
        title: "Dr. SKS Diagnostics",
        description: "24x7 pathology lab offering comprehensive blood tests, biopsy, FNAC, and hormonal investigations.",
        icon: "biotech",
        link: "/blog/stroke-care"
      },
      {
        title: "Nerve & Muscle Care",
        description: "Specialized management for Parkinson's disease, Myasthenia, and peripheral neuropathies.",
        icon: "account_tree",
        link: "/blog/minimally-invasive"
      }
    ]
  },
  conditions: {
    title: "Expertise in Complex Conditions",
    description: "We provide diagnosis and treatment for a wide spectrum of neurological and spinal conditions, focusing on long-term wellness.",
    buttonText: "View Condition Guide",
    items: [
      "Brain & Spine Tumors",
      "Sciatica & Nerve Pain",
      "Epilepsy & Fits",
      "Back & Neck Pain",
      "Cervical Spondylosis",
      "Brain Hemorrhage"
    ]
  },
  technology: {
    tagline: "Precision Instruments",
    title: "Surgical Technology of the Future",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkp9NlDpN6nFlyxR3XYZvN2DOCevTPS0dhIcs9SKsms0fa4dJQz0nLp7Jnj0pp3j-ss9L1NWx0wlyjri1h7TZYQUyKQK4QJpHwau4vPt__U4LV_o2w7Pw5Q2UayzSNUwFhT9bdfz7wa-AQmnxbaiK7A7TN-Q09QO0Y9lJn7NwPWAKStPWysCHZ4lFIbwFldjsz6V8okBfmyxKM014FmMMM0ERUbQSfyj1LC4Z1REVHHfKw6Uc0zc5J-T0_m6Hld52Zx_x6fhCxd5y0",
    items: [
      {
        title: "StealthStation™ Neuronavigation",
        description: "3D GPS-like guidance for the brain, allowing surgeons to precisely locate tumors with sub-millimeter accuracy.",
        icon: "navigation"
      },
      {
        title: "Robotic-Assisted Platforms",
        description: "Enhanced dexterity and stability for delicate spinal procedures, significantly reducing incision sizes.",
        icon: "precision_manufacturing"
      },
      {
        title: "Digital Microscope Systems",
        description: "High-definition visualization with integrated fluorescence to distinguish healthy tissue from pathology.",
        icon: "biotech"
      }
    ]
  },
  patientJourney: {
    tagline: "Your Path to Health",
    title: "The Patient Journey",
    steps: [
      {
        number: "01",
        title: "Consultation",
        description: "In-depth review of history and initial clinical evaluation.",
        icon: "forum"
      },
      {
        number: "02",
        title: "Diagnosis",
        description: "Advanced imaging (MRI/CT) and specialized neurological testing.",
        icon: "biotech"
      },
      {
        number: "03",
        title: "Treatment Plan",
        description: "Collaborative development of personalized surgical or non-surgical plans.",
        icon: "clinical_notes"
      },
      {
        number: "04",
        title: "Recovery",
        description: "Comprehensive post-op care and physical rehabilitation tracking.",
        icon: "healing"
      }
    ]
  },
  testimonials: {
    title: "Patient Success Stories",
    items: [
      {
        stars: 5,
        quote: "Life-changing spine surgery result. I had been in chronic pain for 5 years, and within 3 weeks post-surgery, I was walking pain-free.",
        author: "Michael R., Patient"
      },
      {
        stars: 5,
        quote: "The precision and care shown by Dr. Surjeet Singh was incredible. He explained everything clearly and made me feel at ease throughout the brain tumor procedure.",
        author: "Sarah L., Patient"
      },
      {
        stars: 5,
        quote: "Minimal scarring and back to my normal life in record time. The clinical care at Shreyas Clinic is truly world-class.",
        author: "David K., Patient"
      }
    ]
  },
  appointment: {
    title: "Book Your Consultation",
    description: "Take the first step towards recovery. Complete the form below and our medical coordinator will contact you within 24 hours.",
    image: "/clinic-exterior.jpg",
    supportTitle: "Patient Support",
    supportDesc: "Available 24/7 for Emergencies",
    supportPhone: "+91 8821840512",
    buttonText: "Schedule Appointment",
    services: [
      "Brain & Spine Surgery Consultation",
      "Physiotherapy & Rehab",
      "Pathology & Lab Diagnostics",
      "General Consultation"
    ]
  },
  faqs: [
    {
      question: "How long is the typical recovery period?",
      answer: "Recovery varies by procedure. For minimally invasive spine surgery, patients often return to light activity within 1-2 weeks. Major cranial procedures may require 4-8 weeks for a full return to daily routines. We provide a detailed recovery timeline for every patient."
    },
    {
      question: "What should I bring to my first visit?",
      answer: "Please bring all recent imaging (CDs or digital links of MRIs/CT scans), a list of current medications, previous surgical records if applicable, and your insurance information."
    },
    {
      question: "Do you offer second opinions for outside diagnoses?",
      answer: "Yes, we frequently provide second opinions. Our team reviews existing scans and records to offer a comprehensive surgical or non-surgical perspective on complex cases."
    }
  ],
  contactMap: {
    title: "Contact Information",
    description: "Our clinic is located in Indira Nagar, Lucknow, designed for easy access and complete diagnostic and patient care.",
    details: [
      {
        icon: "location_on",
        title: "Address",
        lines: [
          "11/1, Sector - 11, Near Munshi Pulia Metro Station,",
          "Virasat Park, Indira Nagar, Lucknow"
        ]
      },
      {
        icon: "call",
        title: "Phone & Contact",
        lines: [
          "Consultation: +91 8821840512",
          "Diagnostics: +91 9519943961",
          "Lab Services: +91 6394527017"
        ]
      },
      {
        icon: "schedule",
        title: "Clinic Hours",
        lines: [
          "Mon - Sat (Morning): 9:00 AM - 12:30 PM",
          "Mon - Sat (Evening): 5:30 PM - 8:00 PM",
          "Sunday: Off"
        ]
      }
    ],
    mapImage: "/clinic-exterior.jpg",
    mapAlt: "Shreyas Neuro & Spine Clinic Exterior in Indira Nagar, Lucknow",
    mapLocation: "Indira Nagar, Lucknow",
    pinLabel: "Shreyas Neuro & Spine Clinic"
  }
};

export const conditionsData = {
  hero: {
    tagline: "Expert Neurological Care",
    title: "Specialized Care for Complex Neurological Conditions",
    description: "Utilizing surgical-grade precision and world-class expertise to treat conditions of the brain, spine, and peripheral nerves.",
    backgroundImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80",
    primaryBtn: "Find a Specialist",
    secondaryBtn: "View Procedures"
  },
  categories: {
    title: "Core Specializations",
    brain: {
      number: "01",
      icon: "psychology",
      title: "Brain Conditions",
      description: "Our neurosurgical team employs advanced mapping and minimally invasive techniques for complex cerebral pathologies, ensuring maximum preservation of neurological function.",
      items: ["Brain Tumors", "Aneurysms", "Hydrocephalus", "Epilepsy"]
    },
    brainImage: "https://images.unsplash.com/photo-1559058789-672da06263d8?auto=format&fit=crop&w=800&q=80",
    brainImageAlt: "A close-up, high-detail clinical photograph of a modern neuro-navigation system display in a dimly lit operating room. The screen shows a sophisticated 3D model of a human brain with precision mapping markers in glowing teal and white. The background is a soft-focus clinical blue, emphasizing the state-of-the-art technology and surgical accuracy.",
    brainImageTag: "Advanced Precision Mapping",
    spine: {
      number: "02",
      icon: "height",
      title: "Spine Conditions",
      description: "Comprehensive management of spinal disorders through both conservative and innovative surgical interventions tailored to each patient's lifestyle.",
      items: ["Herniated Discs", "Spinal Stenosis", "Degenerative Disc Disease", "Sciatica"]
    },
    peripheral: {
      number: "03",
      icon: "lan",
      title: "Peripheral Nerve Disorders",
      description: "Focused treatment for nerve compression and entrapment syndromes, utilizing microsurgical decompression to restore sensation and motor function.",
      cards: [
        {
          title: "Carpal Tunnel",
          description: "Minimally invasive release procedures for rapid recovery."
        },
        {
          title: "Nerve Entrapment",
          description: "Precision decompression for chronic pain relief."
        }
      ]
    }
  },
  symptomChecker: {
    title: "When to See a Specialist",
    description: "Early intervention is critical in neurological health. If you are experiencing persistent symptoms, our diagnostic team is here to provide clarity.",
    image: "/stitch/asset-07.jpg",
    imageAlt: "A professional yet empathetic interaction between a senior neurosurgeon in a white clinical coat and an elderly patient. They are looking at a digital tablet together in a bright, modern consultation room. The lighting is soft and warm, reflecting a supportive and trustworthy medical environment focused on patient communication and reassurance.",
    items: [
      {
        icon: "warning",
        title: "Persistent Neurological Deficits",
        description: "Chronic headaches, sudden vision changes, or recurring seizures require immediate specialist evaluation."
      },
      {
        icon: "bolt",
        title: "Radiating Pain & Numbness",
        description: "Sharp, electric-like pain radiating down arms or legs, or persistent muscle weakness in extremities."
      },
      {
        icon: "balance",
        title: "Balance & Coordination Issues",
        description: "Difficulty walking, frequent falls, or unexplained loss of motor control and fine motor skills."
      }
    ]
  },
  cta: {
    title: "Start Your Journey to Recovery",
    description: "Schedule a comprehensive consultation with our world-renowned neurosurgical team today.",
    buttonText: "Book a Consultation",
    footnote: "No referral required for initial evaluations."
  }
};

export const proceduresData = {
  hero: {
    tagline: "Expertise & Precision",
    title: "Advanced Surgical Procedures",
    description: "Shreyas Neuro & Spine Clinic integrates advanced brain and spine surgery expertise with diagnostics. We are dedicated to delivering the highest standards of neurological care in Lucknow.",
    backgroundImage: "/clinic-exterior.jpg"
  },
  brainSurgery: {
    title: "Cranial Interventions",
    image: "https://images.unsplash.com/photo-1546840207-3d1d487ef205?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Brain Surgery Diagram",
    imageTag: "Intraoperative Guidance View",
    procedures: [
      {
        title: "Brain Tumor Resection",
        description: "Our surgeons utilize real-time neuronavigation to map critical brain pathways. This ensures maximum tumor removal while preserving vital cognitive and motor functions."
      },
      {
        title: "Epilepsy Surgery",
        description: "Using stereotactic depth electrodes and functional mapping, we identify and neutralize seizure foci with pinpoint accuracy, offering life-changing results for refractory cases."
      }
    ],
    quote: "Technology allows us to see what was once invisible, making the impossible, achievable."
  },
  spineSurgery: {
    title: "Spinal Reconstruction",
    image: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Spine Surgery Diagram",
    imageTag: "Robotic Sync Active",
    features: [
      {
        icon: "precision_manufacturing",
        title: "Robotic Guidance",
        description: "Sub-millimeter accuracy in screw placement and structural support, reducing operative time and enhancing stability."
      },
      {
        icon: "rebase_edit",
        title: "Minimally Invasive (MISS)",
        description: "Small incisions mean faster recovery, less blood loss, and reduced post-operative pain for complex spinal conditions."
      },
      {
        icon: "architecture",
        title: "Complex Reconstruction",
        description: "Expert management of deformity, trauma, and degenerative diseases using the latest structural biomaterials."
      }
    ]
  },
  technologyIntegration: {
    title: "Clinical Precision Infrastructure",
    description: "Our surgical suites are equipped with a proprietary ecosystem of interconnected technologies.",
    navigation: {
      title: "Neural Navigation",
      subtitle: "GPS-like precision for the human brain.",
      description: "Real-time mapping synchronized with pre-operative MRI and CT data for dynamic intraoperative visualization.",
      icon: "my_location"
    },
    robotics: {
      title: "Surgical Robotics",
      description: "Active compensation for patient movement ensures sub-millimeter surgical accuracy.",
      deviationLabel: "Current Deviation Index",
      deviationValue: "0.2mm"
    }
  },
  patientSafety: {
    title: "Personalized Surgical Planning",
    description: "Every procedure begins long before the operating room. We utilize a 3-tier preparation protocol to ensure maximum safety and optimal outcomes.",
    ctaText: "View Safety Protocols",
    steps: [
      {
        number: "01",
        title: "Advanced Imaging Tier",
        description: "Ultra-high field MRI (7 Tesla) provides unparalleled structural detail for identifying margins."
      },
      {
        number: "02",
        title: "Virtual Simulation",
        description: "Surgeons perform a 'dry-run' of the surgery in a VR environment to anticipate complex anatomy."
      },
      {
        number: "03",
        title: "Multi-Disciplinary Review",
        description: "Every surgical plan is reviewed by a board of neurosurgeons, radiologists, and neurologists."
      },
      {
        number: "04",
        title: "Recovery Roadmap",
        description: "Personalized post-op care starts on day one of the consultation, ensuring a clear path to health."
      }
    ]
  },
  recovery: {
    title: "The Journey to Recovery",
    description: "Surgical excellence extends beyond the procedure. Our comprehensive rehabilitation program focuses on restoring function, managing pain, and supporting long-term neurological health through personalized therapy and follow-up care.",
    stats: [
      { value: "24h", label: "ICU Monitoring" },
      { value: "Day 1", label: "Rehab Initiation" },
      { value: "98%", label: "Patient Satisfaction" }
    ]
  }
};

export const resourcesData = {
  hero: {
    title: "Patient Resources",
    description: "Empowering your neurological journey through transparent communication, comprehensive preparation guides, and clinical excellence. Your recovery begins with the right information.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1600&q=80"
  },
  guides: {
    title: "Surgical Preparation Guides",
    items: [
      {
        icon: "assignment",
        title: "Pre-Operative Instructions",
        description: "Essential guidelines including fasting requirements, medication adjustments, and required diagnostic imaging prior to your procedure."
      },
      {
        icon: "fact_check",
        title: "Day of Surgery Checklist",
        description: "A step-by-step guide on what to bring, arrival times, and what to expect during the admission process at our neurosurgical facility."
      },
      {
        icon: "healing",
        title: "Post-Operative Recovery",
        description: "Comprehensive recovery protocols including wound care, activity restrictions, and pain management strategies for a successful rehabilitation."
      }
    ]
  },
  telehealth: {
    portal: {
      title: "Patient Portal",
      description: "Access your surgical records, schedule follow-ups, and message your care team through our encrypted, HIPAA-compliant gateway.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
    },
    telehealthCard: {
      icon: "videocam",
      title: "Telehealth",
      description: "Book a virtual consultation with our specialists from the comfort of your home. Ideal for pre-consultations and routine follow-ups."
    }
  },
  administrative: {
    title: "Administrative Resources",
    items: [
      { icon: "payments", label: "Insurance & Billing" },
      { icon: "clinical_notes", label: "Medical Records Request" },
      { icon: "gavel", label: "Patient Rights & Responsibilities" }
    ]
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How early should I arrive for my surgery?",
        answer: "We generally recommend arriving at least 2 hours prior to your scheduled surgical time to complete the admission process and preoperative preparation."
      },
      {
        question: "Will I need someone to drive me home?",
        answer: "Yes, for all neurosurgical procedures, you must have a designated adult driver to take you home as anesthesia and neuro-recovery protocols prohibit operating a vehicle."
      }
    ]
  },
  supportCta: {
    title: "Need direct assistance?",
    description: "Our patient coordinators are here to support you through every step of your care.",
    phoneLabel: "Support Line",
    phoneValue: "1-800-NEURO-LX",
    phoneIcon: "call",
    buttonText: "Contact Coordinator",
    buttonIcon: "send"
  }
};

export interface BlogEntry {
  slug: string;
  title: string;
  category: "Spine Care" | "Brain Surgery" | "Pediatric Neurology" | "Therapy & Metabolic";
  cardDescription: string;
  fullDescription: string;
  image: string;
  symptoms: string[];
  nonSurgical: string[];
  surgical: string[];
  recoverySteps: string[];
  faqs: { question: string; answer: string }[];
}

export const blogData: BlogEntry[] = [
  {
    slug: "brain-tumors",
    title: "Brain Tumors",
    category: "Brain Surgery",
    cardDescription: "Expert surgical guidance and modern management pathways for benign and malignant cranial growths.",
    fullDescription: "Brain tumors encompass a wide range of abnormal growths within the skull, ranging from benign meningiomas to malignant glioblastomas. Our clinic utilizes advanced StealthStation neuronavigation, high-field intraoperative imaging, and microsurgical techniques to safely remove tumors while preserving vital cognitive and motor functions.",
    image: "https://images.unsplash.com/photo-1629059465910-a5498f0bc2f5?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Persistent, worsening headaches", "Unexplained nausea or vomiting", "Cognitive changes or memory loss", "Seizures or sudden convulsions"],
    nonSurgical: ["Stereotactic radiosurgery (Gamma Knife / CyberKnife)", "Targeted oral chemotherapy and radiation", "Corticosteroids to reduce brain inflammation", "Active surveillance and regular MRI monitoring"],
    surgical: ["Craniotomy under 3D intraoperative navigation", "Endoscopic endonasal skull-base resection", "Awake brain mapping craniotomy for language preservation", "Micro-neurosurgical tumor debulking"],
    recoverySteps: ["Pre-op 3D cranial modeling and functional MRI", "Precision navigation-guided tumor resection", "Intensive care monitoring and cognitive assessment", "Outpatient rehabilitation and long-term neuro-imaging follow-ups"],
    faqs: [
      { question: "What is the difference between benign and malignant brain tumors?", answer: "Benign tumors do not contain cancer cells and grow slowly, while malignant tumors are cancerous and grow more aggressively into surrounding tissue." },
      { question: "How long is recovery after brain tumor surgery?", answer: "Most patients spend 3 to 5 days in the hospital and return to light activities in 4 to 6 weeks, with full recovery taking up to 3 months." },
      { question: "Is awake brain surgery common?", answer: "Yes, it is commonly used for tumors located near language or motor areas of the brain to ensure they are not damaged during resection." }
    ]
  },
  {
    slug: "spine-surgery",
    title: "Spine Surgery",
    category: "Spine Care",
    cardDescription: "Corrective and restorative procedures for spinal deformities, stenosis, fractures, and severe degeneration.",
    fullDescription: "Spine surgery addresses structural abnormalities of the spinal column that cause chronic pain or neurological deficits. Using advanced stabilization hardware, robotic guidance, and decompressive techniques, our surgeons restore alignment, relieve nerve root compression, and improve patient quality of life.",
    image: "https://images.unsplash.com/photo-1539815208687-a0f05e15d601?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Severe chronic back or neck pain", "Pain radiating down arms or legs (radiculopathy)", "Numbness, tingling, or weakness in extremities", "Loss of bowel or bladder control (emergency)"],
    nonSurgical: ["Tailored spinal physiotherapy and posture correction", "Epidural steroid injections and facet joint blocks", "Anti-inflammatory and neuropathic medications", "Orthotic bracing for temporary support"],
    surgical: ["Decompressive laminectomy to relieve spinal canal narrowing", "Spinal fusion (ACDF, TLIF, PLIF) with hardware stabilization", "Artificial disc replacement (cervical or lumbar)", "Microdiscectomy for nerve root decompression"],
    recoverySteps: ["Standing spinal radiographs and MRI planning", "Surgical decompression or fusion under intraoperative monitoring", "Same-day or next-day guided mobilization", "Graduated physical therapy for spinal core strengthening"],
    faqs: [
      { question: "How long after spine surgery can I walk?", answer: "We encourage most patients to stand and walk short distances with assistance on the very first day after surgery to promote healing." },
      { question: "Will I lose mobility after a spinal fusion?", answer: "Spinal fusion does restrict movement in the fused segment, but most patients report improved overall mobility because their debilitating pain has been resolved." },
      { question: "What is the success rate of spine surgery?", answer: "For decompressive procedures and fusions, success rates range from 80% to 95% in achieving significant pain reduction." }
    ]
  },
  {
    slug: "minimally-invasive",
    title: "Minimally Invasive Surgery",
    category: "Spine Care",
    cardDescription: "Advanced surgical procedures utilizing micro-incisions and tubular dilators to minimize tissue damage.",
    fullDescription: "Minimally Invasive Spine Surgery (MISS) relies on advanced technology and specialized instruments to treat spinal conditions with minimal disruption to surrounding muscles and tissues. By using dilators and keyhole retractors, MISS reduces blood loss, limits scarring, and significantly shortens recovery times.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Localized back pain or muscle spasms", "Sciatic nerve pain radiating to the legs", "Inability to stand or walk for extended periods", "Pinched nerve stiffness"],
    nonSurgical: ["Targeted core stabilization and flexibility training", "Non-steroidal anti-inflammatory medications", "Facet joint blocks and selective nerve root injections", "Posture and ergonomic workspace counseling"],
    surgical: ["Minimally Invasive Transforaminal Lumbar Interbody Fusion (MIS-TLIF)", "Percutaneous pedicle screw placement", "Micro-endoscopic lumbar decompression", "Laser-assisted disc decompression"],
    recoverySteps: ["Pre-operative fluoroscopic trajectory planning", "Minimally invasive decompression or fusion via dilating tubes", "Outpatient recovery check or overnight stay", "Early rehabilitation and home stretching program"],
    faqs: [
      { question: "What is the primary benefit of minimally invasive surgery?", answer: "The main benefits are smaller incisions, significantly less post-operative pain, reduced muscle damage, lower risk of infection, and a faster return to daily activities." },
      { question: "Are the long-term results as good as open surgery?", answer: "Yes, clinical studies show that long-term outcomes for MISS are equal to or better than traditional open surgery." },
      { question: "Will I have a scar?", answer: "Incisions are typically less than an inch, resulting in very small, faint scars compared to the large incisions of open surgery." }
    ]
  },
  {
    slug: "stroke-care",
    title: "Stroke Care",
    category: "Brain Surgery",
    cardDescription: "Urgent medical and surgical interventions to manage ischemic and hemorrhagic strokes and preserve brain function.",
    fullDescription: "Stroke care is a critical medical specialty focused on rapidly treating interruptions in brain blood flow. Whether caused by a clot (ischemic stroke) or a ruptured vessel (hemorrhagic stroke), immediate clinical intervention is essential to minimize brain damage, manage swelling, and restore neurological pathways.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Sudden weakness or numbness in face or limbs", "Difficulty speaking, slurred words, or confusion", "Sudden vision changes or loss of balance", "Severe, sudden onset headache"],
    nonSurgical: ["Intravenous thrombolytic therapy (tPA drug administration)", "Strict blood pressure and cerebral perfusion management", "Antiplatelet and anticoagulant medications", "Comprehensive speech, physical, and cognitive therapy"],
    surgical: ["Mechanical thrombectomy (endovascular clot retrieval)", "Decompressive hemicraniectomy to relieve high intracranial pressure", "Aneurysm clipping or endovascular coiling", "Carotid endarterectomy or stenting"],
    recoverySteps: ["Emergency CT/MRI brain perfusion scanning", "Thrombolysis or surgical endovascular intervention", "Neuro-intensive care unit (ICU) observation", "Early stroke rehabilitation and secondary prevention planning"],
    faqs: [
      { question: "What is the 'golden window' for stroke treatment?", answer: "Thrombolytic drugs (tPA) should ideally be given within 3 to 4.5 hours of symptom onset, and mechanical thrombectomy within 6 to 24 hours." },
      { question: "Can a stroke be prevented?", answer: "Yes, up to 80% of strokes can be prevented by managing risk factors like high blood pressure, cholesterol, diabetes, and maintaining a healthy lifestyle." },
      { question: "How does mechanical thrombectomy work?", answer: "A surgeon passes a thin catheter through a blood vessel in the groin up to the blocked artery in the brain to pull out the blood clot directly." }
    ]
  },
  {
    slug: "epilepsy",
    title: "Epilepsy",
    category: "Pediatric Neurology",
    cardDescription: "Comprehensive care, medical therapies, and surgical options for managing recurrent seizure disorders.",
    fullDescription: "Epilepsy is a chronic neurological disorder characterized by recurrent, unprovoked seizures. When seizures are resistant to standard anti-epileptic medications (refractory epilepsy), advanced mapping, neuromodulation, or surgical resection can target and resolve the seizure focus, restoring patient safety.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Recurrent, unprovoked seizures or convulsions", "Temporary confusion or staring spells", "Involuntary jerking movements of arms and legs", "Loss of consciousness or awareness"],
    nonSurgical: ["Anti-epileptic drug (AED) optimization and counseling", "Ketogenic diet therapy for drug-resistant cases", "Vagus Nerve Stimulation (VNS) therapeutic adjustments", "Comprehensive neuropsychological profiling"],
    surgical: ["Focal cortical resection (lobectomy or lesionectomy)", "Vagus Nerve Stimulator (VNS) device implantation", "Laser Interstitial Thermal Therapy (LITT) for deep lesions", "Responsive Neurostimulation (RNS) system placement"],
    recoverySteps: ["Inpatient video-EEG monitoring and brain mapping", "Surgical resection or neuromodulation device placement", "Post-surgical recovery monitoring and wound care", "Graduated adjustment of anticonvulsants and cognitive tracking"],
    faqs: [
      { question: "When is surgery considered for epilepsy?", answer: "Surgery is considered if a patient continues to experience disabling seizures after trying two or more anti-epileptic medications at therapeutic doses." },
      { question: "What is a Responsive Neurostimulation (RNS) system?", answer: "An RNS is a smart device implanted in the skull that monitors brain activity, detects abnormal patterns, and delivers micro-stimulation to stop seizures before they start." },
      { question: "Is epilepsy surgery permanent?", answer: "Yes, resective surgeries aim to permanently cure or greatly reduce seizures, allowing many patients to eventually reduce or stop their medications." }
    ]
  },
  {
    slug: "nerve-disorders",
    title: "Nerve Disorders",
    category: "Therapy & Metabolic",
    cardDescription: "Advanced diagnostic testing and decompression procedures to treat peripheral neuropathy and compression syndromes.",
    fullDescription: "Nerve disorders include compression, trauma, or degenerative conditions affecting the peripheral nervous system. Conditions like carpal tunnel syndrome, cubital tunnel syndrome, and occipital neuralgia can cause debilitating pain, numbness, and muscle wasting. Micro-decompression restores normal nerve conduction.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Numbness, tingling, or 'pins and needles' in limbs", "Burning, stabbing, or electric shock-like pain", "Muscle weakness or clumsiness in hands/feet", "Sensitivity to touch or extreme temperature changes"],
    nonSurgical: ["Custom splinting and physical therapy exercises", "Neuropathic pain medications and nerve blocks", "Corticosteroid injections to reduce nerve sheath swelling", "Lifestyle and ergonomic adjustments"],
    surgical: ["Microscopic carpal tunnel release surgery", "Ulnar nerve transposition (cubital tunnel release)", "Peripheral nerve repair and grafting", "Occipital nerve decompression"],
    recoverySteps: ["Electromyography (EMG) and nerve conduction studies", "Surgical microscopic nerve release or decompression", "Post-operative immobilization and swelling management", "Hand or physical therapy to restore dexterity and strength"],
    faqs: [
      { question: "What is an EMG test?", answer: "An Electromyography (EMG) test measures the electrical activity of muscles and nerves to locate areas of compression or damage." },
      { question: "How long is recovery after carpal tunnel surgery?", answer: "Most patients experience immediate pain relief. Incision healing takes 2 weeks, and grip strength typically returns to normal in 6 to 8 weeks." },
      { question: "Can a damaged nerve heal?", answer: "Yes, after pressure is relieved or a nerve is repaired surgically, it can regenerate at a rate of about 1 mm per day." }
    ]
  },
  {
    slug: "slip-disc-surgery",
    title: "Slip Disc Surgery",
    category: "Spine Care",
    cardDescription: "Advanced surgical treatments to repair herniated spinal discs and relieve debilitating nerve pain.",
    fullDescription: "A slipped disc occurs when the soft inner core of a spinal disc pushes through the tough outer ring, compressing nearby spinal nerves. Slip disc surgery (discectomy or microdiscectomy) involves removing the herniated portion of the disc to alleviate pressure and restore patient comfort and mobility.",
    image: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Lower back pain", "Sciatica (pain radiating down legs)", "Numbness or tingling in legs/feet", "Muscle weakness in lower extremities"],
    nonSurgical: ["Targeted physiotherapy and core strengthening exercises", "Non-steroidal anti-inflammatory drugs (NSAIDs) for pain relief", "Lumbar bracing for support and stability", "Epidural steroid injections under fluoroscopic guidance"],
    surgical: ["Microdiscectomy (minimally invasive disc removal)", "Endoscopic discectomy (using a small camera and instrument)", "Laminectomy (removal of bone to relieve nerve compression)", "Spinal fusion (joining vertebrae for stability if needed)"],
    recoverySteps: ["Pre-operative spinal imaging and mapping", "Minimally invasive decompression procedure under general anesthesia", "Same-day mobilization and monitoring in the recovery suite", "Guided physical therapy and home exercise integration"],
    faqs: [
      { question: "How long after slip disc surgery can I return to work?", answer: "Most patients can return to light desk work within 1 to 2 weeks, while physically demanding jobs may require 6 to 8 weeks of healing and rehabilitation." },
      { question: "Is slip disc surgery painful?", answer: "The procedure is performed under general anesthesia. Post-operative pain is typically managed effectively with prescribed medications and improves rapidly." },
      { question: "What is the success rate of slip disc surgery?", answer: "Microdiscectomy has a high success rate of approximately 90-95% in relieving radiating leg pain." }
    ]
  },
  {
    slug: "cervical-spondylosis",
    title: "Cervical Spondylosis",
    category: "Spine Care",
    cardDescription: "Relieve neck stiffness and radiating arm pain caused by age-related wear of cervical discs.",
    fullDescription: "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal discs in your neck. As the discs dehydrate and shrink, signs of osteoarthritis develop, including bony projections along the edges of bones (bone spurs).",
    image: "https://images.unsplash.com/photo-1551086188-51852b2e719d?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Neck stiffness and pain", "Radiating pain to shoulders and arms", "Numbness or weakness in arms/hands", "Grating sensation when turning neck"],
    nonSurgical: ["Regular physical therapy focusing on neck stretches", "Pain relievers like acetaminophen and NSAIDs", "Soft cervical collars for temporary immobilization", "Cervical epidural steroid injections"],
    surgical: ["Anterior Cervical Discectomy and Fusion (ACDF)", "Cervical Disc Arthroplasty (artificial disc replacement)", "Posterior cervical laminectomy", "Cervical laminoplasty"],
    recoverySteps: ["Pre-surgical neck alignment assessment", "Surgical decompression and disc stabilization", "Post-operative overnight observation and pain management", "Gentle range of motion therapy starting after 2 weeks"],
    faqs: [
      { question: "Can cervical spondylosis be cured permanently?", answer: "While age-related changes cannot be reversed, treatments can highly control symptoms, reduce nerve pressure, and restore quality of life." },
      { question: "When is surgery recommended for cervical spondylosis?", answer: "Surgery is recommended if you have progressive neurological deficits, such as worsening hand weakness or difficulty walking, or severe pain unresponsive to non-surgical treatment." },
      { question: "What is the recovery time for cervical spine surgery?", answer: "Most patients return to normal daily routines in 4-6 weeks, with full fusion or healing taking 3-6 months." }
    ]
  },
  {
    slug: "spondylolisthesis",
    title: "Spondylolisthesis",
    category: "Spine Care",
    cardDescription: "Diagnostic and surgical solutions for vertebral slippage to restore spinal alignment and nerve health.",
    fullDescription: "Spondylolisthesis is a spinal condition that affects the lower vertebrae (the bones of the spine). This disease causes one of the lower vertebrae to slip forward onto the bone directly beneath it, causing nerve compression and intense lower back pain.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Chronic lower back pain", "Stiffness in the back and legs", "Tightness in hamstrings", "Tenderness in the buttock area"],
    nonSurgical: ["Lumbar stabilization physical therapy", "Anti-inflammatory medications", "Back bracing to prevent further slippage", "Selective nerve block injections"],
    surgical: ["TLIF (Transforaminal Lumbar Interbody Fusion)", "PLIF (Posterior Lumbar Interbody Fusion)", "Decompressive laminectomy", "Pedicle screw fixation"],
    recoverySteps: ["Pre-operative standing X-rays and MRI evaluation", "Surgical stabilization and vertebral realignment", "Early mobilization under professional guidance", "Structured spinal rehabilitation program"],
    faqs: [
      { question: "What is the difference between spondylosis and spondylolisthesis?", answer: "Spondylosis is age-related wear and tear of the spine, whereas spondylolisthesis refers to the actual forward slippage of one vertebra over another." },
      { question: "Is walking good for spondylolisthesis?", answer: "Yes, low-impact walking on flat surfaces helps keep the core and back muscles active. Avoid bending, twisting, or high-impact activities." },
      { question: "Is surgery always required?", answer: "No, many patients manage symptoms successfully through physical therapy and lifestyle modifications, reserving surgery for progressive or severe cases." }
    ]
  },
  {
    slug: "endoscopic-spine-surgery",
    title: "Endoscopic Spine Surgery",
    category: "Spine Care",
    cardDescription: "Ultra-minimally invasive spine surgery utilizing keyhole incisions and microscopic cameras.",
    fullDescription: "Endoscopic Spine Surgery (ESS) is a state-of-the-art surgical technique that utilizes micro-incisions (often less than 1 cm) and high-definition video cameras to treat herniated discs, stenosis, and bone spurs. This results in minimal tissue damage and a much faster recovery compared to traditional open surgery.",
    image: "https://images.unsplash.com/photo-1575159240102-4331f59433ac?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Chronic back pain", "Pinched nerve pain radiating down arms/legs", "Limited spinal range of motion", "Muscle spasms"],
    nonSurgical: ["Conservative physical therapy", "Ergonomic workspace adjustments", "Core strengthening regimens", "Therapeutic ultrasound and heat therapy"],
    surgical: ["Endoscopic discectomy", "Endoscopic laminotomy", "Endoscopic foraminotomy", "Endoscopic rhizotomy (for joint pain relief)"],
    recoverySteps: ["Diagnostic diagnostic workup and mapping", "Ultra-microscopic endoscopic decompression under local/general sedation", "Immediate post-op observation (typically 2-4 hours)", "Rapid return to light activities within 5-7 days"],
    faqs: [
      { question: "What are the benefits of endoscopic spine surgery?", answer: "Benefits include smaller scars, less blood loss, lower risk of infection, preservation of muscle tissue, and a faster return to daily life." },
      { question: "How long does endoscopic spine surgery take?", answer: "Most endoscopic procedures are completed within 45 to 90 minutes on an outpatient basis." },
      { question: "Who is a candidate for endoscopic surgery?", answer: "Patients with localized disc herniations, spinal stenosis, or bone spurs who have not responded to conservative treatments are typical candidates." }
    ]
  },
  {
    slug: "minimally-invasive-spine-surgery",
    title: "Minimally Invasive Spine Surgery",
    category: "Spine Care",
    cardDescription: "Specialized procedures utilizing tubes and dilators to preserve muscle tissue and accelerate recovery.",
    fullDescription: "Minimally Invasive Spine Surgery (MISS) uses specialized instruments to view and treat spinal structures. Unlike traditional open surgeries, MISS avoids cutting through major back muscles, instead dilating them with tubular retractors, which leads to less post-operative pain and smaller incisions.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Localized spinal pain", "Leg pain or weakness", "Stiffness in the spine", "Difficulty standing or walking"],
    nonSurgical: ["Targeted muscle strengthening and stretching", "Over-the-counter and prescription pain management", "Injections (facet joints or epidural)", "Posture training and ergonomics"],
    surgical: ["Minimally Invasive Transforaminal Lumbar Interbody Fusion (MIS-TLIF)", "Minimally invasive lumbar decompression", "Percutaneous pedicle screw fixation"],
    recoverySteps: ["Pre-operative 3D fluoroscopic planning", "Tubular retractor-guided decompression or fusion", "Same-day or next-day hospital discharge", "Post-operative physical rehabilitation plan"],
    faqs: [
      { question: "How is minimally invasive surgery different from open surgery?", answer: "Open surgery requires larger incisions to pull back muscles, whereas minimally invasive surgery uses small ports or tubes to work between muscle fibers." },
      { question: "Will I need general anesthesia?", answer: "Most MISS procedures are performed under general anesthesia, though some can be done with local anesthesia and conscious sedation." },
      { question: "How long is the recovery period?", answer: "Many patients experience significant recovery within 2 to 4 weeks, though complete healing of bone fusions may take a few months." }
    ]
  },
  {
    slug: "tuberculosis-of-spine",
    title: "Tuberculosis of Spine",
    category: "Spine Care",
    cardDescription: "Comprehensive care for spinal TB (Pott's disease) using multi-drug therapy and decompressive surgery.",
    fullDescription: "Tuberculosis of the spine, also known as Pott's disease, is a form of tuberculosis that occurs outside the lungs. The disease targets the spine, destroying intervertebral discs and vertebrae, which can lead to spinal kyphosis (hunchback deformity) and neurological deficits due to spinal cord compression.",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Persistent back pain", "Fever and night sweats", "Unexplained weight loss", "Progressive spinal deformity", "Weakness or numbness in legs"],
    nonSurgical: ["Strict multi-drug anti-tubercular therapy (ATT) regimen", "Rigid spinal bracing to prevent collapse", "Nutritional support therapy", "Rest and immobility protocols"],
    surgical: ["Anterior decompression and spinal fusion", "Posterior stabilization and debridement", "Abscess drainage and spine reconstruction"],
    recoverySteps: ["Diagnostic MRI, CT, and biopsy confirmation", "Initiation of specialized drug therapy and surgical stabilization if needed", "Hospital recovery and immobilization tracking", "Long-term clinical follow-ups and ATT monitoring"],
    faqs: [
      { question: "Can spinal tuberculosis be cured completely?", answer: "Yes, with timely diagnosis, a complete course of anti-tubercular therapy (ATT) for 9-18 months, and surgery when indicated, spinal TB is fully curable." },
      { question: "When is surgery necessary for spinal TB?", answer: "Surgery is indicated if there is spinal instability, progressive deformity, neurological deficits (like leg weakness), or failure of medical therapy." },
      { question: "Is spinal tuberculosis contagious?", answer: "Extrapulmonary tuberculosis like spinal TB is generally not contagious unless accompanied by active pulmonary tuberculosis." }
    ]
  },
  {
    slug: "pediatric-spine-surgery",
    title: "Pediatric Spine Surgery",
    category: "Spine Care",
    cardDescription: "Compassionate corrective care for childhood spine conditions like scoliosis and congenital anomalies.",
    fullDescription: "Pediatric spine surgery focuses on diagnosing and correcting spinal deformities, injuries, and congenital conditions in growing children and adolescents. Conditions like scoliosis, kyphosis, and spondylolysis require specialized growth-friendly surgical systems.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Uneven shoulder heights", "Asymmetric waist or rib cage prominence", "Spinal curvature visible from back", "Back pain in children (uncommon, warrants evaluation)"],
    nonSurgical: ["Observation and serial spine X-rays", "Custom orthotic spine bracing (e.g., Boston brace)", "Specialized physical therapy (Schroth method)"],
    surgical: ["Spinal fusion with instrumentation", "Growing rods insertion (magnetic or traditional)", "Vertebral body tethering (VBT)", "Posterior spinal instrumentation"],
    recoverySteps: ["Pediatric-specific pre-operative modeling and assessment", "Growth-friendly surgical correction under advanced monitoring", "Post-operative pediatric ICU observation and mobilization", "Gradual return to school and physical activity (4-8 weeks)"],
    faqs: [
      { question: "At what age is scoliosis surgery performed?", answer: "Surgery is typically recommended for severe curves (over 45-50 degrees) or if bracing fails. It can be performed at various ages using growth-friendly techniques." },
      { question: "What is magnetic growing rods surgery?", answer: "It is a procedure where rods are implanted and then lengthened non-invasively in the outpatient clinic using external magnets as the child grows." },
      { question: "How long is the hospital stay for scoliosis surgery?", answer: "Most children stay in the hospital for 3 to 5 days and return to school within 3 to 4 weeks." }
    ]
  },
  {
    slug: "lumbar-spondylosis",
    title: "Lumbar Spondylosis",
    category: "Spine Care",
    cardDescription: "Restoring lumbar spine function and relieving lower back stiffness using modern treatments.",
    fullDescription: "Lumbar spondylosis refers to age-related degenerative changes in the lower back (lumbar spine). It encompasses osteoarthritis, disc degeneration, and facet joint arthropathy, leading to narrowing of the spinal canal and nerve compression.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Lower back pain and stiffness, especially in the morning", "Pain that increases with prolonged sitting or standing", "Numbness or tingling in legs", "Spasms in lower back muscles"],
    nonSurgical: ["Core stabilization and hamstring stretching exercises", "NSAIDs, muscle relaxants, and neuropathic pain medications", "Lumbar traction and heat therapy", "Facet joint blocks and epidural injections"],
    surgical: ["Lumbar laminectomy for decompression", "Lumbar discectomy", "Posterolateral lumbar fusion", "Minimally invasive lumbar stabilization"],
    recoverySteps: ["Diagnostic standing lumbar radiographs and MRI scan", "Surgical decompression or stabilization of degenerate segment", "Immediate post-op mobilization and recovery care", "Structured physical therapy focusing on core and lumbar stability"],
    faqs: [
      { question: "How is lumbar spondylosis diagnosed?", answer: "It is diagnosed through a combination of clinical physical examination, X-rays, and MRI scans to assess discs and joints." },
      { question: "Can exercise help lumbar spondylosis?", answer: "Yes, regular low-impact exercises that strengthen the core and lower back muscles can significantly reduce symptoms and slow degeneration." },
      { question: "When should I consider surgery for lumbar spondylosis?", answer: "Surgery is considered if conservative treatments fail after 6-12 weeks, or if you develop severe leg pain or bowel/bladder issues." }
    ]
  },
  {
    slug: "fracture-management",
    title: "Fracture Management",
    category: "Spine Care",
    cardDescription: "Expert stabilization and healing of traumatic spinal fractures using minimally invasive cement injections or hardware.",
    fullDescription: "Spinal fracture management involves treating broken bones in the spinal column (vertebrae) caused by trauma, falls, or osteoporosis. Treatment ranges from bracing to advanced minimally invasive cement augmentation (kyphoplasty/vertebroplasty) or surgical fixation.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Sudden, severe back pain following trauma", "Pain that worsens with movement", "Numbness, tingling, or weakness in limbs", "Deformity of the spine or loss of height"],
    nonSurgical: ["Rigid bracing (TLSO or cervical collar)", "Activity restriction and bed rest", "Pain medications and bone-density building drugs", "Rehabilitative physical therapy"],
    surgical: ["Kyphoplasty / Vertebroplasty (cement injection)", "Spinal decompression and instrumentation", "Pedicle screw and rod fixation"],
    recoverySteps: ["Emergency radiographic imaging and CT spine mapping", "Surgical stabilization or percutaneous cement augmentation", "Post-operative orthopedic brace fitting and support", "Graduated physical therapy for mobility and strengthening"],
    faqs: [
      { question: "What is kyphoplasty?", answer: "Kyphoplasty is a minimally invasive procedure where a balloon is inflated inside a fractured vertebra to restore height, followed by bone cement injection." },
      { question: "How long does a spinal fracture take to heal?", answer: "Most spinal fractures heal in a brace within 8 to 12 weeks. Surgical recovery depends on the extent of the stabilization." },
      { question: "Can osteoporosis cause spinal fractures?", answer: "Yes, osteoporosis weakens bones, making them susceptible to compression fractures from minor activities like coughing or bending." }
    ]
  },
  {
    slug: "brain-spine-tumor-surgery",
    title: "Brain & Spine Tumor Surgery",
    category: "Brain Surgery",
    cardDescription: "Highly precise removal of benign and malignant central nervous system tumors using 3D neuronavigation.",
    fullDescription: "Brain and spine tumor surgery involves the surgical excision of abnormal growths within the skull or spinal canal. Our surgeons utilize high-definition digital microscopes, 3D StealthStation neuronavigation, and intraoperative neuromonitoring to safely maximize tumor resection while protecting critical pathways.",
    image: "https://images.unsplash.com/photo-1614348689307-7f69cce51f71?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Persistent, worsening headaches", "Seizures or focal neurological deficits", "Loss of balance or motor coordination", "Changes in speech, vision, or memory", "Radiating back pain or limb weakness"],
    nonSurgical: ["Stereotactic radiosurgery (Gamma Knife / CyberKnife)", "Chemotherapy and targeted drug therapy", "Corticosteroids to reduce brain swelling", "Clinical oncology trials"],
    surgical: ["Craniotomy (tumor excision under surgical navigation)", "Awake craniotomy (for tumors near speech centers)", "Endoscopic endonasal skull base surgery", "Spinal tumor laminectomy and stabilization"],
    recoverySteps: ["High-resolution MRI mapping and functional tracts planning", "Image-guided micro-surgical tumor resection", "Intensive Care Unit (ICU) observation and neurological assessments", "Comprehensive rehabilitation and oncological follow-up planning"],
    faqs: [
      { question: "What is StealthStation neuronavigation?", answer: "It is a 3D GPS-like guidance system that allows surgeons to map the patient's brain in real-time, targeting the tumor with sub-millimeter precision." },
      { question: "Is all brain tumor surgery performed under general anesthesia?", answer: "No, 'awake craniotomy' is performed with local anesthesia and sedation so the patient can speak, ensuring speech centers are not damaged." },
      { question: "How long does recovery take after brain surgery?", answer: "Most patients stay in the hospital for 3-5 days and return to light activities in 4 to 6 weeks." }
    ]
  },
  {
    slug: "encephalopathy-encephalitis",
    title: "Encephalopathy / Encephalitis",
    category: "Brain Surgery",
    cardDescription: "Urgent neurological management of brain inflammation and altered mental status due to infections or autoimmune issues.",
    fullDescription: "Encephalitis is inflammation of the brain tissue, usually caused by viral infections, autoimmune reactions, or toxins, whereas encephalopathy refers to a broader state of altered brain function or structure. Diagnostic accuracy and rapid treatment are crucial to prevent permanent brain damage.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Altered mental state, confusion, or agitation", "Fever and severe headache", "Seizures or tremors", "Muscle weakness or loss of consciousness", "Speech or hearing problems"],
    nonSurgical: ["Intravenous antiviral medications (e.g., Acyclovir)", "Immunosuppressants and corticosteroids", "Anticonvulsants to control seizures", "Intubation and supportive critical care"],
    surgical: ["Intraventricular pressure monitoring catheter placement", "Decompressive hemicraniectomy (in cases of severe brain swelling)", "Brain biopsy (for diagnosis in undifferentiated cases)"],
    recoverySteps: ["Emergency lumbar puncture and MRI brain analysis", "Intensive care monitoring and targeted medical administration", "Neurological response tracking and cognitive assessment", "Long-term occupational and cognitive speech rehabilitation"],
    faqs: [
      { question: "What is the difference between encephalitis and meningitis?", answer: "Encephalitis is inflammation of the brain tissue itself, while meningitis is inflammation of the membranes surrounding the brain and spinal cord." },
      { question: "Can you recover fully from encephalitis?", answer: "Yes, many patients recover fully, especially with early antiviral or immunomodulatory treatment, although some may have long-term cognitive challenges." },
      { question: "What is autoimmune encephalitis?", answer: "It is a type of brain inflammation where the body's immune system mistakenly attacks healthy brain cells, often treated with immunotherapy." }
    ]
  },
  {
    slug: "child-epilepsy-syndrome",
    title: "Child Epilepsy & Epilepsy Syndrome",
    category: "Pediatric Neurology",
    cardDescription: "Specialized diagnosis and medical or surgical management of pediatric seizure disorders.",
    fullDescription: "Child epilepsy refers to neurological conditions in children characterized by recurrent, unprovoked seizures. Epilepsy syndromes are defined by a cluster of features including age of onset, seizure types, and EEG findings. Our clinic specializes in advanced mapping, medical management, and surgical options like VNS.",
    image: "https://images.unsplash.com/photo-1704323020358-585b60e54a07?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Repetitive twitching or jerking of limbs", "Staring spells or temporary loss of awareness", "Sudden falls or muscle stiffness", "Atypical movements or sensory sensations"],
    nonSurgical: ["Anti-epileptic drug therapy (AEDs)", "Ketogenic diet therapy managed by metabolic experts", "Vagus Nerve Stimulation (VNS) titration", "EEG and sleep monitoring assessments"],
    surgical: ["Vagus Nerve Stimulator (VNS) implantation", "Focal cortical resection", "Corpus callosotomy", "Laser interstitial thermal therapy (LITT)"],
    recoverySteps: ["Detailed Video-EEG monitoring and neurological workup", "Custom medical management or stimulator implantation", "Regular medication adjustments and follow-up tracking", "Cognitive and developmental milestone monitoring"],
    faqs: [
      { question: "What is a Vagus Nerve Stimulator (VNS)?", answer: "A VNS is a small device implanted under the skin of the chest that sends regular electrical pulses to the brain via the vagus nerve to reduce seizures." },
      { question: "Can children outgrow epilepsy?", answer: "Yes, many children outgrow certain forms of epilepsy (like benign rolandic epilepsy) by adolescence." },
      { question: "What should I do during my child's seizure?", answer: "Roll them onto their side, protect their head, do not insert anything in their mouth, time the seizure, and stay with them until they are fully awake." }
    ]
  },
  {
    slug: "cerebral-palsy",
    title: "Cerebral Palsy",
    category: "Pediatric Neurology",
    cardDescription: "Multi-disciplinary care, spasticity management, and orthopedic support for children with developmental motor challenges.",
    fullDescription: "Cerebral Palsy (CP) is a group of disorders that affect movement and muscle tone or posture, caused by damage to the immature, developing brain, most often before birth. Management involves a team approach to maximize physical independence, coordinate motor function, and treat spasticity.",
    image: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Delay in reaching motor skill milestones (crawling, walking)", "Stiff muscles and exaggerated reflexes (spasticity)", "Floppiness or lack of coordination", "Difficulty with fine motor skills or speech"],
    nonSurgical: ["Intensive physical, occupational, and speech therapy", "Oral spasticity-reducing medications (e.g., Baclofen)", "Custom ankle-foot orthoses (AFOs) and bracing", "Intramuscular Botox injections for focal spasticity"],
    surgical: ["Selective Dorsal Rhizotomy (SDR)", "Intrathecal Baclofen (ITB) pump implantation", "Tendon lengthening and orthopedic bone reconstruction"],
    recoverySteps: ["Comprehensive developmental and gait analysis", "Multidisciplinary therapy planning and spasticity interventions", "Regular milestone reviews and orthopedic assessments", "Home-based occupational and motor integration therapy"],
    faqs: [
      { question: "Is cerebral palsy progressive?", answer: "No, the underlying brain injury does not worsen over time, although symptoms, muscle tightness, and joint wear can evolve if not managed." },
      { question: "What is Selective Dorsal Rhizotomy (SDR)?", answer: "SDR is a surgical procedure performed on the lower spinal cord to selectively cut nerve fibers causing spasticity in the legs, improving walking." },
      { question: "Can a child with cerebral palsy walk?", answer: "Many children with CP can walk independently or with mobility aids, depending on the type and severity of the condition." }
    ]
  },
  {
    slug: "adhd",
    title: "ADHD (Attention Deficit Hyperactivity Disorder)",
    category: "Pediatric Neurology",
    cardDescription: "Specialized neurological and behavioral evaluation to support focus, concentration, and emotional regulation.",
    fullDescription: "Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning or development. Our diagnostic team provides complete cognitive mapping and therapeutic planning.",
    image: "https://images.unsplash.com/photo-1529973625058-a665431328fb?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Difficulty sustaining attention in tasks or play", "Frequent fidgeting, squirming, or leaving seat", "Impulsivity and interrupting others", "Forgetfulness in daily activities"],
    nonSurgical: ["Behavioral therapy and executive function training", "Pharmacotherapy (stimulant and non-stimulant medications)", "Parent training programs and school accommodations", "Nutritional and sleep optimization guidance"],
    surgical: ["Surgical treatments are not applicable; focus is on customized neurological and behavioral therapies."],
    recoverySteps: ["Comprehensive neurological and psychiatric assessment", "Coordinated behavioral and medical therapy initiation", "Regular monitoring of focus, academic progress, and side effects", "School integration and structured routine planning"],
    faqs: [
      { question: "How is ADHD diagnosed in children?", answer: "Diagnosis involves clinical interviews, behavioral rating scales from parents/teachers, and neurological tests to rule out other conditions." },
      { question: "Are medications safe for ADHD?", answer: "Yes, when monitored closely by a specialist, ADHD medications are safe and highly effective at improving attention and self-control." },
      { question: "Can adults have ADHD?", answer: "Yes, ADHD often persists into adulthood, manifesting as organizational challenges, time-management difficulties, and restlessness." }
    ]
  },
  {
    slug: "child-stroke",
    title: "Child Stroke",
    category: "Pediatric Neurology",
    cardDescription: "Rapid diagnosis, neuroprotective care, and specialized rehabilitation for children experiencing stroke.",
    fullDescription: "Pediatric or child stroke is a rare but critical condition that occurs when the blood supply to a child's brain is interrupted. It requires immediate specialist care. Causes include congenital heart disease, vascular abnormalities, and hematological disorders. Recovery focuses on neuroplasticity.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Sudden weakness or numbness on one side of the body", "Slurred speech or difficulty speaking", "Sudden loss of balance or coordination", "Severe, unexplained headache or seizure"],
    nonSurgical: ["Anticoagulant or antiplatelet therapy", "Blood pressure and hydration management", "Neuroprotective ICU monitoring", "Early rehabilitative physical and occupational therapy"],
    surgical: ["Decompressive craniectomy (to relieve high brain pressure)", "Vascular bypass surgery (for Moyamoya disease)", "Endovascular thrombectomy (in selective arterial cases)"],
    recoverySteps: ["Immediate neuro-imaging (MRI/MRA) and stroke protocol initiation", "Critical care monitoring and targeted medical management", "Early onset rehabilitation to harness brain neuroplasticity", "Long-term monitoring of development and vascular health"],
    faqs: [
      { question: "What are the common causes of stroke in children?", answer: "Unlike adults, causes in children often involve heart defects, blood clotting disorders, sickle cell disease, or infections like varicella." },
      { question: "Can children recover better from stroke than adults?", answer: "Yes, children's brains exhibit higher neuroplasticity, allowing them to reorganize pathways and recover functions more effectively." },
      { question: "What is Moyamoya disease?", answer: "It is a rare progressive blood vessel disorder where the carotid artery becomes blocked, often requiring surgical bypass to prevent strokes." }
    ]
  },
  {
    slug: "genetic-disorders",
    title: "Genetic Disorders",
    category: "Pediatric Neurology",
    cardDescription: "Diagnostic workup and neurodevelopmental support for genetic and chromosomal syndromes.",
    fullDescription: "Neurogenetic disorders are conditions caused by changes in genes or chromosomes that affect the development and function of the nervous system. Examples include Down syndrome, neurofibromatosis, and muscular dystrophies. Early diagnosis allows for targeted gene-specific therapies and support.",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Developmental delays or intellectual disability", "Hypotonia (floppy muscles) or stiffness", "Dysmorphic physical features", "Seizures or movement disorders"],
    nonSurgical: ["Comprehensive physical, speech, and feeding therapy", "Anticonvulsants or targeted medications", "Specialized educational plans", "Genetic counseling and family support services"],
    surgical: ["Orthopedic corrective surgeries", "Ventricular shunt placement (if hydrocephalus occurs)", "Nerve decompression surgery"],
    recoverySteps: ["Advanced genetic testing (microarray, exome sequencing)", "Multidisciplinary neurodevelopmental profiling", "Targeted symptomatic or gene-specific therapies", "Ongoing development and growth tracking"],
    faqs: [
      { question: "What is the benefit of genetic testing?", answer: "It identifies the exact cause of a child's condition, guides treatment options, predicts potential health issues, and assists in family planning." },
      { question: "Are genetic neurological disorders curable?", answer: "While most cannot be fully cured, new genetic therapies (like antisense oligonucleotides) and comprehensive support can improve outcomes significantly." },
      { question: "How are therapies structured?", answer: "Therapies are tailored to the child's specific developmental needs, focusing on speech, motor control, and daily functioning." }
    ]
  },
  {
    slug: "global-developmental-delay",
    title: "Global Developmental Delay",
    category: "Pediatric Neurology",
    cardDescription: "Comprehensive developmental assessment and early intervention programs to build cognitive and motor milestones.",
    fullDescription: "Global Developmental Delay (GDD) is diagnosed when a child under age 5 has significant delays in two or more developmental domains, such as gross/fine motor skills, speech/language, cognitive development, or social-emotional skills. Early intervention is critical to maximize neurodevelopmental outcomes.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Delayed walking or sitting up", "Delayed speech or lack of communication", "Difficulty with social interaction or play", "Cognitive or learning challenges"],
    nonSurgical: ["Early intervention therapy programs (OT, PT, Speech)", "Sensory integration therapy", "Behavioral intervention and structured school programs", "Nutritional and metabolic optimization"],
    surgical: ["Surgical options are rarely applicable for GDD unless a specific structural brain anomaly is identified."],
    recoverySteps: ["Multi-disciplinary neurodevelopmental diagnostic assessment", "Custom early intervention program initiation", "Periodic milestone tracking and adjustment of therapy goals", "Family integration and school readiness coaching"],
    faqs: [
      { question: "What is the difference between global developmental delay and intellectual disability?", answer: "GDD is used for children under 5, while intellectual disability is diagnosed after age 5 when standardized IQ tests can be administered." },
      { question: "How long does early intervention therapy last?", answer: "Therapy is adjusted dynamically and may last from a few months to several years, depending on the child's progress and milestone acquisition." },
      { question: "Can a child catch up from developmental delays?", answer: "Many children with mild delays catch up fully with early intervention, while others with underlying genetic conditions make steady progress." }
    ]
  },
  {
    slug: "headache-treatment",
    title: "Headache Treatment",
    category: "Therapy & Metabolic",
    cardDescription: "Modern treatment for chronic migraines, tension headaches, and trigeminal pain using targeted therapies.",
    fullDescription: "Chronic headaches and migraines can be highly debilitating. Our specialized headache clinic offers comprehensive diagnosis to differentiate between migraines, tension headaches, cluster headaches, and trigeminal neuralgia, providing customized preventive and acute treatment plans.",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Throbbing or pulsing head pain", "Sensitivity to light, sound, or smell", "Nausea or visual disturbances (aura)", "Pain localized around one eye or temple"],
    nonSurgical: ["Preventive medications (beta-blockers, CGRP inhibitors)", "Acute migraine treatments (triptans, neuromodulation devices)", "Lifestyle, trigger avoidance, and stress management", "Acupuncture and biofeedback therapy"],
    surgical: ["Greater occipital nerve blocks", "Trigeminal neuralgia microvascular decompression", "Botox injection therapy for chronic migraine"],
    recoverySteps: ["Detailed headache diary and diagnostic scan review", "Custom medical prevention and abortive plan layout", "Symptom tracking and trigger mapping", "Advanced interventions (blocks/botox) if needed"],
    faqs: [
      { question: "What qualifies as chronic migraine?", answer: "Having 15 or more headache days per month for at least 3 months, with at least 8 of those days meeting migraine criteria." },
      { question: "What are CGRP inhibitors?", answer: "Calcitonin Gene-Related Peptide inhibitors are modern, targeted medications designed specifically to prevent migraines." },
      { question: "Are nerve blocks painful?", answer: "The injection causes brief discomfort, but local anesthetics provide rapid relief of severe radiating head pain." }
    ]
  },
  {
    slug: "botox-therapy-dystonia",
    title: "Botox Therapy in Dystonia",
    category: "Therapy & Metabolic",
    cardDescription: "Targeted Botulinum Toxin injections to relieve involuntary muscle contractions and severe spasms.",
    fullDescription: "Dystonia is a movement disorder characterized by involuntary muscle contractions, leading to repetitive or twisting movements. Botulinum Toxin (Botox) therapy works by blocking nerve signals that cause muscles to contract, providing targeted relief and restoring function.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Involuntary muscle spasms or twisting", "Abnormal postures of the neck (torticollis) or limbs", "Uncontrollable blinking (blepharospasm)", "Cramping during specific activities (writer's cramp)"],
    nonSurgical: ["EMG-guided Botulinum Toxin injections", "Oral muscle relaxants and anticholinergic drugs", "Specialized physical and occupational therapy", "Relaxation techniques and biofeedback"],
    surgical: ["Deep Brain Stimulation (DBS) for generalized dystonia", "Selective peripheral denervation (for severe cervical dystonia)"],
    recoverySteps: ["Clinical spasm mapping and muscle target selection", "EMG or ultrasound-guided Botox administration", "Monitoring of therapeutic onset (typically 3-7 days post-injection)", "Follow-up and re-injection schedule planning (every 10-12 weeks)"],
    faqs: [
      { question: "How long do the effects of Botox injections last?", answer: "The therapeutic effect typically lasts between 3 and 4 months, after which muscles gradually regain activity and re-injection is scheduled." },
      { question: "How does Botox help dystonia?", answer: "It temporarily paralyzes the overactive muscle fibers, reducing spasms, pain, and abnormal posturing without affecting the rest of the body." },
      { question: "Are the injections guided by technology?", answer: "Yes, we use Electromyography (EMG) or ultrasound guidance to ensure the toxin is placed precisely in the hyperactive muscle." }
    ]
  },
  {
    slug: "metabolic-syndrome",
    title: "Metabolic Syndrome",
    category: "Therapy & Metabolic",
    cardDescription: "Coordinated care to manage the cluster of conditions that increase risk of stroke and neurological disease.",
    fullDescription: "Metabolic Syndrome is a cluster of conditions—increased blood pressure, high blood sugar, excess body fat around the waist, and abnormal cholesterol levels—that occur together, doubling the risk of vascular disease, stroke, and cognitive decline. Coordinated intervention slows neurological risk factors.",
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Increased waist circumference (central obesity)", "High fasting blood glucose levels", "Elevated blood pressure", "Fatigue or brain fog"],
    nonSurgical: ["Dietary modification and personalized metabolic profiling", "Structured cardiovascular exercise regimens", "Medications to control blood pressure, lipids, and insulin resistance", "Stress reduction and sleep study evaluations"],
    surgical: ["Surgical management is generally not applicable, though bariatric surgery is considered in extreme cases."],
    recoverySteps: ["Comprehensive metabolic blood panel and vascular risk profiling", "Personalized lifestyle, exercise, and drug management plan", "Monthly metabolic parameters and vitals monitoring", "Preventive neurovascular screening and stroke protection"],
    faqs: [
      { question: "How is metabolic syndrome diagnosed?", answer: "It is diagnosed when a person has three or more of: large waistline, high triglycerides, low HDL cholesterol, high blood pressure, and high fasting blood sugar." },
      { question: "What is the link between metabolic syndrome and stroke?", answer: "The conditions in metabolic syndrome promote arterial plaque buildup (atherosclerosis) and blood clots, which are major triggers for strokes." },
      { question: "Can metabolic syndrome be reversed?", answer: "Yes, weight loss, dietary changes, and regular physical activity can successfully reverse metabolic syndrome or greatly reduce its risks." }
    ]
  }
];

export const blogPageData = {
  listHero: {
    tagline: "Medical Library & Treatment Guides",
    title: "Neurological & Spine Education Portal",
    description: "Access complete clinical resources, procedural options, and recovery pathways curated by our specialist team.",
    searchPlaceholder: "Search conditions, procedures, or symptoms...",
    backgroundImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1600&q=80"
  },
  categories: [
    { key: "All", label: "All Specialities" },
    { key: "Spine Care", label: "Spine Care" },
    { key: "Brain Surgery", label: "Brain Surgery" },
    { key: "Pediatric Neurology", label: "Pediatric Neurology" },
    { key: "Therapy & Metabolic", label: "Therapy & Metabolic" }
  ],
  detailPage: {
    specialistTagline: "Primary Specialist",
    specialistSubtitle: "Meet your dedicated medical expert.",
    specialistBadge: "Board Certified",
    journeyTagline: "Your Recovery Journey",
    journeySubtitle: "Guided clinical care every step of the way.",
    journeySteps: [
      { num: "01", name: "Pre-Op Evaluation", desc: "Comprehensive diagnostic imaging, physical exams, and personalized approach mapping." },
      { num: "02", name: "The Procedure", desc: "Advanced surgical intervention or therapeutic administration using state-of-the-art tools." },
      { num: "03", name: "Post-Op Recovery", desc: "Dedicated monitoring in our recovery suite and specialized nursing support." },
      { num: "04", name: "Rehabilitation", desc: "Guided physical therapy and home exercise routines to ensure a safe, lasting recovery." }
    ],
    ctaTitle: "Ready to take the next step in your recovery?",
    ctaSubtitle: "Schedule a comprehensive consultation with our specialist neurosurgical team today.",
    ctaBookBtn: "Book Your Appointment",
    ctaCallBtn: "Call Clinical Desk",
    ctaPhone: "1-800-NEURO-LX"
  }
};

export const bookingPageData = {
  hero: {
    tagline: "Secure Consultation Booking",
    title: "Schedule Your Clinical Consultation",
    description: "Take the first step towards recovery. Provide your details below, and our coordinator will guide you through the process.",
    backgroundImage: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1600&q=80"
  },
  preparation: {
    title: "First-Visit Preparation Guide",
    description: "To ensure a comprehensive clinical evaluation, please prepare the following for your appointment:",
    items: [
      { icon: "clinical_notes", title: "Medical Records", text: "Bring copies of your previous clinical histories, summaries, or discharge papers." },
      { icon: "biotech", title: "Diagnostic Imaging", text: "Recent MRIs, CT scans, or X-rays. If on CD, please bring the disc along with written reports." },
      { icon: "medication", title: "Current Medications", text: "A detailed list of all prescription and over-the-counter medications and dosages." },
      { icon: "badge", title: "Insurance & ID", text: "Valid government-issued photo identification and your current health insurance cards." }
    ]
  }
};

export interface DoctorProfile {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  badgeTitle: string;
  badgeDesc: string;
  bulletPoints: { icon: string; text: string }[];
  biography: string;
  experience: string[];
  education: string[];
  spineEndoscopy: string[];
  projectsFieldWork: string[];
  publications: string[];
  conferences: string[];
  paperPresentations: string[];
  leadershipRoles: string[];
  associations: string[];
}

export const doctorsData: DoctorProfile[] = [
  {
    slug: "dr-surjeet-singh",
    name: "Dr. Surjeet Singh, MS, MCh (Neurosurgery)",
    tagline: "Senior Consultant Neurosurgeon",
    image: "/dr-surjeet-singh.jpg",
    badgeTitle: "M.Ch. Neurosurgery",
    badgeDesc: "Senior Consultant Neurosurgeon",
    bulletPoints: [
      { icon: "verified", text: "Specialist in Brain & Spine Surgeries" },
      { icon: "medical_services", text: "Expertise in Endoscopic Spine Procedures" },
      { icon: "school", text: "M.S., M.Ch. (Neurosurgery) credentials" }
    ],
    biography: "Dr. Surjeet Singh is a highly skilled neurosurgeon specializing in brain and spine surgery. He has extensive experience in complex cranial surgeries, spinal reconstructions, spinal deformity corrections, and minimally invasive endoscopic spine procedures. Serving as the chief consultant neurosurgeon at Shreyas Neuro & Spine Clinic in Lucknow, Dr. Singh combines advanced surgical precision with patient-focused treatment plans to restore health and movement.",
    experience: [
      "Chief Consultant Neurosurgeon at Shreyas Neuro & Spine Clinic, Lucknow (2020 - Present)",
      "Senior Registrar in Neurosurgery at premier medical institutes",
      "Consultant Brain & Spine Surgeon in Lucknow"
    ],
    education: [
      "Master of Chirurgiae (M.Ch.) in Neurosurgery",
      "Master of Surgery (M.S.) in General Surgery",
      "Bachelor of Medicine and Bachelor of Surgery (MBBS)"
    ],
    spineEndoscopy: [
      "Expertise in Ultra-Minimally Invasive Endoscopic Discectomy",
      "Pioneered micro-endoscopic lumbar decompressions in local practice",
      "Specialist in keyhole spine operations for faster patient recovery"
    ],
    projectsFieldWork: [
      "Director of Shreyas Rural Spine & Neurology Health Campaigns.",
      "Conducted multiple free clinical and consultation drives in Uttar Pradesh."
    ],
    publications: [
      "Research publications in Indian and International Neurosurgery journals.",
      "Contributions to clinical studies on micro-discectomy and spinal decompression."
    ],
    conferences: [
      "Active participant in Neurological Society of India (NSI) annual conferences.",
      "Presenter at regional spine surgery workshops and seminars."
    ],
    paperPresentations: [
      "'Outcomes of Endoscopic Lumbar Decompressions in Indian Populations' — Regional Spine Con, 2022",
      "'Surgical Management of Spine Tuberculosis' — State Neuro Symposium"
    ],
    leadershipRoles: [
      "Chief Medical Director, Shreyas Neuro & Spine Clinic",
      "Adviser, Shreyas Physiotherapy and Rehabilitation programs"
    ],
    associations: [
      "Member, Neurological Society of India (NSI)",
      "Member, Association of Spine Surgeons of India (ASSI)",
      "Member, Indian Medical Association (IMA)"
    ]
  },
  // {
  //   slug: "dr-stuti-kumari",
  //   name: "Dr. Stuti Kumari, MBBS, MD (BHU)",
  //   tagline: "Assistant Professor & Consultant Pathologist",
  //   image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=800&q=80",
  //   badgeTitle: "M.D. Pathology",
  //   badgeDesc: "Assistant Professor & Consultant Pathologist",
  //   bulletPoints: [
  //     { icon: "verified", text: "MD (Pathology) from BHU (Banaras Hindu University)" },
  //     { icon: "clinical_notes", text: "Director, Dr. SKS Diagnostics" },
  //     { icon: "school", text: "Assistant Professor & Clinical Pathologist" }
  //   ],
  //   biography: "Dr. Stuti Kumari is an esteemed pathologist and assistant professor. Having earned her MBBS and MD from the prestigious Banaras Hindu University (BHU), she directs Dr. SKS Diagnostics & Research Centre, operating alongside Shreyas Neuro & Spine Clinic in Lucknow. She provides comprehensive laboratory diagnostics, biopsy reviews, FNAC, and high-precision clinical pathology services.",
  //   experience: [
  //     "Director & Head Pathologist at Dr. SKS Diagnostics, Lucknow (2020 - Present)",
  //     "Assistant Professor of Pathology at leading medical colleges",
  //     "Resident in Pathology at Banaras Hindu University (BHU)"
  //   ],
  //   education: [
  //     "Doctor of Medicine (M.D.) in Pathology — Banaras Hindu University (BHU)",
  //     "Bachelor of Medicine and Bachelor of Surgery (MBBS) — BHU"
  //   ],
  //   spineEndoscopy: [
  //     "Pathology and diagnostic laboratory leadership",
  //     "Specialist in Cytopathology, FNAC, Histopathology, and Cancer Screenings"
  //   ],
  //   projectsFieldWork: [
  //     "Lead, Dr. SKS Diagnostics Health Camps offering subsidized testing for underprivileged families.",
  //     "Organized community wellness blood profiling drives in Lucknow."
  //   ],
  //   publications: [
  //     "Kumari S., et al. 'Diagnostic Accuracy of FNAC in Superficial Lymphadenopathy.' Journal of Clinical Pathology Research, 2021."
  //   ],
  //   conferences: [
  //     "Presenter, Indian Association of Pathologists and Microbiologists (IAPM) Annual Conference, 2023"
  //   ],
  //   paperPresentations: [
  //     "'Histological Grading of Complex Lesions: A BHU Study' — Annual PathCon, 2022"
  //   ],
  //   leadershipRoles: [
  //     "Director, Dr. SKS Diagnostics & Research Centre",
  //     "Academic Supervisor & Assistant Professor of Pathology"
  //   ],
  //   associations: [
  //     "Member, Indian Association of Pathologists and Microbiologists (IAPM)",
  //     "Member, Banaras Hindu University Alumni Association (BHU-AA)",
  //     "Member, Indian Medical Association (IMA)"
  //   ]
  // }
];

export const aboutData = {
  hero: {
    tagline: "About Shreyas Clinic",
    title: "About Us",
    description: "Learn about Shreyas Neuro & Spine Clinic, our mission, our values, and the expert clinical team dedicated to your recovery.",
    backgroundImage: "/clinic-exterior.jpg"
  },
  mission: {
    tagline: "Our Core Mission",
    title: "Dedicated to Excellence in Neurological & Diagnostic Care",
    description: "At Shreyas Neuro & Spine Clinic, our mission is to provide world-class, comprehensive neurosurgical, spine, and diagnostic services. We combine cutting-edge technology with compassionate, patient-centered care to help restore mobility, alleviate pain, and enhance the quality of life for our patients.",
    values: [
      {
        title: "Clinical Precision",
        description: "Utilizing state-of-the-art navigation and surgical systems for sub-millimeter accuracy.",
        icon: "biotech"
      },
      {
        title: "Patient-First Care",
        description: "Providing personalized treatment plans tailored to each individual's needs and lifestyle.",
        icon: "diversity_1"
      },
      {
        title: "Advanced Diagnostics",
        description: "24/7 in-house laboratory testing ensuring timely and accurate results for critical decisions.",
        icon: "clinical_notes"
      }
    ]
  },
  doctorsSection: {
    tagline: "Meet Our Expert",
    title: "Led by a Renowned Medical Specialist",
    description: "Our clinic is directed by Dr. Surjeet Singh, a highly qualified and experienced neurosurgeon dedicated to delivering advanced brain and spine care."
  },
  facility: {
    tagline: "State-of-the-Art Facility",
    title: "A Healing Environment",
    description: "Shreyas Clinic is located in Indira Nagar, Lucknow, featuring modern consultation suites, specialized physiotherapy rehabilitation, and Dr. SKS Diagnostics for comprehensive testing.",
    items: [
      "Advanced Neuro-rehab Equipment",
      "24/7 Diagnostic Pathology Lab",
      "Comfortable Recovery & Waiting Areas",
      "Patient Education & Consultation Rooms"
    ],
    image: "/clinic-entrance.jpg"
  }
};

export const contactData = {
  hero: {
    tagline: "Get in Touch",
    title: "Contact Us",
    description: "Have questions or need to make an inquiry? Find our location details, call our desk, or send us a message directly.",
    backgroundImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1600&q=80"
  },
  form: {
    title: "Send Us a Message",
    description: "Fill out the form below, and our coordinator will respond to your query as soon as possible.",
    buttonText: "Submit Message",
    fields: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Your Message"
    }
  }
};

export interface GalleryItem {
  src: string;
  title: string;
  category: "Facility" | "Technology" | "Diagnostics" | "Patient Care";
  size: "normal" | "wide" | "tall" | "large";
  description: string;
}

export const galleryData = {
  hero: {
    tagline: "Visual Tour",
    title: "Our Gallery",
    description: "Take a visual tour of Shreyas Neuro & Spine Clinic, highlighting our state-of-the-art facility, surgical tools, and patient care suites.",
    backgroundImage: "/clinic-exterior.jpg"
  },
  categories: [
    { key: "All", label: "All Photos" },
    { key: "Facility", label: "Our Facility" },
    { key: "Technology", label: "Technology" },
    { key: "Diagnostics", label: "Diagnostics" },
    { key: "Patient Care", label: "Patient Care" }
  ],
  items: [
    {
      src: "/clinic-exterior.jpg",
      title: "Clinic Exterior",
      category: "Facility",
      size: "wide",
      description: "Our modern clinic exterior in Indira Nagar, Lucknow, featuring complete security and direct diagnostic support."
    },
    {
      src: "/clinic-entrance.jpg",
      title: "Main Lobby",
      category: "Facility",
      size: "normal",
      description: "Spacious reception desk and waiting lobby designed for patient and family comfort."
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkp9NlDpN6nFlyxR3XYZvN2DOCevTPS0dhIcs9SKsms0fa4dJQz0nLp7Jnj0pp3j-ss9L1NWx0wlyjri1h7TZYQUyKQK4QJpHwau4vPt__U4LV_o2w7Pw5Q2UayzSNUwFhT9bdfz7wa-AQmnxbaiK7A7TN-Q09QO0Y9lJn7NwPWAKStPWysCHZ4lFIbwFldjsz6V8okBfmyxKM014FmMMM0ERUbQSfyj1LC4Z1REVHHfKw6Uc0zc5J-T0_m6Hld52Zx_x6fhCxd5y0",
      title: "StealthStation Navigation System",
      category: "Technology",
      size: "large",
      description: "Advanced 3D real-time neuronavigation framework utilized for high-precision brain and spine surgeries."
    },
    {
      src: "https://images.unsplash.com/photo-1559058789-672da06263d8?auto=format&fit=crop&w=800&q=80",
      title: "Neuronavigation Display Console",
      category: "Technology",
      size: "wide",
      description: "High-definition planning screens displaying detailed structural mapping markers."
    },
    {
      src: "/dr-surjeet-singh.jpg",
      title: "Dr. Surjeet Singh in Consultation",
      category: "Patient Care",
      size: "tall",
      description: "Consultation desk where patient histories are reviewed and recovery journeys are developed."
    },
    {
      src: "/stitch/asset-07.jpg",
      title: "Digital Consultation Portal",
      category: "Patient Care",
      size: "normal",
      description: "Explaining diagnostic charts and 3D spinal models directly to patients using digital tablets."
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      title: "Dr. SKS Diagnostics Pathology Lab",
      category: "Diagnostics",
      size: "normal",
      description: "Automated analysis systems for blood tests, biopsies, and routine diagnostic processing."
    },
    {
      src: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?auto=format&fit=crop&w=800&q=80",
      title: "High-Definition Surgical Microscope",
      category: "Technology",
      size: "wide",
      description: "HD visualization platform with integrated fluorescence to highlight microvascular pathologies."
    }
  ] as GalleryItem[]
};
