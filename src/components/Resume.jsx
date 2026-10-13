import { IoDownloadOutline } from "react-icons/io5";
import useWindowStore from "../store/window";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const Resume = () => {
  const data = useWindowStore((s) => s.windows.resume.data);
  const href = data?.href ?? "/resume.pdf";

  return (
    <WindowWrapper windowKey="resume">
      <div id="window-header">
        <WindowControls windowKey="resume" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          Resume.pdf
        </h2>
        <a
          href={href}
          download
          className="flex items-center gap-1 text-blue-600 text-xs"
          title="Download resume"
        >
          <IoDownloadOutline size={16} /> Download
        </a>
      </div>

      <div className="w-[42rem] max-w-[85vw] h-[70vh] bg-gray-100">
        <iframe
          src={href}
          title="Resume"
          className="w-full h-full border-0"
        />
      </div>
    </WindowWrapper>
  );
};

export default Resume;
