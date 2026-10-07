import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Academic from "./Academic";

const Index = () => {
  // Old page URLs redirect to /#section; jump to that section once rendered.
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }, [hash]);
  return <Academic />;
};

export default Index;
