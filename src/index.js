import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GenPinApp from './Components/GenPinApp';
import {Provider} from 'react-redux';
import {store} from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={store}>
    <GenPinApp />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
