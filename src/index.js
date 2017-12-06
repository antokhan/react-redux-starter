import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import Main from './app/containers/main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
