import { useEffect, useRef } from "react";
import gsap from "gsap";
import { dockApps } from "../constants";
import useWindowStore from "../store/window";
import useLocationStore from "../store/location";
import { locations } from "../constants";

const Dock = () => {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const openWindow = useWindowStore((s) => s.openWindow);
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const windows = useWindowStore((s) => s.windows);
  const setActiveLocation = useLocationStore((s) => s.setActiveLocation);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e) => {
      const icons = container.querySelectorAll(".dock-icon");
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const distance = Math.abs(e.clientX - (rect.left + rect.width / 2));
        const x = Math.exp(-(distance ** 2.5) / 20000);
        gsap.to(icon, {
          scale: 1 + 0.25 * x,
          y: -15 * x,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    const handleLeave = () => {
      container.querySelectorAll(".dock-icon").forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);
    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const handleClick = (app) => {
    if (!app.canOpen) return;

    if (app.id === "finder" || app.id === "photos") {
      const isOpen = windows[app.id].isOpen;
      if (isOpen) closeWindow(app.id);
      else {
        if (app.id === "finder") setActiveLocation(locations.work);
        openWindow(app.id);
      }
      return;
    }

    if (windows[app.id].isOpen) closeWindow(app.id);
    else openWindow(app.id);
  };

  return (
    <section id="dock">
      <div ref={containerRef} className="dock-container">
        {dockApps.map((app, i) => (
          <div
            key={app.id}
            ref={(el) => (iconsRef.current[i] = el)}
            className="dock-icon"
            onClick={() => handleClick(app)}
            title={app.name}
          >
            <img
              src={app.icon}
              alt={app.name}
              className="w-9 h-9"
              draggable="false"
            />
            <span className="dock-tooltip">{app.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dock;
