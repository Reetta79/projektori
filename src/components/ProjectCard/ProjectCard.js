import React from 'react';
import moment from 'moment';

import './ProjectCard.css';
import { Link } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';





function ProjectCard(props) {

      

      let alkupvm = moment(props.data.alkupvm);
      let loppupvm = moment(props.data.loppupvm);

      return(
      <div className="projectcard" key={props.data.id}>
          <div className="projectcard__row">
          <div className="projectcard__tyyppi">{props.data.tyyppi}</div>
          </div>
          <div className="projectcard__row">  
          <h4>Aloitettu</h4>
          <div className="projectcard__alkupvm">{alkupvm.format("D.M.Y")}</div>
          </div>
          <div className="projectcard__row"> 
          <h4>Päättyy</h4>
          <div className="projectcard__loppupvm">{loppupvm.format("D.M.Y")}</div>
          </div>
          <div className="projectcard__row"> 
          <h4>Budjetti </h4>
          <div className="projectcard__budjetti">{props.data.budjetti}</div>
          </div>
          <div className="projectcard__row"> 
          <h4>Kuvaus </h4>
          <div className="projectcard__row">{props.data.kuvaus}</div>   
          </div>
          <div className="projectcard__row"> 
          <h4>Valmis % </h4>
          <div className="projectcard__row">{props.data.valmiusaste}</div>   
          </div>
          <div className="projectcard__row">
          <div>
          <p><Link to={"/edit/" + props.data.id}><label>Muokkaa</label> </Link> </p>
            Keskeytetty <Checkbox type="checkboxl" size="small" inputProps={{ 'aria-label': 'checkbox with small size' }}/>    
          </div>
          </div>
          </div>
          
    );
  }



  export default ProjectCard;