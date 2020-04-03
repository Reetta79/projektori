import React from 'react';
import { Link } from 'react-router-dom';
import ViewList from "@material-ui/icons/ViewList";
import TrendingUp from "@material-ui/icons/TrendingUp";
import CheckCircle from "@material-ui/icons/CheckCircle";
import FibreNew from '@material-ui/icons/FiberNew';



import './Menu.css';

function Menu(props) {
    return(
      <div className="menu" nativeColor="#000">
        <Link to ="/"><div className="menu__nappi"><ViewList nativeColor="#fff"/></div></Link>
        <Link to ="/stats"><div className="menu__nappi"><TrendingUp nativeColor="#fff"/></div></Link>
        <Link to ="/done"><div className="menu__nappi"><CheckCircle nativeColor="#fff"/></div></Link>
        <Link to = "/add"><div className="menu__nappi"><FibreNew nativeColor="#fff"/></div></Link>
      </div>
    );
  
  }

  export default Menu;