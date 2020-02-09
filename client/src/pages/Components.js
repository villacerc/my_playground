import React, { Component } from 'react'
import Select from '../components/form/select'

class Components extends Component {
  render() {
    return (
      <div className="content">
        <p>Select</p>
        <Select options={['hello', 'there']} />
      </div>
    )
  }
}

export default Components
