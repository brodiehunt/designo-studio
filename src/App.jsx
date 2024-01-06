import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyles from './components/styles/Globals'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

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