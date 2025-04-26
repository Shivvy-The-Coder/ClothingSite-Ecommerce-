import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products/Products'
import AOS from 'aos';
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Testimonials from './components/Testimonials';
// comments has been added for clearification 
const App = () => {

  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration: 800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Products/>
      <Testimonials/>
    </div>
  )
}

export default App
