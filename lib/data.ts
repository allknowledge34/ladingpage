import logo from "../public/logo.jpg"
import HeroImg1 from "../public/dd-school-1.jpg"
import HeroImg2 from "../public/dd-school-2.jpg"
import HeroImg3 from "../public/dd-school-3.jpg"
import HeroImg4 from "../public/dd-school-4.jpg"
import HeroImg5 from "../public/dd-school-5.jpg"
import HeroImg6 from "../public/dd-school-6.jpg"
import AboutImg from "../public/dd-school-7.png"
import CategoryImg1 from "../public/dd-school-8.jpg"
import CategoryImg2 from "../public/dd-school-9.jpg"
import CategoryImg3 from "../public/dd-school-10.jpg"
import CategoryImg5 from "../public/dd-school-12.jpg"
import CategoryImg6 from "../public/dd-school-11.jpg"
import CategoryImg7 from "../public/dd-school-8.jpg"
import CategoryImg8 from "../public/dd-school-9.jpg"
import CategoryImg9 from "../public/dd-school-10.jpg"
import CategoryImg10 from "../public/dd-school-12.jpg"
import CategoryImg11 from "../public/dd-school-11.jpg"
import Teamimg1 from "../public/dd-school-13.jpg"
import Teamimg2 from "../public/dd-school-14.jpg"



