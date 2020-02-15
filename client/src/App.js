import React from 'react'
import { Router, Location } from '@reach/router'
import Components from './pages/Components'
import Pagination from './pages/Pagination'
import Sidebar from './sidebar'
import Tiles from './pages/tiles'

function App() {
  return (
    <div className="app-container">
      <Location>{props => <Sidebar {...props} />}</Location>
      <div>
        <Router>
          <Components path="/" />
          <Pagination path="/pagination" />
          <Tiles path="/tiles" />
        </Router>
      </div>
    </div>
  )
}

export default App
