import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import NewAnalysePage from './pages/NewAnalysePage';
import AnalyseInfoPage from './pages/AnalyseInfoPage';
import JvmInfoPage from './pages/JvmInfoPage';
import QuickProcessPage from './pages/QuickProcessPage'
import ProfilePage from './pages/ProfilePage'
import TermsOfService from './pages/TermsOfService'
import RealtimeConnection from './pages/RealtimeConnection'
import FAQ from './pages/FAQ'
import GCPlotCore from './core'
var ReactGA = require('react-ga');
ReactGA.initialize('UA-88807066-1');

export default () => {
  var logPageView = function() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  };
  return (
    <Router onUpdate={logPageView} history={browserHistory}>
      <Route path={"/" + GCPlotCore.APP_SUFFIX} component={MainLayout}>
        <IndexRoute component={DashboardPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/quick_process" component={QuickProcessPage} />
        <Route path="/analyse/new" component={NewAnalysePage} />
        <Route path="/analyse/info/:analyseId" component={AnalyseInfoPage} />
        <Route path="/jvms/:analyseId/jvm/:jvmId" component={JvmInfoPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/realtime-connection" component={RealtimeConnection} />
        <Route path="/faq" component={FAQ} />
      </Route>
    </Router>
  );
};
