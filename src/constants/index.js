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
    items: ["React", "Next.js", "Vue", "TypeScript", "JavaScript"],
  },
  { category: "Programming", items: ["C++", "Python"] },
  { category: "Styling", items: ["Tailwind CSS", "Sass", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Supabase", "Firebase"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  {
    category: "Dev Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Figma",
      "VS Code",
      "Vercel",
      "Render",
    ],
  },
];

export const blogPosts = [
  {
    id: 1,
    date: "Dec 22, 2025",
    title: "Localhost vs Production",
    image: "https://picsum.photos/seed/localhost/600/340",
    text: "A short walkthrough of the surprising differences between your dev machine and the real world, and how to avoid last-minute surprises.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
  {
    id: 2,
    date: "Dec 19, 2025",
    title: "How I built this portfolio",
    image: "https://picsum.photos/seed/portfolio/600/340",
    text: "From a blank Vite project to a draggable macOS desktop in the browser. The tools, the structure, and the little details.",
    link: { name: "Read the full post", href: "https://medium.com" },
  },
  {
    id: 3,
    date: "Nov 15, 2025",
    title: "Open Source Contributions for Hacktoberfest 2025",
    image: "https://picsum.photos/seed/hacktober/600/340",
    text: "What I learned from contributing to open source for a month straight, and why you should try it too.",
    link: { name: "Read the full post", href: "https://linkedin.com" },
  },
];

export const socials = [
  { id: 1, text: "Github", icon: "github", bg: "#f4656b", link: "https://github.com" },
  { id: 2, text: "Instagram", icon: "instagram", bg: "#4bcb63", link: "https://instagram.com" },
  { id: 3, text: "Twitter/X", icon: "twitter", bg: "#ff866b", link: "https://x.com" },
  { id: 4, text: "LinkedIn", icon: "linkedin", bg: "#05b6f6", link: "https://linkedin.com" },
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
    icon: "📦",
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
    icon: "🧠",
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
    icon: "🍳",
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

export const locations = {
  work: {
    id: 1,
    name: "Work",
    icon: "💼",
    kind: "folder",
    children: projects,
  },
  about: {
    id: 2,
    name: "About me",
    icon: "🙋",
    kind: "file",
    fileType: "txt",
    subtitle: "Meet the Developer Behind the Code",
    description: [
      "Hey! I'm a web developer who enjoys building sleek, interactive websites that actually work well.",
      "I specialize in JavaScript, React, and Next.js — and I love making things feel smooth, fast, and a little delightful.",
      "I'm big on clean UI, good UX, and writing code that doesn't need a search party to debug.",
      "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping coffee, or reading blogs I convinced myself I needed.",
    ],
  },
  resume: {
    id: 3,
    name: "Resume",
    icon: "📄",
    kind: "file",
    fileType: "pdf",
    href: "/resume.pdf",
  },
  trash: {
    id: 4,
    name: "Trash",
    icon: "🗑️",
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
