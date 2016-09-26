// Third party modules
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IndexRoute, Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import connectToStores from 'alt-utils/lib/connectToStores';

// Actions


// CSS
require('./style.scss');
require('flexboxgrid');
require('style-loader!animate.css/animate.css');

// In house modules
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import OurProviders from './components/pages/OurProviders';
// Modal flux

//@connectToStores
class App extends React.Component {

  static propTypes = {
    location      : React.PropTypes.object,
    children      : React.PropTypes.object,
  };

  constructor (props) {
    super(props);
  }

  // static getPropsFromStores () {
  //   return {
  //     ...AuthStore.getState(),
  //   };
  // }
  //
  // static getStores () {
  //   return [
  //     AuthStore,
  //   ];
  // }

  render () {
    const { pathname } = this.props.location;
    return (
      <div>
        <Navbar />
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {React.cloneElement(this.props.children || <div />, { key : pathname })}
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}

//const onRouteChange = () => AuthActions.validateSession();<Route path="/home" component={Login}/>

render((
  <Router history={useRouterHistory(createHashHistory)({queryKey : false})}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/ourproviders" component={OurProviders}/>
    </Route>
  </Router>
), document.getElementById('app'));