export const siteData = {
  // Site metadata
  site: {
    name: "Koshi Science Classes (KSC)",
    description: "Leading Institute for Government Exam Preparation",
    logo: logo,
    favicon: "/favicon.ico",
    themeColor: "#1E3A5F",
  },

  theme: {
    // Color palette
    colors: {
      primary: {
        light: "#5476C1",
        DEFAULT: "#1E3A5F",
        dark: "#102A45",
      },
      secondary: {
        light: "#F8C471",
        DEFAULT: "#F5A623",
        dark: "#D68910",
      },
      accent: {
        light: "#E57373",
        DEFAULT: "#C0392B",
        dark: "#8E1B17",
      },
      success: {
        light: "#86efac",
        DEFAULT: "#22c55e",
        dark: "#16a34a",
      },
      warning: {
        light: "#fed7aa",
        DEFAULT: "#f97316",
        dark: "#ea580c",
      },
      error: {
        light: "#fca5a5",
        DEFAULT: "#ef4444",
        dark: "#dc2626",
      },
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
      background: {
        light: "#FDF6EC",
        DEFAULT: "#F7E4C6",
        dark: "#E2C18C",
      },
      text: {
        light: "#555555",
        DEFAULT: "#333333",
        dark: "#111111",
      },
    },

    fonts: {
      heading: "Inter, sans-serif",
      body: "Inter, sans-serif",
    },

    spacing: {
      sectionPadding: "py-20",
      containerPadding: "px-4 md:px-6",
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },

    animations: {
      default: "0.3s ease-in-out",
      fast: "0.15s ease-in-out",
      slow: "0.5s ease-in-out",
    },

    shadows: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  },

  header: {
    topBar: {
      enabled: true,
      backgroundColor: "#ea580c",
      textColor: "#FFFFFF",
      contactInfo: [
        {
          icon: "phone",
          text: "+91 1234567890",
          url: "tel:+911234567890",
        },
        {
          icon: "mail",
          text: "kscacademy@gmail.com",
          url: "mailto:kscacademy@gmail.com",
        },
        {
          icon: "map-pin",
          text: "Khagaria, Bihar 851210",
        },
        {
          icon: "clock",
          text: "Mon-Sat: 6:00 AM - 8:00 PM",
        },
      ],
    },
    mainNav: {
      backgroundColor: "#FDF6EC",
      textColor: "#333333",
      activeTextColor: "#1E3A5F",
      hoverTextColor: "#1E3A5F",
      scrolledBackgroundColor: "rgba(253, 246, 236, 0.95)",
      scrolledShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      links: [
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "About KSC", url: "/about" },
        {
          dropdown: true,
          name: "More",
          items: [
            { name: "Our Faculty", url: "/team" },
            { name: "Success Stories", url: "/testimonial" },
            { name: "Enroll Now", url: "/apply-now" },
          ],
        },
        { name: "Contact", url: "/contact" },
      ],
      cta: {
        text: "Enroll Now",
        url: "/apply-now",
        backgroundColor: "#1e1b4b",
        hoverBackgroundColor: "#D68910",
        textColor: "white",
      },
    },
    mobileMenu: {
      backgroundColor: "#FDF6EC",
      textColor: "#333333",
      activeTextColor: "#1E3A5F",
      borderColor: "#e5e7eb",
    },
  },

  hero: {
    enabled: true,
    style: "carousel",
    height: "h-[600px]",
    autoplay: true,
    autoplaySpeed: 1000,
    showArrows: true,
    showDots: true,
    overlay: {
      enabled: true,
      color: "rgba(0, 0, 0, 0.4)",
      gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
    },
    slides: [
      {
        title: "Your Gateway to Government Job Success!",
        subtitle: "Admissions Open for 2025 Batch at KSC",
        description: "Comprehensive coaching for SSC, Railway, Banking, BPSC, Bihar Police & other competitive exams.",
        image: HeroImg1,
        alignment: "left",
        buttons: [
          { text: "Enroll Now", url: "/apply-now", style: "primary" },
          { text: "Explore Courses", url: "/courses", style: "outline" },
        ],
      },
      {
        title: "Expert Faculty & Structured Preparation",
        subtitle: "Special Focus on Maths, Reasoning, GS & English",
        description: "Concept clarity, daily practice sessions and regular mock tests to maximize selection chances.",
        image: HeroImg2,
        alignment: "left",
        buttons: [
          { text: "Meet Our Faculty", url: "/team", style: "primary" },
          { text: "Learn More", url: "/about", style: "outline" },
        ],
      },
      {
        title: "Complete Test Series & Performance Analysis",
        subtitle: "Weekly Mock Tests with Detailed Solutions",
        description: "Performance tracking and personalized guidance for assured government exam success.",
        image: HeroImg3,
        alignment: "left",
        buttons: [
          { text: "View Results", url: "/testimonial", style: "primary" },
          { text: "Contact Us", url: "/contact", style: "outline" },
        ],
      },
      {
        title: "Dedicated Batches for Every Competitive Exam",
        subtitle: "SSC | Railway | Banking | BPSC | State Exams",
        description: "Structured classroom programs designed to build accuracy, speed, and confidence.",
        image: HeroImg4,
        alignment: "left",
        buttons: [
          { text: "View Courses", url: "/courses", style: "primary" },
          { text: "Contact Us", url: "/contact", style: "outline" },
        ],
      },
      {
        title: "Affordable Fees with Quality Coaching",
        subtitle: "Education for Every Aspirant",
        description: "High-quality preparation at affordable fees to support students from all backgrounds.",
        image: HeroImg5,
        alignment: "left",
        buttons: [
          { text: "Enroll Today", url: "/apply-now", style: "primary" },
          { text: "Call Now", url: "/contact", style: "outline" },
        ],
      },
      {
        title: "Start Your Government Career Journey Today",
        subtitle: "Limited Seats – New Batch Starting Soon",
        description: "Join Koshi Science Classes and take the first step towards your secure government job.",
        image: HeroImg6,
        alignment: "left",
        buttons: [
          { text: "Enroll Now", url: "/apply-now", style: "primary" },
          { text: "Visit Center", url: "/contact", style: "outline" },
        ],
      },
    ],
  },
  
