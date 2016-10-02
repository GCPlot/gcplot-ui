'use strict';

import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import {Table, Column, Cell} from 'fixed-data-table';
import FakeObjectDataListStore from '../components/SampleData/FakeObjectDataListStore';

import 'fixed-data-table/dist/fixed-data-table.css';

const DateCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data.getObjectAt(rowIndex)[col].toLocaleString()}
  </Cell>
);

const LinkCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    <a href="#">{data.getObjectAt(rowIndex)[col]}</a>
  </Cell>
);

const TextCell = ({rowIndex, data, col, ...props}) => (
  <Cell {...props}>
    {data.getObjectAt(rowIndex)[col]}
  </Cell>
);

class TableFixedDataTablePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: new FakeObjectDataListStore(100)
    };
  }
  render() {
    let {dataList} = this.state;
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Fixed Data Tables
            <small>preview of fixed data tables</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Tables</a></li>
            <li className="active">Advanced</li>
          </ol>
        </section>

        <section className="content">
          <Row>
            <Col md={12}>
              <Panel header="Fixed Data Table">
                <Table
                  className="center-block"
                  rowHeight={50}
                  headerHeight={50}
                  rowsCount={dataList.getSize()}
                  width={1150}
                  height={500}
                  {...this.props}>
                  <Column
                    header={<Cell>First Name</Cell>}
                    cell={<LinkCell data={dataList} col="firstName" />}
                    fixed={true}
                    width={100}
                  />
                  <Column
                    header={<Cell>Last Name</Cell>}
                    cell={<TextCell data={dataList} col="lastName" />}
                    fixed={true}
                    width={100}
                  />
                  <Column
                    header={<Cell>City</Cell>}
                    cell={<TextCell data={dataList} col="city" />}
                    width={100}
                  />
                  <Column
                    header={<Cell>Street</Cell>}
                    cell={<TextCell data={dataList} col="street" />}
                    width={200}
                  />
                  <Column
                    header={<Cell>Zip Code</Cell>}
                    cell={<TextCell data={dataList} col="zipCode" />}
                    width={200}
                  />
                  <Column
                    header={<Cell>Email</Cell>}
                    cell={<LinkCell data={dataList} col="email" />}
                    width={200}
                  />
                  <Column
                    header={<Cell>DOB</Cell>}
                    cell={<DateCell data={dataList} col="date" />}
                    width={200}
                  />
                </Table>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

TableFixedDataTablePage.displayName = 'TableFixedDataTablePage';

TableFixedDataTablePage.defaultProps = {
};

export default TableFixedDataTablePage;
