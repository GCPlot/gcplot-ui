import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SidebarLeft from '../components/SidebarLeft/SidebarLeft';
import GCPlotCore from '../core'

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('../styles/Reactive-Admin.scss');

class MainLayout extends React.Component {
  /*componentDidMount() {
    GCPlotCore.logoff();
    alert("0 " + GCPlotCore.isLoggedIn());
    GCPlotCore.login("dmart28", "admin", function() {
      alert("1 " + GCPlotCore.isLoggedIn());
      GCPlotCore.userInfo(function(ui) {
        alert("2" + ui);
      });
    }, function(code, title, msg) {
      alert(code + "|" + title + "|" + msg);
    });
  }*/
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SidebarLeft />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

MainLayout.defaultProps = {
};

export default MainLayout;
