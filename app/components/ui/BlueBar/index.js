// Third party Modules
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// CSS
require('./style.scss');

class BlueBar extends Component {

  render () {
    return (
      <div id="blue-bar">
        <div className="inner-container row">
          <div className="column col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <div className="facebook-logo1" onClick={this._goToPage.bind(null, 'https://www.facebook.com/stlobgyn/')}>
              <i className="fa fa-lg fa-facebook"></i>
            </div>
            <img onClick={this._goToPage.bind(null, 'https://www.facebook.com/stlobgyn/')} className="facebook-logo2" src={require('./img/facebooklogo.png')}/>
          </div>
          <div className="column col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <button onClick={this._goToPage.bind(null, 'https://www.zocdoc.com/practice/st-louis-womens-healthcare-group-22997?lock=true&isNewPatient=false&referrerType=Widget')}>
              Book an Appointment
            </button>
            <button onClick={this._goToPage.bind(null, 'https://www.medfusion.net/stlouiswomenshealthcaregroup-21501/portal/#/user/login')}>
              Patient Portal
            </button>
          </div>
          <div className="column col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <p className="main-p">Monday - Friday</p>
            <p className="secondary-p">8:30 AM - 5 PM</p>
          </div>
        </div>
      </div>
    );
  }

  _goToPage = (url) => {
    window.open(url, '_blank');
  }

}

export default BlueBar;
