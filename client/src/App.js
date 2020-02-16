import React from 'react'
import { Router, Location } from '@reach/router'
import Components from './pages/Components'
import Pagination from './pages/Pagination'
import Nav from './nav'
import Grid from './pages/grid'

function App() {
  return (
    <div className="global-container">
      <Location>{props => <Nav {...props} />}</Location>
      <main className="global-main">
        <Router>
          <Components path="/" />
          <Pagination path="/pagination" />
          <Grid path="/grid" />
        </Router>
      </main>
    </div>
  )
}

export default App
