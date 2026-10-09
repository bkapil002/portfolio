import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Clock = () => {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const id = setInterval(() => setNow(dayjs()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <time className="text-sm text-gray-800">
      {now.format("ddd D MMM h:mm A")}
    </time>
  );
};

export default Clock;
