import React from 'react';


import Content from '../Content/Content';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxList from '../CheckboxList/CheckboxList';

import './Stats.css';

 function Projectstats(props) {
    return (
      <Content>

        <h2> Tilastot </h2>
       
        <Checkbox onClick = {props.Checkbox}/>   
       

      </Content>
    );
  }

  export default Projectstats;