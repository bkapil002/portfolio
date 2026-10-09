import { useState } from "react";
import { photoCategories, galleryImages } from "../constants";
import useWindowStore from "../store/window";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const spans = [
  "col-span-2 row-span-2",
  "col-span-2",
  "col-span-1",
  "col-span-1",
];

const Photos = () => {
  const [active, setActive] = useState(photoCategories[0].id);
  const openWindow = useWindowStore((s) => s.openWindow);

  const handleOpen = (image, index) => {
    openWindow("imgfile", {
      name: `Photo ${index + 1}.png`,
      image,
      fileType: "img",
    });
  };

  return (
    <WindowWrapper windowKey="photos" className="flex flex-col">
      <div id="window-header">
        <WindowControls windowKey="photos" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          Photos
        </h2>
        <span className="w-12" />
      </div>

      <div className="flex flex-1 min-h-0">
        <aside className="finder-sidebar w-44 shrink-0 bg-gray-50 border-r border-gray-200 p-4">
          <div className="space-y-1">
            {photoCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={active === cat.id ? "active" : ""}
                onClick={() => setActive(cat.id)}
              >
                <span>🖼️</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="photo-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className={`photo-tile ${spans[index % spans.length]}`}
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => handleOpen(image, index)}
              />
            ))}
          </div>
        </div>
      </div>
    </WindowWrapper>
  );
};

export default Photos;
