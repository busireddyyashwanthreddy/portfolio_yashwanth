import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Where I've worked"
      title="Experience"
      description="Hands-on internship experience across 3 organizations shipping production-grade MERN applications."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
        <div className="space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                idx % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
              }`}
            >
              <div className="pl-12 md:pl-0 md:pr-12 md:text-right md:[&.right]:text-left">
                <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-hero shadow-glow ring-4 ring-background" />
                <div className="glass rounded-2xl p-6 shadow-card hover:border-primary/40 transition">
                  <div className="flex items-center gap-2 text-primary mb-2 md:justify-end">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-mono text-xs">{job.period}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold">{job.role}</h3>
                  <div className="text-sm text-muted-foreground mt-1">
                    {job.company} · {job.mode}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-left">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
