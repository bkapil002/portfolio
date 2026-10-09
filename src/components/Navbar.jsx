import { navLinks } from "../constants";
import useWindowStore from "../store/window";
import Clock from "./Clock";

const navIconImgs = [
  { key: "wifi", src: "/icons/wifi.svg", alt: "wifi" },
  { key: "search", src: "/icons/search.svg", alt: "search" },
  { key: "user", src: "/icons/user.svg", alt: "user" },
  { key: "mode", src: "/icons/mode.svg", alt: "theme" },
];

const Navbar = () => {
  const openWindow = useWindowStore((s) => s.openWindow);

  return (
    <nav id="navbar">
      <div id="nav-left" className="flex items-center gap-3">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="w-4.5 h-4.5"
          draggable="false"
        />
        <span className="font-bold text-sm sm:text-base">
          Your Name&apos;s Portfolio
        </span>
        <ul id="nav-links" className="ml-4 hidden sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-sm text-gray-800"
              onClick={() => openWindow(link.type)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>

      <ul id="nav-icons" className="hidden sm:flex text-gray-800">
        {navIconImgs.map((icon) => (
          <li key={icon.key} className="p-1 hover:bg-gray-200 rounded">
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-[18px] h-[18px]"
            />
          </li>
        ))}
        <li className="p-1">
          <Clock />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;