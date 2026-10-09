import useWindowStore from "../store/window";

const WindowControls = ({ windowKey }) => {
  const closeWindow = useWindowStore((s) => s.closeWindow);

  return (
    <div id="window-controls">
      <button
        type="button"
        aria-label="Close"
        className="control close"
        onClick={() => closeWindow(windowKey)}
      />
      <div className="control minimize" />
      <div className="control maximize" />
    </div>
  );
};

export default WindowControls;
