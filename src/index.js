import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import Apps from './container/connectApp';
import store from './store/store';




ReactDOM.render(
    <Provider store={store}><Apps /></Provider>,
     document.getElementById('root'));
registerServiceWorker();
