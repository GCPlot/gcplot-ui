import React from 'react';
import ReactDOM from 'react-dom';
import RARoutes from './routes';
import WelcomeLayout from './layouts/WelcomeLayout'

import GCPlotCore from './core'

// Render the main component into the dom
if (!GCPlotCore.isLoggedIn()) {
  ReactDOM.render(<WelcomeLayout />, document.getElementById('app'));
} else {
  ReactDOM.render(<RARoutes />, document.getElementById('app'));
}
