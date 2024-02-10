import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'
import FallBack from './components/FallBack'

const App = lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<FallBack />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
