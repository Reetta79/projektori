/*import React, { Component } from 'react'

import Projects from '../Projects/Projects';

class VisibleProjects extends Component {
  
  constructor() {
    super()
    this.state = {
      data: [],
      filteredProjects: []
    }
  }

 

  filterProjects = (dataFilter) => {

    let filteredProjects = this.state.data
    filteredProjects = filteredProjects.filter((data) => {
      let dataKuvaus = data.kuvaus.toLowerCase() 
      return data.indexOf(
        dataFilter.toLowerCase()) !== -1
    });
    this.setState({
      filteredProjects
    })
  }

  render() {
    return (
      <Projects dataKuvaus={this.state.filteredProjects} match={this.props.match} onChange={this.filterProjects} />
    )
  }
}

export default VisibleProjects;*/