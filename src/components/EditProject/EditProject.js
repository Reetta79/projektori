import React from 'react';


import Content from '../Content/Content';
import ProjectForm from '../ProjectForm/ProjectForm';



import './EditProject.css';

 function EditProject(props) {
    return (
      <Content>

        <h2> Syötä projektin tai kehitystehtävän tiedot </h2>
       
        <ProjectForm onFormSubmit = {props.onFormSubmit}/>
       

      </Content>
    );
  }

  export default EditProject;