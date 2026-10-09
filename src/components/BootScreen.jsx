import { useEffect, useState } from "react";

const BootScreen = () => {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 5000);
    const t2 = setTimeout(() => setGone(true), 5600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`boot-screen${fading ? " boot-fade" : ""}`}>
      <div className="boot-inner">
        <img
          src="/images/loading.png"
          alt="loading"
          className="boot-logo"
          draggable="false"
        />
        <div className="boot-progress">
          <div className="boot-progress-fill" />
        </div>
      </div>
    </div>
  );
};

export default BootScreen;