import { createSignal } from 'solid-js'
import { A } from '@solidjs/router'


import solidLogo from './assets/solid.svg'

function App(props) {
  const [count, setCount] = createSignal(0)

  return (
  <>
    <header>
      <nav class="flex-row">
        <A href="/" class='px-2'>Home</A>
        <A href="/about" class='px-2'>About</A>
      </nav>
    </header>
    <img src={ solidLogo } alt="solid logo" height="100px"/>
      {props.children}
  </>
  )
}

export default App
