import { useEffect, useRef } from "react";
import gsap from "gsap";

const subtitle = "Hey, I'm Your Name! Welcome to my";
const title = "Portfolio";
const footer = "Explore it like a Mac.";

const splitChars = (text) =>
  text.split("").map((char, i) => ({ char, key: `${text}-${i}` }));

const subtitleChars = splitChars(subtitle);
const titleChars = splitChars(title);

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const min = 100;
    const max = 900;

    const handleMove = (e) => {
      const weightChars = (container, base) => {
        if (!container.current) return;
        const spans = container.current.querySelectorAll("span");
        spans.forEach((span) => {
          const rect = span.getBoundingClientRect();
          const center = rect.left + rect.width / 2;
          const distance = Math.abs(e.clientX - center);
          const weight = Math.round(
            base + ((max - base) * Math.exp(-(distance * distance) / 8000)) /
              (max / min),
          );
          gsap.to(span, {
            duration: 0.25,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${Math.min(max, Math.max(min, weight))}`,
          });
        });
      };
      weightChars(titleRef, 700);
    };

    const handleLeave = () => {
      [titleRef, subtitleRef].forEach((r) => {
        if (!r.current) return;
        r.current.querySelectorAll("span").forEach((span) => {
          gsap.to(span, {
            duration: 0.3,
            ease: "power2.out",
            fontVariationSettings: "'wght' 700",
          });
        });
      });
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section id="welcome" className="pointer-events-none">
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div
          ref={subtitleRef}
          className="font-georama text-2xl sm:text-3xl text-white/90"
        >
          {subtitleChars.map(({ char, key }) => (
            <span
              key={key}
              style={{ fontVariationSettings: "'wght' 100", display: "inline" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div
          ref={titleRef}
          className="font-georama leading-none text-white text-6xl sm:text-8xl lg:text-9xl my-2"
        >
          {titleChars.map(({ char, key }) => (
            <span key={key} style={{ fontVariationSettings: "'wght' 700" }}>
              {char}
            </span>
          ))}
        </div>

        <p className="font-georama text-2xl sm:text-3xl text-white/90">
          {footer}
        </p>

        <p className="small-screen">
          This portfolio is designed for desktop/tablet screens only.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
