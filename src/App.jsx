import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BootScreen from "./components/BootScreen";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dock from "./components/Dock";
import Home from "./components/Home";
import Finder from "./components/Finder";
import Terminal from "./components/Terminal";
import Safari from "./components/Safari";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Snake from "./components/Snake";
import TicTacToe from "./components/TicTacToe";
import TxtFile from "./components/TxtFile";
import Notepad from "./components/Notepad";
import ImgFile from "./components/ImgFile";

const App = () => (
  <main>
    <BootScreen />
    <Navbar />
    <Welcome />
    <Dock />
    <Home />
    <Finder />
    <Terminal />
    <Safari />
    <Contact />
    <Resume />
    <Snake />
    <TicTacToe />
    <TxtFile />
    <Notepad />
    <ImgFile />
    <ToastContainer position="top-right" theme="light" closeOnClick />
  </main>
);

export default App;
