import React from 'react'
import Navbar  from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Proverb from './Components/Proverb'
import People from './Components/People'
import Products from './Components/Products'
import Alliances from './Components/Alliances'
import  Award  from './Components/Award'
import Contact from './Components/Contact'
import Footer  from './Components/Footer'



export const App = () => {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800'>
    <Navbar />
    <Home/>
    <About/>
    <Proverb/>
    <Alliances/>
    <People/>
    <Products/>
    <Award/>
    <Contact/>
    <Footer/>
    
    </main>
  )
}
export default App;