export const assistantSkills = {
  text: "Happy to! Brahm's a full stack (MERN) developer with 1+ year of production experience — here's the stack he works with day to day:",
  groups: [
    {
      label: "Frontend",
      items: "React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, Bootstrap",
    },
    {
      label: "Backend",
      items: "Node.js, Express.js, REST APIs, GraphQL, PHP, Python (microservices)",
    },
    { label: "Databases", items: "MongoDB, Mongoose, MySQL" },
    { label: "Real-time", items: "Socket.io, Agora SDK (RTC), Webhooks" },
    {
      label: "Auth & security",
      items: "JWT, bcryptjs, role-based access control, protected middleware, OTP verification",
    },
    {
      label: "Payments",
      items: "Razorpay gateway, payment verification, transaction handling",
    },
    {
      label: "Integrations & tools",
      items: "Google Maps API, AI chatbot, Cloudinary, Nodemailer, Multer, node-cron, Vite, WordPress",
    },
    {
      label: "Deployment",
      items: "Git, GitHub, Docker, Vercel, PM2, Apache, Linux",
    },
  ],
};

export const assistantExperience = {
  text: "Brahm Kapila — Full Stack Developer (MERN) with 1+ year of production experience. He's currently at Brandingrain, where he's shipped four products end to end:",
  meta: "Brandingrain · Full Stack Developer · July 2025 – Present",
  groups: [
    {
      label: "Find Rehab Centres",
      items:
        "React, Vite, Tailwind, Node, Express, MySQL, Cloudinary, Google Maps, Razorpay — public site, admin dashboard and APIs, marker-clustered maps, AI chatbot, Razorpay orders and verification.",
    },
    {
      label: "Samzara Community Platform",
      items:
        "Node, Express, MongoDB, PHP, JWT, Agora, Cloudinary — role-based access control, protected middleware, Agora RTC tokens for live audio/video, scheduled email automation, PM2 + Apache in production.",
    },
    {
      label: "Evoluer Academy",
      items:
        "React, Node, MongoDB, Socket.io, Agora, Python — student/teacher/admin dashboards, attendance and assignments, live classes, rate limiting, plus Python PDF-to-audio and subtitle services.",
    },
    {
      label: "Sentrimesh Consulting",
      items:
        "WordPress, Elementor — business website, custom themes and components, SEO, performance, lead-generation forms, plugins, security and backups.",
    },
  ],
  footer:
    "Certifications: freeCodeCamp Front End Development and Responsive Web Design. Education: BCA, S.V.S.D. P.G. College, Bhatoli (H.P.), CGPA 7.5. Comfortable deploying his own work and writing small Python services where Node isn't the right fit.",
};

