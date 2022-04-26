import React from 'react';
import {Link} from 'react-router-dom';
import Page from './Page';
import Sanna from './Sanna';

function AppBar() {

  return (
    <ul>
      <li> <Link to="/"> Home </Link> </li>
      <li> <Link to="/page"> Test page </Link> </li>
    </ul>
    // <div>
    //    <a
    //   className="App-link"
    //   href="/"
    //   rel="noopener noreferrer"
    // >
    //     Home
    //   </a>
    //   <br></br>
    //   <a
    //     className="App-link"
    //     href="/sanna"
    //     target="_blank" 
    //   >
    //     Test page
    //   </a>
    //   </div>

  );  
}
export default AppBar;
