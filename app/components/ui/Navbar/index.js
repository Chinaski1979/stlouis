// Third party Modules
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {Link} from 'react-router';
import createBrowserHistory from 'history/lib/createHashHistory';
// CSS
require('./style.scss');
let Menu = require('react-burger-menu').stack;

const history = createBrowserHistory({queryKey : false});

class Navbar extends Component {

  constructor (props) {
    super(props);

    this.state = {
      isOpen : false,
    };
  }

  render () {
    return (
      <div id="navbar">
        <Menu isOpen={this.state.isOpen}>
          <a className="menu-item" onClick={this.goTo.bind(null, '/')}>Home</a>
          <a className="menu-item" onClick={this.goTo.bind(null, '/ourproviders')}>Our Providers</a>
          <a className="menu-item" onClick={this.goTo.bind(null, '/aboutus')} activeClassName="active">About Us</a>
          <a className="menu-item" onClick={this._goToPage.bind(null, 'http://stlobgyn.com/ourServices.aspx')} activeClassName="active">Our Services</a>
          <a className="menu-item" onClick={this._goToPage.bind(null, 'http://stlobgyn.com/frontDesk.aspx')} activeClassName="active">Front Desk</a>
          <a className="menu-item" onClick={this._goToPage.bind(null, 'http://stlobgyn.com/Pregnancy.aspx')} activeClassName="active">Helpful Info</a>
        </Menu>
        <div className="navlinks-container">
          <div className="logo">
            <img onClick={this.goTo.bind(null, '/')} src={require('./img/logo.png')}/>
          </div>
          <nav className="nav-links">
            <Link to="/ourproviders" activeClassName="active">Our Providers</Link>
            <Link to="/aboutus" activeClassName="active">About Us</Link>
            <a onClick={this._goToPage.bind(null, 'http://stlobgyn.com/ourServices.aspx')} activeClassName="active">Our Services</a>
            <a onClick={this._goToPage.bind(null, 'http://stlobgyn.com/frontDesk.aspx')} activeClassName="active">Front Desk</a>
            <a onClick={this._goToPage.bind(null, 'http://stlobgyn.com/Pregnancy.aspx')} activeClassName="active">Helpful Info</a>
          </nav>
        </div>
      </div>
    );
  }

  goTo = (route) => {
    history.pushState(null, route);
    this.setState({
      isOpen : false,
    });
  }

  _goToPage = (url) => {
    console.log('here!!!');
    window.open(url, '_blank');
  }

}

export default Navbar;
