import { AnnouncementBar } from './components/AnnouncementBar'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Collection } from './components/Collection'
import { Editorial } from './components/Editorial'
import { Manifesto } from './components/Manifesto'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen overflow-x-hidden">
      <AnnouncementBar />
      <Nav />
      <Hero />
      <Collection />
      <Editorial />
      <Manifesto />
      <Footer />
    </div>
  )
}

export default App
