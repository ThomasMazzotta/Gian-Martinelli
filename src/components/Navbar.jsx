import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const hoverScale = 1.04
const tapScale = 0.96

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#gallery", label: "Gallery" },
    { href: "#curriculum", label: "Curriculum" },
  ]

  const socialLinks = [
    {
      href: "https://instagram.com/",
      label: "Instagram",
      target: "_blank",
      rel: "noreferrer",
    },
    {
      href: "mailto:your@email.com",
      label: "Email",
    },
  ]

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* Menu toggle button */}
      <motion.button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: tapScale }}
        className="fixed top-4 right-4 z-60 bg-transparent p-0"
      >
        <span className="flex h-14 w-14 items-center justify-center ">
          <span className="relative block h-5 w-7">
            <motion.span
              animate={
                isOpen
                  ? { rotate: 45, y: 8, backgroundColor: "rgba(234,238,251,1)" }
                  : { rotate: 0, y: 0, backgroundColor: "rgba(234,238,251,0.95)" }
              }
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute left-0 top-0 h-0.5 w-7 origin-center rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "rgba(234,238,251,0.75)" }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 top-2.25 h-0.5 w-7 rounded-full"
            />
            <motion.span
              animate={
                isOpen
                  ? { rotate: -45, y: -10, backgroundColor: "rgba(234,238,251,1)" }
                  : { rotate: 0, y: 0, backgroundColor: "rgba(234,238,251,0.95)" }
              }
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute left-0 top-4.5 h-0.5 w-7 origin-center rounded-full"
            />
          </span>
        </span>
      </motion.button>

      {/* Sliding menu panel */}
      <nav className="fixed top-0 right-0 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-[72dvh] w-[82vw] max-w-xs overflow-hidden rounded-bl-2xl  shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            >
              {/* Glass layers */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.20),rgba(255,255,255,0.05)_40%,rgba(255,255,255,0.02))]" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/12" />
              <div className="pointer-events-none absolute -top-16 left-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

              {/* Menu content */}
              <div className="relative z-10 flex h-full flex-col px-7 pt-24 pb-8">
                {/* Main navigation links */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{
                        delay: 0.18 + index * 0.12,
                        duration: 0.28,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                      className="group text-3xl leading-none text-palette-white"
                    >
                      <span className="inline-flex items-center gap-3">
                        <span>{link.label}</span>
                        <span className="translate-y-0.75 text-base  text-palette-white/35 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-palette-white/60">
                          ➤
                        </span>
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Bottom area */}
                <div className="mt-auto pt-10">
                  {/* Social links */}
                  <div className="flex flex-col gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{
                          delay: 0.42 + index * 0.1,
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-sm uppercase tracking-[0.12em] text-palette-white/72"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar
