import React from 'react';

import Content2 from '../Content2/Content2';
import OverHalf from '../StatsCheckOverHalf/OverHalf';

import './DoneOverHalf.css';

/*erotellaan done- näytölle projektit, joista tehty yli puolet, tulostetaan määrä*/
function DoneOverHalf(props) {

let overhalf = props.data.filter (project => project.valmiusaste > "50" && project.valmiusaste <= "90")
let amount2=(overhalf.length);

  let rows = overhalf.map (card=>

    <OverHalf data={card} key={card.id}/>
  );
    return (
      
      <div className = "box">
      
          <Content2>
             <div className="otsikko2"> 

              <h4>Valmiina yli puolet</h4> <h5>Määrä: {amount2}</h5></div>
           
          {rows}   
        
          </Content2>
          </div> 
     
    );
  }

  export default DoneOverHalf;