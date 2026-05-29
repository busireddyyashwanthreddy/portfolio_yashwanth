import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import { profile, stats } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for full-time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Yashwanth</span>
            <br />
            <span className="text-muted-foreground font-normal text-3xl md:text-5xl">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              View my work <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-2 ml-2">
              {[
                { Icon: Github, href: profile.github },
                { Icon: Linkedin, href: profile.linkedin },
                { Icon: Mail, href: `mailto:${profile.email}` },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full glass p-2.5 hover:text-primary hover:scale-110 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-4">
                <div className="text-2xl font-display font-bold text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto md:mx-0"
        >
          <div className="absolute -inset-6 bg-gradient-hero blur-3xl opacity-30 rounded-full" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden glass shadow-glow p-2"
          >
            <img
              src={profileImg}
              alt={profile.name}
              className="rounded-2xl w-full max-w-sm object-cover"
            />
          </motion.div>
          <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card">
            <div className="font-mono text-xs text-muted-foreground">CGPA</div>
            <div className="font-display font-bold text-lg text-gradient">9.14 / 10</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
