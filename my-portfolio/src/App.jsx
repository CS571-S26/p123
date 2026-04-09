import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/projectPage.jsx";

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:title" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
}