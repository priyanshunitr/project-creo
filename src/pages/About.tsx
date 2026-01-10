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
    <div className='w-full min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center pt-24 pb-48 font-fort'>
      {/* Top streaks/effect */}
      <img
        className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1728px] h-auto object-cover opacity-100 mix-blend-screen pointer-events-none'
        alt='Top effect'
        src={HeroSection}
      />

      {/* Lightning/Sketch elements on sides */}
      <img
        className='absolute left-0 top-1/4 w-[120px] md:w-[220px] opacity-90 animate-fade-in pointer-events-none'
        alt='Lightning sketch left'
        src={image31}
      />
      <img
        className='absolute right-0 top-1/4 w-[120px] md:w-[220px] opacity-90 animate-fade-in pointer-events-none'
        alt='Lightning sketch right'
        src={image2736}
      />

      {/* Main content */}
      <div className='relative z-10 flex flex-col items-center max-w-5xl px-8 text-center mt-20'>
        {/* Cat icons */}
        <div className='flex gap-4 mb-10 animate-fade-in'>
          <img className='w-10 h-auto' alt='brand icon' src={image2749} />
          <img className='w-10 h-auto' alt='brand icon' src={image2748} />
          <img className='w-10 h-auto' alt='brand icon' src={image2750} />
        </div>

        {/* Paragraph text matching mockup */}
        <h1 className='text-xl md:text-4xl font-black uppercase tracking-tight leading-[1.3] animate-fade-up'>
          <span className='text-white'>THIS YEAR ,CREO 26' IS THE FIRST EDITION OF </span>
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
