import React from 'react';


import Content from '../Content/Content';
import ProjectForm from '../ProjectForm/ProjectForm';

/*lisäysfunktion kautta kootaan tiedot App.js:lle renderöintiin*/

import './AddProject.css';

 function AddProject(props) {
    return (
      <Content>

        <h2> Syötä projektin tai kehitystehtävän tiedot </h2>
       
        <ProjectForm onFormSubmit = {props.onFormSubmit} />
       

      </Content>
    );
  }

  export default AddProject;