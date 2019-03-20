import React, { Component } from 'react';

import { Link, NavLink} from 'react-router-dom';
import AuthService from '../../services/AuthService';
import { AuthContext } from '../../contexts/AuthStore';

class Header extends Component {

  render(){
    const {user} = this.props;

    return( 
    <div className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
        </ul>
      </div>
    </div>
  )
  }

}

export default (headerProps) => {
  return(
    <AuthContext.Consumer>
      {(props) => (<Header {...props} {...headerProps}/>)}
    </AuthContext.Consumer>
  );
};
  
