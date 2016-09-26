// Third party Modules
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
//In-house Modules
import BlueBar from '../../ui/BlueBar';
import Footer from '../../ui/Footer';
// CSS
require('./style.scss');

class OurProviders extends Component {

  constructor (props) {
    super(props);

    this.state = {
      array : [],
    };
  }

  render () {
    return (
      <div id="our-providers">
        <img className="photo" src={require('./img/mainphoto.png')}/>
        <BlueBar />
        <div className="providers-container">
          <div className="row middle-xs center-xs provider-item">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 doctor-img">
              <img className="" src={require('./img/muckerman.png')}/>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 doctor-text">
              <h4>Dr. Muckerman</h4>
              <p>
                Dr. Muckerman is an expert in general obstetrics with an emphasis on high-risk pregnancy.
                He has delivered close to 7,000 babies and makes each one special. He has a large gynecologic
                practice with an emphasis on perimenopause and menopause. His menopause practice focuses on
                bioidentical hormone replacement therapy. He is also a certified clinical bone densitometrist.
              </p>
            </div>
          </div>

          <div className="center-item">
            <div className="row middle-xs center-xs provider-item ">
              <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 doctor-text">
                <h4>Dr. Ahlering</h4>
                <p>
                  Dr. Ahlering is a nationally recognized expert in minimally invasive gynecology, focusing on the
                  most revolutionary and innovative techniques to treat gynecological problems with minimal recovery
                  time and return to normal function as quickly as possible. He and his team of infertility specialist
                  staff also have developed one of the most successful and attentive fertility clinics in the Midwest.
                  His other area of focus is bioidentical hormone supplementation, having been the leader in introducing
                  pellet therapy to the St. Louis
                </p>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 doctor-img">
                <img className="" src={require('./img/ahlering.png')}/>
              </div>
            </div>
          </div>


          <div className="row middle-xs center-xs provider-item">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 doctor-img">
              <img className="" src={require('./img/menges.png')}/>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 doctor-text">
              <h4>Dr. Christi Menges</h4>
              <p>
                Dr. Christi Menges is a recent graduate of the esteemed OB Gyn residency program at St. John’s
                Mercy Medical Center. She is an excellent surgeon and remains dedicated to optimizing her surgical
                experience by operating alongside Dr. Ahlering in his busy minimally invasive surgical practice.
                She loves offering personalized care to all her patients and is always on call for her patients’
                deliveries.
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default OurProviders;
