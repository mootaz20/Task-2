import './App.css'
import BestDeal from './components/BestDeal/BestDeal'
import ContactInformation from './components/Contact Information/ContactInformation'
import Contact from './components/Contact/Contact'
import CounterContainer from './components/CounterContainer/CounterContainer'
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Properties from './components/Properties/Properties'
import VideoView from './components/VideoView/VideoView'

function App() {
  return (
    <>
    <ContactInformation />
    <Navbar />
    <Hero />
    <Featured />
    <VideoView />
    <CounterContainer />
    <BestDeal />
    <Properties />
    <Contact />
    <Footer />
    </>
  )
}

export default App
