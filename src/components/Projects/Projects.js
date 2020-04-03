import React from 'react';

import Content from '../Content/Content';
import ProjectCard from '../ProjectCard/ProjectCard';


function Projects(props) {
  let rows = props.data.map(card => {
      return (
        <ProjectCard data={card}/>
      );
    }
  );


    return(
      <Content>
         {rows}
      </Content>
    );
  }

  export default Projects;