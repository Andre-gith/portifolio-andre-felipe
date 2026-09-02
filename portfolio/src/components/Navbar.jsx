import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed w-full z-40 transition-colors ${scrolled ? "backdrop-blur bg-black/60" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-semibold text-lg">ANDRÉ FELIPE</a>

        <nav className="hidden md:flex gap-6 items-center text-gray-300">
          <a href="#projects" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#stack" className="hover:text-white">Stack</a>
          <a href="#github" className="hover:text-white">GitHub</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 border rounded border-gray-700">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 border-t border-gray-800">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#projects" onClick={() => setOpen(false)}>Work</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#stack" onClick={() => setOpen(false)}>Stack</a>
            <a href="#github" onClick={() => setOpen(false)}>GitHub</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
