import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
