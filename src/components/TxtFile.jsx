import useWindowStore from "../store/window";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const TxtFile = () => {
  const data = useWindowStore((s) => s.windows.txtfile.data);

  return (
    <WindowWrapper windowKey="txtfile">
      <div id="window-header">
        <WindowControls windowKey="txtfile" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          {data?.name ?? "Read me"}
        </h2>
        <span className="w-12" />
      </div>
      <div className="p-5 max-h-[70vh] overflow-y-auto">
        {data?.subtitle && (
          <p className="text-base font-semibold text-gray-800 mb-3">
            {data.subtitle}
          </p>
        )}
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          {(data?.description ?? []).map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </WindowWrapper>
  );
};

export default TxtFile;
