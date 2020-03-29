import React, { Component } from 'react'
import Select from '../components/form/select'
import MultiSelect from '../components/form/multiselect'
import Checkbox from '../components/form/checkbox'
import SlidingContainer from '../components/form/slidingContainer'

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
        <h3>Sliding Container</h3>
        <SlidingContainer />
      </div>
    )
  }
}

export default Components
