import React from 'react';
import { Link } from 'react-router-dom';
import ViewList from "@material-ui/icons/ViewList";
import TrendingUp from "@material-ui/icons/TrendingUp";
import CheckCircle from "@material-ui/icons/CheckCircle";
import FibreNew from '@material-ui/icons/FiberNew';

/*napit linkeiksi menuun*/

import './Menu.css';

function Menu(props) {
    return(
      <div className="menu" color="action">
        <Link to ="/"><div className="menu__nappi"><ViewList color="action"/></div></Link>
        <Link to ="/stats"><div className="menu__nappi"><TrendingUp color="action"/></div></Link>
        <Link to ="/done"><div className="menu__nappi"><CheckCircle color="action"/></div></Link>
        <Link to = "/add"><div className="menu__nappi"><FibreNew color="action"/></div></Link>
      </div>
    );
  
  }

  export default Menu;