popup: {
    enabled: true,
    type: "modal",
    delay: 3000,
    showOnce: true,
    closeButton: true,
    autoClose: false,
    autoCloseDelay: 8000,
    position: "center",
    animation: "fade",
    backgroundColor: "#FDF6EC",
    textColor: "#333333",
    title: "New Government Exam Batch 2025 Starting Soon!",
    content:
      "Limited seats available for SSC, Railway, Banking, BPSC & Bihar Police batches. Enroll now to secure your seat and start your government job preparation with expert guidance.",
    image: {
      enabled: true,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600",
      alt: "Government Exam Coaching Admission Open",
      width: 300,
      height: 800,
    },
    buttons: [
      {
        text: "Enroll Now",
        url: "/apply-now",
        style: "primary",
        backgroundColor: "#F5A623",
        textColor: "white",
        closeOnClick: true,
      },
      {
        text: "View Courses",
        url: "/courses",
        style: "outline",
        backgroundColor: "#1E3A5F",
        textColor: "#1E3A5F",
        closeOnClick: true,
      },
    ],
  },

  services: {
      enabled: true,
      backgroundColor: "#FFFFFF",
      sectionPadding: "py-20",

      heading: {
        topText: "Our Strengths",
        mainText: "Why Choose Koshi Science Classes (KSC)",
        description:
          "We provide structured, result-oriented coaching designed to help aspirants crack competitive government examinations with confidence.",
      },

      layout: "grid",

      columns: {
        mobile: 1,
        tablet: 2,
        desktop: 3,
      },
      items: [
        {
          title: "Expert Competitive Faculty",
          description:
            "Experienced mentors specialized in SSC, Railway, Banking and state-level government exam preparation.",
          icon: "graduation-cap",
          iconColor: "#ea580c",
          link: "/team",
        },
        {
          title: "Disciplined & Focused Environment",
          description:
            "Serious academic atmosphere dedicated to competitive exam success and consistent performance improvement.",
          icon: "shield",
          iconColor: "#ea580c",
          link: "/about",
        },
        {
          title: "Complete Syllabus Coverage",
          description:
            "Comprehensive coverage of Maths, Reasoning, General Studies and English as per latest exam patterns.",
          icon: "book-open",
          iconColor: "#ea580c",
          link: "/courses",
        },
        {
          title: "Regular Mock Tests & Analysis",
          description:
            "Weekly and monthly test series with detailed performance evaluation and improvement strategy.",
          icon: "users",
          iconColor: "#ea580c",
          link: "/contact",
        },
        {
          title: "Affordable Fee Structure",
          description:
            "High-quality coaching at affordable fees to support aspirants from all backgrounds.",
          icon: "van",
          iconColor: "#ea580c",
          link: "/transport",
        },
        {
          title: "Selection-Oriented Strategy",
          description:
            "Smart preparation techniques focused on accuracy, speed, and maximum selection chances.",
          icon: "file-text",
          iconColor: "#ea580c",
          link: "/tests",
        },
      ],

      animation: {
        enabled: true,
        type: "fade-up",
        staggered: true,
        duration: 0.5,
        delay: 0.1,
      },
    },

  about: {
    enabled: true,
    backgroundColor: "from-gray-50 to-white",
    sectionPadding: "py-24",
    heading: {
      topText: "About Koshi Science Classes (KSC)",
      mainText: "Shaping Government Job Aspirants for a Secure Future",
      description: [
        "Koshi Science Classes (KSC) is a dedicated coaching institute focused on preparing students for various government competitive examinations across India.",
        "With expert faculty, structured classroom programs, and consistent mock test practice, we help aspirants build confidence, accuracy, and the skills required to secure government jobs.",
      ],
    },
    image: {
      src: AboutImg,
      alt: "Government exam coaching classroom session",
      animation: {
        enabled: true,
        type: "fade-right",
      },
    },
    features: [
      "Experienced Competitive Faculty",
      "Structured Study Materials",
      "Regular Mock Tests & Analysis",
      "Doubt Clearing Sessions",
      "Affordable Coaching Programs",
      "Selection-Oriented Preparation",
    ],
    stats: [
      { value: "10+", label: "Years of Coaching Experience" },
      { value: "20+", label: "Expert Faculty Members" },
      { value: "2000+", label: "Students Trained" },
      { value: "500+", label: "Successful Selections" },
    ],
    cta: {
      text: "Learn More About KSC",
      url: "/about",
      backgroundColor: "#1E3A5F",
      hoverBackgroundColor: "#102A45",
      textColor: "white",
    },
    animation: {
      enabled: true,
      type: "fade-up",
      staggered: true,
      duration: 0.5,
      delay: 0.1,
    },
  },
  

