import React from 'react';
import moment from 'moment';

import './StatsCheckOverHalf.css';

function OverHalf (props) {    

    let loppupvm = moment(props.data.loppupvm);

    return(
     
    <div>
    <div className="projectcard" key={props.data.id}></div>
    <div className="projectcard__tyyppi">{props.data.tyyppi}</div>
    <div className="projectcard__row"> 
    <div className="projectcard__valmiusaste">{props.data.valmiusaste} % </div>
    </div>
    <div className="projectcard__row"> 
    <div>Päättyy </div>
    <div className="projectcard__loppupvm">{loppupvm.format("D.M.Y")}</div>
    </div>
    <div className="projectcard__row"> 
    <div className="projectcard__kuvaus">{props.data.kuvaus}</div>
    </div>
    </div>
    
    );
    }

    export default OverHalf;