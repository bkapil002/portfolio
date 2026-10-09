import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dock from "./components/Dock";
import Home from "./components/Home";
import Finder from "./components/Finder";
import Terminal from "./components/Terminal";
import Safari from "./components/Safari";
import Contact from "./components/Contact";
import Photos from "./components/Photos";
import Resume from "./components/Resume";
import Snake from "./components/Snake";
import TicTacToe from "./components/TicTacToe";
import TxtFile from "./components/TxtFile";
import ImgFile from "./components/ImgFile";

const App = () => (
  <main>
    <Navbar />
    <Welcome />
    <Dock />
    <Home />
    <Finder />
    <Terminal />
    <Safari />
    <Contact />
    <Photos />
    <Resume />
    <Snake />
    <TicTacToe />
    <TxtFile />
    <ImgFile />
    <ToastContainer position="top-right" theme="light" closeOnClick />
  </main>
);

export default App;