// Categories section configuration
categories: {
  enabled: true,
  backgroundColor: "#F9FAFB",
  sectionPadding: "py-24",
  heading: {
    topText: "Our Courses",
    mainText: "Government Exam Preparation Programs",
    description:
      "Structured classroom programs designed to prepare aspirants for various central and state government competitive examinations across India.",
  },
  layout: "featured",
  items: [
    {
      id: "cat-1",
      title: "SSC Preparation",
      count: "CGL | CHSL | MTS",
      image: CategoryImg1,
      featured: false,
      description:
        "Complete syllabus coverage with mock tests and performance analysis for all major SSC examinations.",
      link: "/courses",
    },
    {
      id: "cat-2",
      title: "Railway Exams",
      count: "NTPC | Group D",
      image: CategoryImg2,
      featured: false,
      description:
        "Focused preparation strategy for Railway recruitment exams with updated exam pattern guidance.",
      link: "/courses",
    },
    {
      id: "cat-3",
      title: "Banking Exams",
      count: "IBPS | SBI | RBI",
      image: CategoryImg3,
      featured: false,
      description:
        "Specialized coaching for Banking exams covering Quantitative Aptitude, Reasoning and English.",
      link: "/courses",
    },
    {
      id: "cat-4",
      title: "BPSC & State Level Exams",
      count: "Prelims & Mains",
      image: CategoryImg5,
      featured: true,
      description:
        "Comprehensive classroom program for Bihar and other state public service commission examinations with detailed GS preparation.",
      link: "/courses",
    },
    {
      id: "cat-5",
      title: "Bihar Police & Defence",
      count: "Written + Guidance",
      image: CategoryImg6,
      featured: false,
      description:
        "Complete preparation support for Police and Defence recruitment exams with exam-oriented practice.",
      link: "/courses",
    },
    {
      id: "cat-6",
      title: "General Studies Mastery",
      count: "GS Complete Batch",
      image: CategoryImg3,
      featured: false,
      description:
        "In-depth coverage of History, Geography, Polity, Economy and Current Affairs for competitive exams.",
      link: "/courses",
    },
    {
      id: "cat-7",
      title: "Foundation Batch",
      count: "Beginner Program",
      image: CategoryImg5,
      featured: false,
      description:
        "Strong foundation course for beginners to build concepts in Maths, Reasoning, English and General Studies.",
      link: "/courses",
    },
  ],

  animation: {
    enabled: true,
    type: "fade-up",
    staggered: true,
    duration: 0.6,
    delay: 0.15,
  },
},

