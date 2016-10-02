require('script!select2');
require('script!jquery.inputmask/dist/jquery.inputmask.bundle');
require('script!moment');
require('script!daterangepicker');
require('script!icheck');
require('script!bootstrap-colorpicker');
require('script!timepicker');

require('select2/dist/css/select2.css');
require('daterangepicker/daterangepicker-bs3.css');
require('icheck/skins/all.css');
require('bootstrap-colorpicker/dist/css/bootstrap-colorpicker.css');
require('timepicker/jquery.timepicker.css');


import React from 'react';
import moment from 'moment';
import { Row, Col, Panel, Input } from 'react-bootstrap';
import I from 'react-fontawesome';

class FormAdvancedPage extends React.Component {
  componentDidMount () {
    //Initialize Select2 Elements
    $('.select2').select2();

    //Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd/mm/yyyy', {'placeholder': 'dd/mm/yyyy'});
    //Datemask2 mm/dd/yyyy
    $('#datemask2').inputmask('mm/dd/yyyy', {'placeholder': 'mm/dd/yyyy'});
    //Money Euro
    $('[data-mask]').inputmask();

    //Date range picker
    $('#reservation').daterangepicker();
    //Date range picker with time picker
    $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
    //Date range as a button
    $('#daterange-btn').daterangepicker(
        {
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          startDate: moment().subtract(29, 'days'),
          endDate: moment()
        },
    function (start, end) {
      $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
    );

    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue'
    });
    //Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
      checkboxClass: 'icheckbox_minimal-red',
      radioClass: 'iradio_minimal-red'
    });
    //Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass: 'iradio_flat-green'
    });

    //Colorpicker
    $('.my-colorpicker1').colorpicker();

    //Timepicker
    $('.timepicker').timepicker({
      showInputs: false
    });
  }
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Advanced Form Elements
            <small>Preview</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Forms</a></li>
            <li className="active">General Elements</li>
          </ol>
        </section>

        <section className="content">
          <Panel
            header="Select2"
            footer={
              <span>
                Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about the plugin.
              </span>
            }>
            <Row>
              <Col md={6}>
                <Input type="select" label="Minimal" className="select2" style={{width: '100%'}}>
                  <option selected="selected">Alabama</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </Input>

                <Input type="select" label="Disabled" className="select2" style={{width: '100%'}} disabled>
                  <option selected="selected">Alabama</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </Input>
              </Col>
              <Col md={6}>
                <Input type="select" label="Multiple" className="select2" style={{width: '100%'}} multiple data-placeholder="Select a State">
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>California</option>
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </Input>

                <Input type="select" label="Multiple" className="select2" style={{width: '100%'}}>
                  <option selected="selected">Alabama</option>
                  <option>Alaska</option>
                  <option disabled>California (disabled)</option>
                  <option>Delaware</option>
                  <option disabled>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </Input>
              </Col>
            </Row>
          </Panel>

          <Row>
            <Col md={6}>
              <Panel header="Input Masks">
                <Input type="text"
                  addonBefore={<I name="calendar" />}
                  label="Date Masks:"
                  data-inputmask="'alias': 'dd/mm/yyyy'"
                  data-mask />

                <Input type="text"
                  addonBefore={<I name="phone" />}
                  label="US phone mask:"
                  data-inputmask='"mask": "(999) 999-9999"'
                  data-mask />

                <Input type="text"
                  addonBefore={<I name="phone" />}
                  label="Intl US phone mask:"
                  data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']"
                  data-mask />

                <Input type="text"
                  addonBefore={<I name="laptop" />}
                  label="IP mask:"
                  data-inputmask="'alias': 'ip'"
                  data-mask />
              </Panel>

              <Panel header="Color & Time Picker">
                <Input type="text" label="Color picker:" className="my-colorpicker1" />
                <Input type="text" label="Time Picker:" className="timepicker" addonAfter={<I name="clock-o" />} />
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header="Date Picker">
                <Input type="text" label="Date range:" id="reservation" addonAfter={<I name="calendar" />} />
                <Input type="text" label="Date and time range:" id="reservationtime" addonAfter={<I name="clock-o" />} />
              </Panel>

              <Panel header="iCheck - Checkbox & Radio Inputs">
                <div className="form-group">
                  <label>
                    <input type="checkbox" className="minimal" checked />
                  </label>
                  <label>
                    <input type="checkbox" className="minimal" />
                  </label>
                  <label>
                    <input type="checkbox" className="minimal" disabled />
                    Minimal skin checkbox
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    <input type="radio" name="r1" className="minimal" checked />
                  </label>
                  <label>
                    <input type="radio" name="r1" className="minimal" />
                  </label>
                  <label>
                    <input type="radio" name="r1" className="minimal" disabled />
                    Minimal skin radio
                  </label>
                </div>


                <div className="form-group">
                  <label>
                    <input type="checkbox" className="minimal-red" checked />
                  </label>
                  <label>
                    <input type="checkbox" className="minimal-red" />
                  </label>
                  <label>
                    <input type="checkbox" className="minimal-red" disabled />
                    Minimal red skin checkbox
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    <input type="radio" name="r2" className="minimal-red" checked />
                  </label>
                  <label>
                    <input type="radio" name="r2" className="minimal-red" />
                  </label>
                  <label>
                    <input type="radio" name="r2" className="minimal-red" disabled />
                    Minimal red skin radio
                  </label>
                </div>


                <div className="form-group">
                  <label>
                    <input type="checkbox" className="flat-red" checked />
                  </label>
                  <label>
                    <input type="checkbox" className="flat-red" />
                  </label>
                  <label>
                    <input type="checkbox" className="flat-red" disabled />
                    Flat green skin checkbox
                  </label>
                </div>

                <div className="form-group">
                  <label>
                    <input type="radio" name="r3" className="flat-red" checked />
                  </label>
                  <label>
                    <input type="radio" name="r3" className="flat-red" />
                  </label>
                  <label>
                    <input type="radio" name="r3" className="flat-red" disabled />
                    Flat green skin radio
                  </label>
                </div>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

FormAdvancedPage.displayName = 'FormAdvancedPage';

FormAdvancedPage.defaultProps = {
};

export default FormAdvancedPage;
