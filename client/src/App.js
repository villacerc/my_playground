import React from 'react'
import { Router, Location } from '@reach/router'
import Components from './pages/Components'
import Pagination from './pages/Pagination'
import Nav from './nav'
import Grid from './pages/grid'
import AspectRatio from './pages/aspect_ratio'
import Parallax from './pages/parallax'
import Modal from './pages/modal'

function App() {
  return (
    <div className="global-container">
      <Location>{(props) => <Nav {...props} />}</Location>
      <main className="global-main">
        <Router>
          <Components path="/" />
          <Pagination path="/pagination" />
          <Grid path="/grid" />
          <AspectRatio path="/aspect-ratio" />
          <Parallax path="/parallax" />
          <Modal path="/modal" />
        </Router>
      </main>
    </div>
  )
}

export default App
