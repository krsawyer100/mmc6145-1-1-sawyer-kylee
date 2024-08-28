import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />}/>
      </Routes>
    </>
  )
}