import React from 'react';

import Content2 from '../Content2/Content2';
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
      <div className="box">
      <Content2>
        
        <div className="otsikko3">
      
        <div><h4> Valmiit</h4> <h5>Määrä: {amount3}</h5></div>
        </div>
        
         {rows}
        
      </Content2>
      </div>
    );
  }

  export default DoneProjects;
 