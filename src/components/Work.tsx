"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { projects, type Project } from "@/data/projects"
import { track } from "@/lib/analytics"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

function CoverArt({ project, large }: { project: Project; large?: boolean }) {
  const coverSrc = project.coverImage
    ? project.coverImage.startsWith("/") ? `${base}${project.coverImage}` : project.coverImage
    : null
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}
      style={{ background: project.cover ?? "#E5E5E5" }}
    >
      {project.coverVideo ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={project.coverVideoPoster ? (project.coverVideoPoster.startsWith("/") ? `${base}${project.coverVideoPoster}` : project.coverVideoPoster) : undefined}
          aria-hidden="true"
        >
          {project.coverVideoWebm && <source src={project.coverVideoWebm.startsWith("/") ? `${base}${project.coverVideoWebm}` : project.coverVideoWebm} type="video/webm" />}
          <source src={project.coverVideo.startsWith("/") ? `${base}${project.coverVideo}` : project.coverVideo} type="video/mp4" />
        </video>
      ) : coverSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={coverSrc}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <>
          {/* soft depth blobs */}
          <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-white/30 blur-2xl" />
          <div className="absolute -bottom-10 right-0 w-52 h-52 rounded-full bg-black/10 blur-2xl" />
          {/* subtle image-placeholder scale on hover */}
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]" />
        </>
      )}

      {project.coverLabel && (
        <span className="absolute bottom-4 left-4 font-sans text-xs uppercase tracking-[0.12em] text-ink/70">
          {project.coverLabel}
        </span>
      )}

      {project.password && (
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.12em] text-ink/70 bg-cream/70 backdrop-blur-sm rounded-full px-3 py-1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Locked
        </span>
      )}

      {/* view arrow on hover */}
      <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-ink text-cream flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        ↗
      </span>
    </div>
  )
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-4 mt-5">
        <h3 className="heading-md group-hover:opacity-60 transition-opacity duration-300">
          {project.title}
        </h3>
        <span className="font-sans text-sm text-warmGray dark:text-darkWarmGray shrink-0">
          {project.timeline}
        </span>
      </div>
      <p className="body-base mt-1">{project.subtitle}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans text-xs uppercase tracking-[0.1em] px-3 py-1 bg-subtle/50 dark:bg-darkSubtle/50 rounded-full text-warmGray dark:text-darkWarmGray"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}

function ExternalLinks({ project }: { project: Project }) {
  if (!project.projectLink && !project.caseStudy) return null
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {project.projectLink && (
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
        >
          {project.projectLinkLabel ?? "Live project ↗"}
        </a>
      )}
      {project.caseStudy && (
        <a
          href={project.caseStudy}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm uppercase tracking-[0.1em] text-warmGray dark:text-darkWarmGray hover:text-ink dark:hover:text-darkInk transition-colors"
        >
          Case study ↗
        </a>
      )}
    </div>
  )
}

export default function Work() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => p !== featured)

  return (
    <section id="work" className="section-container">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label"
      >
        Selected Work{" "}
        <span className="easter-egg" data-egg="egg-5" aria-hidden="true">🔥</span>
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading-lg text-balance mb-4"
      >
        Projects that <span className="font-serif italic font-normal">shipped</span>.{" "}
        <span className="easter-egg" data-egg="egg-6" aria-hidden="true">🚀</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="body-base mb-14 max-w-2xl"
      >
        Enterprise design systems, sustainability tools, analytics platforms — shipped with measurable outcomes across B2B and B2C at bp, Michelin, and beyond.
      </motion.p>

      {/* Featured project — full width */}
      {featured && (
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <Link href={`/work/${featured.id}`} className="group block" onClick={() => track("project_clicked", { project: featured.id })}>
            <CoverArt project={featured} large />
            <ProjectMeta project={featured} />
          </Link>
          <ExternalLinks project={featured} />
        </motion.article>
      )}

      {/* Remaining projects — 2-up grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {rest.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link href={`/work/${project.id}`} className="group block" onClick={() => track("project_clicked", { project: project.id })}>
              <CoverArt project={project} />
              <ProjectMeta project={project} />
            </Link>
            <ExternalLinks project={project} />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
