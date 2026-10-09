import { IoArrowForward } from "react-icons/io5";
import { blogPosts } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "./WindowControls";

const Safari = () => (
  <WindowWrapper windowKey="safari" className="flex flex-col">
    <div id="window-header">
      <WindowControls windowKey="safari" />
      <h2 className="text-sm font-bold text-gray-800 flex-1 text-center">
        My Developer Blog
      </h2>
      <span className="w-12" />
    </div>

    <div className="flex justify-center p-3 border-b border-gray-200 bg-white">
      <input
        type="text"
        placeholder="Search or enter website name"
        className="w-full max-w-md bg-gray-100 text-sm text-gray-600 rounded-md px-4 py-1.5 outline-none"
        readOnly
      />
    </div>

    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          className="grid grid-cols-[1fr_200px] gap-5 items-center"
        >
          <div>
            <p className="text-xs text-gray-400 mb-1">{post.date}</p>
            <h3 className="text-lg font-bold text-pink-600 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{post.text}</p>
            <a
              href={post.link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
            >
              {post.link.name}
              <IoArrowForward />
            </a>
          </div>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-28 object-cover rounded-lg shadow"
          />
        </article>
      ))}
    </div>
  </WindowWrapper>
);

export default Safari;
