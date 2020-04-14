import React from 'react';

import './Header.css'
import TaustaKuva from '../Images/TaustaKuva.png';

function Header() {
    return(
      
      <div className ="header">
        <h1>Projektori</h1><img src={TaustaKuva} alt="header"/>
        
      </div>
    );
  }
  
  export default Header;