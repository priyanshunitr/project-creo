// import efecto20260107T0848501 from "../assets/img/efecto-2026-01-07T08-48-50-1.png";
import image31 from '../assets/img/image-31.png'
// import image2711 from "../assets/img/image-2711.png";
import image2727 from '../assets/img/image-2727.png'
import image2736 from '../assets/img/image-2736.png'
import image2748 from '../assets/img/image-2748.png'
import image2749 from '../assets/img/image-2749.png'
import image2750 from '../assets/img/image-2750.png'
import HeroSection from '../assets/img/heroseciton.png'
import type { JSX } from 'react'

export const About = (): JSX.Element => {
  return (
    <div className='w-full min-h-screen bg-black text-white relative flex justify-center items-center font-fort overflow-hidden'>
      {/* Top streaks/effect */}
      <div className='absolute inset-0 pointer-events-none z-0'>
        <img alt='Background' className='w-full h-full object-cover' src={HeroSection} />
      </div>

      {/* Lightning/Sketch elements on sides */}
      <img
        className='absolute left-[-20px] md:left-0 top-1/4 w-[100px] md:w-[220px] opacity-90 animate-fade-in pointer-events-none z-20'
        alt='Lightning sketch left'
        src={image31}
      />

      {/* Main content */}
      <div className='z-10 flex flex-col max-w-6xl w-full px-6 md:px-12 justify-center text-center items-center'>
        {/* Cat icons */}
        <div className='flex gap-3 md:gap-4 mb-6 md:mb-10 animate-fade-in'>
          <img className='w-8 md:w-10 h-auto' alt='brand icon' src={image2749} />
          <img className='w-8 md:w-10 h-auto' alt='brand icon' src={image2748} />
          <img className='w-8 md:w-10 h-auto' alt='brand icon' src={image2750} />
        </div>

        {/* Paragraph text matching mockup */}
        <h1 className='text-lg md:text-3xl font-black uppercase leading-[1.4] md:leading-[1.3] animate-fade-up'>
          <span className='text-white'>THIS YEAR, CREO 26' IS THE FIRST EDITION OF </span>
          <span className='text-primary block md:inline'>
            NIT ROURKELA’S NATIONAL DESIGN CONFERENCE
          </span>
          <span className='text-white'>
            , CURATED TO EXPLORE HOW DESIGN DRIVES INNOVATION BEYOND AESTHETICS. THE CONFERENCE
            FOCUSES ON PRODUCT THINKING, HUMAN{' '}
          </span>
          <span className='text-white/30'>
            CENTERED DESIGN, SUSTAINABILITY, CREATIVE TECHNOLOGY, AND DESIGN LED ENTREPRENEURSHIP.
            THROUGH TALKS, WORKSHOPS, DESIGNATHON, AND EXHIBITIONS, CREO 26' CONNECTS STUDENTS.
          </span>
        </h1>
      </div>

      <img
        className='absolute right-[-20px] md:right-0 top-1/4 w-[100px] md:w-[220px] opacity-90 animate-fade-in pointer-events-none z-20'
        alt='Lightning sketch right'
        src={image2736}
      />
      {/* Building Sketch at Bottom */}
      {/* <img
        className="pass-through absolute bottom-10 left-1/2 -translate-x-1/2"
        src={image2711}
        alt="Sketch"
      /> */}

      {/* Subtle overlay texture */}
      <img
        className='absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-10 pointer-events-none'
        alt='Texture overlay'
        src={image2727}
      />
    </div>
  )
}
