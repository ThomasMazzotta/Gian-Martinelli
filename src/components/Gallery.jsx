import React, { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1600&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=900&auto=format&fit=crop",
    title: "Din Don",
    source: "Din Don",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=900&auto=format&fit=crop",
    title: "Backstage frame",
    source: "Din Don",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=1600&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=900&auto=format&fit=crop",
    title: "Scene still",
    source: "Din Don",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=900&auto=format&fit=crop",
    title: "Portrait on set",
    source: "Pif",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
    title: "Editorial frame",
    source: "Pif",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=900&auto=format&fit=crop",
    title: "Outdoor shot",
    source: "Pif",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900&auto=format&fit=crop",
    title: "Performance frame",
    source: "Tutta Scena",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=900&auto=format&fit=crop",
    title: "Press still",
    source: "Tutta Scena",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop",
    title: "Set detail",
    source: "Tutta Scena",
  },
]

const filters = ["All", "Din Don", "Pif", "Tutta Scena"]

function GalleryCard({ item, index, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[2rem] bg-white/10 text-left shadow-[0_10px_40px_rgba(0,0,0,0.14)] ring-1 ring-black/5 backdrop-blur-sm"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.thumb}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-sm uppercase tracking-[0.18em] text-white/70">{item.source}</p>
          <h3 className="mt-1 text-[clamp(1.35rem,2vw,1.8rem)] font-semibold leading-[0.95] text-white">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="border-t border-black/5 bg-white/90 px-4 py-3 backdrop-blur-sm sm:px-5">
        <p className="text-sm text-black/70">
          Source: <span className="font-medium text-black">{item.source}</span>
        </p>
      </div>
    </motion.button>
  )
}

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowLeft") onPrev()
      if (event.key === "ArrowRight") onNext()
    }

    window.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose, onPrev, onNext])

  const activeItem = items[activeIndex]
  if (!activeItem) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
      >
        <button
          type="button"
          aria-label="Close gallery"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
        >
          <X className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Previous image"
          onClick={onPrev}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Next image"
          onClick={onNext}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.985 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-6xl"
        >
          <div className="overflow-hidden rounded-[2rem] bg-white/6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] ring-1 ring-white/10">
            <div className="relative max-h-[78vh] overflow-hidden bg-black">
              <img src={activeItem.src} alt={activeItem.title} className="max-h-[78vh] w-full object-contain" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 pb-5 pt-14 sm:px-7 sm:pb-7">
                <p className="text-sm uppercase tracking-[0.18em] text-white/65">{activeItem.source}</p>
                <h3 className="mt-1 text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-tight text-white">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 bg-white/95 px-5 py-4 text-sm text-black/70 sm:px-7">
              <p>
                Source: <span className="font-medium text-black">{activeItem.source}</span>
              </p>
              <p>
                {activeIndex + 1} / {items.length}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [activeIndex, setActiveIndex] = useState(null)

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems
    return galleryItems.filter((item) => item.source === activeFilter)
  }, [activeFilter])

  const openLightbox = (index) => setActiveIndex(index)
  const closeLightbox = () => setActiveIndex(null)
  const showPrev = () => setActiveIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1))
  const showNext = () => setActiveIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1))

  useEffect(() => {
    setActiveIndex(null)
  }, [activeFilter])

  return (
    <section id="gallery" className="min-h-screen bg-palette-white text-palette-background">
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-palette-emph/80">Visual archive</p>
          <h1 className="text-[clamp(3.4rem,11vw,6rem)] font-semibold leading-none tracking-[-0.05em]">Gallery</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-palette-background/75 sm:text-lg">
            A curated selection of stills, backstage moments, editorial frames and project imagery. Tap any image to
            open it full size and continue browsing through the gallery.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          {filters.map((filter) => {
            const isActive = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 sm:py-2.5 ${
                  isActive
                    ? "bg-palette-background text-palette-white shadow-lg"
                    : "bg-palette-background/5 text-palette-background/75 ring-1 ring-black/8 hover:bg-palette-background/10"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:mt-12 sm:columns-2 lg:columns-3 xl:gap-6">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="mb-5 break-inside-avoid xl:mb-6">
              <GalleryCard item={item} index={index} onOpen={openLightbox} />
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={filteredItems}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  )
}
