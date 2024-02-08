/* @refresh reload */
import { render } from 'solid-js/web'
import './assets/scss/index.scss'
import { Router, Route } from '@solidjs/router'
import { lazy } from 'solid-js'

import NotFound from './pages/NotFound'
const App = lazy(() => import('./App'))
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))

render(
    () => (
        <Router root={App}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="*404" component={NotFound} />
        </Router>
    ), document.getElementById('root')
);
