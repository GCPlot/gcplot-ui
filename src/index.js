import React from 'react';
import ReactDOM from 'react-dom';
import RARoutes from './routes';
import WelcomeLayout from './layouts/WelcomeLayout'
import NewPasswordLayout from './layouts/NewPasswordLayout'

import GCPlotCore from './core'

var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

if (typeof qs["cp"] != 'undefined') {
  ReactDOM.render(<NewPasswordLayout token={qs["token"]} salt={qs["salt"]} />, document.getElementById('app'));
} else {
  // Render the main component into the dom
  if (!GCPlotCore.isLoggedIn()) {
    window.location.replace("https://" + window.landingHost);
  } else {
    ReactDOM.render(<RARoutes />, document.getElementById('app'));
  }
}
