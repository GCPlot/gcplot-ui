import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import WidgetPage from './pages/WidgetPage';
import FormGeneralPage from './pages/FormGeneralPage';
import FormAdvancedPage from './pages/FormAdvancedPage';
import EditorPage from './pages/EditorPage';
import UIGeneralPage from './pages/UIGeneralPage';
import UIPanelTabPage from './pages/UIPanelTabPage';
import UIIconsPage from './pages/UIIconsPage';
import UIButtonsPage from './pages/UIButtonsPage';

import NewAnalysePage from './pages/NewAnalysePage';

// import UISlidersPage from './pages/UISlidersPage';
import TableSimplePage from './pages/TableSimplePage';
import TableFixedDataTablePage from './pages/TableFixedDataTablePage';
import CalendarPage from './pages/CalendarPage';
import MailboxPage from './pages/MailboxPage';
import MailReadPage from './pages/MailReadPage';
import MailWritePage from './pages/MailWritePage';
import ChartChartJSPage from './pages/ChartChartJSPage';
import ChartFlotPage from './pages/ChartFlotPage';
import AnalyseInfoPage from './pages/AnalyseInfoPage';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={DashboardPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/widgets" component={WidgetPage} />
        <Route path="/forms/general" component={FormGeneralPage} />
        <Route path="/forms/advanced" component={FormAdvancedPage} />
        <Route path="/forms/editor" component={EditorPage} />
        <Route path="/analyse/new" component={NewAnalysePage} />
        <Route path="/analyse/info/:analyseId" component={AnalyseInfoPage} />

        <Route path="/ui/general" component={UIGeneralPage} />
        <Route path="/ui/paneltab" component={UIPanelTabPage} />
        <Route path="/ui/icons" component={UIIconsPage} />
        <Route path="/ui/buttons" component={UIButtonsPage} />
        {/* <Route path="/ui/sliders" component={UISlidersPage} /> *//* <Route path="/ui/sliders" component={UISlidersPage} /> */}

        <Route path="/tables/simple" component={TableSimplePage} />
        <Route path="/tables/advanced" component={TableFixedDataTablePage} />

        <Route path="/calendar" component={CalendarPage} />
        <Route path="/mailbox" component={MailboxPage} />
        <Route path="/mailbox/read" component={MailReadPage} />
        <Route path="/mailbox/write" component={MailWritePage} />

        <Route path="/charts/chartjs" component={ChartChartJSPage} />
        <Route path="/charts/flot" component={ChartFlotPage} />
      </Route>
    </Router>
  );
};
