import { finderSidebar } from "../constants";
import useWindowStore from "../store/window";
import useLocationStore from "../store/location";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";
import Icon from "./Icon";

const Finder = () => {
  const activeLocation = useLocationStore((s) => s.activeLocation);
  const setActiveLocation = useLocationStore((s) => s.setActiveLocation);
  const openWindow = useWindowStore((s) => s.openWindow);

  const handleItemOpen = (item) => {
    if (item.kind === "folder") {
      setActiveLocation(item);
      return;
    }
    if (item.fileType === "txt") openWindow("txtfile", item);
    else if (item.fileType === "img") openWindow("imgfile", item);
    else if (item.fileType === "pdf") openWindow("resume", item);
    else if (item.href) window.open(item.href, "_blank");
  };

  const children = activeLocation?.children ?? [];

  return (
    <WindowWrapper windowKey="finder" className="flex flex-col">
      <div id="window-header">
        <WindowControls windowKey="finder" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          {activeLocation?.name ?? "Portfolio"}
        </h2>
        <span className="w-12" />
      </div>

      <div className="flex flex-1 min-h-0">
        <aside className="finder-sidebar w-52 shrink-0 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto">
          {finderSidebar.map((group) => (
            <div key={group.id} className="mb-5">
              <h3 className="text-xs font-semibold text-gray-400 mb-2">
                {group.name}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={
                      activeLocation?.id === item.id ? "active" : ""
                    }
                    onClick={() => setActiveLocation(item)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div className="relative flex-1 overflow-y-auto p-4 content-start">
          <div className="relative min-h-[20rem]">
            <div className="flex flex-wrap gap-6">
              {children.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="finder-item !relative"
                  onClick={() => handleItemOpen(item)}
                >
                  <Icon
                    kind={item.kind}
                    fallback={item.icon}
                    className="finder-icon"
                  />
                  <span className="finder-label text-gray-800">
                    {item.name}
                  </span>
                </button>
              ))}
              {children.length === 0 && (
                <p className="text-sm text-gray-400">This folder is empty.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </WindowWrapper>
  );
};

export default Finder;
