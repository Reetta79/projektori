import React from 'react';

import moment from 'moment';

import testdata from '../../testdata'
  
  class ProjectDone extends React.Component  {

   render(){
     

      let filteredProjects = testdata.filter (project => 
        project.valmiusaste === "Valmis"
      );

        let rows = filteredProjects.map (project => {


            let alkupvm = moment(project.alkupvm);
            let loppupvm = moment(project.loppupvm);
            let valmis= Date(Date.now());
            valmis.toString();

            return(

            <div className="projectcard" key ={project.id}>
            
            <div className="projectcard__row">
            <div className="projectcard__tyyppi">{project.tyyppi}</div>
            </div>
            <div className="projectcard__row">  
            <h4>Aloitettu</h4>
            <div className="projectcard__alkupvm">{alkupvm.format('D.M.Y')}</div>
            </div>
            <div className="projectcard__row"> 
            <h4>Päättyy</h4>
            <div className="projectcard__loppupvm">{loppupvm.format('D.M.Y')}</div>
            </div>
            <div className="projectcard__row"> 
            <h4>Budjetti </h4>
            <div className="projectcard__budjetti">{project.budjetti}</div>
            </div>
            <div className="projectcard__row"> 
            <h4>Kuvaus </h4>
            <div className="projectcard__row">{project.kuvaus}</div>   
            </div>
            <div className="projectcard__row">{project.valmiusaste}</div>
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
