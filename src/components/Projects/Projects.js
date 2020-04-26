import React from 'react';

import Content from '../Content/Content';
import ProjectCard from '../ProjectCard/ProjectCard';

/*mäpätään projektikortin tiedot pääväkymälle*/
function Projects(props) {
  let rows = props.data.map(card => {
      return (
        <ProjectCard data={card} key={card.id}/>
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