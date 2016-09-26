// Third party Modules
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
//In-house Modules
import BlueBar from '../../ui/BlueBar';
import Footer from '../../ui/Footer';
// CSS
require('./style.scss');

class AboutUs extends Component {

  constructor (props) {
    super(props);

    this.state = {
      array : [],
    };
  }

  render () {
    return (
      <div id="about-us">
        <img className="photo" src={require('./img/main-image.png')}/>
        <div className="text-over">
          <div className="row center-xs">
            <div className="col-xs-10 col-sm-10 col-md-6 col-lg-6 text-container">
              <h3>About us</h3>
              <p>
                St. Louis Women's Healthcare Group provides preventive, diagnostic, and therapeutic health care
                services to women from adolescence through post-menopause. Our purpose is to support our patients
                in achieving happy and healthy lives. For each individual situation, we are dedicated to finding the
                medical or surgical treatment that is most appropriate and most current.
              </p>
            </div>
          </div>
        </div>
        <BlueBar />

          <div className="text-over-mobile">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-6 col-lg-6 text-container">
                <h3>About us</h3>
                <p>
                  St. Louis Women's Healthcare Group provides preventive, diagnostic, and therapeutic health care
                  services to women from adolescence through post-menopause. Our purpose is to support our patients
                  in achieving happy and healthy lives. For each individual situation, we are dedicated to finding the
                  medical or surgical treatment that is most appropriate and most current.
                </p>
              </div>
            </div>
          </div>

        <div className="review">
          <div className="row middle-md">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
              <img className="photo" src={require('./img/doctors.png')}/>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
              <p>
                We treat patients as unique individuals. We believe that the best medical care can only be delivered in
                a setting where the physician knows their patients. Patients are cared for only by our small group, and
                Dr. Christi Menges is one of few Obstetrician/Gynecologists who provides personalized care to all her patients.
                We provide a full spectrum of women’s health services; including routine and problem gynecological care,
                routine and high risk prenatal care, minimal invasive surgery, major surgery, permanent sterilization,
                and menopausal health.
                Our office believes that emergencies cannot wait months for appointments, and we guarantee same day
                services for all emergency cases. We offer morning, afternoon, evening and weekend office hours. When
                our doctors are not in the office, one is always available to answer emergency questions.
                Our office is a state of the art facility where every effort is made to provide you with the attentive
                care and comfort you deserve and expect from your doctor. It is conveniently located at Clarkson and
                Baxter in Chesterfield and has its own entrance and parking.
              </p>
            </div>
          </div>
        </div>
        <img className="photo slide" src={require('./img/slide.png')}/>

      </div>

    );
  }

}

export default AboutUs;
