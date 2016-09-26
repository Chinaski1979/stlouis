import { createStore, bind } from 'alt-utils/lib/decorators';
import flux from '../flux';
import AuthActions from '../actions/AuthActions';

@createStore(flux)
class AuthStore {
  constructor () {
    this.state = {
      authenticated : false,
      authToken     : null,
      loginError    : '',
    };
  }

  @bind(AuthActions.oAuth)
  oAuth (token) {
    this.setState({
      authenticated : true,
      authToken     : token,
    });
  }

  @bind(AuthActions.setToken)
  setToken (token) {
    if (this.state.authToken === null) {
      this.setState({
        authenticated : true,
        authToken     : token,
      });
    }
  }

  @bind(AuthActions.destroySesion)
  destroySesion () {
    this.setState({
      authToken     : null,
      authenticated : false,
    });
  }

  @bind(AuthActions.setLoginError)
  setLoginError (errorMessage) {
    if (errorMessage !== this.state.loginError) {
      this.setState({
        loginError : errorMessage,
      });
    }
  }
}

export default AuthStore;
