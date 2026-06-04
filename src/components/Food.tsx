"use client"

import { motion } from "framer-motion"
import { foodPosts } from "@/data/food-posts"

export default function Food() {
  return (
    <section id="food" className="section-container">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-label"
      >
        All About Food
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="heading-lg text-balance mb-4"
      >
        Exploring the world, <span className="italic">one dish at a time</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="body-lg mb-16 max-w-2xl"
      >
        Every dish has a story. Why wasabi with sushi? Why dal chawal across every Indian state? I research food the way I design — with curiosity, depth, and a need to understand the &ldquo;why.&rdquo;
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        {foodPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-6 card hover:border-accent/20 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-xs uppercase tracking-[0.1em] px-3 py-1 bg-accent/10 text-accent rounded-full">
                {post.category}
              </span>
              <span className="font-sans text-xs text-warmGray dark:text-darkWarmGray">
                {post.readTime}
              </span>
            </div>

            <h3 className="font-serif text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
              {post.title}
            </h3>

            <p className="body-base">{post.excerpt}</p>

            <p className="font-sans text-xs text-warmGray dark:text-darkWarmGray mt-4">{post.date}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
