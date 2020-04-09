
import React, { Component } from 'react'



class filterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kuvausFilter: ""
    }
  }
  
  handleChange = (event) => {
    this.setState({
      dateFilter: event.target.value
    })
    this.props.onChange(event.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Kirjoita kuvauksen hakusana </label>
        <input type="text" id="filter" 
          value={this.state.data.kuvaus} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default filterForm;