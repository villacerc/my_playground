import React, { Component } from 'react'
import MyPagination from '../components/pagination/'
import faker from 'faker'

const list = new Array(56).fill().map(() => faker.name.findName())

class Pagination extends Component {
  state = {
    myarr: list,
    newArr: list,
  }
  handleNewPage = newList => {
    this.setState({ newArr: newList })
  }
  render() {
    return (
      <div className="content">
        {this.state.newArr.map((el, i) => (
          <div key={i}>{el}</div>
        ))}
        <MyPagination
          onChange={this.handleNewPage}
          list={this.state.myarr}
          itemsPerPage={5}
        />
      </div>
    )
  }
}

export default Pagination
