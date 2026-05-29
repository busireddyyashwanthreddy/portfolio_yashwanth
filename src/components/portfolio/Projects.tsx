import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      description="A mix of full-stack MERN apps and ML systems — each shipped end-to-end."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl p-7 shadow-card overflow-hidden cursor-pointer"
          >
            <div
              className={`absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition ${
                p.accent === "primary" ? "bg-primary" : "bg-accent"
              }`}
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-display font-semibold group-hover:text-gradient transition">
                  {p.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
