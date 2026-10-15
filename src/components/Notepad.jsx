import useWindowStore from "../store/window";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const menuItems = ["File", "Edit", "Format", "View", "Help"];

const Notepad = () => {
  const data = useWindowStore((s) => s.windows.notepad.data);
  const title = data?.name ?? "Untitled";
  const text = [data?.subtitle, ...(data?.description ?? [])]
    .filter(Boolean)
    .join("\n\n");

  return (
    <WindowWrapper windowKey="notepad" className="flex flex-col">
      <div id="window-header">
        <WindowControls windowKey="notepad" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          {title} - Notepad
        </h2>
        <span className="w-12" />
      </div>

      <div className="notepad-menubar">
        {menuItems.map((item) => (
          <button key={item} type="button" className="notepad-menu">
            {item}
          </button>
        ))}
      </div>

      <textarea
        className="notepad-area"
        defaultValue={text}
        spellCheck={false}
      />

      <div className="notepad-statusbar">
        <span>Ln 1, Col 1</span>
        <span>100%</span>
        <span>Windows (CRLF)</span>
        <span>UTF-8</span>
      </div>
    </WindowWrapper>
  );
};

export default Notepad;
