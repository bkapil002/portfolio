import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { locations } from "../constants";
import useWindowStore from "../store/window";
import useLocationStore from "../store/location";
import Icon from "./Icon";

gsap.registerPlugin(Draggable);

const Home = () => {
  const openWindow = useWindowStore((s) => s.openWindow);
  const setActiveLocation = useLocationStore((s) => s.setActiveLocation);
  const ref = useRef(null);

  useEffect(() => {
    const folders = ref.current?.querySelectorAll(".folder") ?? [];
    const instances = [...folders].map((folder) => Draggable.create(folder)[0]);
    return () => instances.forEach((d) => d.kill());
  }, []);

  const handleOpen = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  return (
    <section id="home" ref={ref}>
      {locations.work.children.map((project) => (
        <button
          key={project.id}
          type="button"
          className={`folder ${project.position}`}
          onClick={() => handleOpen(project)}
        >
          <Icon
            kind={project.kind}
            fallback={project.icon}
            className="folder-icon"
          />
          <span className="folder-label">{project.name}</span>
        </button>
      ))}
    </section>
  );
};

export default Home;
