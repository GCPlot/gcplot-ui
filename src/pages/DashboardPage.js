require('script!jquery')

import React from 'react';
import { Row, Col, ProgressBar, Panel } from 'react-bootstrap';
import Chart from 'chart.js';
import StatWidget from '../components/Widget/StatWidget';
import UserList from '../components/UserList/UserList';
import ProductList from '../components/ProductList/ProductList';
import Chat from '../components/Chat/Chat';

import {mapSampleData} from '../components/SampleData/mapSampleData';

class DashboardPage extends React.Component {
  componentDidMount () {

  }
  
  render() {
    const browserStatFooter = () => {
      return (
        <Row>
          <Col sm={3} xs={6}>
            <div className="description-block border-right">
              <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
              <h5 className="description-header">$35,210.43</h5>
              <span className="description-text">TOTAL REVENUE</span>
            </div>
          </Col>
          <Col sm={3} xs={6}>
            <div className="description-block border-right">
              <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 0%</span>
              <h5 className="description-header">$10,390.90</h5>
              <span className="description-text">TOTAL COST</span>
            </div>
          </Col>
          <Col sm={3} xs={6}>
            <div className="description-block border-right">
              <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
              <h5 className="description-header">$24,813.53</h5>
              <span className="description-text">TOTAL PROFIT</span>
            </div>
          </Col>
          <Col sm={3} xs={6}>
            <div className="description-block">
              <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
              <h5 className="description-header">1200</h5>
              <span className="description-text">GOAL COMPLETIONS</span>
            </div>
          </Col>
        </Row>
      );
    };

    const browserStatProgressBar = () => {
      return (
        <Col md={4}>
          <p className="text-center">
            <strong>Goal Completion</strong>
          </p>
          <div className="progress-group">
            <span className="progress-text">Add Products to Cart</span>
            <span className="progress-number"><b>160</b>/200</span>
            <div className="progress sm">
              <ProgressBar now={20} bsStyle="warning" active />
            </div>
          </div>
          <div className="progress-group">
            <span className="progress-text">Complete Purchase</span>
            <span className="progress-number"><b>310</b>/400</span>
            <div className="progress sm">
              <ProgressBar now={40} bsStyle="success" active />
            </div>
          </div>
          <div className="progress-group">
            <span className="progress-text">Visit Premium Page</span>
            <span className="progress-number"><b>480</b>/800</span>
            <div className="progress sm">
              <ProgressBar now={60} bsStyle="info" active />
            </div>
          </div>
          <div className="progress-group">
            <span className="progress-text">Send Inquiries</span>
            <span className="progress-number"><b>250</b>/500</span>
            <div className="progress sm">
              <ProgressBar now={80} bsStyle="danger" active />
            </div>
          </div>
        </Col>
      );
    };

    const browserStatWidgets = () => {
      return (
        <Row>
          <Col md={3} sm={6} xs={12}>
            <StatWidget icon="chrome" title="Chrome" number="1,410" bg="red" progress={{size: 50, desc: 'description'}} />
          </Col>
          <Col md={3} sm={6} xs={12}>
            <StatWidget icon="firefox" title="Firefox" number="1,410" bg="orange" progress={{size: 50, desc: 'description'}} />
          </Col>
          <Col md={3} sm={6} xs={12}>
            <StatWidget icon="safari" title="Safari" number="1,410" bg="aqua" progress={{size: 50, desc: 'description'}} />
          </Col>
          <Col md={3} sm={6} xs={12}>
            <StatWidget icon="internet-explorer" title="Internet Explorer" number="1,410" bg="purple" progress={{size: 50, desc: 'description'}} />
          </Col>
        </Row>
      );
    }
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1 className="content-title">
            Dashboard
            <small>Control panel</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">DashboardPage</li>
          </ol>
        </section>
        <section className="content">
          {browserStatWidgets()}
          <Row>
            <Col md={12}>
              <Panel header="Browsers Stat" footer={browserStatFooter()}>
                <Row>
                  <Col md={8}>
                    <p className="text-center">
                      <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                    </p>
                    <div className="chart">
                      <canvas id="browserAccessChart"></canvas>
                    </div>
                  </Col>
                  {browserStatProgressBar()}
                </Row>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Panel header="Recently Registered Users">
                <UserList />
              </Panel>
            </Col>
            <Col md={4}>
              <Panel header="Chats">
                <Chat />
              </Panel>
            </Col>
            <Col md={4}>
              <Panel header="Recently Added Products">
                <ProductList />
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Panel header="Visitors Report" className="panel-no-padding panel-no-border">
                <div id="world-map" style={{height: '500px', width: '100%'}}></div>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

function sampleBrowserAccessChart() {
  const browserAccessChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Electronics',
        fillColor: 'rgb(210, 214, 222)',
        strokeColor: 'rgb(210, 214, 222)',
        pointColor: 'rgb(210, 214, 222)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgb(220,220,220)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Digital Goods',
        fillColor: 'rgba(29, 119, 239, 0.9)',
        strokeColor: 'rgba(29, 119, 239, 0.8)',
        pointColor: 'rgba(29, 119, 239, 1)',
        pointStrokeColor: 'rgba(29, 119, 239, 1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(29, 119, 239, 1)',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  const browserAccessChartOptions = {
    //Boolean - If we should show the scale at all
    showScale: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,
    //String - Colour of the grid lines
    scaleGridLineColor: 'rgba(0,0,0,.05)',
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.3,
    //Boolean - Whether to show a dot for each point
    pointDot: false,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a color
    datasetFill: true,
    //String - A legend template
    legendTemplate: '<ul className=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>',
    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true
  };

  return {
    data: browserAccessChartData,
    options: browserAccessChartOptions
  };
}

DashboardPage.displayName = 'DashboardPage';

DashboardPage.defaultProps = {
};

export default DashboardPage;
