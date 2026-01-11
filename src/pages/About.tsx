import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// import HeroSection from '../assets/img/heroseciton.png'
import { cat, bg } from '../config/about/index'
import type { JSX } from 'react'

const textContent =
  "THIS YEAR, CREO 26' IS THE FIRST EDITION OF NIT ROURKELA’S NATIONAL DESIGN CONFERENCE, CURATED TO EXPLORE HOW DESIGN DRIVES INNOVATION BEYOND AESTHETICS. THE CONFERENCE FOCUSES ON PRODUCT THINKING, HUMAN CENTERED DESIGN, SUSTAINABILITY, CREATIVE TECHNOLOGY, AND DESIGN LED ENTREPRENEURSHIP. THROUGH TALKS, WORKSHOPS, DESIGNATHON, AND EXHIBITIONS, CREO 26' CONNECTS STUDENTS."

const Word = ({
  children,
  range,
  progress,
  isPrimary,
}: {
  children: string
  range: [number, number]
  progress: any
  isPrimary?: boolean
}) => {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <span className='relative mx-[2px] md:mx-1 inline-block'>
      <span className='absolute opacity-10 select-none'>{children}</span>
      <motion.span style={{ opacity }} className={isPrimary ? 'text-primary' : 'text-white'}>
        {children}
      </motion.span>
    </span>
  )
}

export const About = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  // scrollYProgress spans from 0 to 1 over the 75vh of scrolling.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const words = textContent.split(' ')

  return (
    <div ref={containerRef} className='relative h-[175vh] bg-black font-fort'>
      {/* 
        Background Section 
        - Absolutely positioned so it only exists within the 175vh About container.
      */}
      <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
        <img
          alt='Background'
          className='w-full h-auto min-h-screen object-cover opacity-100 transform-gpu'
          src={bg}
        />
        <div className='absolute inset-0 bg-linear-to-b from-black via-transparent to-black opacity-90' />
      </div>

      {/* 
        Content Layer - Uses Dynamic Positioning.
        - Fixed: While scrolling through the section (progress 0 to 1).
        - Absolute: After completing the section (progress 1).
        - Opacity 0: Before reaching the section (progress <= 0).
      */}
      <motion.div
        style={{
          position: useTransform(scrollYProgress, (v) => (v >= 1 ? 'absolute' : 'fixed')),
          bottom: useTransform(scrollYProgress, (v) => (v >= 1 ? 0 : 'auto')),
          top: useTransform(scrollYProgress, (v) => (v >= 1 ? 'auto' : 0)),
          opacity: useTransform(scrollYProgress, (v) => (v > 0 ? 1 : 0)),
          pointerEvents: useTransform(scrollYProgress, (v) => (v > 0 ? 'auto' : 'none')),
        }}
        className='left-0 h-screen w-full flex justify-center items-center z-10'
      >
        <div className='flex flex-col max-w-6xl w-full px-4 md:px-12 justify-center text-center items-center'>
          <div className='flex gap-2 md:gap-4 mb-6 md:mb-10 opacity-60'>
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
            <img className='w-6 md:w-10 h-auto' alt='brand icon' src={cat} />
          </div>

          <h1 className='text-[10px] sm:text-sm md:text-2xl lg:text-3xl font-black uppercase leading-[1.3] md:leading-[1.6] flex flex-wrap justify-center'>
            {words.map((word, i) => {
              const revealEnd = 0.95
              const start = (i / words.length) * revealEnd
              const end = Math.min(start + (1.5 / words.length) * revealEnd, 1)
              const isPrimary = word.match(/NIT|ROURKELA|NATIONAL|DESIGN|CONFERENCE/i) && i <= 20

              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isPrimary={!!isPrimary}
                >
                  {word}
                </Word>
              )
            })}
          </h1>
        </div>
      </motion.div>

      {/* Progress cue */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
        className='fixed bottom-8 left-1/2 -translate-x-1/2 text-white/20 text-[10px] uppercase tracking-[0.2em] z-20 pointer-events-none'
      >
        Scroll to reveal
      </motion.div>
    </div>
  )
}
