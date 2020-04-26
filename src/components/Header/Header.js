import React from 'react';

import './Header.css';


function Header(props) {
    return(
     
      <div className ="header">
        <div>
        <h1>Projektori</h1>
        <div className="ulos">
        <button onClick={props.onLogout}><label>Kirjaudu ulos</label> </button>  
        </div>

        </div> 
        </div>
   
     
    );
  }
  
  export default Header;