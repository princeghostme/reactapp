import React from 'react'
import CsRoute from './Routers/CsRoute'
import Navbar from './Components/NavComp/Navbar'
import Footer from './Components/FooterComp/Footer'

const App = () => {
  return (
    <>
          <Navbar />
          <CsRoute />
          <Footer />
    </>
    
  )
}

export default App