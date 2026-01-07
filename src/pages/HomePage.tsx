import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className='container mx-auto py-10 space-y-8'>
      <h1 className='text-4xl font-bold font-gabarito'>Welcome to Project Creo</h1>
      <div className='flex gap-4'>
        <Button asChild variant='outline'>
          <Link to='/playground'>Go to Playground</Link>
        </Button>
        <Button asChild variant='outline'>
          <Link to='/upload'>Upload Assets</Link>
        </Button>
      </div>
    </main>
  )
}
