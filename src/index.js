import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

// redux store
import store from './store';

import App from './App';
import UserInfo from './UserInfo';
import Zipcode from './Zipcode';

// css
import './index.css';

const Routes = props => (
  <Router {...props}>
    <Route>
      <Route path='/' component={App}>
        <IndexRoute component={Zipcode} />
        <Route path='user-info' component={UserInfo} />
      </Route>
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
