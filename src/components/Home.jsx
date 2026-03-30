import React from "react"
import mainImage from "../assets/smartphone_images/home_images/main_image_sm.webp"
import SvgDivider from "./SvgDivider"

function Home() {
  return (
    <section className="relative flex h-dvh flex-col  bg-palette-background overflow-x-hidden">
      {/* INSTAGRAM AND EMAIL SVG */}
      <div className="absolute top-0 left-0 z-10 m-5">
        <div className="flex flex-col items-center gap-3">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
            <path
              d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
              stroke="var(--color-palette-white)"
              strokeWidth="1.728"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-11 w-11">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              fill="var(--color-palette-white)"
            />
            <path
              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
              fill="var(--color-palette-white)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
              fill="var(--color-palette-white)"
            />
          </svg>
        </div>
      </div>

      {/* IMAGE AREA + WAVE*/}
      <div className="relative">
        <SvgDivider />
        <img src={mainImage} className="h-full w-full object-cover object-center" alt="Gian Martinelli" />
      </div>

      {/* TEXT AREA */}
      <div className="flex justify-center text-center pt-0">
        <div className="max-w-sm">
          <p className="text-[1.7rem] font-semibold leading-relaxed text-palette-white sm:text-[1.6rem] [word-spacing:42px] ">
            <span className="inline-block -rotate-4 text-[2.5rem] font-bold text-palette-white [text-shadow:0_0_10px_rgba(255,255,255,0.32),0_2px_10px_rgba(255,255,255,0.18)]">
              Gian
            </span>{" "}
            <span className="inline-block text-[2.5rem] font-bold text-palette-white rotate-6 [text-shadow:0_0_10px_rgba(255,255,255,0.32),0_2px_10px_rgba(255,255,255,0.18)]">
              Martinelli
            </span>
            <br />
            <span className="inline-block rotate-8 text-[3rem] text-palette-gold [text-shadow:0_0_10px_rgba(201,160,90,0.32),0_2px_10px_rgba(201,160,90,0.18)]">
              Trentino
            </span>{" "}
            <span className="inline-block -rotate-4 text-[2.5rem] font-bold text-palette-emph [text-shadow:0_0_10px_rgba(190,55,120,0.3),0_2px_10px_rgba(190,55,120,0.18)]">
              actor
            </span>
            <br />
            <span className="inline-block text-palette-muted text-3xl -rotate-6 [text-shadow:0_0_10px_rgba(255,255,255,0.16),0_2px_8px_rgba(255,255,255,0.1)]">
              martial
            </span>{" "}
            <span className="inline-block text-palette-muted text-4xl [text-shadow:0_0_10px_rgba(255,255,255,0.16),0_2px_8px_rgba(255,255,255,0.1)]">
              arts
            </span>
            <br />
            <span className="inline-block rotate-3 text-[2.5rem] font-bold text-palette-emph2 [text-shadow:0_0_10px_rgba(70,120,210,0.3),0_2px_10px_rgba(70,120,210,0.18)]">
              dynamic
            </span>{" "}
            <span className="inline-block -rotate-10 text-[2.1rem] font-bold text-palette-gold [text-shadow:0_0_10px_rgba(201,160,90,0.32),0_2px_10px_rgba(201,160,90,0.18)]">
              deep
            </span>
            <br />
            <span className="inline-block text-palette-emph text-[2.4rem] [text-shadow:0_0_10px_rgba(190,55,120,0.3),0_2px_10px_rgba(190,55,120,0.18)]">
              authentic
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
