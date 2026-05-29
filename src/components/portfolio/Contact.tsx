import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-card"
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 bg-primary rounded-full blur-3xl opacity-30" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              Get in touch
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Let's build something <span className="text-gradient">great.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              I'm actively looking for full-time opportunities. Drop a message — I usually reply within a day.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold hover:bg-secondary transition"
              >
                <Phone className="h-4 w-4" />
                {profile.phone}
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {[
                { Icon: GithubIcon, href: profile.github, label: "GitHub" },
                { Icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full glass p-3 hover:text-primary hover:scale-110 transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with React & Framer Motion.
        </footer>
      </div>
    </section>
  );
}