// Courses section configuration
courses: {
  enabled: true,
  backgroundColor: "#F5A623",
  sectionPadding: "py-24",
  heading: {
    topText: "Featured Batches",
    mainText: "Popular Coaching Programs",
    description:
      "Join our most demanded government exam preparation batches trusted by thousands of aspirants.",
  },
  layout: "grid",
  columns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  showLoadMore: true,
  initialCount: 6,
  items: [
    {
      id: "course-1",
      title: "SSC Complete Batch",
      image: CategoryImg7,
      price: 0,
      instructor: "KSC Expert Faculty",
      duration: "6 Months",
      rating: 4.9,
      reviews: 210,
      students: 1500,
      category: "SSC",
      description:
        "Comprehensive SSC preparation covering Maths, Reasoning, English and General Studies.",
      link: "/courses/ssc-complete-batch",
    },
    {
      id: "course-2",
      title: "Railway NTPC Batch",
      image: CategoryImg8,
      price: 0,
      instructor: "KSC Railway Faculty",
      duration: "5 Months",
      rating: 4.8,
      reviews: 180,
      students: 1200,
      category: "Railway",
      description:
        "Targeted preparation program for Railway NTPC and Group D exams.",
      link: "/courses/railway-batch",
    },
    {
      id: "course-3",
      title: "Banking Exam Batch",
      image: CategoryImg9,
      price: 0,
      instructor: "KSC Banking Experts",
      duration: "4 Months",
      rating: 4.7,
      reviews: 150,
      students: 980,
      category: "Banking",
      description:
        "Focused preparation for IBPS and SBI exams with speed and accuracy improvement.",
      link: "/courses/banking-batch",
    },
    {
      id: "course-4",
      title: "BPSC Foundation Course",
      image: CategoryImg10,
      price: 0,
      instructor: "KSC GS Faculty",
      duration: "8 Months",
      rating: 4.9,
      reviews: 240,
      students: 1100,
      category: "BPSC",
      description:
        "Detailed preparation for BPSC Prelims and Mains with answer writing guidance.",
      link: "/courses/bpsc-foundation",
    },
    {
      id: "course-5",
      title: "Bihar Police Batch",
      image: CategoryImg11,
      price: 0,
      instructor: "KSC Police Faculty",
      duration: "3 Months",
      rating: 4.6,
      reviews: 120,
      students: 760,
      category: "Police",
      description:
        "Complete written exam preparation support for Bihar Police recruitment.",
      link: "/courses/bihar-police",
    },
    {
      id: "course-6",
      title: "Foundation Beginner Batch",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=2070",
      price: 0,
      instructor: "KSC Mentorship Team",
      duration: "4 Months",
      rating: 4.8,
      reviews: 130,
      students: 850,
      category: "Foundation",
      description:
        "Concept building batch for beginners starting government exam preparation.",
      link: "/courses/foundation-batch",
    },
  ],
  animation: {
    enabled: true,
    type: "fade-up",
    staggered: true,
    duration: 0.5,
    delay: 0.1,
  },
},

// Team section configuration
team: {
  enabled: true,
  backgroundColor: "#F7F8FA",
  sectionPadding: "py-24",
  heading: {
    topText: "Our Faculty",
    mainText: "Meet Our Expert Mentors",
    description:
      "Experienced and result-oriented faculty members dedicated to guiding aspirants towards government job success.",
  },
  layout: "grid",
  columns: {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  },
  showAllButton: {
    enabled: true,
    text: "View All Faculty",
    url: "/team",
  },
  members: [
    {
      id: "faculty-1",
      name: "Ajit Arya",
      role: "Mathematics Expert",
      image: Teamimg1,
      bio: "Specialist in competitive Maths with extensive experience in SSC and Railway exam preparation.",
      social: [],
    },
    {
      id: "faculty-2",
      name: "Rahul Kumar",
      role: "Reasoning Faculty",
      image: Teamimg2,
      bio: "Expert in Logical and Analytical Reasoning with proven track record of selections.",
      social: [],
    },
    {
      id: "faculty-3",
      name: "Neha Singh",
      role: "English Faculty",
      image: Teamimg1,
      bio: "Focused on grammar, comprehension and vocabulary improvement for competitive exams.",
      social: [],
    },
    {
      id: "faculty-4",
      name: "Amit Verma",
      role: "General Studies Mentor",
      image: Teamimg2,
      bio: "Experienced GS mentor covering History, Polity, Geography and Current Affairs.",
      social: [],
    },
  ],
  animation: {
    enabled: true,
    type: "fade-up",
    staggered: true,
    duration: 0.5,
    delay: 0.1,
  },
},
  

  // Testimonials section configuration
