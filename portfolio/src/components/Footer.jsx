export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-400">
        <div className="font-semibold">André Felipe</div>
        <div>Full Stack Developer</div>

        <div className="mt-3 flex justify-center gap-4">
          <a href="https://github.com/Andre-gith" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/andrefeliperosa/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className="mt-4 text-sm">© 2026 André Felipe</div>
      </div>
    </footer>
  );
}
