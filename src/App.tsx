import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "./components/site/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { projects } from "./content/structure";

/** Earlier versions of the site had separate pages; their URLs now jump to the matching section. */
const ProjectRedirect = () => {
  const { slug } = useParams();
  return projects.some((p) => p.slug === slug) ? <Navigate to={`/#${slug}`} replace /> : <NotFound />;
};

const OLD: Record<string, string> = {
  "/research": "research",
  "/projects": "research",
  "/publications": "publications",
  "/about": "experience",
  "/experience": "experience",
  "/interests": "research",
  "/contact": "contact",
  "/cv": "experience",
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        {Object.entries(OLD).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={`/#${to}`} replace />} />
        ))}
        <Route path="/projects/:slug" element={<ProjectRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
