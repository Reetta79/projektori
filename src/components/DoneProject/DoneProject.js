import React from 'react';

import Content from '../Content/Content';
import ProjectDone from '../ProjectDone/ProjectDone';

import './DoneProject.css';
/*erotellaan done- näytölle projektit, jotka valmiita*/
function DoneProjects(props) {

  
    
    let dones = props.data.filter (project => 
         project.valmiusaste === "Valmis");
         let amount3=(dones.length); 
      
 
      let rows=dones.map (card=>
        <ProjectDone data={card} key={card.id}/>
      );
    

    return(
      <Content>
        <div className="otsikko3">
        <div className="otsikko3__teksti">
        <div><h4> Valmiit</h4> <h5>Määrä: {amount3}</h5></div></div>
        </div>
        
         {rows}
        
      </Content>
    );
  }

  export default DoneProjects;
 