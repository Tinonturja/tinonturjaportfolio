import { Link } from "react-router-dom";
import { usePageMeta } from "@/components/site/bits";

const NotFound = ({ inline = false }: { inline?: boolean }) => {
  usePageMeta("Page not found", "This page does not exist.", "/404");
  return (
    <div className={inline ? "py-10" : "py-20"}>
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">404</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">The page you followed does not exist on this site.</p>
      <Link to="/" className="mt-6 inline-block text-accent underline underline-offset-4">
        Back to the home page
      </Link>
    </div>
  );
};

export default NotFound;
