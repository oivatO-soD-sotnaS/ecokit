'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MarketAnalysis from '@/components/MarketAnalysis'
import CustomerSegmentation from '@/components/CustomerSegmentation'
import EmpathyMap from '@/components/EmpathyMap'
import Footer from '@/components/Footer'
import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col justify-between">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home" className={`border ${activeSection === 'home' ? 'block' : 'hidden'}`}>
          <Hero setActiveSection={setActiveSection}/>
        </section>
        
        <section id="about" className={activeSection === 'about' ? 'block' : 'hidden'}>
          <About />
        </section>
        
        <section id="market" className={activeSection === 'market' ? 'block' : 'hidden'}>
          <MarketAnalysis />
        </section>
        
        <section id="customers" className={activeSection === 'customers' ? 'block' : 'hidden'}>
          <CustomerSegmentation />
        </section>
        
        <section id="empathy" className={activeSection === 'empathy' ? 'block' : 'hidden'}>
          <EmpathyMap />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
