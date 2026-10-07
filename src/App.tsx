import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* URLs from a short-lived multi-page version of the site */}
      {[["research", "research"], ["publications", "publications"], ["projects", "projects"], ["projects/*", "projects"], ["experience", "experience"], ["about", "experience"], ["interests", "research"], ["contact", "contact"], ["cv", "experience"]].map(([from, to]) => (
        <Route key={from} path={`/${from}`} element={<Navigate to={`/#${to}`} replace />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
