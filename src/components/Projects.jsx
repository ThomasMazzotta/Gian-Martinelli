import React from "react"
import { motion } from "framer-motion"
import SvgDivider from "./SvgDivider"

const projects = [
  {
    id: 1,
    title: "Din Don",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1400&auto=format&fit=crop",
    source: "Din Don",
    description:
      "A lively and character-driven project built around rhythm, presence and comic timing. This section can introduce the role, the atmosphere of the set and the visual identity of the production in a concise but cinematic way.",
  },
  {
    id: 2,
    title: "Pif",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1400&auto=format&fit=crop",
    source: "Pif",
    description:
      "A more intimate and editorial project, where expression, subtle detail and visual storytelling take center stage. Ideal for highlighting a different tone, a collaboration, or a notable performance moment.",
  },
  {
    id: 3,
    title: "Tutta Scena",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop",
    source: "Tutta Scena",
    description:
      "A project with a broader scenic dimension, designed to communicate range, personality and on-screen presence. The layout leaves room for a short synopsis while keeping the image as the emotional focal point.",
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function ProjectRow({ project, reverse = false }) {
  return (
    <motion.article
      variants={itemVariants}
      className={`grid items-center gap-6 md:gap-10 lg:gap-14 ${reverse ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"}`}
    >
      <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <div className="group relative overflow-hidden rounded-[2rem] bg-white/10 shadow-[0_14px_50px_rgba(0,0,0,0.16)] ring-1 ring-white/10">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70 sm:text-sm">{project.source}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <div className="max-w-xl">
          <h3 className="mt-2 inline-block text-palette-white font-semibold leading-[0.88] tracking-[-0.05em] text-[clamp(2.4rem,8vw,4.8rem)]">
            {project.title}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-palette-white/82 sm:text-lg">{project.description}</p>
          <p className="mt-5 text-sm text-palette-white/65">
            Source: <span className="font-medium text-palette-white">{project.source}</span>
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectsPage() {
  return (
    <section id="projects" className="relative overflow-hidden bg-palette-emph">
      <div className="relative">
        <SvgDivider firstSvgPosition="hidden" secondSvgPosition="rotate-180 -top-px" />
      </div>

      <div className="px-4 pb-16 pt-24 sm:px-5 sm:pb-20 sm:pt-28 md:pt-32 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="text-palette-white font-semibold leading-none text-[clamp(3.4rem,11vw,6rem)]">Projects</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-palette-white/78 sm:text-lg">
            A refined overview of selected works, combining a strong visual presence with concise project notes. On
            smaller screens the layout stacks vertically; on larger screens image and text alternate to create a more
            editorial rhythm.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 flex flex-col gap-16 sm:mt-14 sm:gap-20 lg:mt-16 lg:gap-24"
        >
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} reverse={index % 2 !== 0} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
