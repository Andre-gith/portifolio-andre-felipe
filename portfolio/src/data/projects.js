export const projects = [
  {
    id: "01",
    number: "01",
    title: "Nota de Banca - Simulador",
    slug: "simulador-concursos",
    description:
      "Plataforma para criar simulados de concursos, acompanhar resultados e estudar com regras de pontuação da banca.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Andre-gith/simulador-concursos",
    demo: "https://simulador-concursos.onrender.com/",
    image: "/projects/simulador-concursos/nota-de-banca.png",
    featured: true,
  },
  {
    id: "02",
    number: "02",
    title: "Construtor de Presell",
    slug: "construtor-de-presell",
    description:
      "Aplicativo para criação de páginas de pré-sell (frontend + backend). Repositório com frontend e backend e deploy público em Vercel.",
    technologies: ["JavaScript", "Node.js", "Vercel"],
    github: "https://github.com/Andre-gith/Construtor-de-Presell",
    demo: "https://construtor-de-presell.vercel.app/",
    image: "/projects/construtor-de-presell/placeholder.png",
    featured: true,
  },
  {
    id: "03",
    number: "03",
    title: "API Gerenciamento de Tarefas",
    slug: "api-gerenciamento-tarefas",
    description: "API REST para gerenciamento de tarefas, implementada em Node.js e Express (endpoints para CRUD).",
    technologies: ["Node.js", "Express", "JavaScript"],
    github: "https://github.com/Andre-gith/api-gerenciamento-tarefas",
    demo: "",
    image: "/projects/api-gerenciamento-tarefas/placeholder.png",
    featured: false,
  },
  {
    id: "04",
    number: "04",
    title: "Laço",
    slug: "laco",
    description:
      "Galeria de fotos para casamentos e eventos. Os convidados podem enviar fotos pelo navegador, compartilhando a galeria por QR Code.",
    technologies: ["Galeria de fotos", "QR Code", "Eventos"],
    github: "",
    demo: "https://wedding-photo-app-eta.vercel.app/",
    image: "/projects/laco/laco.png",
    featured: true,
  },
  {
    id: "05",
    number: "05",
    title: "FreelaCalc",
    slug: "freelacalc",
    description:
      "Calculadora de preços para freelancers que considera horas de trabalho, impostos e margem de lucro para sugerir o valor de um projeto.",
    technologies: ["Precificação", "Freelancers", "Calculadora"],
    github: "",
    demo: "https://freelacalc.netlify.app/",
    image: "/projects/freelacalc/freelacalc.png",
    featured: true,
  },
];

export default projects;