export const assistantProjects = [
  {
    key: "voxa",
    name: "Voxa (Voicestudio)",
    aliases: ["voxa", "voicestudio", "pdf", "audio", "mp3"],
    text: "Voxa (Voicestudio) turns any readable PDF into a downloadable MP3.",
    meta: "React, Vite, Tailwind · Node, Express, MongoDB · Python, PyMuPDF, NVIDIA NIM, Edge TTS, Cloudinary",
    bullets: [
      "React + Vite frontend with drag-and-drop upload, voice previews, login, history and a polished landing page.",
      "Express + MongoDB backend for uploads, JWT auth, usage limits, jobs, billing and audio storage.",
      "Digital PDFs are extracted exactly with PyMuPDF and cleaned before text-to-speech.",
      "Scanned PDFs are rendered to images and transcribed by NVIDIA NIM vision AI for high-accuracy OCR.",
      "Audio uses Microsoft Edge neural voices (or Google Cloud TTS), stored locally or in Cloudinary.",
    ],
    links: [
      { label: "Live site", href: "https://voice-studio-mu.vercel.app/" },
      { label: "GitHub", href: "https://github.com/bkapil002/pdf-to-audio" },
    ],
  },
  {
    key: "frc",
    name: "Find Rehab Centres",
    aliases: ["find rehab", "frc", "rehab"],
    text: "A directory platform to discover, list and manage rehabilitation centres across India.",
    meta: "React, Vite, Tailwind · Node, Express, MySQL · Google Maps, Razorpay, Cloudinary, AI chatbot",
    bullets: [
      "Built and maintained the public website, admin dashboard and backend APIs.",
      "Centre listings, categories, blogs, location-based search, reviews and listing reports.",
      "Google Maps with marker clustering to find centres by location.",
      "AI chatbot that helps visitors find suitable centres and learn about treatments.",
      "Razorpay payments end to end: order creation, verification and transaction status handling.",
      "Cookie-based admin auth, Cloudinary uploads and Nodemailer for contact and newsletter emails.",
    ],
  },
  {
    key: "samzara",
    name: "Samzara Community Platform",
    aliases: ["samzara", "community", "meetings"],
    text: "A social platform for addiction recovery with a community app and live online meetings.",
    meta: "Node, Express, MongoDB, Mongoose, PHP, JWT, Agora SDK, Cloudinary, Nodemailer",
    bullets: [
      "Backend for a community platform where each type of user gets different permissions and content.",
      "JWT login with bcryptjs-hashed passwords, role-based access control and protected middleware.",
      "Agora setup for live audio/video: RTC token generation, session handling and live classes.",
      "REST APIs with request validation, one central error handler and strict authorization checks.",
      "Cloudinary media storage plus Nodemailer and node-cron for scheduled emails.",
      "Deployed with PM2 process management and Apache as the reverse proxy.",
    ],
  },
  {
    key: "evoluer",
    name: "Evoluer Academy",
    aliases: ["evoluer", "academy", "edtech", "learning"],
    text: "A full-stack e-learning platform for students, teachers and admins.",
    meta: "React, Node, Express, MongoDB, Socket.io, Agora SDK, Python",
    bullets: [
      "EdTech app with separate dashboards for students, teachers and admins.",
      "Core modules: authentication, role-based permissions, attendance, assignment submissions and course management.",
      "Agora and Socket.io for live classes and low-latency real-time video calls.",
      "Rate limiting and structured error handling so the API holds up with many users online.",
      "Python services that turn PDFs into audio and generate subtitles, wired into Cloudinary, Nodemailer and CSV/PDF processing.",
    ],
  },
  {
    key: "orb",
    name: "Orb",
    aliases: ["orb", "nutrition", "3d", "bottle"],
    text: "Pre-launch marketing site for a functional daily nutrition drink.",
    meta: "Next.js (App Router), React, Tailwind CSS, three.js, react-three-fiber, GSAP, Lenis",
    bullets: [
      "Immersive scroll experience with an interactive 3D bottle.",
      "Animated, pinned sections and smooth inertia scrolling with GSAP ScrollTrigger and Lenis.",
      "Waitlist sign-up flow plus a community/affiliates page and unsubscribe handling.",
      "Waitlist and subscription handled by a separate API at backend.letsorb.in.",
    ],
    links: [{ label: "Live site", href: "https://letsorb.in" }],
  },
  {
    key: "sentrimesh",
    name: "Sentrimesh Consulting",
    aliases: ["sentrimesh", "wordpress", "cyber"],
    text: "Cybersecurity and compliance consulting website for startups and enterprises.",
    meta: "WordPress, Astra, Elementor",
    bullets: [
      "Built and maintained the business website and made sure it works well on phones.",
      "Customized themes, layouts and reusable components to match the brand.",
      "SEO and performance work to help the site rank better in search.",
      "Contact forms, lead-generation flows and business enquiry management.",
      "Handled plugins, security, backups and stakeholder feature requests.",
    ],
    links: [{ label: "Live site", href: "https://sentrimeshconsulting.com" }],
  },
];

export const assistantHowIWork = {
  text: "How Brahm works, in his own words:",
  bullets: [
    "He learns new tools when a project needs them — that's how Agora for live video and Python for audio/subtitle processing made it into production.",
    "He's good at taking a rough requirement, working out what actually needs building, and explaining it clearly to developers and non-technical teammates.",
    "He likes working across teams and with stakeholders, and is happy to pick up whatever a project needs next.",
    "Mostly he works in JavaScript and Node, and reaches for Python where it's the better fit — like audio and PDF processing.",
  ],
  options: [
    { label: "See the projects", value: "projects" },
    { label: "Get in touch", value: "contact" },
  ],
};
