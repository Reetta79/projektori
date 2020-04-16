import React from 'react';

import Content from '../Content/Content';
import ProjectDone from '../ProjectDone/ProjectDone';


function DoneProjects(props) {
    
    let dones = props.data.filter (project => 
         project.valmiusaste === "Valmis");
       
         let valmis= Date(Date.now());
         valmis.toString();
 
      let rows=dones.map (card=>
        <ProjectDone data={card} key={card.id}/>
      );
    

    return(
      <Content>
         {rows}
      </Content>
    );
  }

  export default DoneProjects;
 