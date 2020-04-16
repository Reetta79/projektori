import React from 'react';


import Content from '../Content/Content';
import StatsCheck from '../StatsCheck/StatsCheck';

import './Stats.css';

 function Projectstats(props) {

let half = props.data.filter(project => project.valmiusaste < "50")

  let rows = half.map (card=>

    <StatsCheck data={card} key={card.id}/>
  );
    return (
      <Content>
        
        {rows}
        
        
        
      </Content>
    );
  }

  export default Projectstats;