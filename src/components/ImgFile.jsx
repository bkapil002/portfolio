import useWindowStore from "../store/window";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const ImgFile = () => {
  const data = useWindowStore((s) => s.windows.imgfile.data);

  return (
    <WindowWrapper windowKey="imgfile">
      <div id="window-header">
        <WindowControls windowKey="imgfile" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          {data?.name ?? "Image"}
        </h2>
        <span className="w-12" />
      </div>
      <div className="bg-gray-100 flex items-center justify-center p-4">
        {data?.image && (
          <img
            src={data.image}
            alt={data?.name ?? "preview"}
            className="max-h-[60vh] w-auto rounded-lg shadow"
          />
        )}
      </div>
    </WindowWrapper>
  );
};

export default ImgFile;
