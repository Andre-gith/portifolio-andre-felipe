export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-gray-300 max-w-3xl mb-6">
        Desenvolvedor Full Stack focado na construção de aplicações web modernas, APIs e produtos digitais. Trabalho com React, Next.js, Node.js e bancos relacionais como PostgreSQL.
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
        <div className="px-4 py-3 bg-neutral-800 rounded">Frontend: React, Next.js, TypeScript</div>
        <div className="px-4 py-3 bg-neutral-800 rounded">Backend: Node.js, Express, REST API</div>
        <div className="px-4 py-3 bg-neutral-800 rounded">DB: PostgreSQL, Prisma</div>
        <div className="px-4 py-3 bg-neutral-800 rounded">DevOps: Docker, Vercel</div>
      </div>
    </section>
  );
}
