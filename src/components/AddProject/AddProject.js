import React from 'react';

import Content from '../Content/Content';
import ProjectForm from '../ProjectForm/ProjectForm';

import './AddProject.css';

 function AddProject(props) {
    return (
      <Content>

        <h2> Syötä projektin tai kehitystehtävän tiedot </h2>
        
        <ProjectForm/>
      </Content>
    );
  }

  export default AddProject;