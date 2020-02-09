import React from 'react'
import { Router, Location } from '@reach/router'
import Components from './pages/Components'
import Sidebar from './sidebar'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div>
        <Router>
          <Components path="/" />
        </Router>
      </div>
    </div>
  )
}

export default App
