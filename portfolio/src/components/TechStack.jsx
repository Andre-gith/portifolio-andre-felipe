const stacks = {
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Vite"],
  Backend: ["Node.js", "Express", "REST API", "Prisma"],
  Database: ["PostgreSQL", "MongoDB"],
  DevOps: ["Docker", "Git", "GitHub", "Vercel"],
};

export default function TechStack() {
  return (
    <section id="stack" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.entries(stacks).map(([key, items]) => (
          <div key={key} className="bg-neutral-800 p-4 rounded">
            <h3 className="font-semibold mb-3">{key}</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              {items.map((i) => (
                <li key={i} className="inline-block mr-2 mb-2 px-2 py-1 bg-neutral-900 rounded">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
