import useWindowStore from "../store/window";

const WindowControls = ({ windowKey }) => {
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const minimizeWindow = useWindowStore((s) => s.minimizeWindow);
  const toggleMaximize = useWindowStore((s) => s.toggleMaximize);

  return (
    <div id="window-controls">
      <button
        type="button"
        aria-label="Close"
        className="control close"
        onClick={(e) => {
          e.stopPropagation();
          closeWindow(windowKey);
        }}
      />
      <button
        type="button"
        aria-label="Minimize"
        className="control minimize"
        onClick={(e) => {
          e.stopPropagation();
          minimizeWindow(windowKey);
        }}
      />
      <button
        type="button"
        aria-label="Maximize"
        className="control maximize"
        onClick={(e) => {
          e.stopPropagation();
          toggleMaximize(windowKey);
        }}
      />
    </div>
  );
};

export default WindowControls;
