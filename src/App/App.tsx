import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ContactUs, Dashboard } from '../containers';
import configureStore from '../redux';

const store = configureStore();


// export default function App({ store }): JSX.Element {
export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/contact-us" exact component={ContactUs} />
        </Switch>
      </Router>
    </Provider>
  );
}
