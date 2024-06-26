import './App.css'
import Companies from './components/Companies/Companies'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Recidencies from './components/Residencies/Recidencies'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <Companies />
      <Recidencies />
      <Value />
      <Contact/>
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
