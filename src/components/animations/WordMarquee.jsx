import React from "react"
import { motion } from "framer-motion"

const words = ["authentic", "Trentino", "actor", "presence", "cinematic", "expressive", "grounded"]

function MarqueeRow({ reverse = false, speed = 28 }) {
  const repeatedWords = [...words, ...words, ...words]

  return (
    <div className="relative flex overflow-hidden rotate-4 pt-3">
      <motion.div
        className="flex shrink-0 gap-4 whitespace-nowrap"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedWords.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-flex items-center gap-4 text-[clamp(1.4rem,4vw,2.6rem)] font-semibold tracking-[-0.04em] text-palette-background/80"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-palette-emph/70" />
          </span>
        ))}
      </motion.div>

      <motion.div
        className="flex shrink-0 gap-4 whitespace-nowrap"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedWords.map((word, index) => (
          <span
            key={`${word}-duplicate-${index}`}
            className="inline-flex items-center gap-4 text-[clamp(1.4rem,4vw,2.6rem)] font-semibold tracking-[-0.04em] text-palette-background/80"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-palette-emph/70" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function WordMarquee() {
  return (
    <div className="mt-10 space-y-3 overflow-hidden pb-6">
      <MarqueeRow speed={30} />
    </div>
  )
}

export default WordMarquee
