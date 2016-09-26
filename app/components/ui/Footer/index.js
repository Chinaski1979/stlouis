// Third party Modules
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// CSS
require('./style.scss');

class Footer extends Component {

  render () {
    return (
      <div id="footer">
        <img className="footer-logo" src={require('./img/logo.png')}/>
        <a href="tel:666-449-4700"><i className="fa fa-phone"></i> 636 - 449 - 4700</a>
        <a ><i className="fa fa-fax"></i> 636 - 449 - 2595</a>
      </div>
    );
  }

}

export default Footer;
