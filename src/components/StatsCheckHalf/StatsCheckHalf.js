import React from 'react';

import './StatsCheck.css'

function StatsCheckHalf (props) {    


    return(
     
    <div>
    <div className="projectcard" key={props.data.id}></div>
    <div className="projectcard__tyyppi">{props.data.tyyppi}</div>
    <div className="projectcard__row"> 
    <div className="projectcard__valmiusaste">{props.data.valmiusaste} % </div>
    </div>
    <div className="projectcard__row"> 
    <div>Päättyy </div>
    <div className="projectcard__loppupvm">{props.data.loppupvm}</div>
    </div>
    <div className="projectcard__row"> 
    <div className="projectcard__kuvaus">{props.data.kuvaus}</div>
    </div>
    </div>
    
    );
    }

    export default StatsCheckHalf;