import React from 'react';

import './DoneHalf.css';

import Content from '../Content/Content';
import StatsCheckHalf from '../StatsCheckHalf/StatsCheckHalf';


function DoneHalf(props) {

let half = props.data.filter(project => project.valmiusaste <= "50")

  let rows = half.map (card=>

    <StatsCheckHalf data={card} key={card.id}/>
  );
    return (
      <Content>
         <div className="otsikko">  
       <h3>Valmiina alle puolet</h3>
       </div> 
        {rows}   
        
      </Content>
    );
  }

  export default DoneHalf;