testimonials: {
  enabled: true,
  backgroundColor: "from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/30 dark:to-secondary-dark/30",
  textColor: "text-text-DEFAULT dark:text-white",
  sectionPadding: "py-20",
  heading: {
    topText: "SUCCESS STORIES",
    mainText: "What Our Students Say",
    description: "Hear from our successful candidates and aspirants about their journey with Koshi Science Classes (KSC).",
  },
  layout: "carousel",
  autoplay: true,
  autoplaySpeed: 6000,
  showArrows: true,
  showDots: true,
  items: [
    {
      id: "testimonial-1",
      name: "Riya Kumari",
      role: "SSC Aspirant",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2000",
      text: "KSC ne meri preparation ko bilkul direction de diya. Regular mock tests aur faculty guidance ki wajah se mera confidence bahut improve hua.",
      rating: 5,
    },
    {
      id: "testimonial-2",
      name: "Anil Kumar",
      role: "Railway Selected Candidate",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076",
      text: "Yahan ki disciplined environment aur exam-focused strategy ne mujhe Railway exam clear karne mein bahut madad ki.",
      rating: 5,
    },
    {
      id: "testimonial-3",
      name: "Sneha Singh",
      role: "Banking Aspirant",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2064",
      text: "The faculty at KSC explains every concept in a very clear and practical way. Test analysis sessions helped me identify my weak areas.",
      rating: 5,
    },
    {
      id: "testimonial-4",
      name: "Rajeev Prasad",
      role: "BPSC Candidate",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2074",
      text: "General Studies aur current affairs ka coverage bahut hi detailed hai. Yahan ki preparation strategy truly selection-oriented hai.",
      rating: 5,
    },
    {
      id: "testimonial-5",
      name: "Kavya Sharma",
      role: "Bihar Police Aspirant",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2000",
      text: "Affordable fees aur quality teaching ka best combination hai KSC mein. Main definitely recommend karungi serious aspirants ko.",
      rating: 5,
    },
  ],
  animation: {
    enabled: true,
    type: "fade-down",
    staggered: true,
    duration: 0.5,
    delay: 0.1,
  },
},

footer: {
  backgroundColor: "bg-primary-DEFAULT",
  textColor: "text-white",
  sectionPadding: "pt-16 pb-6",
  logo: {
    type: "text",
    text: "Koshi Science Classes (KSC)",
    image: "logo",
    width: 150,
    height: 50,
  },
  columns: {
    contact: {
      title: "Contact KSC",
      address: "Khagaria, Bihar 851210",
      phone: "+91 1234567890",
      email: "kscacademy@gmail.com",
      social: [
        { icon: "facebook", url: "#" },
        { icon: "twitter", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "linkedin", url: "#" },
      ],
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "About KSC", url: "/about" },
        { text: "Our Courses", url: "/courses" },
        { text: "Our Faculty", url: "/team" },
        { text: "Success Stories", url: "/testimonial" },
        { text: "Contact Us", url: "/contact" },
        { text: "Enroll Now", url: "/apply-now" },
      ],
    },
    gallery: {
      title: "Gallery",
      images: [
        HeroImg1,
        HeroImg2,
        HeroImg3,
        HeroImg4,
        HeroImg5,
        HeroImg6,
      ],
    },
    newsletter: {
      title: "Stay Updated",
      text: "Subscribe to receive updates about new government exam batches, notifications and special announcements.",
      buttonText: "Subscribe",
      placeholderText: "Enter Your Email",
    },
  },
  copyright: {
    text: "© Koshi Science Classes (KSC). All Rights Reserved.",
    designer: {
      name: "Asv Consulting Services Pvt. Ltd.",
      url: "#",
    },
  },
  footerMenu: [
    { text: "Privacy Policy", url: "#" },
    { text: "Terms & Conditions", url: "#" },
    { text: "FAQ", url: "#" },
  ],
},

  // Page headers configuration
pageHeaders: {
  height: "h-[300px]",
  backgroundColor: "#f97316",
  textColor: "text-white",
  overlay: {
    enabled: true,
    image: "/images/pattern.png",
    opacity: "opacity-10",
  },
  about: {
    title: "About Koshi Science Classes (KSC)",
    breadcrumbs: [
      { name: "Home", url: "/", active: false },
      { name: "About KSC", url: "/about", active: true },
    ],
  },
  courses: {
    title: "Government Exam Courses",
    breadcrumbs: [
      { name: "Home", url: "/", active: false },
      { name: "Courses", url: "/courses", active: true },
    ],
  },
  team: {
    title: "Our Expert Faculty",
    breadcrumbs: [
      { name: "Home", url: "/", active: false },
      { name: "Faculty", url: "/team", active: true },
    ],
  },
  testimonial: {
    title: "Success Stories",
    breadcrumbs: [
      { name: "Home", url: "/", active: false },
      { name: "Success Stories", url: "/testimonial", active: true },
    ],
  },
  contact: {
    title: "Contact Koshi Science Classes",
    breadcrumbs: [
      { name: "Home", url: "/", active: false },
      { name: "Contact", url: "/contact", active: true },
    ],
  },
  applyNow: {
    title: "Enroll Now",
    breadcrumbs: [
      { name: "Home", url: "/", active: false },
      { name: "Enroll Now", url: "/apply-now", active: true },
    ],
  },
},

