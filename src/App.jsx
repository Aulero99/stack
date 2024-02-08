import { createSignal } from 'solid-js'
import { A } from '@solidjs/router'


import solidLogo from './assets/solid.svg'

function App(props) {
  const [count, setCount] = createSignal(0)

  return (
  <>
    <header>
      <nav class="flex-row">
        <A href="/">Home</A>
        <A href="/about">About</A>
      </nav>
    </header>
    <img src={ solidLogo } alt="solid logo" height="100px"/>
      {props.children}
  </>
  )
}

export default App
