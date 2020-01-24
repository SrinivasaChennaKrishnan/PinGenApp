import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from './GenPinApp.module.css';

const GeneratePinTab = lazy(() => import('./GeneratePinTab'));
const SavedPinListTab = lazy(() => import('./SavedPinListTab'));

class GenPinApp extends React.Component {

  render() {
    return (
      <div className={Classes.GenPinApp}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={GeneratePinTab} />
              <Route path="/SavedPinList" component={SavedPinListTab} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default GenPinApp;
