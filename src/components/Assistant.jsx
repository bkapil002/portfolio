import { useEffect, useRef, useState } from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";
import useWindowStore from "../store/window";
import {
  assistantExperience,
  assistantHowIWork,
  assistantProjects,
  assistantSkills,
} from "../constants/assistant";

const starters = [
  { label: "What are your skills?", value: "skills" },
  { label: "Walk me through your experience", value: "experience" },
  { label: "Which projects have you shipped?", value: "projects" },
];

const projectOptions = assistantProjects.map((project) => ({
  label: project.name,
  value: `project:${project.key}`,
}));

const connectOption = { label: "Connect to Brahm", value: "contact" };

const withContact = (options = []) =>
  options.some((option) => option.value === "contact")
    ? options
    : [...options, connectOption];

const projectKeywords = {
  razorpay: "frc",
  "google maps": "frc",
  maps: "frc",
  socket: "evoluer",
  "socket.io": "evoluer",
  agora: "samzara",
  jwt: "samzara",
  rbac: "samzara",
  "3d": "orb",
  threejs: "orb",
  "next.js": "orb",
  wordpress: "sentrimesh",
  seo: "sentrimesh",
  python: "voxa",
  ocr: "voxa",
  "edge tts": "voxa",
};

const intro = {
  role: "assistant",
  text: "Hey, I'm Brahm's assistant. I can walk you through his skills, experience and each project he's shipped. Where would you like to start?",
  options: starters,
};

const now = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const findProject = (query) => {
  const q = query.toLowerCase();
  const byAlias = assistantProjects.find(
    (project) =>
      `project:${project.key}` === q ||
      project.name.toLowerCase() === q ||
      project.aliases.some((alias) => q.includes(alias)),
  );
  if (byAlias) return byAlias;

  const keyword = Object.keys(projectKeywords).find((word) => q.includes(word));
  return keyword
    ? assistantProjects.find((project) => project.key === projectKeywords[keyword])
    : null;
};

const getResponse = (input) => {
  const q = input.trim().toLowerCase();
  const project = findProject(q);

  if (project) {
    return {
      text: project.text,
      meta: project.meta,
      bullets: project.bullets,
      links: project.links,
      options: [
        { label: "See all projects", value: "projects" },
        { label: "Connect to Brahm", value: "contact" },
      ],
    };
  }

  if (
    q === "skills" ||
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("tools")
  ) {
    return {
      text: assistantSkills.text,
      groups: assistantSkills.groups,
      footer:
        "That stack has been battle-tested for 1+ year at Brandingrain, across EdTech, a healthcare directory and a community platform.",
      options: [
        { label: "Where has he used it?", value: "experience" },
        { label: "Show me the projects", value: "projects" },
      ],
    };
  }

  if (
    q === "experience" ||
    q.includes("experience") ||
    q.includes("work history") ||
    q.includes("company") ||
    q.includes("job") ||
    q.includes("brandingrain")
  ) {
    return {
      text: assistantExperience.text,
      meta: assistantExperience.meta,
      groups: assistantExperience.groups,
      footer: assistantExperience.footer,
      options: [
        { label: "Show me the projects", value: "projects" },
        { label: "Open his resume", value: "resume" },
        { label: "Connect to Brahm", value: "contact" },
      ],
    };
  }

  if (
    q === "projects" ||
    q.includes("project") ||
    q.includes("portfolio") ||
    q.includes("shipped") ||
    q.includes("built")
  ) {
    return {
      text: "He's shipped six projects so far. Pick one and I'll break down the stack and what he built:",
      options: projectOptions,
    };
  }

  if (
    q.includes("how do") ||
    q.includes("how he work") ||
    q.includes("working style") ||
    q.includes("approach")
  ) {
    return assistantHowIWork;
  }

  if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
    return {
      text: "Opening his resume now — you can also find it in the Resume folder on the desktop.",
      action: "resume",
      options: [
        { label: "Connect to Brahm", value: "contact" },
        { label: "See all projects", value: "projects" },
      ],
    };
  }

  if (
    q.includes("contact") ||
    q.includes("hire") ||
    q.includes("available") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("phone") ||
    q.includes("call")
  ) {
    return {
      text: "He's open to new work and usually replies within a day. Here's the quickest way to reach him:",
      meta: "kapilbrahm@gmail.com · +91 98777 07118",
      footer:
        "You'll also find him on GitHub and LinkedIn — or use the Contact app in the dock.",
      links: [
        { label: "Email", href: "mailto:kapilbrahm@gmail.com" },
        { label: "GitHub", href: "https://github.com/bkapil002" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/brahm-kapila-078369286/" },
      ],
      options: [
        { label: "Walk me through his experience", value: "experience" },
        { label: "See all projects", value: "projects" },
      ],
    };
  }

  if (
    q.includes("certif") ||
    q.includes("education") ||
    q.includes("college") ||
    q.includes("study") ||
    q.includes("bca") ||
    q.includes("degree")
  ) {
    return {
      text: "On the learning side, he's a self-driven developer with formal computer application training:",
      meta: "Bachelor of Computer Application (BCA) · S.V.S.D. P.G. College, Bhatoli (H.P.) · CGPA 7.5",
      bullets: [
        "Front End Development Certification — freeCodeCamp",
        "Responsive Web Design Certification — freeCodeCamp",
        "Senior Secondary, Science Stream — Himachal Pradesh Board",
      ],
      options: [
        { label: "What are his skills?", value: "skills" },
        { label: "Open his resume", value: "resume" },
      ],
    };
  }

  if (
    q.includes("who") ||
    q.includes("about") ||
    q.includes("summary") ||
    q.includes("introduce")
  ) {
    return {
      text: "Brahm Kapila is a full stack developer with over a year of production experience building MERN apps — an EdTech platform with live video classes, a rehab-centre directory with maps and an AI chatbot, and a community platform where each user type gets different permissions.",
      footer:
        "He's comfortable on both the frontend and backend, deploys his own work, and writes small Python services when Node isn't the right tool.",
      options: [
        { label: "What are his skills?", value: "skills" },
        { label: "Walk me through his experience", value: "experience" },
        { label: "See all projects", value: "projects" },
      ],
    };
  }

  if (q.includes("thank")) {
    return {
      text: "Anytime! If you want to take the next step, the Contact app in the dock is the fastest way to reach Brahm.",
      options: [{ label: "Connect to Brahm", value: "contact" }],
    };
  }

  if (q.includes("bye") || q.includes("later")) {
    return {
      text: "Cheers! I'll be right here in the dock if you want to explore more.",
      options: starters,
    };
  }

  if (
    q === "hi" ||
    q === "hey" ||
    q === "hello" ||
    q.includes("good morning") ||
    q.includes("good evening")
  ) {
    return {
      text: "Hey! Good to see you. Want the quick tour? Start with skills, experience or the project list.",
      options: starters,
    };
  }

  return {
    text: "I'm not sure I caught that one. I'm best at questions about Brahm's skills, experience, projects and how to reach him — or you can email him directly at kapilbrahm@gmail.com.",
    options: starters,
  };
};

