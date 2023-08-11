function Navbar() {
  return (
    <nav className="fixed z-50 w-full overflow-hidden bg-white/90 py-4 text-neutral-600">
      <div className="mx-auto flex items-center justify-center px-6 md:max-w-3xl md:justify-between">
        <h1 className="font-bold">
          <a href="/">João Alberto</a>
        </h1>
      </div>
    </nav>
  );
}

export { Navbar };
