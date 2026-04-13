import React from "react"
import { motion } from "framer-motion"
import SvgDivider from "./SvgDivider"

export default function CurriculumPage() {
  return (
    <section id="curriculum" className="relative min-h-screen overflow-hidden bg-palette-background text-palette-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-4 pb-0 pt-24 sm:px-5 sm:pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-palette-emph/80">Profile</p>

          <h1 className="text-[clamp(3.4rem,11vw,6rem)] font-semibold leading-none tracking-[-0.05em]">Curriculum</h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-palette-white sm:text-lg">
            A concise overview of Gian Martinelli’s artistic path, selected work and professional presence. Designed as
            a clean and minimal companion to the portfolio, this section gives immediate access to the full curriculum
            in a format that feels coherent with the rest of the site.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 mb-20 sm:mt-16 md:mt-20"
        >
          <a
            href="/cv-gian-martinelli.pdf"
            download
            className="group inline-flex items-center gap-3 rounded-full border border-palette-background/10 bg-palette-emph px-7 py-4 text-base font-semibold text-palette-white shadow-[0_12px_30px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-10px_18px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.32),inset_0_-12px_20px_rgba(0,0,0,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-palette-emph/40 active:translate-y-[1px] active:shadow-[0_8px_20px_rgba(0,0,0,0.14),inset_0_2px_6px_rgba(0,0,0,0.12)]"
          >
            <span className="relative">
              Download CV
              <span className=" mt-1 h-px w-0 bg-palette-white/70 transition-all duration-300 group-hover:w-full" />
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] transition duration-300 group-hover:bg-white/18">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4.5 w-4.5"
                aria-hidden="true"
              >
                <path
                  d="M12 4V14M12 14L8.5 10.5M12 14L15.5 10.5M5 18.5H19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none relative leading-none">
        <SvgDivider firstSvgPosition="hidden" secondSvgPosition="-bottom-px" />
      </div>
    </section>
  )
}
