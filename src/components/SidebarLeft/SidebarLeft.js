'use strict';

import React from 'react';
import I from 'react-fontawesome';
import NavLink from '../NavLink/NavLink';

class SidebarLeft extends React.Component {
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
    $('.sidebar li a').on('click', function (e) {
      //Get the clicked link and the next element
      const $this = $(this);
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
  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.scss */}
        <section className="sidebar">
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/dashboard">
                <I name="dashboard" /> <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/widgets">
                <I name="th" /> <span>Widgets</span> <small className="label pull-right bg-green">new</small>
              </NavLink>
            </li>
            <li className="treeview">
              <NavLink to="/charts">
                <I name="pie-chart" />
                <span>Charts</span>
                <I name="angle-left pull-right" />
              </NavLink>
              <ul className="treeview-menu">
                <li>
                  <NavLink to="/charts/chartjs">
                    <I name="circle-o" /> ChartJS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/charts/flot">
                    <I name="circle-o" /> Flot
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <NavLink to="/uis">
                <I name="laptop" />
                <span>UI Elements</span>
                <I name="angle-left pull-right" />
              </NavLink>
              <ul className="treeview-menu">
                <li>
                  <NavLink to="/ui/general">
                    <I name="circle-o" /> General
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ui/paneltab">
                    <I name="circle-o" /> Panel & Tab
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ui/icons">
                    <I name="circle-o" /> Icons
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ui/buttons">
                    <I name="circle-o" /> Buttons
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/ui/sliders">
                    <I name="circle-o" /> Sliders
                  </NavLink>
                </li>*/}
              </ul>
            </li>
            <li className="treeview">
              <NavLink to="/forms">
                <I name="edit" /> <span>Forms</span>
                <I name="angle-left pull-right" />
              </NavLink>
              <ul className="treeview-menu">
                <li>
                  <NavLink to="/forms/general">
                    <I name="circle-o" /> General Elements
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/forms/advanced">
                    <I name="circle-o" /> Advanced Elements
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/forms/editor">
                    <I name="circle-o" /> Editors
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <NavLink to="/tables">
                <I name="table" /> <span>Tables</span>
                <I name="angle-left pull-right" />
              </NavLink>
              <ul className="treeview-menu">
                <li>
                  <NavLink to="/tables/simple">
                    <I name="circle-o" /> Simple tables
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tables/advanced">
                    <I name="circle-o" /> Fixed data tables
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/calendar">
                <I name="calendar" /> <span>Calendar</span>
                <small className="label pull-right bg-red">3</small>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mailbox">
                <I name="envelope" /> <span>Mailbox</span>
                <small className="label pull-right bg-yellow">12</small>
              </NavLink>
            </li>
            <li className="treeview">
              <a href="#">
                <I name="share" /> <span>Multilevel</span>
                <I name="angle-left pull-right" />
              </a>
              <ul className="treeview-menu">
                <li><a href="#"><I name="circle-o" /> Level One</a></li>
                <li>
                  <a href="#"><I name="circle-o" /> Level One <I name="angle-left pull-right" /></a>
                  <ul className="treeview-menu">
                    <li><a href="#"><I name="circle-o" /> Level Two</a></li>
                    <li>
                      <a href="#"><I name="circle-o" /> Level Two <I name="angle-left pull-right" /></a>
                      <ul className="treeview-menu">
                        <li><a href="#"><I name="circle-o" /> Level Three</a></li>
                        <li><a href="#"><I name="circle-o" /> Level Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#"><I name="circle-o" /> Level One</a></li>
              </ul>
            </li>
            <li className="header">LABELS</li>
            <li><a href="#"><I name="circle-o text-red" /> <span>Important</span></a></li>
            <li><a href="#"><I name="circle-o text-yellow" /> <span>Warning</span></a></li>
            <li><a href="#"><I name="circle-o text-aqua" /> <span>Information</span></a></li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    );
  }
}

SidebarLeft.displayName = 'SidebarLeft';

export default SidebarLeft;
