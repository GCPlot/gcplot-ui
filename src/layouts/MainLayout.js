import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SidebarLeft from '../components/SidebarLeft/SidebarLeft';
import GCPlotCore from '../core'

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('../styles/Reactive-Admin.scss');

class MainLayout extends React.Component {
  componentDidMount() {
  }
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
