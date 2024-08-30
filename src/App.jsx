import './App.css'
import Sweet from './components/Sweet/Sweet'
import Hero from '/src/components/Hero/Hero'
import Break from '/src/components/Breakfast/Break'
import Drink from './components/Drink/Drink'
import Download from './components/Download/Download'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Sweet/>
      <Break />
      <Drink/>
      <Download/>
      <Footer />
    </div>
  )
}

export default App
