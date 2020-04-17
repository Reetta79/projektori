import React from 'react';

import Content from '../Content/Content';
import OverHalf from '../StatsCheckOverHalf/OverHalf';

import './DoneOverHalf.css';


function DoneOverHalf(props) {

let half = props.data.filter(project => project.valmiusaste > "50" && project.valmiusaste <= "90")

  let rows = half.map (card=>

    <OverHalf data={card} key={card.id}/>
  );
    return (
      <Content>
            <div className="otsikko2"> 
       <h3>Valmiina yli puolet</h3>
            </div>
        {rows}   
        
      </Content>
    );
  }

  export default DoneOverHalf;