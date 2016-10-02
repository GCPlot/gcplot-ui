import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SidebarLeft from '../components/SidebarLeft/SidebarLeft';

class MainLayout extends React.Component {
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
