import React from 'react';
import moment from'moment';

function ProjectDone (props) {

    

            let loppupvm = moment(props.data.loppupvm);
            let alkupvm =moment (props.data.alkupvm);
            let valmis = moment (props.data.valmis);
          return(
          <div>
          <div className="projectcard" key ={props.data.id}></div>
          <div className="projectcard__tyyppi">{props.data.tyyppi}</div>
          <div className="projectcard__row">  
          <div>Aloitettu</div>
          <div className="projectcard__alkupvm">{alkupvm.format("D.M.Y")}</div>
          </div>
          <div className="projectcard__row"> 
          <div>Päättyy</div>
          <div className="projectcard__loppupvm">{loppupvm.format("D.M.Y")}</div>
          </div>
          <div className="projectcard__row"> 
          <div>Kuvaus </div>
          <div className="projectcard__row">{props.data.kuvaus}</div>   
          </div>
          <div className="projectcard__row">{props.data.valmiusaste}</div>
          <div className="projectcard__row">{valmis.format("D.M.Y")}</div>   
          </div>
      );
      }          
      
      
  export default ProjectDone;
