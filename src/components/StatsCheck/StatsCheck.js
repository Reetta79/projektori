import React from 'react';

function StatsCheck (props) {



    return(
       <div>
    <div className="projectcard" key ={props.data.id}>
    </div>
    <div className="projectcard__tyyppi">{props.data.tyyppi}</div>
    </div>
    );
    }

    export default StatsCheck;