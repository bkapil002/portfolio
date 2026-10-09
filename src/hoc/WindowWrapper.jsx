import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "../store/window";

gsap.registerPlugin(Draggable);

const WindowWrapper = ({ children, windowKey, className = "" }) => {
  const isOpen = useWindowStore((s) => s.windows[windowKey].isOpen);
  const zIndex = useWindowStore((s) => s.windows[windowKey].zIndex);
  const focusWindow = useWindowStore((s) => s.focusWindow);
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen || !ref.current) return;

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

    const [drag] = Draggable.create(ref.current, {
      onPress: () => focusWindow(windowKey),
    });

    return () => drag.kill();
  }, [isOpen, focusWindow, windowKey]);

  if (!isOpen) return null;

  return (
    <section
      id={windowKey}
      ref={ref}
      style={{ zIndex }}
      className={`window ${className}`}
      onMouseDown={() => focusWindow(windowKey)}
    >
      {children}
    </section>
  );
};

export default WindowWrapper;
