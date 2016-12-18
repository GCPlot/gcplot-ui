'use strict';

import React from 'react';
import { browserHistory } from 'react-router'
import I from 'react-fontawesome';
import NavLink from '../NavLink/NavLink';
import GCPlotCore from '../../core'

var update = require('react-addons-update');

class SidebarLeft extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        analyses: []
      };
  }

  onAnalysesChange() {
    var t = this;
    GCPlotCore.analyses(function(r) {
      t.setState(update(t.state, {
        analyses: {$set: r.analyses}
      }));
      t.componentDidMount();
    }, function(code, title, msg) {
      GCPlotCore.errorHandler(code, title, msg);
    });
  }

  componentWillMount() {
    GCPlotCore.on(GCPlotCore.ANALYSES_CHANGED_EVENT, this.onAnalysesChange.bind(this));
    GCPlotCore.trigger(GCPlotCore.ANALYSES_CHANGED_EVENT);
  }

  componentWillUnmount() {
    GCPlotCore.off(GCPlotCore.ANALYSES_CHANGED_EVENT, this.onAnalysesChange.bind(this));
  }

  analyseEditClicked(analyse) {
    browserHistory.push('/analyse/info/' + analyse.id);
  }

  componentDidMount () {
    function _fix () {
      //Get window height and the wrapper height
      const neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      const window_height = $(window).height();
      const sidebar_height = $('.sidebar').height();
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($('body').hasClass('fixed')) {
        $('.content-wrapper, .right-side').css('min-height', window_height - $('.main-footer').outerHeight());
      } else {
        let postSetWidth;
        if (window_height >= sidebar_height) {
          $('.content-wrapper, .right-side').css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $('.content-wrapper, .right-side').css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        //Fix for the control sidebar height
        const controlSidebar = $('.control-sidebar');
        if (typeof controlSidebar !== 'undefined') {
          if (controlSidebar.height() > postSetWidth)
            $('.content-wrapper, .right-side').css('min-height', controlSidebar.height());
        }

      }
    }

    const animationSpeed = 500;
    $('.sidebar li a').unbind('click');
    $('.sidebar li a').on('click', function (e) {
      //Get the clicked link and the next element
      const $this = $(this);
      if ($this.children('.edit-toggle').length !== 0 && $this.children('.edit-toggle').is(':hover')) {
        e.preventDefault();
        return;
      }
      const checkElement = $this.next();

      //Check if the next element is a menu and is visible
      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
        //Close the menu
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
        });
        checkElement.parent('li').removeClass('active');
      }
      //If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        //Get the parent menu
        const parent = $this.parents('ul').first();
        //Close all open menus within the parent
        const ul = parent.find('ul:visible').slideUp(animationSpeed);
        //Remove the menu-open class from the parent
        ul.removeClass('menu-open');
        //Get the parent li
        const parent_li = $this.parent('li');

        //Open the target menu and add the menu-open class
        checkElement.slideDown(animationSpeed, function () {
          //Add the class active to the parent li
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
          //Fix the layout in case the sidebar stretches over the height of the window
          _fix();
        });
      }
      //if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });

    //Get the screen sizes
    var screenSizes = {
      xs: 480,
      sm: 768,
      md: 992,
      lg: 1200
    };
    var toggleBtn = '.sidebar-toggle';
    //Enable sidebar toggle
    $(toggleBtn).unbind('click');
    $(toggleBtn).on('click', function (e) {
      e.preventDefault();
      //Enable sidebar push menu
      if ($(window).width() > (screenSizes.sm - 1)) {
        if ($('body').hasClass('sidebar-collapse')) {
          $('body').removeClass('sidebar-collapse').trigger('expanded.pushMenu');
        } else {
          $('body').addClass('sidebar-collapse').trigger('collapsed.pushMenu');
        }
      }
      //Handle sidebar push menu for small screens
      else {
        if ($('body').hasClass('sidebar-open')) {
          $('body').removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
        } else {
          $('body').addClass('sidebar-open').trigger('expanded.pushMenu');
        }
      }
    });

    $('.content-wrapper').unbind('click');
    $('.content-wrapper').click(function () {
      //Enable hide menu when clicking on the content-wrapper on small screens
      if ($(window).width() <= (screenSizes.sm - 1) && $('body').hasClass('sidebar-open')) {
        $('body').removeClass('sidebar-open');
      }
    });

    //Enable expand on hover for sidebar mini
    if (false
            || ($('body').hasClass('fixed')
                    && $('body').hasClass('sidebar-mini'))) {
      expandOnHover();
    }

    function expandOnHover() {
      var screenWidth = screenSizes.sm - 1;
      //Expand sidebar on hover
      $('.main-sidebar').unbind('hover');
      $('.main-sidebar').hover(function () {
        if ($('body').hasClass('sidebar-mini')
                && $('body').hasClass('sidebar-collapse')
                && $(window).width() > screenWidth) {
          expand();
        }
      }, function () {
        if ($('body').hasClass('sidebar-mini')
                && $('body').hasClass('sidebar-expanded-on-hover')
                && $(window).width() > screenWidth) {
          collapse();
        }
      });
    }

    function expand() {
      $('body').removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
    }

    function collapse () {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
      }
    }
  }

  truncate(s, n, useWordBoundary) {
    var isTooLong = s.length > n,
        s_ = isTooLong ? s.substr(0,n-1) : s;
        s_ = (useWordBoundary && isTooLong) ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
    return  isTooLong ? s_ + '...' : s_;
  }

  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.scss */}
        <section className="sidebar">
        <ul className="sidebar-menu">
          <li className="header">General</li>
          <li className="treeview">
            <NavLink to="/dashboard">
              <I name="home" />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="treeview">
            <NavLink to="/quick_process">
              <I name="upload" /> Quick process
            </NavLink>
          </li>
          <li className="header">Control Panel</li>
          <li className="treeview">
            <NavLink to="/analyse/new">
              <I name="plus" /> New Analysis Group
            </NavLink>
          </li>
          <li className="header">Analysis Groups</li>
          {this.state.analyses.map(function (item, i) {
            return (
              <ul className="sidebar-menu" key={i}>
              <li>
              <NavLink to={"/analyses/" + item.id}>
                <I name="pie-chart" /> <span>{this.truncate(item.name, 16, false)}</span>
                <I name="angle-left pull-right" />
                {(function() {
                    return <small className="label pull-right bg-green edit-toggle" onClick={this.analyseEditClicked.bind(this,   item)}>info</small>;
                }.bind(this))()}
              </NavLink>
              <ul className="treeview-menu">
                {item.jvm_ids.map(function (jvm, o) {
                  return (<li key={o}>
                    <NavLink to={"/jvms/" + item.id + "/jvm/" + encodeURIComponent(jvm)}>
                      <I name="server" /> {this.truncate(item.jvm_names[jvm] || jvm, 23, false)}
                    </NavLink>
                  </li>);
                }.bind(this))}
              </ul>
              </li>
              </ul>
            );
          }.bind(this))}
          <li className="header">Help</li>
          <li className="treeview">
            <NavLink to="/realtime-connection">
              <I name="plug" /> Realtime Connection
            </NavLink>
          </li>
          <li className="treeview">
            <NavLink to="/faq">
              <I name="question-circle" /> FAQ
            </NavLink>
          </li>
          <li className="treeview">
            <a href="http://blog.gcplot.com" target="_blank"><I name="book" /> Blog</a>
          </li>
          <li className="treeview">
            <NavLink to="/terms">
              <I name="question-circle" /> Terms Of Service
            </NavLink>
          </li>
        </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

SidebarLeft.displayName = 'SidebarLeft';

export default SidebarLeft;
