import { IoDownloadOutline, IoDocumentTextOutline } from "react-icons/io5";
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

      <div className="w-[42rem] max-w-[85vw] h-[70vh] bg-gray-100 flex flex-col items-center justify-center gap-4 p-8">
        <IoDocumentTextOutline size={72} className="text-gray-300" />
        <p className="text-gray-500 text-sm text-center">
          Drop your <span className="font-semibold">resume.pdf</span> into the{" "}
          <code className="bg-gray-200 px-1 rounded">public/</code> folder and
          it will be served here.
        </p>
        <a
          href={href}
          download
          className="bg-gray-900 text-white text-sm font-semibold rounded-md px-5 py-2 hover:bg-gray-700"
        >
          Download Resume
        </a>
      </div>
    </WindowWrapper>
  );
};

export default Resume;
