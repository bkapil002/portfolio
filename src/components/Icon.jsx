const Icon = ({ kind, fallback, className = "" }) => {
if (kind === "folder") {
    return (
      <img
        src="/images/folder.png"
        alt="folder"
        draggable="false"
        className={className}
      />
    );
  }
  return <span className={className}>{fallback}</span>;
};

export default Icon;