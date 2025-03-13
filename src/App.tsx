import CsRoute from './Routers/CsRoute'
import Navbar from './Components/NavComp/Navbar'
import Footer from './Components/FooterComp/Footer'
import { HashRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <CsRoute />
        <Footer />
      </HashRouter>
    </>

  )
}

export default App