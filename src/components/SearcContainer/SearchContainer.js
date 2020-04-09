import React, { Component } from 'react'

import  allProjects from '../AllProjects/AllProjects';

import Projects from '../Projects/Projects';



class VisibleProjects extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      filteredProjects: []
    }
  }

  componentWillMount() {
    this.setState({
      allProjects,
      filteredProjects: allProjects
    })
  }

  filterProjects = (data) => {
    let filteredProjects = this.state.data
        filteredProjects = filteredProjects.filter((data) => {
        let datakuvaus = data.kuvaus.toLowerCase() 
        return datakuvaus.indexOf(
        datakuvaus.toLowerCase()) !== -1
    })
    this.setState({
      filteredProjects
    })
  }

  render() {
    return (
      <data data={this.state.filteredProjects} match={this.props.match} onChange={this.filterProjects} />
    )
  }
}

export default VisibleProjects;