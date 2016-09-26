// Third party Modules
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

//In-house Modules
import BlueBar from '../../ui/BlueBar';
import Footer from '../../ui/Footer';
// CSS
require('./style.scss');

class HomePage extends Component {

  componentDidMount () {
    const mapOptions = {
      center : new google.maps.LatLng(38.6406267, -90.5695473),
      zoom   : 15,
    };
    const map = new google.maps.Map(findDOMNode(this.refs.googleMap), mapOptions);
    const mapMobile = new google.maps.Map(findDOMNode(this.refs.googleMapMobile), mapOptions);
    const marker = new google.maps.Marker({
      position : new google.maps.LatLng(38.6406267, -90.5695473),
      map      : map,
    });
    const markerMobile = new google.maps.Marker({
      position : new google.maps.LatLng(38.6406267, -90.5695473),
      map      : mapMobile,
    });
  }


  render () {
    return (
      <div id="home-page">
        <img className="photo" src={require('./img/women-photo.png')}/>
        <BlueBar />
        <img className="photo infographic" src={require('./img/infrographic.png')}/>
        <div className="infographic-mobile">
          <h3>PERSONALIZED MEDICINE FOR YOU</h3>

            <div className="row middle-xs">
              <div className="col-xs-5 side-img">
                <img className="photo" src={require('./img/providers.png')}/>
              </div>
              <div className="col-xs-7">
                <p>OUR PROVIDERS</p>

                <ul>
                  <li>Dr. Rick Muckerman</li>
                  <li>Dr. George Ahlering</li>
                  <li>Dr. Christi Menges</li>
                  <li>Dr. Jennifer McDonald</li>
                  <li>Kym Renkoski, NP</li>
                </ul>
              </div>
            </div>

          <div className="row middle-xs">
            <div className="col-xs-7 fix-padding" dir="rtl">
              <p>GYNECOLOGY SERVICES</p>
              <ul>
                <li>Surgical Procedures</li>
                <li>Especially for Teens</li>
                <li>Hormones</li>
                <li>Personalized Cancer Prevention</li>
              </ul>
            </div>
            <div className="col-xs-5 side-img">
              <img className="photo" src={require('./img/gynecology.png')}/>
            </div>
          </div>

          <div className="row middle-xs">
            <div className="col-xs-5 side-img">
              <img className="photo" src={require('./img/imaging.png')}/>
            </div>
            <div className="col-xs-7">
              <p>IMAGING</p>
              <ul>
                <li>Ultrasound</li>
                <li>Bone density</li>
                <li>Mammography</li>
              </ul>
            </div>
          </div>

          <div className="row middle-xs">
            <div className="col-xs-7 fix-padding" dir="rtl">
              <p>PREGNANCY</p>
              <ul>
                <li>Infertility</li>
                <li>Labor & Delivery</li>
                <li>Postpartum</li>

              </ul>
            </div>
            <div className="col-xs-5 side-img">
              <img className="photo" src={require('./img/pregnancy.png')}/>
            </div>
          </div>


        </div>
        <div className="review">

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <p>
                St. Louis Women's Healthcare Group provides preventive, diagnostic, and therapeutic health care
                services to women from adolescence through post-menopause. Our purpose is to support our patients
                in achieving happy and healthy lives. For each individual situation, we are dedicated to finding
                the medical or surgical treatment that is most appropriate and most current.
              </p>
              <p>
                We treat patients as unique individuals. We believe that the best medical care can only be delivered
                in a setting where the physician knows their patients. Patients are cared for only by our small group,
                and Dr. Christi Menges is one of few Obstetrician/Gynecologists who provides personalized care to all
                her patients.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <img className="photo doctors-photo" src={require('./img/doctors.png')}/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div ref="googleMap" className="google-map"></div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <p>
                We provide a full spectrum of women’s health services; including routine and problem gynecological care,
                routine and high risk prenatal care, minimal invasive surgery, major surgery, permanent sterilization, and
                menopausal health.
              </p>
              <p>
                Our office believes that emergencies cannot wait months for appointments, and strive for same day services
                for all emergency cases.
              </p>
              <p>
                Our office is a state of the art facility where every effort is made to provide you with the attentive care
                and comfort you deserve and expect from your doctor. It is conveniently located at Clarkson and Baxter in
                Chesterfield and has its own entrance and parking.
              </p>
            </div>

          </div>
          <div ref="googleMapMobile" className="google-map-formobile"></div>

        </div>
      </div>
    );
  }

}

export default HomePage;
