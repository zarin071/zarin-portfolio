"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function Work() {
  return (
    <section id="work" className="section-container">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label"
      >
        Selected Work
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading-lg text-balance mb-4"
      >
        Projects that <span className="italic">moved</span> the needle.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="body-lg mb-16 max-w-2xl"
      >
        From enterprise design systems to AI-enhanced platforms — each project
        with measurable impact.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative p-6 md:p-8 card-hover"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs uppercase tracking-[0.1em] px-3 py-1 bg-subtle/50 dark:bg-darkSubtle/50 rounded-full text-warmGray dark:text-darkWarmGray"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="heading-md mb-2 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            <p className="font-sans text-sm text-warmGray dark:text-darkWarmGray mb-4 uppercase tracking-[0.05em]">
              {project.role} · {project.timeline}
            </p>

            <div className="mb-3">
              <p className="font-sans text-xs uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray mb-1">
                Problem
              </p>
              <p className="body-base">{project.problem}</p>
            </div>

            <div className="mb-3">
              <p className="font-sans text-xs uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray mb-1">
                Approach
              </p>
              <p className="body-base">{project.approach}</p>
            </div>

            <div className="p-3 bg-subtle/20 dark:bg-darkSubtle/20 rounded-xl border border-subtle/50 dark:border-darkSubtle/50 mb-4">
              <p className="font-sans text-xs uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray mb-1">
                Impact
              </p>
              <p className="font-serif text-sm text-ink dark:text-darkInk">
                {project.impact}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href={`/work/${project.id}`}
                className="inline-flex items-center gap-1.5 font-sans text-sm uppercase tracking-[0.1em] text-accent hover:text-ink dark:hover:text-darkInk transition-colors duration-300"
              >
                View details →
              </Link>

              {project.caseStudy && (
                <a
                  href={project.caseStudy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-sm uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors duration-300"
                >
                  Case study ↗
                </a>
              )}

              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-sm uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors duration-300"
                >
                  Live project ↗
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
