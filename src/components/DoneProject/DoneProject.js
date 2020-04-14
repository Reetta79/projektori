/*import React from 'react';

import Content from '../Content/Content';

import ProjectForm from '../ProjectForm/ProjectForm';

import ProjectDone from '../ProjectDone/ProjectDone';

import './AddProject.css';

 function DoneProject(props) {

    const index = props.data.findIndex (project => project.id === props.match.params.id);

    let projectData = props.data[index];

  

    return (
      <Content>

        <h2> Syötä projektin tai kehitystehtävän tiedot </h2>
       
        <ProjectDone onFormSubmit = {props.onFormSubmit} data = {projectData} doneProject={props.handleDone} />       

      </Content>
    );
  }

  export default DoneProject;*/