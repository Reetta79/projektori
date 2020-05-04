import React from 'react';
import './Content.css';

/*kootaan komponettien tietoja contentin sisälle*/

function Content(props) {
    return (
      <div className="content">
        { props.children }
        
      </div>
    )
  }

export default Content;