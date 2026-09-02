import { useState, useEffect } from "react";
import { featuredRepositories as defaultFeatured } from "../config";
import { useReducedMotion } from "framer-motion";

// Hook to fetch featured GitHub repositories. Configure names in src/config.js
export default function useGithubRepos({ featuredRepositories = defaultFeatured } = {}) {
  const initial = !featuredRepositories || featuredRepositories.length === 0
    ? { status: "empty", data: [], error: null }
    : { status: "idle", data: [], error: null };
  const [state, setState] = useState(initial);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!featuredRepositories || featuredRepositories.length === 0) {
      return;
    }

    let mounted = true;
    let loadingTimer = setTimeout(() => setState({ status: "loading", data: [], error: null }), 0);

    const fetchRepos = async () => {
      try {
        const results = await Promise.all(
          featuredRepositories.map(async (name) => {
            const res = await fetch(`https://api.github.com/repos/Andre-gith/${name}`);
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
          })
        );
        if (!mounted) return;
        // respect reduced motion by delaying less
        if (!reduce) await new Promise((r) => setTimeout(r, 150));
        setState({ status: "success", data: results, error: null });
      } catch (err) {
        if (!mounted) return;
        setState({ status: "error", data: [], error: err.message });
      }
    };

    fetchRepos();

    return () => {
      mounted = false;
      clearTimeout(loadingTimer);
    };
  }, [featuredRepositories, reduce]);

  return state;
}
