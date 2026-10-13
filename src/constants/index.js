export const navLinks = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 2, name: "Contact", type: "contact" },
  { id: 3, name: "Resume", type: "resume" },
];

export const dockApps = [
  { id: "finder", name: "Portfolio", icon: "/images/finder.png", canOpen: true },
  { id: "safari", name: "Articles", icon: "/images/safari.png", canOpen: true },
  { id: "snake", name: "Snake", icon: "/images/snake.png", canOpen: true },
  { id: "tictactoe", name: "Tic Tac Toe", icon: "/images/tictactoe.png", canOpen: true },
  { id: "photos", name: "Gallery", icon: "/images/photos.png", canOpen: true },
  { id: "contact", name: "Contact", icon: "/images/contact.png", canOpen: true },
  { id: "terminal", name: "Skills", icon: "/images/terminal.png", canOpen: true },
  { id: "trash", name: "Archive", icon: "/images/trash.png", canOpen: false },
];

export const techStack = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "PHP",
      "Python (microservices)",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    category: "Real-time",
    items: ["Socket.io", "Agora SDK (RTC)", "Webhooks"],
  },
  {
    category: "Auth & Security",
    items: [
      "JWT",
      "bcryptjs",
      "Role-based access control",
      "Protected middleware",
      "OTP verification",
    ],
  },
  {
    category: "Integrations & Tools",
    items: [
      "Google Maps API",
      "AI chatbot",
      "Cloudinary",
      "Nodemailer",
      "Multer",
      "node-cron",
      "Vite",
      "WordPress",
    ],
  },
  {
    category: "Deployment",
    items: ["Git", "GitHub", "Docker", "Vercel", "PM2", "Apache", "Linux"],
  },
];

