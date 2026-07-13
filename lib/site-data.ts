export interface NavItem {
  label: string;
  href: string;
  key?: "home" | "conditions" | "technology" | "patients";
}

export const globalData = {
  brandName: "NeuroLink Excellence",
  logoIcon: "neurology",
  navItems: [
    { label: "Services", href: "/", key: "home" },
    { label: "Conditions", href: "/conditions", key: "conditions" },
    { label: "Technology", href: "/procedures", key: "technology" },
    { label: "Patients", href: "/resources", key: "patients" },
    { label: "FAQ", href: "#" },
  ] as NavItem[],
  footer: {
    logoImage: "/stitch/asset-06.jpg",
    brandName: "NeuroLink",
    description: "Global excellence in neurosurgical innovation and compassionate patient care since 2004.",
    socialLinks: [
      { icon: "share", href: "#" },
      { icon: "video_call", href: "#" }
    ],
    patientLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Patient Rights", href: "#" },
      { label: "Medical Disclaimer", href: "#" },
      { label: "Contact Us", href: "#" }
    ],
    clinicalHours: [
      { days: "Monday - Friday", time: "8am - 6pm" },
      { days: "Saturday", time: "Emergencies" },
      { days: "Sunday", time: "Closed" }
    ],
    supportTagline: "24/7 Surgical Support",
    newsletterText: "Subscribe to neurological health insights.",
    copyright: "© 2024 NeuroLink Neurosurgery Clinic. All rights reserved. Professional Excellence in Neurological Care."
  }
};

