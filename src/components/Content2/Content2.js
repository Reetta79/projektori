import React from 'react';
import './Content2.css';

/*kootaan komponettien tietoja contentin sisälle*/

function Content2(props) {
    return (
      <div className="content">
        { props.children }
        
      </div>
    )
  }

export default Content2;