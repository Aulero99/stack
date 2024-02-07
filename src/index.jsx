/* @refresh reload */
import { render } from 'solid-js/web'
import './assets/scss/index.scss'
import { Router, Route } from '@solidjs/router'
import { lazy } from 'solid-js'

import App from './App'
const Home = lazy(() => import("./pages/Home"))

render(
    () => (
        <Router root={App}>
            <Route path="/" component={Home} /> {/* 👈 Define the home page route */}
        </Router>
    ), document.getElementById('root')
);
