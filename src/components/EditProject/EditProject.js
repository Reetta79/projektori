import React from 'react';


import Content from '../Content/Content';
import ProjectForm from '../ProjectForm/ProjectForm';
import './EditProject.css';

  

 function EditProject(props) {

  const index = props.data.findIndex (project => project.id === props.match.params.id);

  let projectData = props.data[index];


    return (
      <Content>
        <div className="editproject">

        <h2> Muokkaa projektin tietoja </h2>

       <p>Match: {index}</p>
        <ProjectForm onFormSubmit = {props.onFormSubmit} selectList={props.selectList} data={projectData}/>
       
        </div>
      </Content>
    );
  }

  export default EditProject;