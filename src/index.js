import React from 'react';
import ReactDOM from 'react-dom';
import RARoutes from './routes';

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./styles/Reactive-Admin.scss');

// Render the main component into the dom
ReactDOM.render(<RARoutes />, document.getElementById('app'));
