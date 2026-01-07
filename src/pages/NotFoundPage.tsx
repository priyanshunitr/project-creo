import { Button } from '@/components/ui/button'
import { H1 } from '@/components/ui/typography'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[80vh] px-4 text-center font-gabarito'>
      <H1 className='mb-4 text-6xl md:text-9xl text-primary'>404</H1>
      <h2 className='text-2xl font-semibold tracking-tight mb-2'>Page not found</h2>
      <p className='text-muted-foreground mb-8 max-w-[500px]'>
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't
        exist.
      </p>
      <Button asChild size='lg'>
        <Link to='/'>Go back home</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage
