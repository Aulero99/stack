import { createSignal } from 'solid-js'

import solidLogo from './assets/solid.svg'
import Home from './pages/Home'
// import { Routes, Route } from '@solidjs/router'

function App() {
  const [count, setCount] = createSignal(0)

  return (
  <>
    <header>
      This is the header
    </header>
    <img src={ solidLogo } alt="solid logo" height="100px"/>

    {/* <main>
      <Routes>
        <Route path="/" component={Home}/>
      </Routes>
    </main> */}
  </>
  )
}

export default App