export const blogPosts = [
  {
    id: 1,
    date: "Oct 8, 2026",
    title: "Building an interactive 3D product page",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&h=340&q=80",
    text: "Loading a GLB bottle and HDR environment with react-three-fiber, then driving a cinematic scroll with GSAP ScrollTrigger and Lenis smooth scrolling.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
  {
    id: 2,
    date: "Sep 21, 2026",
    title: "Real-time video meetings with Agora RTC + Socket.IO",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&h=340&q=80",
    text: "Generating secure Agora tokens server-side, recurring rooms, host controls (promote/remove) and attendance tracking in a live recovery-meeting platform.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
  {
    id: 3,
    date: "Sep 3, 2026",
    title: "AI chatbot + Google Maps in a listing platform",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&h=340&q=80",
    text: "How I added an AI chatbot and an interactive Google Map explorer to help visitors find rehab centres by region, with nearby-centre suggestions.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
  {
    id: 4,
    date: "Aug 18, 2026",
    title: "Turning PDFs into audio",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=600&h=340&q=80",
    text: "A Node.js + Python pipeline that extracts text with pymupdf, synthesizes speech with edge-tts, and falls back to OCR for scanned documents.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
  {
    id: 5,
    date: "Aug 2, 2026",
    title: "Securing a multi-role app",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&h=340&q=80",
    text: "Practical auth: JWT in HTTP-only cookies, bcryptjs hashing, role-based access control, protected middleware and email OTP verification.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
  {
    id: 6,
    date: "Jul 15, 2026",
    title: "Migrating content from WordPress to a custom React CMS",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&h=340&q=80",
    text: "Importing posts, taxonomies and media from WordPress SQL dumps into a custom admin panel — and cleaning up legacy shortcodes along the way.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
  {
    id: 7,
    date: "Jun 28, 2026",
    title: "PDF-to-audio microservices: calling Python from Node",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=340&q=80",
    text: "When and how to shell out from a Node.js backend to Python side-cars, piping text over stdin and surfacing errors cleanly.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
  {
    id: 8,
    date: "Jun 10, 2026",
    title: "Deploying Node + React on Linux",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&h=340&q=80",
    text: "Shipping to production with Docker, PM2, an Apache reverse proxy and Vercel — plus health checks and graceful shutdown.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
];

export const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "github",
    bg: "#f4656b",
    link: "https://github.com/bkapil002",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "linkedin",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/brahm-kapila-078369286/",
  },
  {
    id: 3,
    text: "Email",
    icon: "email",
    bg: "#4bcb63",
    link: "mailto:kapilbrahm@gmail.com",
  },
  {
    id: 4,
    text: "Phone",
    icon: "phone",
    bg: "#ff866b",
    link: "tel:9877707118",
  },
];

export const photoCategories = [
  { id: "library", name: "Library" },
  { id: "memories", name: "Memories" },
  { id: "places", name: "Places" },
  { id: "people", name: "People" },
  { id: "favorites", name: "Favorites" },
];

export const galleryImages = [
  "https://picsum.photos/seed/g1/600/600",
  "https://picsum.photos/seed/g2/600/600",
  "https://picsum.photos/seed/g3/600/600",
  "https://picsum.photos/seed/g4/600/600",
];

const projects = [
  {
    id: 1,
    name: "Project One",
    icon: "/images/folder.png",
    kind: "folder",
    position: "top-52 left-10",
    windowPosition: "top-20 left-20",
    children: [
      {
        id: 1,
        name: "Overview.txt",
        icon: "📄",
        kind: "file",
        fileType: "txt",
        subtitle: "A full-stack app built from scratch",
        description: [
          "A full-stack web app that solves a real problem with a clean, responsive interface.",
          "Users can sign in, create content, and manage their own data securely.",
          "The frontend is built with React and Tailwind CSS for a fast, playful UI.",
          "The backend uses Node.js, Express, and a database with token-based auth.",
          "Deployed on Vercel with a CI workflow for preview builds.",
        ],
      },
      {
        id: 2,
        name: "Preview.png",
        icon: "🖼️",
        kind: "file",
        fileType: "img",
        image: "https://picsum.photos/seed/project1/900/600",
      },
      {
        id: 3,
        name: "Visit Site",
        icon: "🔗",
        kind: "file",
        fileType: "link",
        href: "https://example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Project Two",
    icon: "/images/folder.png",
    kind: "folder",
    position: "top-52 left-40",
    windowPosition: "top-24 left-24",
    children: [
      {
        id: 1,
        name: "Overview.txt",
        icon: "📄",
        kind: "file",
        fileType: "txt",
        subtitle: "An AI-powered utility",
        description: [
          "A smart tool that gives instant feedback and useful insights.",
          "Built with Next.js and Tailwind CSS for a modern, server-rendered experience.",
          "Integrates an AI API to analyze and summarize user input.",
          "Includes a clean dashboard with saved history.",
        ],
      },
      {
        id: 2,
        name: "Preview.png",
        icon: "🖼️",
        kind: "file",
        fileType: "img",
        image: "https://picsum.photos/seed/project2/900/600",
      },
      {
        id: 3,
        name: "Visit Site",
        icon: "🔗",
        kind: "file",
        fileType: "link",
        href: "https://example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Project Three",
    icon: "/images/folder.png",
    kind: "folder",
    position: "top-72 left-10",
    windowPosition: "top-28 left-28",
    children: [
      {
        id: 1,
        name: "Overview.txt",
        icon: "📄",
        kind: "file",
        fileType: "txt",
        subtitle: "A content-driven platform",
        description: [
          "A content-driven platform with search, categories, and a friendly reading experience.",
          "The frontend is built with React (Vite) and Tailwind CSS.",
          "Data is powered by a public API and cached for fast navigation.",
          "Authentication and storage are handled with a backend-as-a-service.",
        ],
      },
      {
        id: 2,
        name: "Preview.png",
        icon: "🖼️",
        kind: "file",
        fileType: "img",
        image: "https://picsum.photos/seed/project3/900/600",
      },
      {
        id: 3,
        name: "Visit Site",
        icon: "🔗",
        kind: "file",
        fileType: "link",
        href: "https://example.com",
      },
    ],
  },
];

const companyFiles = [
  {
    id: 1,
    name: "findrehabcentres",
    icon: "/company/FRC.png",
    kind: "file",
    fileType: "txt",
    subtitle: "Full-stack platform for rehab centres across India",
    description: [
      "A web platform to discover, list and manage rehabilitation / de-addiction centres across India.",
      "Public website (React + Vite + Tailwind) to browse centres, locations, blogs and resources.",
      "Admin panel (React + Vite + Tailwind) — a WordPress-style CMS to manage all content.",
      "Backend API (Node.js + Express + Sequelize/MySQL) with auth, uploads and email.",
      "Interactive Google Maps to explore centres by region, with nearby-centre suggestions.",
      "AI chatbot to help visitors find the right centre and answer their questions instantly.",
      "Includes search, SEO sitemaps and ads.",
    ],
  },
  {
    id: 2,
    name: "samzara",
    icon: "/company/LOGO-BVnv3rUI.png",
    kind: "file",
    fileType: "txt",
    subtitle: "Social network for addiction recovery + online meetings",
    description: [
      "India's first social network for a social cause, supporting people in addiction recovery and their families.",
      "Meetings platform (meeting.samzara.in) to host and join scheduled recovery meetings (AA/NA/Al-Anon) as live video rooms.",
      "Live rooms built with Agora RTC — host controls, speaker requests/promotions, plus attendance tracking and participation certificates.",
      "Community app (community.samzara.in), a WoWonder-based social network with timeline, messaging, groups, pages, events and blogs.",
      "Realtime chat, notifications and calls powered by a standalone Node.js + Socket.IO server.",
      "Includes marketplace, payments/Pro memberships and a full admin panel.",
    ],
  },
  {
    id: 3,
    name: "evolueracademy",
    icon: "/company/logo-DZx-Iee_.png",
    kind: "file",
    fileType: "txt",
    subtitle: "Full-stack e-learning platform for students & teachers",
    description: [
      "Evoluer Academy — student site (React + Vite + Tailwind) with video lessons, PDF study material, live classes, assignments, attendance and watch history.",
      "Admin / teacher panel (React + Vite + Tailwind) to manage users, videos, materials, live classes, assignments and teacher–student mapping.",
      "Backend (Node.js + Express + Mongoose) with REST + Socket.IO, Agora live-class tokens, plan-based access, email/OTP and PDF-to-audio.",
      "Plans (free → platinum) unlock more videos and study material; roles gate student, teacher and admin access.",
      "Also built PDF-to-Audio (Voicestudio) — turns PDFs into downloadable MP3s with neural voices and OCR fallback for scanned pages.",
      "Includes Stripe billing and Cloudinary media storage.",
    ],
  },
  {
    id: 4,
    name: "orb",
    icon: "/company/red.svg",
    kind: "file",
    fileType: "txt",
    subtitle: "Pre-launch site for a daily nutrition drink",
    description: [
      "orb (letsorb.in) — marketing / pre-launch website for a functional daily nutrition drink.",
      "Built with Next.js (App Router), React and Tailwind CSS.",
      "Immersive scroll experience with an interactive 3D bottle (three.js, react-three-fiber).",
      "Animated, pinned sections and smooth inertia scrolling powered by GSAP ScrollTrigger and Lenis.",
      "Waitlist sign-up flow with a community / affiliates page and unsubscribe handling.",
      "Backend waitlist + subscription handled via a separate API (backend.letsorb.in).",
    ],
  },
  {
    id: 5,
    name: "sentrimeshconsulting",
    icon: "/company/sentrimesh-whitescale.svg",
    kind: "file",
    fileType: "txt",
    subtitle: "Cybersecurity & compliance consulting website",
    description: [
      "Sentrimesh Consulting — cybersecurity and compliance consulting firm for startups and enterprises.",
      "Marketing website built on WordPress (Astra theme) with services, pricing, blogs and case studies.",
      "Services: SOC 2 readiness & audit support, ISO 27001 consulting, cloud security (AWS, Azure, GCP) and Microsoft 365 security.",
      "Also offers VAPT, risk assessment & vulnerability management, vCISO and IT infrastructure consulting.",
      "Live site: https://sentrimeshconsulting.com",
    ],
  },
];

const companyFolder = {
  id: 4,
  name: "brandingrain",
  icon: "/images/brandingrain.png",
  kind: "folder",
  position: "top-72 left-40",
  windowPosition: "top-32 left-20",
  children: companyFiles,
};

export const locations = {
  work: {
    id: 1,
    name: "Work",
    icon: "/images/work.svg",
    kind: "folder",
    children: [...projects, companyFolder],
  },
  about: {
    id: 2,
    name: "About me",
    icon: "/images/info.svg",
    kind: "file",
    fileType: "txt",
    subtitle: "Meet the Developer Behind the Code",
    description: [
      "Hey! I'm Brahm Kapila, a web developer who enjoys building sleek, interactive websites that actually work well.",
      "I specialize in JavaScript, React, and Next.js — and I love making things feel smooth, fast, and a little delightful.",
      "I'm big on clean UI, good UX, and writing code that doesn't need a search party to debug.",
      "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping coffee, or reading blogs I convinced myself I needed.",
    ],
  },
  resume: {
    id: 3,
    name: "Resume",
    icon: "/images/file1.svg",
    kind: "file",
    fileType: "pdf",
    href: "/resume.pdf",
  },
  trash: {
    id: 4,
    name: "Trash",
    icon: "/images/trash1.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "old-portfolio.png",
        icon: "🖼️",
        kind: "file",
        fileType: "img",
        image: "https://picsum.photos/seed/old1/600/400",
      },
      {
        id: 2,
        name: "draft.txt",
        icon: "📄",
        kind: "file",
        fileType: "txt",
        subtitle: "Scratch notes",
        description: ["Old ideas that never shipped."],
      },
    ],
  },
  desktop: {
    id: 5,
    name: "Desktop",
    icon: "🖥️",
    kind: "folder",
    children: projects,
  },
};

export const finderSidebar = [
  {
    id: "favorites",
    name: "Favourites",
    items: [locations.work, locations.about, locations.resume, locations.trash],
  },
  {
    id: "projects",
    name: "My Projects",
    items: projects,
  },
];
