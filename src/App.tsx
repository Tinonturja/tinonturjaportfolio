import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/site/Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import About from "./pages/About";
import { ProjectIndex, ProjectDetail } from "./pages/Projects";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectIndex />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        {/* Old URLs from the previous site structure */}
        <Route path="/experience" element={<Navigate to="/about" replace />} />
        <Route path="/interests" element={<Navigate to="/about" replace />} />
        <Route path="/contact" element={<Navigate to="/about" replace />} />
        <Route path="/cv" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
