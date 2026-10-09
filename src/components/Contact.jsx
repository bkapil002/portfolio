import { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { toast } from "react-toastify";
import { socials } from "../constants";
import useWindowStore from "../store/window";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const iconSrc = {
  github: "/icons/github.svg",
  instagram: null,
  twitter: "/icons/twitter.svg",
  linkedin: "/icons/linkedin.svg",
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const openWindow = useWindowStore((s) => s.openWindow);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Thanks! Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
    openWindow("contact");
  };

  return (
    <WindowWrapper windowKey="contact">
      <div id="window-header">
        <WindowControls windowKey="contact" />
        <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
          Contact Me
        </h2>
        <span className="w-12" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-2xl">
            🙂
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Let&apos;s Connect</h3>
            <p className="text-sm text-gray-500">
              Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.
            </p>
          </div>
        </div>

        <a
          href="mailto:you@example.com"
          className="block text-center text-blue-600 font-semibold mb-6 hover:underline"
        >
          you@example.com
        </a>

        <form onSubmit={handleSubmit} className="space-y-3 mb-6">
          <div className="grid grid-cols-2 gap-3">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="bg-gray-100 rounded-md px-3 py-2 text-sm outline-none"
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your email"
              className="bg-gray-100 rounded-md px-3 py-2 text-sm outline-none"
            />
          </div>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your message"
            rows={3}
            className="w-full bg-gray-100 rounded-md px-3 py-2 text-sm outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white text-sm font-semibold rounded-md py-2 hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>

        <ul className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="contact-social"
                style={{ backgroundColor: social.bg }}
              >
                {iconSrc[social.icon] ? (
                  <img
                    src={iconSrc[social.icon]}
                    alt={social.text}
                    className="w-5 h-5"
                  />
                ) : (
                  <FaInstagram size={22} />
                )}
                <span>{social.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </WindowWrapper>
  );
};

export default Contact;
