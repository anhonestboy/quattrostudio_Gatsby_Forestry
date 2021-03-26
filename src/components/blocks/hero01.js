import React from "react";
import { Link } from "gatsby"
import Img from "gatsby-image"



function Hero01(props) {

    return (
      <section className="relative pb-80 pt-20">
      <div className="relative h-screen">
       <div className="relative top-0 w-90vw mx-auto flex content-end relative z-20 grid sm:grid-cols-1 md:grid-cols-8 sm:text-center md:text-left">
          <h1 className="animate-fade-in-down font-serif_bold col-span-6 p-0 font-bold sm:text-15vw md:text-7vw">
            Page Title
          </h1>
          <h2 className="animate-fade-in-up uppercase leading-2vw tracking-widest font-sans font-bold sm:-mt-5 md:mt-0 sm:text-3vw md:text-1_8vw">
             Page Sub Title
          </h2>
        </div>

        <div className="w-screen absolute top-20">
         <div className="animate-fade-in-down transform duration-300 mx-auto w-60vw h-60vw rounded-full bg-background_lighter dark:bg-grayBlack" />
         <div className="z-20 relative sm:top-20 md:-top-80 absolute text-center p-40 text-1_8vw leading-3vw">
              Page Description
          </div> 
        </div>

        <div className="relative sm:top-0 md:-top-14 w-screen h-full opacity-1 dark:opacity-0 flex justify-items-center">
          <div className="w-screen flex top-0 absolute grid sm:grid-cols-1 md:grid-cols-10">
            <div className="col-span-1 sm:hidden md:block">
              <Link to="/">
                <h2 className="transform -rotate-90 absolute mt-20vw uppercase leading-1vw tracking-widest font-sans font-bold text-1vw translate hover:transition duration-300 hover:translate-y-1.5 hover:scale-102">
                  Our Approach
                </h2>
              </Link>
            </div> 
            <div className="col-span-8 sm:w-100vw md:w-80vw mx-auto">
            IMAGE
            {/* {props.HomeHeroMainImage && props.HomeHeroMainImage.asset && (
            <img
                src={imageUrlFor(buildImageObj(props.HomeHeroMainImage))
                  .width(2048)
                  .height(Math.floor((2 / 3.5) * 2048))
                  .auto("format")
                  .url()}
                alt={props.HomeHeroMainImage.alt}
                className="animate-fade-in-up z-10 sm:w-100vw md:w-80vw mx-auto m-0"
              />
              )} */}
              </div>
            <div className="col-span-1 hidden md:block">
              <Link to="/">
                <h2 className="transform rotate-90 absolute mt-20vw uppercase leading-1vw tracking-widest font-sans font-bold text-1vw translate hover:transition duration-300 hover:translate-y-1.5 hover:scale-102">
                Portfolio
                </h2>
              </Link>
            </div>
          </div>
        </div>

      </div> 
       
      </section>
      
    );
  }
  
export default Hero01;
  