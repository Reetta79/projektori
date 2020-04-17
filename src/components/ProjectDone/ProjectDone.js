import React from 'react';

  
function ProjectDone (props) {

   
    let valmis= Date(new Date());
    valmis.toString();

          return(

          <div className="projectcard" key ={props.data.id}>
          
          <div className="projectcard__row">
          <div className="projectcard__tyyppi">{props.data.tyyppi}</div>
          </div>
          <div className="projectcard__row">  
          <h4>Aloitettu</h4>
          <div className="projectcard__alkupvm">{props.data.alkupvm}</div>
          </div>
          <div className="projectcard__row"> 
          <h4>Päättyy</h4>
          <div className="projectcard__loppupvm">{props.data.loppupvm}</div>
          </div>
          <div className="projectcard__row"> 
          <h4>Budjetti </h4>
          <div className="projectcard__budjetti">{props.data.budjetti}</div>
          </div>
          <div className="projectcard__row"> 
          <h4>Kuvaus </h4>
          <div className="projectcard__row">{props.data.kuvaus}</div>   
          </div>
          <div className="projectcard__row">{props.data.valmiusaste}</div>
          <div className="projectcard__row">{valmis}</div>   
          </div>
      );
      }          
      

      
  export default ProjectDone;
