import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from '../containers';
import { Switch } from 'react-router-dom';
import configureStore from '../redux';

const store = configureStore();

// export default function App({ store }): JSX.Element {
export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                </Switch>
            </Router>
        </Provider>
    );
}
