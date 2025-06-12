import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import BookingForm from './pages/BookingForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accommodations from './pages/Accomodations'
import Amenities from './pages/Ammenities'

function LandingPage() {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth'

    // Handle hash navigation on page load
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="accommodations">
        <Accommodations />
      </div>
      <div id="amenities">
        <Amenities />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book/:id" element={<BookingForm />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App