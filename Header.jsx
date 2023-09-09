import React from 'react'; // Make sure to import React
import './Header.css';

function Header(props) {
  return (
    <h1 className="header">{props.text}</h1>
  )
}

export default Header 