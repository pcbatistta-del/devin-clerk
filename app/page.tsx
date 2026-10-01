import Link from "next/link";
import { appConfig } from "@/app.config";

const highlights = [
  "Monitoramento de processos",
  "Workflows automatizados",
  "Humano no loop",
];

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">{appConfig.description}</p>
      <ul className="flex flex-wrap justify-center gap-2 text-sm">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent"
          >
            {highlight}
          </li>
        ))}
      </ul>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Quero acesso antecipado →
      </Link>
      <p className="text-sm text-black/50">
        Menos tempo com tarefas repetitivas, mais tempo para o trabalho
        jurídico que exige você.
      </p>
    </section>
  );
}
