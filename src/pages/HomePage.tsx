import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '@/components/hero/Hero'
import Preloader from '@/components/ui/Preloader'
import ApplySection from '@/components/applySection'
import Footer from '@/components/marginals/footer/Footer'
import NavBar from '@/components/marginals/navbar/NavBar'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className='bg-black overflow-x-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader key='preloader' onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className='fixed bottom-4 left-0 w-full z-50 px-4 md:px-8 pointer-events-none'>
        <NavBar />
      </div>

      <Hero />
      <ApplySection />
      <Footer />
    </main>
  )
}
