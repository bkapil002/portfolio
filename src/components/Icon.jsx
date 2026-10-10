const Icon = ({ kind, fallback, className = "" }) => {
  const isPath = typeof fallback === "string" && fallback.startsWith("/");
  if (kind === "folder") {
    return (
      <img
        src={isPath ? fallback : "/images/folder.png"}
        alt="folder"
        draggable="false"
        className={className}
      />
    );
  }
  if (isPath) {
    return (
      <img
        src={fallback}
        alt=""
        draggable="false"
        className={className}
      />
    );
  }
  return <span className={className}>{fallback}</span>;
};

export default Icon;