import { motion } from "framer-motion";
import { skills } from "@/lib/portfolio-data";
import { Section } from "./Section";

export function Skills() {
  const entries = Object.entries(skills);
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills & Technologies"
      description="The stack I reach for when building modern, secure web applications."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {entries.map(([cat, list], i) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 shadow-card"
          >
            <h3 className="font-display font-semibold mb-4 text-gradient">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s, j) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + j * 0.04 }}
                  whileHover={{ scale: 1.08 }}
                  className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
