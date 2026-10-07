const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">404</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold">Page not found</h1>
      <a href="/" className="mt-6 inline-block text-accent underline underline-offset-4">
        Back to the home page
      </a>
    </div>
  </main>
);

export default NotFound;
