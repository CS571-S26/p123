import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import ProjectPage from "./pages/projectPage.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:title" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
}