import { techStack } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const Terminal = () => (
  <WindowWrapper windowKey="terminal" className="!bg-transparent !shadow-none">
    <div className="rounded-xl overflow-hidden bg-[#0d1117] text-gray-200">
      <div id="window-header">
        <WindowControls windowKey="terminal" />
        <h2 className="text-sm font-bold text-gray-700 flex-1 text-center">
          Tech Stack
        </h2>
        <span className="w-12" />
      </div>

      <div className="p-5 font-roboto text-sm">
        <p className="text-[#00a154] mb-4">
          @yourname % show tech stack
        </p>

        <div className="grid grid-cols-[140px_1fr] pb-2 text-gray-400 text-xs uppercase tracking-wide">
          <span>Category</span>
          <span>Technologies</span>
        </div>

        {techStack.map((row) => (
          <div key={row.category} className="tech-row">
            <span className="tech-category">{row.category}</span>
            <div className="tech-items">
              {row.items.map((item) => (
                <span key={item} className="skill-card text-gray-900">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        <p className="mt-4 text-gray-400 text-xs">
          {techStack.length} of {techStack.length} stacks loaded successfully
          (100%)
        </p>
        <p className="text-gray-400 text-xs">Render time: 6ms</p>
      </div>
    </div>
  </WindowWrapper>
);

export default Terminal;
