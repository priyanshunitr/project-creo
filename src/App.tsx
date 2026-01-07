import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const TypographyPage = lazy(() => import('./pages/TypographyPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const Playground = lazy(() => import('./pages/PlaygroundPage'))
const UploadPage = lazy(() => import('./pages/UploadPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/typography' element={<TypographyPage />} />
          <Route path='/playground' element={<Playground />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