export const homeData = {
  hero: {
    tagline: "Global Leader in Neurosurgery",
    title: "Precision in Neurological Care.",
    titleAccent: "Compassion in Every Recovery.",
    description: "Specializing in minimally invasive neurosurgery and advanced brain and spine treatments, utilizing space-age technology for surgical precision.",
    backgroundImage: "/stitch/asset-01.jpg",
    primaryBtn: "Book a Consultation",
    secondaryBtn: "View Our Services"
  },
  stats: [
    { value: "2,500+", label: "Successful Surgeries" },
    { value: "20+ Years", label: "Clinical Excellence" },
    { value: "98%", label: "Patient Satisfaction" }
  ],
  doctorProfile: {
    tagline: "Lead Neurosurgeon",
    name: "Dr. Elena Vance, MD, PhD",
    description: "With over two decades of experience in complex neurological interventions, Dr. Vance has pioneered several minimally invasive techniques now used globally. Her approach combines surgical precision with a deep commitment to patient recovery and quality of life.",
    image: "/stitch/asset-01.jpg",
    badgeTitle: "Board Certified",
    badgeDesc: "American Board of Neurological Surgery",
    bulletPoints: [
      { icon: "verified", text: "20+ Years of Surgical Practice" },
      { icon: "festival", text: "Affiliated with Mayo Clinic & Johns Hopkins" },
      { icon: "school", text: "Harvard Medical School Alumna" }
    ],
    ctaText: "View Full Clinical Profile"
  },
  services: {
    tagline: "Our Specialties",
    title: "Comprehensive Surgical Services",
    items: [
      {
        title: "Brain Tumors",
        description: "Expert excision of benign and malignant tumors using real-time intraoperative imaging.",
        icon: "neurology",
        link: "#"
      },
      {
        title: "Spine Surgery",
        description: "Corrective procedures for spinal deformities, fractures, and degenerative conditions.",
        icon: "accessibility_new",
        link: "#"
      },
      {
        title: "Minimally Invasive",
        description: "Advanced endoscopic techniques to reduce recovery time and post-operative discomfort.",
        icon: "precision_manufacturing",
        link: "#"
      },
      {
        title: "Stroke Care",
        description: "Rapid intervention for ischemic and hemorrhagic strokes to preserve brain function.",
        icon: "emergency",
        link: "#"
      },
      {
        title: "Epilepsy",
        description: "Surgical solutions for drug-resistant epilepsy, including VNS and deep brain stimulation.",
        icon: "bolt",
        link: "#"
      },
      {
        title: "Nerve Disorders",
        description: "Treatment for peripheral nerve compression, carpal tunnel, and chronic pain syndromes.",
        icon: "account_tree",
        link: "#"
      }
    ]
  },
  conditions: {
    title: "Expertise in Complex Conditions",
    description: "We provide diagnosis and treatment for a wide spectrum of neurological and spinal conditions, focusing on long-term wellness.",
    buttonText: "View Condition Guide",
    items: [
      "Herniated Discs",
      "Sciatica & Nerve Pain",
      "Brain Aneurysms",
      "Chronic Back Pain",
      "Trigeminal Neuralgia",
      "Spinal Stenosis"
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
        quote: "The precision and care shown by Dr. Vance was incredible. She explained everything clearly and made me feel at ease throughout the brain tumor procedure.",
        author: "Sarah L., Patient"
      },
      {
        stars: 5,
        quote: "Minimal scarring and back to my normal life in record time. The robotics team at NeuroLink is truly world-class.",
        author: "David K., Patient"
      }
    ]
  },
  appointment: {
    title: "Book Your Consultation",
    description: "Take the first step towards recovery. Complete the form below and our medical coordinator will contact you within 24 hours.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4T-Vr3cDM916kQgqg64upLH_bnMioeQwBiGzjfTiJmtRwG4XJF9HC0bR6T_9Ft4XsWq_MzoQwOIFv0tsLM7HemyodTGi4okEGM8-BGXnlClUkOiE7Qmh5HARBPyeEIYOUcGyE9d4UbJXo755YBFw4BYZDk5z4mJgffrsspKFeBCCr56pZ8b4ec5hj0IcKNIWiyiR_J4bjWqhJn2gUS9IEsbS6hkvQ5D190ViaHlYPRIauiT1dIOAq0yaaIOUWxMe966h1zR8Zpe3C",
    supportTitle: "Patient Support",
    supportDesc: "Available 24/7 for Emergencies",
    supportPhone: "+1 (800) NEURO-LINK",
    buttonText: "Schedule Appointment",
    services: [
      "Brain Surgery Consultation",
      "Spine Evaluation",
      "Minimally Invasive Procedures",
      "Second Opinion"
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
    description: "Our facility is located in the heart of the medical district, designed for easy access and patient comfort.",
    details: [
      {
        icon: "location_on",
        title: "Address",
        lines: ["1200 Neural Way, Suite 400", "Medical District, Houston, TX 77030"]
      },
      {
        icon: "call",
        title: "Phone",
        lines: ["Direct: (713) 555-0123", "Emergency: (800) 999-0000"]
      },
      {
        icon: "schedule",
        title: "Clinic Hours",
        lines: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat-Sun: Emergency Only"]
      }
    ],
    mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnnkiyKUFIcGTjoEzCfu4kbezUl9fBl9jRtgppGgGzZl4tKpNqLuLf0dkSOJVH1_uESeTUUzKd6uJ2XvdTMvN_oVMArOw6V2z8ByJkj9457catmdDbxzpcjGaTkwGBN6gE-A-ksWZ0omtiJeZuNvbMP9PEpazAxRPvgbXH1Bys5DWfjQfCKQHXlg2aUoy9rPsR594_lxm_LnmkcKppn7UFUozBIh3XvmtyL2dF_LmIt3o7CAu_w9dBVV2kbihsIanXvYqWIMSCR76i",
    mapAlt: "A professional medical facility map illustration showing the clinic location in Houston's medical district. The style is clean and architectural, using a color palette of deep blue, white, and teal accents. The map shows simplified streets and a clear marker for the NeuroLink Excellence clinic.",
    mapLocation: "Houston, Texas",
    pinLabel: "NeuroLink Excellence Clinic"
  }
};

export const conditionsData = {
  hero: {
    tagline: "Expert Neurological Care",
    title: "Specialized Care for Complex Neurological Conditions",
    description: "Utilizing surgical-grade precision and world-class expertise to treat conditions of the brain, spine, and peripheral nerves.",
    backgroundImage: "/stitch/asset-09.jpg",
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
    brainImage: "/stitch/asset-11.jpg",
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
    description: "NeuroLink Excellence integrates world-class surgical expertise with sub-millimeter robotic precision. We are dedicated to delivering the highest standards of neurological care through innovation and patient-centered safety protocols.",
    backgroundImage: "/stitch/asset-04.jpg"
  },
  brainSurgery: {
    title: "Cranial Interventions",
    image: "/stitch/asset-02.jpg",
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
    image: "/stitch/asset-10.jpg",
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
    image: "/stitch/asset-12.jpg"
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
      image: "/stitch/asset-13.jpg"
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
