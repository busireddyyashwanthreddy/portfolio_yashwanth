import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yashwanth Reddy — Full Stack MERN Developer" },
      {
        name: "description",
        content:
          "Portfolio of Busi Reddy Yashwanth Reddy — Full Stack MERN Developer building scalable, user-focused web applications with React, Node.js & MongoDB.",
      },
      { property: "og:title", content: "Yashwanth Reddy — Full Stack MERN Developer" },
      {
        property: "og:description",
        content: "Full Stack MERN Developer · 3+ internships · 7+ shipped apps · 9.14 CGPA",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
