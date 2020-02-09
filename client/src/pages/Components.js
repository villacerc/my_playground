import React, { Component } from 'react'
import Select from '../components/form/select'
import MultiSelect from '../components/form/multiselect'

class Components extends Component {
  render() {
    return (
      <div className="content">
        <p>Select</p>
        <Select options={['hello', 'there']} />
        <p>Multi Select</p>
        <MultiSelect options={['hello', 'there']} />
      </div>
    )
  }
}

export default Components
