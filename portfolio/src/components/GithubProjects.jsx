import useGithubRepos from "../hooks/useGithubRepos";
import { featuredRepositories } from "../config";

export default function GithubProjects() {
  const { status, data, error } = useGithubRepos({ featuredRepositories });

  return (
    <section id="github" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Mais projetos no GitHub</h2>
      <p className="text-gray-300 mb-6">Explore projetos públicos e contribuições.</p>

      {status === "empty" && (
        <div className="text-gray-400">Nenhum repositório selecionado para destaque — configure `featuredRepositories` em <code>src/config.js</code>.</div>
      )}

      {status === "loading" && <div className="text-gray-400">Carregando repositórios...</div>}
      {status === "error" && <div className="text-red-500">Erro ao buscar GitHub: {error}</div>}

      {status === "success" && (
        <ul className="grid md:grid-cols-2 gap-6">
          {data.map((r) => (
            <li key={r.id} className="bg-neutral-800 p-5 rounded-lg hover:shadow-lg transition-shadow">
              <a href={r.html_url} target="_blank" rel="noreferrer" className="font-semibold text-lg">{r.name}</a>
              <p className="text-sm text-gray-300 mt-2">{r.description}</p>
              <div className="text-xs text-gray-400 mt-3">{r.language || "—"} • ★ {r.stargazers_count}</div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <a href="https://github.com/Andre-gith" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">Ver GitHub</a>
      </div>
    </section>
  );
}
