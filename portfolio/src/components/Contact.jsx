import { CONTACT_EMAIL } from "../config";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 text-center">

      <h2 className="text-3xl font-bold mb-4">Let's build something.</h2>
      <p className="text-gray-300 mb-6">Se você tem um projeto ou oportunidade, vamos conversar.</p>

      <div className="flex justify-center gap-6 text-gray-300">
        <a href="https://github.com/Andre-gith" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/andrefeliperosa/" target="_blank" rel="noreferrer">LinkedIn</a>
        {CONTACT_EMAIL && (
          <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
        )}
      </div>

    </section>
  );
}