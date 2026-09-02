import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 max-w-6xl mx-auto py-28">

            <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
                >
                    André Felipe
                    <br />
                    <span className="text-primary">Full Stack Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="text-gray-300 mt-6 max-w-lg"
                >
                    Construo aplicações web e APIs robustas, priorizando usabilidade, desempenho e manutenção.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="mt-8 flex flex-wrap gap-3"
                >
                    <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-black rounded-lg font-semibold shadow-sm hover:shadow-md transition">Ver projetos</a>
                    <a href="https://github.com/Andre-gith" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-primary transition">GitHub</a>
                    <a href="https://www.linkedin.com/in/andrefeliperosa/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 border border-gray-700 rounded-lg text-gray-300">LinkedIn</a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.65 }}
                className="w-full md:w-1/2 flex justify-center md:justify-end"
            >
                <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-2xl" aria-hidden="true"></div>
                    <img src="/profile.jpg" alt="André Felipe" className="relative w-60 h-60 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-gray-800 shadow-lg" />
                </div>
            </motion.div>

        </section>
    );
}