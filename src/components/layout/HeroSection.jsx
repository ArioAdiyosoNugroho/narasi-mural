import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/img/hero.jpeg';
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), url(${heroImage})`,
      }}
    >
      {/* HERO CONTENT */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-8 md:px-12 md:pb-20 md:pt-32 lg:px-16 lg:pt-36">
        <div className="max-w-[1000px]">

          {/* LOCATION */}
          <div className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-gray-200 sm:mb-6">
            <span className="font-bold text-white">
              London
            </span>
            <span>, Great Britain</span>
          </div>

          {/* MAIN TYPOGRAPHY */}
          <h1
            className="
              max-w-[1000px]
              font-condensed
              text-[clamp(2.8rem,6vw,6.5rem)]
              font-bold
              uppercase
              leading-[0.9]
              tracking-tight
              text-white
            "
          >
            Think with
            <br />

            Passion,
            <br />

            Code with{' '}
            <span
              className="
                inline-block
                -rotate-1
                rounded-sm
                bg-white
                px-2
                py-0.5
                text-black
                sm:px-3
              "
            >
              Vision.
            </span>
          </h1>

          {/* EXPLORE BUTTON */}
          <div className="mt-7 sm:mt-9 md:mt-10">
            <a
              href="#gallery"
              className="
                group
                inline-flex
                items-center
                gap-5
                rounded-full
                bg-[#E8DDD0]
                pl-7
                pr-2.5
                py-2.5
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-black
                shadow-lg
                transition-all
                duration-300
                hover:bg-white
                hover:shadow-xl
                sm:gap-6
                sm:pl-8
                sm:pr-3
                sm:py-3
                sm:text-sm
              "
            >
              <span>Explore Gallery</span>

              {/* LUCIDE ARROW */}
              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:h-10
                  sm:w-10
                "
              >
                <ArrowRight
                  className="h-5 w-5 sm:h-[21px] sm:w-[21px]"
                  strokeWidth={2}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}