import React from "react"
import aboutGian from "../assets/smartphone_images/home_images/about_Gian_sm.webp"
import burgerOpen from "../assets/smartphone_images/home_images/burger_open.webp"
import talk from "../assets/smartphone_images/home_images/talk_sm.webp"
import burgerClose from "../assets/smartphone_images/home_images/burger_close.webp"
import burgerMenu from "../assets/smartphone_images/home_images/burger_menu.webp"
import mainImage from "../assets/smartphone_images/home_images/main_image_sm.webp"

function Home() {
  return (
    <section>
      <div className="flex flex-col">
        <img src={mainImage} alt="" />
        <img src={aboutGian} className=" -translate-x-20 scale-140 rotate-8 -translate-y-5" alt="" />
        <p className="text-palette-white text-center w-[220px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nisi culpa harum repellat unde, accusamus neque
          iste. At, tempore aspernatur natus.
        </p>
        <img src={talk} className=" translate-x-40 scale-140 -rotate-8 -translate-y-5" alt="" />
        <div className="flex text-white">
          <div className="flex flex-col text-xl">
            <p>projects</p>
            <p>gallery</p>
            <p>curriculum</p>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </section>
  )
}

export default Home
