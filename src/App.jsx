import React from 'react'
import './index.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcometoObiztec';
import Services from './components/Services';
import WhyChooseObiztec from './components/WhyChoose'
function App() {

  return (
    <>
      <Home/>
      <WelcomeSection/>
      <Services/>
      <WhyChooseObiztec/>
      <Footer/>
    </>
  )
}

export default App
