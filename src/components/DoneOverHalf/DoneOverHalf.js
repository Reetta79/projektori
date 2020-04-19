import React from 'react';

import Content from '../Content/Content';
import OverHalf from '../StatsCheckOverHalf/OverHalf';

import './DoneOverHalf.css';


function DoneOverHalf(props) {

let overhalf = props.data.filter(project => project.valmiusaste > "50" && project.valmiusaste <= "90")
let amount2=(overhalf.length);

  let rows = overhalf.map (card=>

    <OverHalf data={card} key={card.id}/>
  );
    return (
      <Content>
            <div className="otsikko2"> 
       <h4>Valmiina yli puolet</h4> <h5>Määrä: {amount2}</h5>
            </div>
        {rows}   
        
      </Content>
    );
  }

  export default DoneOverHalf;