import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import useScroll from './hooks/useScrollTop'
import GlobalStyles from './components/styles/Globals'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {
  const scroll = useScroll();

  return (
    <div>
      <GlobalStyles />
      <Header />
     <main>
      <Outlet />
     </main>
     <Footer />
    </div>
  )
}

export default App
