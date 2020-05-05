import React from 'react';

import './DoneHalf.css';

import Content2 from '../Content2/Content2';
import StatsCheckHalf from '../StatsCheckHalf/StatsCheckHalf';

/*erotellaan done- näytölle projektit, joista tehty 50 tai sen alle, tulostetaan määrä*/
function DoneHalf(props) {

let half = props.data.filter(project => project.valmiusaste <= "50")
let amount=(half.length);
  let rows = half.map (card=>

    <StatsCheckHalf data={card} key={card.id} luku={amount}/>
  );
    return (
      <div className="box">
      <Content2>
        
         <div className="otsikko">  
       <h4>Valmiina alle puolet</h4><h5>Määrä: {amount}</h5>
       </div> 
       
        {rows}   
        
      </Content2>
      </div> 
    );
  }

  export default DoneHalf;