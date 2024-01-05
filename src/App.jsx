import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyles from './components/styles/Globals'
import Header from './components/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalStyles />
      <Header />
     <main>
      <Outlet />
     </main>
    </div>
  )
}

export default App
