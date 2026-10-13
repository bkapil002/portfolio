import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "../store/window";

gsap.registerPlugin(Draggable);

const WindowWrapper = ({ children, windowKey, className = "" }) => {
  const isOpen = useWindowStore((s) => s.windows[windowKey].isOpen);
  const isMinimized = useWindowStore((s) => s.windows[windowKey].isMinimized);
  const isMaximized = useWindowStore((s) => s.windows[windowKey].isMaximized);
  const zIndex = useWindowStore((s) => s.windows[windowKey].zIndex);
  const focusWindow = useWindowStore((s) => s.focusWindow);
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen || isMinimized || !ref.current) return;

    gsap.fromTo(
      ref.current,
      { scale: 0.8, opacity: 0, y: 40 },
      {
        duration: 0.4,
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power3.out",
      },
    );
  }, [isOpen, isMinimized, windowKey]);

  useEffect(() => {
    if (!isOpen || isMinimized || isMaximized || !ref.current) return;

    const [drag] = Draggable.create(ref.current, {
      onPress: () => focusWindow(windowKey),
    });

    return () => {
      drag.kill();
      gsap.set(ref.current, { clearProps: "transform" });
    };
  }, [isOpen, isMinimized, isMaximized, focusWindow, windowKey]);

  if (!isOpen || isMinimized) return null;

  return (
    <section
      id={windowKey}
      ref={ref}
      style={{ zIndex }}
      className={`window ${className} ${isMaximized ? "maximized" : ""}`}
      onMouseDown={() => focusWindow(windowKey)}
    >
      {children}
    </section>
  );
};

export default WindowWrapper;
