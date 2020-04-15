import React from 'react';

import moment from 'moment';



  
class ProjectDone extends React.Component {

  render(props){
     
      let data=this.props.data;
      let filteredProjects = this.props.data;
     
  
         
         let rows = filteredProjects.map (project => {

          
          let valmis= Date(Date.now());
          valmis.toString();

          return(

          <div className="projectcard" key ={data.id}>
          
          <div className="projectcard__row">
          <div className="projectcard__tyyppi">{data.tyyppi}</div>
          </div>
          <div className="projectcard__row">  
          <h4>Aloitettu</h4>
          <div className="projectcard__alkupvm">{data.alkupvm}</div>
          </div>
          <div className="projectcard__row"> 
          <h4>Päättyy</h4>
          <div className="projectcard__loppupvm">{data.loppupvm}</div>
          </div>
          <div className="projectcard__row"> 
          <h4>Budjetti </h4>
          <div className="projectcard__budjetti">{data.budjetti}</div>
          </div>
          <div className="projectcard__row"> 
          <h4>Kuvaus </h4>
          <div className="projectcard__row">{data.kuvaus}</div>   
          </div>
          <div className="projectcard__row">{data.valmiusaste}</div>
          <div className="projectcard__row">{valmis}</div> 
         
          
          </div>
      );
      }          
      );

      
      return (
        
        <div>
         <div>
           <h2>Valmiit</h2>
         </div>
       <div className="done">
        {rows}
       </div>
       </div>
       );
       }
     }
    
      
      
  export default ProjectDone;