const Assistant = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [thinking, setThinking] = useState(true);
  const scrollRef = useRef(null);
  const timeoutRef = useRef(null);
  const bootRef = useRef(null);
  const openWindow = useWindowStore((s) => s.openWindow);
  const isOpen = useWindowStore((s) => s.windows.assistant.isOpen);

  useEffect(() => {
    if (!isOpen || messages.length) return undefined;

    setThinking(true);
    bootRef.current = setTimeout(() => {
      setMessages([
        { ...intro, options: withContact(intro.options), time: now() },
      ]);
      setThinking(false);
    }, 1500);

    return () => clearTimeout(bootRef.current);
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, thinking]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const send = (raw, display) => {
    const text = raw.trim();
    if (!text || thinking) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: (display ?? text).trim(), time: now() },
    ]);
    setValue("");
    setThinking(true);

    const reply = getResponse(text);
    const alreadyContact = reply.links?.some((link) =>
      link.href.startsWith("mailto:"),
    );
    const options = alreadyContact
      ? reply.options
      : withContact(reply.options);
    const finalReply = { ...reply, options };
    const extra = (reply.groups?.length ?? 0) * 90 + (reply.bullets?.length ?? 0) * 70;
    const delay = Math.min(1800, 500 + reply.text.length * 5 + extra);

    timeoutRef.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", ...finalReply, time: now() },
      ]);
      setThinking(false);
      if (reply.action === "resume") openWindow("resume");
    }, delay);
  };

  const last = messages[messages.length - 1];
  const showOptions = !thinking && last?.role === "assistant" && last?.options;

  return (
    <WindowWrapper windowKey="assistant">
      <div id="window-header">
        <WindowControls windowKey="assistant" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          Assistant
        </h2>
        <span className="w-12" />
      </div>

      <div className="assistant-body">
        <div className="assistant-hero">
          <img
            src="/icons/assistant.svg"
            alt=""
            className="assistant-orb"
            draggable="false"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Brahm&apos;s Assistant
            </h3>
            <p className="text-xs text-gray-500">
              <span className="assistant-status" /> Online — ask me anything
              about Brahm
            </p>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="assistant-messages"
          role="log"
          aria-live="polite"
        >
          {messages.map((message, i) => (
            <div key={i} className={`assistant-row ${message.role}`}>
              {message.role === "assistant" && (
                <img
                  src="/icons/assistant.svg"
                  alt=""
                  className="assistant-avatar"
                  draggable="false"
                />
              )}
              <div className="assistant-bubble-wrap">
                <div className="assistant-bubble">
                  <p className="assistant-text">{message.text}</p>
                  {message.meta && (
                    <p className="assistant-meta">{message.meta}</p>
                  )}
                  {message.groups && (
                    <dl className="assistant-groups">
                      {message.groups.map((group) => (
                        <div key={group.label}>
                          <dt>{group.label}</dt>
                          <dd>{group.items}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {message.bullets && (
                    <ul className="assistant-bullets">
                      {message.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {message.footer && (
                    <p className="assistant-footer">{message.footer}</p>
                  )}
                  {message.links && (
                    <div className="assistant-links">
                      {message.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <span className="assistant-time">{message.time}</span>
              </div>
            </div>
          ))}
          {thinking && (
            <div className="assistant-row assistant">
              <img
                src="/icons/assistant.svg"
                alt=""
                className="assistant-avatar"
                draggable="false"
              />
              <div className="assistant-bubble-wrap">
                <div className="assistant-bubble assistant-typing">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="assistant-time">typing…</span>
              </div>
            </div>
          )}
        </div>

        {showOptions && (
          <div className="assistant-options">
            {last.options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => send(option.value, option.label)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        <form
          className="assistant-input-row"
          onSubmit={(e) => {
            e.preventDefault();
            send(value);
          }}
        >
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask Brahm's assistant..."
            aria-label="Ask Brahm's assistant"
          />
          <button type="submit" disabled={!value.trim() || thinking}>
            Ask
          </button>
        </form>
      </div>
    </WindowWrapper>
  );
};

export default Assistant;
