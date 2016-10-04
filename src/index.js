import React from 'react';
import ReactDOM from 'react-dom';
import RARoutes from './routes';
import WelcomeLayout from './layouts/WelcomeLayout'

import GCPlotCore from './core'

// Render the main component into the dom
ReactDOM.render(<WelcomeLayout />, document.getElementById('app'));
