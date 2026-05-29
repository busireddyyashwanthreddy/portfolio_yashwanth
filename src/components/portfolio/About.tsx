import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { profile, education, extras } from "@/lib/portfolio-data";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A developer who ships."
      description={profile.summary}
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7 shadow-card"
        >
          <div className="flex items-center gap-3 mb-5">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-semibold">Education</h3>
          </div>
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.degree} className="border-l-2 border-primary/40 pl-4">
                <div className="font-semibold">{e.degree}</div>
                <div className="text-sm text-muted-foreground">{e.school}</div>
                <div className="flex items-center gap-3 mt-1 text-xs font-mono text-muted-foreground">
                  <span>{e.period}</span>
                  <span>•</span>
                  <span className="text-primary">{e.score}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7 shadow-card"
        >
          <div className="flex items-center gap-3 mb-5">
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="font-display text-lg font-semibold">Beyond code</h3>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {extras.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
