/*import React from 'react';
import { ReactComponent } from '*.svg';


class Search extends ReactComponent{

  filterList: function(event){
    var updatedList = this.state.initialProjects;
    updatedList = updatedList.filter(function(project){
      return project.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({projects: updatedList});
  },
  getInitialState: function(){
     return {
       initialProjects: [
       data
       ],
       projects: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialProjects})
  },
  render: function(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
      <List projectss={this.state.projects}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.projects.map(function(projects) {
          return <li key={project}>{project}</li>
        })
       }
      </ul>
    )  
  }
});

}*/


