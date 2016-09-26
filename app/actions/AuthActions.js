import { createActions } from 'alt-utils/lib/decorators';
import flux from '../flux';
import Axios from 'axios';
import createBrowserHistory from 'history/lib/createHashHistory';

const history = createBrowserHistory({queryKey : false});

@createActions(flux)
class AuthActions {
  constructor () {
    this.generateActions('setLoginError');
  }

  oAuth (credentials) {
    Axios.post('auth/cms', {
      email    : credentials.email,
      password : credentials.password,
    }).then((response) => {
      if (response.statusText === 'OK') {
        localStorage.setItem('honeygrow', JSON.stringify(response.data.response));
        // history.pushState(null, '/');
        this.actions.setLoginError('');// In case there was a first failed attempt that displayed an error
        this.dispatch(response.data.response.token);
      }else if (response.statusText === 'Unauthorized') {
        this.actions.setLoginError(response.data.errors.message);
      }
    });
  }

  setToken () {
    if (localStorage.getItem('honeygrow')) {
      this.dispatch(JSON.parse(localStorage.getItem('honeygrow')).token);
    }
  }

  destroySesion () {
    // history.pushState(null, '/login');
    localStorage.removeItem('honeygrow');
    this.dispatch();
  }

  validateSession () {
    if (!localStorage.getItem('honeygrow') && window.location !== '#/login') {
      // history.pushState(null, '/login');
    }
  }
}

export default AuthActions;
