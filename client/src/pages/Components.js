import React, { Component } from 'react'
import Select from '../components/form/select'
import MultiSelect from '../components/form/multiselect'
import Checkbox from '../components/form/checkbox'

class Components extends Component {
  render() {
    return (
      <div className="content">
        <h3>Select</h3>
        <Select options={['hello', 'there']} />
        <Select options={['hello', 'there']} hasError={true} error="Required" />
        <h3>Multi Select</h3>
        <MultiSelect options={['hello', 'there']} />
        <h3>Checkbox</h3>
        <Checkbox />
      </div>
    )
  }
}

export default Components
