import React from 'react';

import Content from '../Content/Content';
import ProjectDone from '../ProjectDone/ProjectDone';

import './DoneProject.css';


function DoneProjects(props) {

  
    
    let dones = props.data.filter (project => 
         project.valmiusaste === "Valmis");
         
      
 
      let rows=dones.map (card=>
        <ProjectDone data={card} key={card.id}/>
      );
    

    return(
      <Content>
        <div className="otsikko3">
        <h3>Valmiit</h3>
        </div>

         {rows}

      </Content>
    );
  }

  export default DoneProjects;
 