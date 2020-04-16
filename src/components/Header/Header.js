import React from 'react';

import './Header.css';

import TaustaKuva from '../Images/TaustaKuva.png';

function Header() {
    return(
     
      <div className ="header">
        <div>
        <h1>Projektori</h1>
        </div>
        <div className="kuva">
        <img src={TaustaKuva} alt=""></img>
        </div>
        </div>
     
    );
  }
  
  export default Header;