contact: {
  heading: {
    title: "Get In Touch With KSC",
    description:
      "Have questions about our government exam batches or admission process? Contact us directly or fill out the form below and our team will assist you as soon as possible.",
  },
  contactInfo: [
    {
      title: "Phone Number",
      icon: "phone",
      content: ["+91 1234567890"],
    },
    {
      title: "Email Address",
      icon: "mail",
      content: ["kscacademy@gmail.com"],
    },
    {
      title: "Our Location",
      icon: "map-pin",
      content: "Khagaria, Bihar 851210",
    },
    {
      title: "Working Hours",
      icon: "clock",
      content: ["Mon-Sat: 6:00 AM - 8:00 PM"],
    },
  ],
  form: {
    title: "Send Us Your Query",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        required: true,
      },
      {
        name: "subject",
        label: "Exam Interested In",
        type: "text",
        placeholder: "SSC / Railway / Banking / BPSC etc.",
        required: true,
      },
      {
        name: "message",
        label: "Your Message",
        type: "textarea",
        placeholder: "Write your query or admission related question here...",
        required: true,
        rows: 6,
      },
    ],
    submitButton: {
      text: "Submit Inquiry",
      icon: "send",
    },
    successMessage: {
      title: "Inquiry Submitted Successfully!",
      description:
        "Thank you for contacting Koshi Science Classes. Our team will reach out to you shortly.",
    },
  },
  map: {
    enabled: true,
    height: "400px",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sKhagaria%2C%20Bihar%2C%20India!5e0!3m2!1sen!2s!4v1648482801994!5m2!1sen!2s",
  },
},
  

  // Apply Now page configuration
applyNow: {
  heading: {
    title: "Government Exam Admission Form",
    description: "Fill out the form below to enroll in your preferred government exam preparation batch at Koshi Science Classes (KSC).",
  },
  form: {
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        required: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "Mobile Number",
        type: "text",
        required: true,
      },
      {
        name: "address",
        label: "Full Address",
        type: "text",
        required: false,
        fullWidth: true,
      },
      {
        name: "education",
        label: "Highest Qualification",
        type: "select",
        required: true,
        options: [
          { value: "10th", label: "10th Pass" },
          { value: "12th", label: "12th Pass" },
          { value: "graduate", label: "Graduate" },
          { value: "post-graduate", label: "Post Graduate" },
          { value: "other", label: "Other" },
        ],
      },
      {
        name: "course",
        label: "Exam / Course Interested In",
        type: "select",
        required: true,
        options: [
          { value: "ssc", label: "SSC (CGL / CHSL / MTS)" },
          { value: "railway", label: "Railway (NTPC / Group D)" },
          { value: "banking", label: "Banking (IBPS / SBI)" },
          { value: "bpsc", label: "BPSC / State PCS" },
          { value: "police", label: "Bihar Police / Defence" },
        ],
      },
      {
        name: "message",
        label: "Additional Information (Optional)",
        type: "textarea",
        required: false,
        rows: 4,
        fullWidth: true,
      },
      {
        name: "agreeToTerms",
        label: "I confirm that the information provided is correct and agree to the admission terms and policies of KSC.",
        type: "checkbox",
        required: true,
      },
    ],
    submitButton: {
      text: "Submit Admission Form",
      loadingText: "Submitting...",
    },
    successMessage: {
      title: "Admission Request Submitted Successfully!",
      description: "Thank you for choosing Koshi Science Classes. Our team will contact you shortly with further admission details.",
      redirectTo: "/",
      redirectDelay: 1500,
    },
  },
},
}

