import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Accommodations, { rooms } from './pages/Accomodations'
import Amenities from './pages/Ammenities'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Layout from './Layout'
import BookingForm from './pages/BookingForm'

function MainPage() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="accommodations"><Accommodations /></section>
      <section id="amenities"><Amenities /></section>
      <section id="gallery"><Gallery /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/book/:id" element={<BookingForm />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
