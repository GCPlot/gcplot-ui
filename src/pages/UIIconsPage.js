'use strict';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, Glyphicon } from 'react-bootstrap';
import I from 'react-fontawesome';

/* FROM HTTP://WWW.GETBOOTSTRAP.COM
 * Glyphicons
 *
 * Special styles for displaying the icons and their classes in the docs.
 */

class UIIconsPage extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Icons
            <small>a set of icons</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" fixedWidth /> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">Icons</li>
          </ol>
        </section>

        <section className="content">
          <Row>
            <Col md={12}>
              <Panel>
                <Tabs defaultActiveKey={2}>
                  <Tab eventKey={1} title="Font Awesome">
                    <div className="tab-pane active" id="fa-icons">
                      <section id="new">
                        <h4 className="page-header">66 New Icons in 4.4</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="500px" fixedWidth /> fa-500px</Col>
                          <Col md={3} sm={4}><I name="amazon" fixedWidth /> fa-amazon</Col>
                          <Col md={3} sm={4}><I name="balance-scale" fixedWidth /> fa-balance-scale</Col>
                          <Col md={3} sm={4}><I name="battery-0" fixedWidth /> fa-battery-0 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-1" fixedWidth /> fa-battery-1 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-2" fixedWidth /> fa-battery-2 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-3" fixedWidth /> fa-battery-3 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-4" fixedWidth /> fa-battery-4 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-empty" fixedWidth /> fa-battery-empty</Col>
                          <Col md={3} sm={4}><I name="battery-full" fixedWidth /> fa-battery-full</Col>
                          <Col md={3} sm={4}><I name="battery-half" fixedWidth /> fa-battery-half</Col>
                          <Col md={3} sm={4}><I name="battery-quarter" fixedWidth /> fa-battery-quarter</Col>
                          <Col md={3} sm={4}><I name="battery-three-quarters" fixedWidth /> fa-battery-three-quarters</Col>
                          <Col md={3} sm={4}><I name="black-tie" fixedWidth /> fa-black-tie</Col>
                          <Col md={3} sm={4}><I name="calendar-check-o" fixedWidth /> fa-calendar-check-o</Col>
                          <Col md={3} sm={4}><I name="calendar-minus-o" fixedWidth /> fa-calendar-minus-o</Col>
                          <Col md={3} sm={4}><I name="calendar-plus-o" fixedWidth /> fa-calendar-plus-o</Col>
                          <Col md={3} sm={4}><I name="calendar-times-o" fixedWidth /> fa-calendar-times-o</Col>
                          <Col md={3} sm={4}><I name="cc-diners-club" fixedWidth /> fa-cc-diners-club</Col>
                          <Col md={3} sm={4}><I name="cc-jcb" fixedWidth /> fa-cc-jcb</Col>
                          <Col md={3} sm={4}><I name="chrome" fixedWidth /> fa-chrome</Col>
                          <Col md={3} sm={4}><I name="clone" fixedWidth /> fa-clone</Col>
                          <Col md={3} sm={4}><I name="commenting" fixedWidth /> fa-commenting</Col>
                          <Col md={3} sm={4}><I name="commenting-o" fixedWidth /> fa-commenting-o</Col>
                          <Col md={3} sm={4}><I name="contao" fixedWidth /> fa-contao</Col>
                          <Col md={3} sm={4}><I name="creative-commons" fixedWidth /> fa-creative-commons</Col>
                          <Col md={3} sm={4}><I name="expeditedssl" fixedWidth /> fa-expeditedssl</Col>
                          <Col md={3} sm={4}><I name="firefox" fixedWidth /> fa-firefox</Col>
                          <Col md={3} sm={4}><I name="fonticons" fixedWidth /> fa-fonticons</Col>
                          <Col md={3} sm={4}><I name="genderless" fixedWidth /> fa-genderless</Col>
                          <Col md={3} sm={4}><I name="get-pocket" fixedWidth /> fa-get-pocket</Col>
                          <Col md={3} sm={4}><I name="gg" fixedWidth /> fa-gg</Col>
                          <Col md={3} sm={4}><I name="gg-circle" fixedWidth /> fa-gg-circle</Col>
                          <Col md={3} sm={4}><I name="hand-grab-o" fixedWidth /> fa-hand-grab-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hand-lizard-o" fixedWidth /> fa-hand-lizard-o</Col>
                          <Col md={3} sm={4}><I name="hand-paper-o" fixedWidth /> fa-hand-paper-o</Col>
                          <Col md={3} sm={4}><I name="hand-peace-o" fixedWidth /> fa-hand-peace-o</Col>
                          <Col md={3} sm={4}><I name="hand-pointer-o" fixedWidth /> fa-hand-pointer-o</Col>
                          <Col md={3} sm={4}><I name="hand-rock-o" fixedWidth /> fa-hand-rock-o</Col>
                          <Col md={3} sm={4}><I name="hand-scissors-o" fixedWidth /> fa-hand-scissors-o</Col>
                          <Col md={3} sm={4}><I name="hand-spock-o" fixedWidth /> fa-hand-spock-o</Col>
                          <Col md={3} sm={4}><I name="hand-stop-o" fixedWidth /> fa-hand-stop-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hourglass" fixedWidth /> fa-hourglass</Col>
                          <Col md={3} sm={4}><I name="hourglass-1" fixedWidth /> fa-hourglass-1 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hourglass-2" fixedWidth /> fa-hourglass-2 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hourglass-3" fixedWidth /> fa-hourglass-3 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hourglass-end" fixedWidth /> fa-hourglass-end</Col>
                          <Col md={3} sm={4}><I name="hourglass-half" fixedWidth /> fa-hourglass-half</Col>
                          <Col md={3} sm={4}><I name="hourglass-o" fixedWidth /> fa-hourglass-o</Col>
                          <Col md={3} sm={4}><I name="hourglass-start" fixedWidth /> fa-hourglass-start</Col>
                          <Col md={3} sm={4}><I name="houzz" fixedWidth /> fa-houzz</Col>
                          <Col md={3} sm={4}><I name="i-cursor" fixedWidth /> fa-i-cursor</Col>
                          <Col md={3} sm={4}><I name="industry" fixedWidth /> fa-industry</Col>
                          <Col md={3} sm={4}><I name="internet-explorer" fixedWidth /> fa-internet-explorer</Col>
                          <Col md={3} sm={4}><I name="map" fixedWidth /> fa-map</Col>
                          <Col md={3} sm={4}><I name="map-o" fixedWidth /> fa-map-o</Col>
                          <Col md={3} sm={4}><I name="map-pin" fixedWidth /> fa-map-pin</Col>
                          <Col md={3} sm={4}><I name="map-signs" fixedWidth /> fa-map-signs</Col>
                          <Col md={3} sm={4}><I name="mouse-pointer" fixedWidth /> fa-mouse-pointer</Col>
                          <Col md={3} sm={4}><I name="object-group" fixedWidth /> fa-object-group</Col>
                          <Col md={3} sm={4}><I name="object-ungroup" fixedWidth /> fa-object-ungroup</Col>
                          <Col md={3} sm={4}><I name="odnoklassniki" fixedWidth /> fa-odnoklassniki</Col>
                          <Col md={3} sm={4}><I name="odnoklassniki-square" fixedWidth /> fa-odnoklassniki-square</Col>
                          <Col md={3} sm={4}><I name="opencart" fixedWidth /> fa-opencart</Col>
                          <Col md={3} sm={4}><I name="opera" fixedWidth /> fa-opera</Col>
                          <Col md={3} sm={4}><I name="optin-monster" fixedWidth /> fa-optin-monster</Col>
                          <Col md={3} sm={4}><I name="registered" fixedWidth /> fa-registered</Col>
                          <Col md={3} sm={4}><I name="safari" fixedWidth /> fa-safari</Col>
                          <Col md={3} sm={4}><I name="sticky-note" fixedWidth /> fa-sticky-note</Col>
                          <Col md={3} sm={4}><I name="sticky-note-o" fixedWidth /> fa-sticky-note-o</Col>
                          <Col md={3} sm={4}><I name="television" fixedWidth /> fa-television</Col>
                          <Col md={3} sm={4}><I name="trademark" fixedWidth /> fa-trademark</Col>
                          <Col md={3} sm={4}><I name="tripadvisor" fixedWidth /> fa-tripadvisor</Col>
                          <Col md={3} sm={4}><I name="tv" fixedWidth /> fa-tv <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="vimeo" fixedWidth /> fa-vimeo</Col>
                          <Col md={3} sm={4}><I name="wikipedia-w" fixedWidth /> fa-wikipedia-w</Col>
                          <Col md={3} sm={4}><I name="y-combinator" fixedWidth /> fa-y-combinator</Col>
                          <Col md={3} sm={4}><I name="yc" fixedWidth /> fa-yc <span className="text-muted">(alias)</span></Col>
                        </div>
                      </section>

                      <section id="web-application">
                        <h4 className="page-header">Web Application Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="adjust" fixedWidth /> fa-adjust</Col>
                          <Col md={3} sm={4}><I name="anchor" fixedWidth /> fa-anchor</Col>
                          <Col md={3} sm={4}><I name="archive" fixedWidth /> fa-archive</Col>
                          <Col md={3} sm={4}><I name="area-chart" fixedWidth /> fa-area-chart</Col>
                          <Col md={3} sm={4}><I name="arrows" fixedWidth /> fa-arrows</Col>
                          <Col md={3} sm={4}><I name="arrows-h" fixedWidth /> fa-arrows-h</Col>
                          <Col md={3} sm={4}><I name="arrows-v" fixedWidth /> fa-arrows-v</Col>
                          <Col md={3} sm={4}><I name="asterisk" fixedWidth /> fa-asterisk</Col>
                          <Col md={3} sm={4}><I name="at" fixedWidth /> fa-at</Col>
                          <Col md={3} sm={4}><I name="automobile" fixedWidth /> fa-automobile <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="balance-scale" fixedWidth /> fa-balance-scale</Col>
                          <Col md={3} sm={4}><I name="ban" fixedWidth /> fa-ban</Col>
                          <Col md={3} sm={4}><I name="bank" fixedWidth /> fa-bank <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="bar-chart" fixedWidth /> fa-bar-chart</Col>
                          <Col md={3} sm={4}><I name="bar-chart-o" fixedWidth /> fa-bar-chart-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="barcode" fixedWidth /> fa-barcode</Col>
                          <Col md={3} sm={4}><I name="bars" fixedWidth /> fa-bars</Col>
                          <Col md={3} sm={4}><I name="battery-0" fixedWidth /> fa-battery-0 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-1" fixedWidth /> fa-battery-1 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-2" fixedWidth /> fa-battery-2 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-3" fixedWidth /> fa-battery-3 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-4" fixedWidth /> fa-battery-4 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="battery-empty" fixedWidth /> fa-battery-empty</Col>
                          <Col md={3} sm={4}><I name="battery-full" fixedWidth /> fa-battery-full</Col>
                          <Col md={3} sm={4}><I name="battery-half" fixedWidth /> fa-battery-half</Col>
                          <Col md={3} sm={4}><I name="battery-quarter" fixedWidth /> fa-battery-quarter</Col>
                          <Col md={3} sm={4}><I name="battery-three-quarters" fixedWidth /> fa-battery-three-quarters</Col>
                          <Col md={3} sm={4}><I name="bed" fixedWidth /> fa-bed</Col>
                          <Col md={3} sm={4}><I name="beer" fixedWidth /> fa-beer</Col>
                          <Col md={3} sm={4}><I name="bell" fixedWidth /> fa-bell</Col>
                          <Col md={3} sm={4}><I name="bell-o" fixedWidth /> fa-bell-o</Col>
                          <Col md={3} sm={4}><I name="bell-slash" fixedWidth /> fa-bell-slash</Col>
                          <Col md={3} sm={4}><I name="bell-slash-o" fixedWidth /> fa-bell-slash-o</Col>
                          <Col md={3} sm={4}><I name="bicycle" fixedWidth /> fa-bicycle</Col>
                          <Col md={3} sm={4}><I name="binoculars" fixedWidth /> fa-binoculars</Col>
                          <Col md={3} sm={4}><I name="birthday-cake" fixedWidth /> fa-birthday-cake</Col>
                          <Col md={3} sm={4}><I name="bolt" fixedWidth /> fa-bolt</Col>
                          <Col md={3} sm={4}><I name="bomb" fixedWidth /> fa-bomb</Col>
                          <Col md={3} sm={4}><I name="book" fixedWidth /> fa-book</Col>
                          <Col md={3} sm={4}><I name="bookmark" fixedWidth /> fa-bookmark</Col>
                          <Col md={3} sm={4}><I name="bookmark-o" fixedWidth /> fa-bookmark-o</Col>
                          <Col md={3} sm={4}><I name="briefcase" fixedWidth /> fa-briefcase</Col>
                          <Col md={3} sm={4}><I name="bug" fixedWidth /> fa-bug</Col>
                          <Col md={3} sm={4}><I name="building" fixedWidth /> fa-building</Col>
                          <Col md={3} sm={4}><I name="building-o" fixedWidth /> fa-building-o</Col>
                          <Col md={3} sm={4}><I name="bullhorn" fixedWidth /> fa-bullhorn</Col>
                          <Col md={3} sm={4}><I name="bullseye" fixedWidth /> fa-bullseye</Col>
                          <Col md={3} sm={4}><I name="bus" fixedWidth /> fa-bus</Col>
                          <Col md={3} sm={4}><I name="cab" fixedWidth /> fa-cab <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="calculator" fixedWidth /> fa-calculator</Col>
                          <Col md={3} sm={4}><I name="calendar" fixedWidth /> fa-calendar</Col>
                          <Col md={3} sm={4}><I name="calendar-check-o" fixedWidth /> fa-calendar-check-o</Col>
                          <Col md={3} sm={4}><I name="calendar-minus-o" fixedWidth /> fa-calendar-minus-o</Col>
                          <Col md={3} sm={4}><I name="calendar-o" fixedWidth /> fa-calendar-o</Col>
                          <Col md={3} sm={4}><I name="calendar-plus-o" fixedWidth /> fa-calendar-plus-o</Col>
                          <Col md={3} sm={4}><I name="calendar-times-o" fixedWidth /> fa-calendar-times-o</Col>
                          <Col md={3} sm={4}><I name="camera" fixedWidth /> fa-camera</Col>
                          <Col md={3} sm={4}><I name="camera-retro" fixedWidth /> fa-camera-retro</Col>
                          <Col md={3} sm={4}><I name="car" fixedWidth /> fa-car</Col>
                          <Col md={3} sm={4}><I name="caret-square-o-down" fixedWidth /> fa-caret-square-o-down</Col>
                          <Col md={3} sm={4}><I name="caret-square-o-left" fixedWidth /> fa-caret-square-o-left</Col>
                          <Col md={3} sm={4}><I name="caret-square-o-right" fixedWidth /> fa-caret-square-o-right</Col>
                          <Col md={3} sm={4}><I name="caret-square-o-up" fixedWidth /> fa-caret-square-o-up</Col>
                          <Col md={3} sm={4}><I name="cart-arrow-down" fixedWidth /> fa-cart-arrow-down</Col>
                          <Col md={3} sm={4}><I name="cart-plus" fixedWidth /> fa-cart-plus</Col>
                          <Col md={3} sm={4}><I name="cc" fixedWidth /> fa-cc</Col>
                          <Col md={3} sm={4}><I name="certificate" fixedWidth /> fa-certificate</Col>
                          <Col md={3} sm={4}><I name="check" fixedWidth /> fa-check</Col>
                          <Col md={3} sm={4}><I name="check-circle" fixedWidth /> fa-check-circle</Col>
                          <Col md={3} sm={4}><I name="check-circle-o" fixedWidth /> fa-check-circle-o</Col>
                          <Col md={3} sm={4}><I name="check-square" fixedWidth /> fa-check-square</Col>
                          <Col md={3} sm={4}><I name="check-square-o" fixedWidth /> fa-check-square-o</Col>
                          <Col md={3} sm={4}><I name="child" fixedWidth /> fa-child</Col>
                          <Col md={3} sm={4}><I name="circle" fixedWidth /> fa-circle</Col>
                          <Col md={3} sm={4}><I name="circle-o" fixedWidth /> fa-circle-o</Col>
                          <Col md={3} sm={4}><I name="circle-o-notch" fixedWidth /> fa-circle-o-notch</Col>
                          <Col md={3} sm={4}><I name="circle-thin" fixedWidth /> fa-circle-thin</Col>
                          <Col md={3} sm={4}><I name="clock-o" fixedWidth /> fa-clock-o</Col>
                          <Col md={3} sm={4}><I name="clone" fixedWidth /> fa-clone</Col>
                          <Col md={3} sm={4}><I name="close" fixedWidth /> fa-close <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="cloud" fixedWidth /> fa-cloud</Col>
                          <Col md={3} sm={4}><I name="cloud-download" fixedWidth /> fa-cloud-download</Col>
                          <Col md={3} sm={4}><I name="cloud-upload" fixedWidth /> fa-cloud-upload</Col>
                          <Col md={3} sm={4}><I name="code" fixedWidth /> fa-code</Col>
                          <Col md={3} sm={4}><I name="code-fork" fixedWidth /> fa-code-fork</Col>
                          <Col md={3} sm={4}><I name="coffee" fixedWidth /> fa-coffee</Col>
                          <Col md={3} sm={4}><I name="cog" fixedWidth /> fa-cog</Col>
                          <Col md={3} sm={4}><I name="cogs" fixedWidth /> fa-cogs</Col>
                          <Col md={3} sm={4}><I name="comment" fixedWidth /> fa-comment</Col>
                          <Col md={3} sm={4}><I name="comment-o" fixedWidth /> fa-comment-o</Col>
                          <Col md={3} sm={4}><I name="commenting" fixedWidth /> fa-commenting</Col>
                          <Col md={3} sm={4}><I name="commenting-o" fixedWidth /> fa-commenting-o</Col>
                          <Col md={3} sm={4}><I name="comments" fixedWidth /> fa-comments</Col>
                          <Col md={3} sm={4}><I name="comments-o" fixedWidth /> fa-comments-o</Col>
                          <Col md={3} sm={4}><I name="compass" fixedWidth /> fa-compass</Col>
                          <Col md={3} sm={4}><I name="copyright" fixedWidth /> fa-copyright</Col>
                          <Col md={3} sm={4}><I name="creative-commons" fixedWidth /> fa-creative-commons</Col>
                          <Col md={3} sm={4}><I name="credit-card" fixedWidth /> fa-credit-card</Col>
                          <Col md={3} sm={4}><I name="crop" fixedWidth /> fa-crop</Col>
                          <Col md={3} sm={4}><I name="crosshairs" fixedWidth /> fa-crosshairs</Col>
                          <Col md={3} sm={4}><I name="cube" fixedWidth /> fa-cube</Col>
                          <Col md={3} sm={4}><I name="cubes" fixedWidth /> fa-cubes</Col>
                          <Col md={3} sm={4}><I name="cutlery" fixedWidth /> fa-cutlery</Col>
                          <Col md={3} sm={4}><I name="dashboard" fixedWidth /> fa-dashboard <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="database" fixedWidth /> fa-database</Col>
                          <Col md={3} sm={4}><I name="desktop" fixedWidth /> fa-desktop</Col>
                          <Col md={3} sm={4}><I name="diamond" fixedWidth /> fa-diamond</Col>
                          <Col md={3} sm={4}><I name="dot-circle-o" fixedWidth /> fa-dot-circle-o</Col>
                          <Col md={3} sm={4}><I name="download" fixedWidth /> fa-download</Col>
                          <Col md={3} sm={4}><I name="edit" fixedWidth /> fa-edit <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="ellipsis-h" fixedWidth /> fa-ellipsis-h</Col>
                          <Col md={3} sm={4}><I name="ellipsis-v" fixedWidth /> fa-ellipsis-v</Col>
                          <Col md={3} sm={4}><I name="envelope" fixedWidth /> fa-envelope</Col>
                          <Col md={3} sm={4}><I name="envelope-o" fixedWidth /> fa-envelope-o</Col>
                          <Col md={3} sm={4}><I name="envelope-square" fixedWidth /> fa-envelope-square</Col>
                          <Col md={3} sm={4}><I name="eraser" fixedWidth /> fa-eraser</Col>
                          <Col md={3} sm={4}><I name="exchange" fixedWidth /> fa-exchange</Col>
                          <Col md={3} sm={4}><I name="exclamation" fixedWidth /> fa-exclamation</Col>
                          <Col md={3} sm={4}><I name="exclamation-circle" fixedWidth /> fa-exclamation-circle</Col>
                          <Col md={3} sm={4}><I name="exclamation-triangle" fixedWidth /> fa-exclamation-triangle</Col>
                          <Col md={3} sm={4}><I name="external-link" fixedWidth /> fa-external-link</Col>
                          <Col md={3} sm={4}><I name="external-link-square" fixedWidth /> fa-external-link-square</Col>
                          <Col md={3} sm={4}><I name="eye" fixedWidth /> fa-eye</Col>
                          <Col md={3} sm={4}><I name="eye-slash" fixedWidth /> fa-eye-slash</Col>
                          <Col md={3} sm={4}><I name="eyedropper" fixedWidth /> fa-eyedropper</Col>
                          <Col md={3} sm={4}><I name="fax" fixedWidth /> fa-fax</Col>
                          <Col md={3} sm={4}><I name="feed" fixedWidth /> fa-feed <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="female" fixedWidth /> fa-female</Col>
                          <Col md={3} sm={4}><I name="fighter-jet" fixedWidth /> fa-fighter-jet</Col>
                          <Col md={3} sm={4}><I name="file-archive-o" fixedWidth /> fa-file-archive-o</Col>
                          <Col md={3} sm={4}><I name="file-audio-o" fixedWidth /> fa-file-audio-o</Col>
                          <Col md={3} sm={4}><I name="file-code-o" fixedWidth /> fa-file-code-o</Col>
                          <Col md={3} sm={4}><I name="file-excel-o" fixedWidth /> fa-file-excel-o</Col>
                          <Col md={3} sm={4}><I name="file-image-o" fixedWidth /> fa-file-image-o</Col>
                          <Col md={3} sm={4}><I name="file-movie-o" fixedWidth /> fa-file-movie-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="file-pdf-o" fixedWidth /> fa-file-pdf-o</Col>
                          <Col md={3} sm={4}><I name="file-photo-o" fixedWidth /> fa-file-photo-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="file-picture-o" fixedWidth /> fa-file-picture-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="file-powerpoint-o" fixedWidth /> fa-file-powerpoint-o</Col>
                          <Col md={3} sm={4}><I name="file-sound-o" fixedWidth /> fa-file-sound-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="file-video-o" fixedWidth /> fa-file-video-o</Col>
                          <Col md={3} sm={4}><I name="file-word-o" fixedWidth /> fa-file-word-o</Col>
                          <Col md={3} sm={4}><I name="file-zip-o" fixedWidth /> fa-file-zip-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="film" fixedWidth /> fa-film</Col>
                          <Col md={3} sm={4}><I name="filter" fixedWidth /> fa-filter</Col>
                          <Col md={3} sm={4}><I name="fire" fixedWidth /> fa-fire</Col>
                          <Col md={3} sm={4}><I name="fire-extinguisher" fixedWidth /> fa-fire-extinguisher</Col>
                          <Col md={3} sm={4}><I name="flag" fixedWidth /> fa-flag</Col>
                          <Col md={3} sm={4}><I name="flag-checkered" fixedWidth /> fa-flag-checkered</Col>
                          <Col md={3} sm={4}><I name="flag-o" fixedWidth /> fa-flag-o</Col>
                          <Col md={3} sm={4}><I name="flash" fixedWidth /> fa-flash <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="flask" fixedWidth /> fa-flask</Col>
                          <Col md={3} sm={4}><I name="folder" fixedWidth /> fa-folder</Col>
                          <Col md={3} sm={4}><I name="folder-o" fixedWidth /> fa-folder-o</Col>
                          <Col md={3} sm={4}><I name="folder-open" fixedWidth /> fa-folder-open</Col>
                          <Col md={3} sm={4}><I name="folder-open-o" fixedWidth /> fa-folder-open-o</Col>
                          <Col md={3} sm={4}><I name="frown-o" fixedWidth /> fa-frown-o</Col>
                          <Col md={3} sm={4}><I name="futbol-o" fixedWidth /> fa-futbol-o</Col>
                          <Col md={3} sm={4}><I name="gamepad" fixedWidth /> fa-gamepad</Col>
                          <Col md={3} sm={4}><I name="gavel" fixedWidth /> fa-gavel</Col>
                          <Col md={3} sm={4}><I name="gear" fixedWidth /> fa-gear <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="gears" fixedWidth /> fa-gears <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="gift" fixedWidth /> fa-gift</Col>
                          <Col md={3} sm={4}><I name="glass" fixedWidth /> fa-glass</Col>
                          <Col md={3} sm={4}><I name="globe" fixedWidth /> fa-globe</Col>
                          <Col md={3} sm={4}><I name="graduation-cap" fixedWidth /> fa-graduation-cap</Col>
                          <Col md={3} sm={4}><I name="group" fixedWidth /> fa-group <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hand-grab-o" fixedWidth /> fa-hand-grab-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hand-lizard-o" fixedWidth /> fa-hand-lizard-o</Col>
                          <Col md={3} sm={4}><I name="hand-paper-o" fixedWidth /> fa-hand-paper-o</Col>
                          <Col md={3} sm={4}><I name="hand-peace-o" fixedWidth /> fa-hand-peace-o</Col>
                          <Col md={3} sm={4}><I name="hand-pointer-o" fixedWidth /> fa-hand-pointer-o</Col>
                          <Col md={3} sm={4}><I name="hand-rock-o" fixedWidth /> fa-hand-rock-o</Col>
                          <Col md={3} sm={4}><I name="hand-scissors-o" fixedWidth /> fa-hand-scissors-o</Col>
                          <Col md={3} sm={4}><I name="hand-spock-o" fixedWidth /> fa-hand-spock-o</Col>
                          <Col md={3} sm={4}><I name="hand-stop-o" fixedWidth /> fa-hand-stop-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hdd-o" fixedWidth /> fa-hdd-o</Col>
                          <Col md={3} sm={4}><I name="headphones" fixedWidth /> fa-headphones</Col>
                          <Col md={3} sm={4}><I name="heart" fixedWidth /> fa-heart</Col>
                          <Col md={3} sm={4}><I name="heart-o" fixedWidth /> fa-heart-o</Col>
                          <Col md={3} sm={4}><I name="heartbeat" fixedWidth /> fa-heartbeat</Col>
                          <Col md={3} sm={4}><I name="history" fixedWidth /> fa-history</Col>
                          <Col md={3} sm={4}><I name="home" fixedWidth /> fa-home</Col>
                          <Col md={3} sm={4}><I name="hotel" fixedWidth /> fa-hotel <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hourglass" fixedWidth /> fa-hourglass</Col>
                          <Col md={3} sm={4}><I name="hourglass-1" fixedWidth /> fa-hourglass-1 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hourglass-2" fixedWidth /> fa-hourglass-2 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hourglass-3" fixedWidth /> fa-hourglass-3 <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hourglass-end" fixedWidth /> fa-hourglass-end</Col>
                          <Col md={3} sm={4}><I name="hourglass-half" fixedWidth /> fa-hourglass-half</Col>
                          <Col md={3} sm={4}><I name="hourglass-o" fixedWidth /> fa-hourglass-o</Col>
                          <Col md={3} sm={4}><I name="hourglass-start" fixedWidth /> fa-hourglass-start</Col>
                          <Col md={3} sm={4}><I name="i-cursor" fixedWidth /> fa-i-cursor</Col>
                          <Col md={3} sm={4}><I name="image" fixedWidth /> fa-image <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="inbox" fixedWidth /> fa-inbox</Col>
                          <Col md={3} sm={4}><I name="industry" fixedWidth /> fa-industry</Col>
                          <Col md={3} sm={4}><I name="info" fixedWidth /> fa-info</Col>
                          <Col md={3} sm={4}><I name="info-circle" fixedWidth /> fa-info-circle</Col>
                          <Col md={3} sm={4}><I name="institution" fixedWidth /> fa-institution <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="key" fixedWidth /> fa-key</Col>
                          <Col md={3} sm={4}><I name="keyboard-o" fixedWidth /> fa-keyboard-o</Col>
                          <Col md={3} sm={4}><I name="language" fixedWidth /> fa-language</Col>
                          <Col md={3} sm={4}><I name="laptop" fixedWidth /> fa-laptop</Col>
                          <Col md={3} sm={4}><I name="leaf" fixedWidth /> fa-leaf</Col>
                          <Col md={3} sm={4}><I name="legal" fixedWidth /> fa-legal <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="lemon-o" fixedWidth /> fa-lemon-o</Col>
                          <Col md={3} sm={4}><I name="level-down" fixedWidth /> fa-level-down</Col>
                          <Col md={3} sm={4}><I name="level-up" fixedWidth /> fa-level-up</Col>
                          <Col md={3} sm={4}><I name="life-bouy" fixedWidth /> fa-life-bouy <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="life-buoy" fixedWidth /> fa-life-buoy <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="life-ring" fixedWidth /> fa-life-ring</Col>
                          <Col md={3} sm={4}><I name="life-saver" fixedWidth /> fa-life-saver <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="lightbulb-o" fixedWidth /> fa-lightbulb-o</Col>
                          <Col md={3} sm={4}><I name="line-chart" fixedWidth /> fa-line-chart</Col>
                          <Col md={3} sm={4}><I name="location-arrow" fixedWidth /> fa-location-arrow</Col>
                          <Col md={3} sm={4}><I name="lock" fixedWidth /> fa-lock</Col>
                          <Col md={3} sm={4}><I name="magic" fixedWidth /> fa-magic</Col>
                          <Col md={3} sm={4}><I name="magnet" fixedWidth /> fa-magnet</Col>
                          <Col md={3} sm={4}><I name="mail-forward" fixedWidth /> fa-mail-forward <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="mail-reply" fixedWidth /> fa-mail-reply <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="mail-reply-all" fixedWidth /> fa-mail-reply-all <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="male" fixedWidth /> fa-male</Col>
                          <Col md={3} sm={4}><I name="map" fixedWidth /> fa-map</Col>
                          <Col md={3} sm={4}><I name="map-marker" fixedWidth /> fa-map-marker</Col>
                          <Col md={3} sm={4}><I name="map-o" fixedWidth /> fa-map-o</Col>
                          <Col md={3} sm={4}><I name="map-pin" fixedWidth /> fa-map-pin</Col>
                          <Col md={3} sm={4}><I name="map-signs" fixedWidth /> fa-map-signs</Col>
                          <Col md={3} sm={4}><I name="meh-o" fixedWidth /> fa-meh-o</Col>
                          <Col md={3} sm={4}><I name="microphone" fixedWidth /> fa-microphone</Col>
                          <Col md={3} sm={4}><I name="microphone-slash" fixedWidth /> fa-microphone-slash</Col>
                          <Col md={3} sm={4}><I name="minus" fixedWidth /> fa-minus</Col>
                          <Col md={3} sm={4}><I name="minus-circle" fixedWidth /> fa-minus-circle</Col>
                          <Col md={3} sm={4}><I name="minus-square" fixedWidth /> fa-minus-square</Col>
                          <Col md={3} sm={4}><I name="minus-square-o" fixedWidth /> fa-minus-square-o</Col>
                          <Col md={3} sm={4}><I name="mobile" fixedWidth /> fa-mobile</Col>
                          <Col md={3} sm={4}><I name="mobile-phone" fixedWidth /> fa-mobile-phone <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="money" fixedWidth /> fa-money</Col>
                          <Col md={3} sm={4}><I name="moon-o" fixedWidth /> fa-moon-o</Col>
                          <Col md={3} sm={4}><I name="mortar-board" fixedWidth /> fa-mortar-board <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="motorcycle" fixedWidth /> fa-motorcycle</Col>
                          <Col md={3} sm={4}><I name="mouse-pointer" fixedWidth /> fa-mouse-pointer</Col>
                          <Col md={3} sm={4}><I name="music" fixedWidth /> fa-music</Col>
                          <Col md={3} sm={4}><I name="navicon" fixedWidth /> fa-navicon <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="newspaper-o" fixedWidth /> fa-newspaper-o</Col>
                          <Col md={3} sm={4}><I name="object-group" fixedWidth /> fa-object-group</Col>
                          <Col md={3} sm={4}><I name="object-ungroup" fixedWidth /> fa-object-ungroup</Col>
                          <Col md={3} sm={4}><I name="paint-brush" fixedWidth /> fa-paint-brush</Col>
                          <Col md={3} sm={4}><I name="paper-plane" fixedWidth /> fa-paper-plane</Col>
                          <Col md={3} sm={4}><I name="paper-plane-o" fixedWidth /> fa-paper-plane-o</Col>
                          <Col md={3} sm={4}><I name="paw" fixedWidth /> fa-paw</Col>
                          <Col md={3} sm={4}><I name="pencil" fixedWidth /> fa-pencil</Col>
                          <Col md={3} sm={4}><I name="pencil-square" fixedWidth /> fa-pencil-square</Col>
                          <Col md={3} sm={4}><I name="pencil-square-o" fixedWidth /> fa-pencil-square-o</Col>
                          <Col md={3} sm={4}><I name="phone" fixedWidth /> fa-phone</Col>
                          <Col md={3} sm={4}><I name="phone-square" fixedWidth /> fa-phone-square</Col>
                          <Col md={3} sm={4}><I name="photo" fixedWidth /> fa-photo <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="picture-o" fixedWidth /> fa-picture-o</Col>
                          <Col md={3} sm={4}><I name="pie-chart" fixedWidth /> fa-pie-chart</Col>
                          <Col md={3} sm={4}><I name="plane" fixedWidth /> fa-plane</Col>
                          <Col md={3} sm={4}><I name="plug" fixedWidth /> fa-plug</Col>
                          <Col md={3} sm={4}><I name="plus" fixedWidth /> fa-plus</Col>
                          <Col md={3} sm={4}><I name="plus-circle" fixedWidth /> fa-plus-circle</Col>
                          <Col md={3} sm={4}><I name="plus-square" fixedWidth /> fa-plus-square</Col>
                          <Col md={3} sm={4}><I name="plus-square-o" fixedWidth /> fa-plus-square-o</Col>
                          <Col md={3} sm={4}><I name="power-off" fixedWidth /> fa-power-off</Col>
                          <Col md={3} sm={4}><I name="print" fixedWidth /> fa-print</Col>
                          <Col md={3} sm={4}><I name="puzzle-piece" fixedWidth /> fa-puzzle-piece</Col>
                          <Col md={3} sm={4}><I name="qrcode" fixedWidth /> fa-qrcode</Col>
                          <Col md={3} sm={4}><I name="question" fixedWidth /> fa-question</Col>
                          <Col md={3} sm={4}><I name="question-circle" fixedWidth /> fa-question-circle</Col>
                          <Col md={3} sm={4}><I name="quote-left" fixedWidth /> fa-quote-left</Col>
                          <Col md={3} sm={4}><I name="quote-right" fixedWidth /> fa-quote-right</Col>
                          <Col md={3} sm={4}><I name="random" fixedWidth /> fa-random</Col>
                          <Col md={3} sm={4}><I name="recycle" fixedWidth /> fa-recycle</Col>
                          <Col md={3} sm={4}><I name="refresh" fixedWidth /> fa-refresh</Col>
                          <Col md={3} sm={4}><I name="registered" fixedWidth /> fa-registered</Col>
                          <Col md={3} sm={4}><I name="remove" fixedWidth /> fa-remove <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="reorder" fixedWidth /> fa-reorder <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="reply" fixedWidth /> fa-reply</Col>
                          <Col md={3} sm={4}><I name="reply-all" fixedWidth /> fa-reply-all</Col>
                          <Col md={3} sm={4}><I name="retweet" fixedWidth /> fa-retweet</Col>
                          <Col md={3} sm={4}><I name="road" fixedWidth /> fa-road</Col>
                          <Col md={3} sm={4}><I name="rocket" fixedWidth /> fa-rocket</Col>
                          <Col md={3} sm={4}><I name="rss" fixedWidth /> fa-rss</Col>
                          <Col md={3} sm={4}><I name="rss-square" fixedWidth /> fa-rss-square</Col>
                          <Col md={3} sm={4}><I name="search" fixedWidth /> fa-search</Col>
                          <Col md={3} sm={4}><I name="search-minus" fixedWidth /> fa-search-minus</Col>
                          <Col md={3} sm={4}><I name="search-plus" fixedWidth /> fa-search-plus</Col>
                          <Col md={3} sm={4}><I name="send" fixedWidth /> fa-send <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="send-o" fixedWidth /> fa-send-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="server" fixedWidth /> fa-server</Col>
                          <Col md={3} sm={4}><I name="share" fixedWidth /> fa-share</Col>
                          <Col md={3} sm={4}><I name="share-alt" fixedWidth /> fa-share-alt</Col>
                          <Col md={3} sm={4}><I name="share-alt-square" fixedWidth /> fa-share-alt-square</Col>
                          <Col md={3} sm={4}><I name="share-square" fixedWidth /> fa-share-square</Col>
                          <Col md={3} sm={4}><I name="share-square-o" fixedWidth /> fa-share-square-o</Col>
                          <Col md={3} sm={4}><I name="shield" fixedWidth /> fa-shield</Col>
                          <Col md={3} sm={4}><I name="ship" fixedWidth /> fa-ship</Col>
                          <Col md={3} sm={4}><I name="shopping-cart" fixedWidth /> fa-shopping-cart</Col>
                          <Col md={3} sm={4}><I name="sign-in" fixedWidth /> fa-sign-in</Col>
                          <Col md={3} sm={4}><I name="sign-out" fixedWidth /> fa-sign-out</Col>
                          <Col md={3} sm={4}><I name="signal" fixedWidth /> fa-signal</Col>
                          <Col md={3} sm={4}><I name="sitemap" fixedWidth /> fa-sitemap</Col>
                          <Col md={3} sm={4}><I name="sliders" fixedWidth /> fa-sliders</Col>
                          <Col md={3} sm={4}><I name="smile-o" fixedWidth /> fa-smile-o</Col>
                          <Col md={3} sm={4}><I name="soccer-ball-o" fixedWidth /> fa-soccer-ball-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="sort" fixedWidth /> fa-sort</Col>
                          <Col md={3} sm={4}><I name="sort-alpha-asc" fixedWidth /> fa-sort-alpha-asc</Col>
                          <Col md={3} sm={4}><I name="sort-alpha-desc" fixedWidth /> fa-sort-alpha-desc</Col>
                          <Col md={3} sm={4}><I name="sort-amount-asc" fixedWidth /> fa-sort-amount-asc</Col>
                          <Col md={3} sm={4}><I name="sort-amount-desc" fixedWidth /> fa-sort-amount-desc</Col>
                          <Col md={3} sm={4}><I name="sort-asc" fixedWidth /> fa-sort-asc</Col>
                          <Col md={3} sm={4}><I name="sort-desc" fixedWidth /> fa-sort-desc</Col>
                          <Col md={3} sm={4}><I name="sort-down" fixedWidth /> fa-sort-down <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="sort-numeric-asc" fixedWidth /> fa-sort-numeric-asc</Col>
                          <Col md={3} sm={4}><I name="sort-numeric-desc" fixedWidth /> fa-sort-numeric-desc</Col>
                          <Col md={3} sm={4}><I name="sort-up" fixedWidth /> fa-sort-up <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="space-shuttle" fixedWidth /> fa-space-shuttle</Col>
                          <Col md={3} sm={4}><I name="spinner" fixedWidth /> fa-spinner</Col>
                          <Col md={3} sm={4}><I name="spoon" fixedWidth /> fa-spoon</Col>
                          <Col md={3} sm={4}><I name="square" fixedWidth /> fa-square</Col>
                          <Col md={3} sm={4}><I name="square-o" fixedWidth /> fa-square-o</Col>
                          <Col md={3} sm={4}><I name="star" fixedWidth /> fa-star</Col>
                          <Col md={3} sm={4}><I name="star-half" fixedWidth /> fa-star-half</Col>
                          <Col md={3} sm={4}><I name="star-half-empty" fixedWidth /> fa-star-half-empty <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="star-half-full" fixedWidth /> fa-star-half-full <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="star-half-o" fixedWidth /> fa-star-half-o</Col>
                          <Col md={3} sm={4}><I name="star-o" fixedWidth /> fa-star-o</Col>
                          <Col md={3} sm={4}><I name="sticky-note" fixedWidth /> fa-sticky-note</Col>
                          <Col md={3} sm={4}><I name="sticky-note-o" fixedWidth /> fa-sticky-note-o</Col>
                          <Col md={3} sm={4}><I name="street-view" fixedWidth /> fa-street-view</Col>
                          <Col md={3} sm={4}><I name="suitcase" fixedWidth /> fa-suitcase</Col>
                          <Col md={3} sm={4}><I name="sun-o" fixedWidth /> fa-sun-o</Col>
                          <Col md={3} sm={4}><I name="support" fixedWidth /> fa-support <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="tablet" fixedWidth /> fa-tablet</Col>
                          <Col md={3} sm={4}><I name="tachometer" fixedWidth /> fa-tachometer</Col>
                          <Col md={3} sm={4}><I name="tag" fixedWidth /> fa-tag</Col>
                          <Col md={3} sm={4}><I name="tags" fixedWidth /> fa-tags</Col>
                          <Col md={3} sm={4}><I name="tasks" fixedWidth /> fa-tasks</Col>
                          <Col md={3} sm={4}><I name="taxi" fixedWidth /> fa-taxi</Col>
                          <Col md={3} sm={4}><I name="television" fixedWidth /> fa-television</Col>
                          <Col md={3} sm={4}><I name="terminal" fixedWidth /> fa-terminal</Col>
                          <Col md={3} sm={4}><I name="thumb-tack" fixedWidth /> fa-thumb-tack</Col>
                          <Col md={3} sm={4}><I name="thumbs-down" fixedWidth /> fa-thumbs-down</Col>
                          <Col md={3} sm={4}><I name="thumbs-o-down" fixedWidth /> fa-thumbs-o-down</Col>
                          <Col md={3} sm={4}><I name="thumbs-o-up" fixedWidth /> fa-thumbs-o-up</Col>
                          <Col md={3} sm={4}><I name="thumbs-up" fixedWidth /> fa-thumbs-up</Col>
                          <Col md={3} sm={4}><I name="ticket" fixedWidth /> fa-ticket</Col>
                          <Col md={3} sm={4}><I name="times" fixedWidth /> fa-times</Col>
                          <Col md={3} sm={4}><I name="times-circle" fixedWidth /> fa-times-circle</Col>
                          <Col md={3} sm={4}><I name="times-circle-o" fixedWidth /> fa-times-circle-o</Col>
                          <Col md={3} sm={4}><I name="tint" fixedWidth /> fa-tint</Col>
                          <Col md={3} sm={4}><I name="toggle-down" fixedWidth /> fa-toggle-down <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="toggle-left" fixedWidth /> fa-toggle-left <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="toggle-off" fixedWidth /> fa-toggle-off</Col>
                          <Col md={3} sm={4}><I name="toggle-on" fixedWidth /> fa-toggle-on</Col>
                          <Col md={3} sm={4}><I name="toggle-right" fixedWidth /> fa-toggle-right <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="toggle-up" fixedWidth /> fa-toggle-up <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="trademark" fixedWidth /> fa-trademark</Col>
                          <Col md={3} sm={4}><I name="trash" fixedWidth /> fa-trash</Col>
                          <Col md={3} sm={4}><I name="trash-o" fixedWidth /> fa-trash-o</Col>
                          <Col md={3} sm={4}><I name="tree" fixedWidth /> fa-tree</Col>
                          <Col md={3} sm={4}><I name="trophy" fixedWidth /> fa-trophy</Col>
                          <Col md={3} sm={4}><I name="truck" fixedWidth /> fa-truck</Col>
                          <Col md={3} sm={4}><I name="tty" fixedWidth /> fa-tty</Col>
                          <Col md={3} sm={4}><I name="tv" fixedWidth /> fa-tv <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="umbrella" fixedWidth /> fa-umbrella</Col>
                          <Col md={3} sm={4}><I name="university" fixedWidth /> fa-university</Col>
                          <Col md={3} sm={4}><I name="unlock" fixedWidth /> fa-unlock</Col>
                          <Col md={3} sm={4}><I name="unlock-alt" fixedWidth /> fa-unlock-alt</Col>
                          <Col md={3} sm={4}><I name="unsorted" fixedWidth /> fa-unsorted <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="upload" fixedWidth /> fa-upload</Col>
                          <Col md={3} sm={4}><I name="user" fixedWidth /> fa-user</Col>
                          <Col md={3} sm={4}><I name="user-plus" fixedWidth /> fa-user-plus</Col>
                          <Col md={3} sm={4}><I name="user-secret" fixedWidth /> fa-user-secret</Col>
                          <Col md={3} sm={4}><I name="user-times" fixedWidth /> fa-user-times</Col>
                          <Col md={3} sm={4}><I name="users" fixedWidth /> fa-users</Col>
                          <Col md={3} sm={4}><I name="video-camera" fixedWidth /> fa-video-camera</Col>
                          <Col md={3} sm={4}><I name="volume-down" fixedWidth /> fa-volume-down</Col>
                          <Col md={3} sm={4}><I name="volume-off" fixedWidth /> fa-volume-off</Col>
                          <Col md={3} sm={4}><I name="volume-up" fixedWidth /> fa-volume-up</Col>
                          <Col md={3} sm={4}><I name="warning" fixedWidth /> fa-warning <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="wheelchair" fixedWidth /> fa-wheelchair</Col>
                          <Col md={3} sm={4}><I name="wifi" fixedWidth /> fa-wifi</Col>
                          <Col md={3} sm={4}><I name="wrench" fixedWidth /> fa-wrench</Col>
                        </div>
                      </section>

                      <section id="hand">
                        <h4 className="page-header">Hand Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="hand-grab-o" fixedWidth /> fa-hand-grab-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="hand-lizard-o" fixedWidth /> fa-hand-lizard-o</Col>
                          <Col md={3} sm={4}><I name="hand-o-down" fixedWidth /> fa-hand-o-down</Col>
                          <Col md={3} sm={4}><I name="hand-o-left" fixedWidth /> fa-hand-o-left</Col>
                          <Col md={3} sm={4}><I name="hand-o-right" fixedWidth /> fa-hand-o-right</Col>
                          <Col md={3} sm={4}><I name="hand-o-up" fixedWidth /> fa-hand-o-up</Col>
                          <Col md={3} sm={4}><I name="hand-paper-o" fixedWidth /> fa-hand-paper-o</Col>
                          <Col md={3} sm={4}><I name="hand-peace-o" fixedWidth /> fa-hand-peace-o</Col>
                          <Col md={3} sm={4}><I name="hand-pointer-o" fixedWidth /> fa-hand-pointer-o</Col>
                          <Col md={3} sm={4}><I name="hand-rock-o" fixedWidth /> fa-hand-rock-o</Col>
                          <Col md={3} sm={4}><I name="hand-scissors-o" fixedWidth /> fa-hand-scissors-o</Col>
                          <Col md={3} sm={4}><I name="hand-spock-o" fixedWidth /> fa-hand-spock-o</Col>
                          <Col md={3} sm={4}><I name="hand-stop-o" fixedWidth /> fa-hand-stop-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="thumbs-down" fixedWidth /> fa-thumbs-down</Col>
                          <Col md={3} sm={4}><I name="thumbs-o-down" fixedWidth /> fa-thumbs-o-down</Col>
                          <Col md={3} sm={4}><I name="thumbs-o-up" fixedWidth /> fa-thumbs-o-up</Col>
                          <Col md={3} sm={4}><I name="thumbs-up" fixedWidth /> fa-thumbs-up</Col>
                        </div>
                      </section>

                      <section id="transportation">
                        <h4 className="page-header">Transportation Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="ambulance" fixedWidth /> fa-ambulance</Col>
                          <Col md={3} sm={4}><I name="automobile" fixedWidth /> fa-automobile <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="bicycle" fixedWidth /> fa-bicycle</Col>
                          <Col md={3} sm={4}><I name="bus" fixedWidth /> fa-bus</Col>
                          <Col md={3} sm={4}><I name="cab" fixedWidth /> fa-cab <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="car" fixedWidth /> fa-car</Col>
                          <Col md={3} sm={4}><I name="fighter-jet" fixedWidth /> fa-fighter-jet</Col>
                          <Col md={3} sm={4}><I name="motorcycle" fixedWidth /> fa-motorcycle</Col>
                          <Col md={3} sm={4}><I name="plane" fixedWidth /> fa-plane</Col>
                          <Col md={3} sm={4}><I name="rocket" fixedWidth /> fa-rocket</Col>
                          <Col md={3} sm={4}><I name="ship" fixedWidth /> fa-ship</Col>
                          <Col md={3} sm={4}><I name="space-shuttle" fixedWidth /> fa-space-shuttle</Col>
                          <Col md={3} sm={4}><I name="subway" fixedWidth /> fa-subway</Col>
                          <Col md={3} sm={4}><I name="taxi" fixedWidth /> fa-taxi</Col>
                          <Col md={3} sm={4}><I name="train" fixedWidth /> fa-train</Col>
                          <Col md={3} sm={4}><I name="truck" fixedWidth /> fa-truck</Col>
                          <Col md={3} sm={4}><I name="wheelchair" fixedWidth /> fa-wheelchair</Col>
                        </div>
                      </section>

                      <section id="gender">
                        <h4 className="page-header">Gender Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="genderless" fixedWidth /> fa-genderless</Col>
                          <Col md={3} sm={4}><I name="intersex" fixedWidth /> fa-intersex <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="mars" fixedWidth /> fa-mars</Col>
                          <Col md={3} sm={4}><I name="mars-double" fixedWidth /> fa-mars-double</Col>
                          <Col md={3} sm={4}><I name="mars-stroke" fixedWidth /> fa-mars-stroke</Col>
                          <Col md={3} sm={4}><I name="mars-stroke-h" fixedWidth /> fa-mars-stroke-h</Col>
                          <Col md={3} sm={4}><I name="mars-stroke-v" fixedWidth /> fa-mars-stroke-v</Col>
                          <Col md={3} sm={4}><I name="mercury" fixedWidth /> fa-mercury</Col>
                          <Col md={3} sm={4}><I name="neuter" fixedWidth /> fa-neuter</Col>
                          <Col md={3} sm={4}><I name="transgender" fixedWidth /> fa-transgender</Col>
                          <Col md={3} sm={4}><I name="transgender-alt" fixedWidth /> fa-transgender-alt</Col>
                          <Col md={3} sm={4}><I name="venus" fixedWidth /> fa-venus</Col>
                          <Col md={3} sm={4}><I name="venus-double" fixedWidth /> fa-venus-double</Col>
                          <Col md={3} sm={4}><I name="venus-mars" fixedWidth /> fa-venus-mars</Col>
                        </div>
                      </section>

                      <section id="file-type">
                        <h2 className="page-header">File Type Icons</h2>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="file" fixedWidth /> fa-file</Col>
                          <Col md={3} sm={4}><I name="file-archive-o" fixedWidth /> fa-file-archive-o</Col>
                          <Col md={3} sm={4}><I name="file-audio-o" fixedWidth /> fa-file-audio-o</Col>
                          <Col md={3} sm={4}><I name="file-code-o" fixedWidth /> fa-file-code-o</Col>
                          <Col md={3} sm={4}><I name="file-excel-o" fixedWidth /> fa-file-excel-o</Col>
                          <Col md={3} sm={4}><I name="file-image-o" fixedWidth /> fa-file-image-o</Col>
                          <Col md={3} sm={4}><I name="file-movie-o" fixedWidth /> fa-file-movie-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="file-o" fixedWidth /> fa-file-o</Col>
                          <Col md={3} sm={4}><I name="file-pdf-o" fixedWidth /> fa-file-pdf-o</Col>
                          <Col md={3} sm={4}><I name="file-photo-o" fixedWidth /> fa-file-photo-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="file-picture-o" fixedWidth /> fa-file-picture-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="file-powerpoint-o" fixedWidth /> fa-file-powerpoint-o</Col>
                          <Col md={3} sm={4}><I name="file-sound-o" fixedWidth /> fa-file-sound-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="file-text" fixedWidth /> fa-file-text</Col>
                          <Col md={3} sm={4}><I name="file-text-o" fixedWidth /> fa-file-text-o</Col>
                          <Col md={3} sm={4}><I name="file-video-o" fixedWidth /> fa-file-video-o</Col>
                          <Col md={3} sm={4}><I name="file-word-o" fixedWidth /> fa-file-word-o</Col>
                          <Col md={3} sm={4}><I name="file-zip-o" fixedWidth /> fa-file-zip-o <span className="text-muted">(alias)</span></Col>
                        </div>
                      </section>

                      <section id="spinner">
                        <h2 className="page-header">Spinner Icons</h2>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="circle-o-notch" fixedWidth /> fa-circle-o-notch</Col>
                          <Col md={3} sm={4}><I name="cog" fixedWidth /> fa-cog</Col>
                          <Col md={3} sm={4}><I name="gear" fixedWidth /> fa-gear <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="refresh" fixedWidth /> fa-refresh</Col>
                          <Col md={3} sm={4}><I name="spinner" fixedWidth /> fa-spinner</Col>
                        </div>
                      </section>

                      <section id="form-control">
                        <h4 className="page-header">Form Control Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="check-square" fixedWidth /> fa-check-square</Col>
                          <Col md={3} sm={4}><I name="check-square-o" fixedWidth /> fa-check-square-o</Col>
                          <Col md={3} sm={4}><I name="circle" fixedWidth /> fa-circle</Col>
                          <Col md={3} sm={4}><I name="circle-o" fixedWidth /> fa-circle-o</Col>
                          <Col md={3} sm={4}><I name="dot-circle-o" fixedWidth /> fa-dot-circle-o</Col>
                          <Col md={3} sm={4}><I name="minus-square" fixedWidth /> fa-minus-square</Col>
                          <Col md={3} sm={4}><I name="minus-square-o" fixedWidth /> fa-minus-square-o</Col>
                          <Col md={3} sm={4}><I name="plus-square" fixedWidth /> fa-plus-square</Col>
                          <Col md={3} sm={4}><I name="plus-square-o" fixedWidth /> fa-plus-square-o</Col>
                          <Col md={3} sm={4}><I name="square" fixedWidth /> fa-square</Col>
                          <Col md={3} sm={4}><I name="square-o" fixedWidth /> fa-square-o</Col>
                        </div>
                      </section>

                      <section id="payment">
                        <h4 className="page-header">Payment Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="cc-amex" fixedWidth /> fa-cc-amex</Col>
                          <Col md={3} sm={4}><I name="cc-diners-club" fixedWidth /> fa-cc-diners-club</Col>
                          <Col md={3} sm={4}><I name="cc-discover" fixedWidth /> fa-cc-discover</Col>
                          <Col md={3} sm={4}><I name="cc-jcb" fixedWidth /> fa-cc-jcb</Col>
                          <Col md={3} sm={4}><I name="cc-mastercard" fixedWidth /> fa-cc-mastercard</Col>
                          <Col md={3} sm={4}><I name="cc-paypal" fixedWidth /> fa-cc-paypal</Col>
                          <Col md={3} sm={4}><I name="cc-stripe" fixedWidth /> fa-cc-stripe</Col>
                          <Col md={3} sm={4}><I name="cc-visa" fixedWidth /> fa-cc-visa</Col>
                          <Col md={3} sm={4}><I name="credit-card" fixedWidth /> fa-credit-card</Col>
                          <Col md={3} sm={4}><I name="google-wallet" fixedWidth /> fa-google-wallet</Col>
                          <Col md={3} sm={4}><I name="paypal" fixedWidth /> fa-paypal</Col>
                        </div>
                      </section>

                      <section id="chart">
                        <h4 className="page-header">Chart Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="area-chart" fixedWidth /> fa-area-chart</Col>
                          <Col md={3} sm={4}><I name="bar-chart" fixedWidth /> fa-bar-chart</Col>
                          <Col md={3} sm={4}><I name="bar-chart-o" fixedWidth /> fa-bar-chart-o <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="line-chart" fixedWidth /> fa-line-chart</Col>
                          <Col md={3} sm={4}><I name="pie-chart" fixedWidth /> fa-pie-chart</Col>
                        </div>
                      </section>

                      <section id="currency">
                        <h4 className="page-header">Currency Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="bitcoin" fixedWidth /> fa-bitcoin <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="btc" fixedWidth /> fa-btc</Col>
                          <Col md={3} sm={4}><I name="cny" fixedWidth /> fa-cny <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="dollar" fixedWidth /> fa-dollar <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="eur" fixedWidth /> fa-eur</Col>
                          <Col md={3} sm={4}><I name="euro" fixedWidth /> fa-euro <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="gbp" fixedWidth /> fa-gbp</Col>
                          <Col md={3} sm={4}><I name="gg" fixedWidth /> fa-gg</Col>
                          <Col md={3} sm={4}><I name="gg-circle" fixedWidth /> fa-gg-circle</Col>
                          <Col md={3} sm={4}><I name="ils" fixedWidth /> fa-ils</Col>
                          <Col md={3} sm={4}><I name="inr" fixedWidth /> fa-inr</Col>
                          <Col md={3} sm={4}><I name="jpy" fixedWidth /> fa-jpy</Col>
                          <Col md={3} sm={4}><I name="krw" fixedWidth /> fa-krw</Col>
                          <Col md={3} sm={4}><I name="money" fixedWidth /> fa-money</Col>
                          <Col md={3} sm={4}><I name="rmb" fixedWidth /> fa-rmb <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="rouble" fixedWidth /> fa-rouble <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="rub" fixedWidth /> fa-rub</Col>
                          <Col md={3} sm={4}><I name="ruble" fixedWidth /> fa-ruble <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="rupee" fixedWidth /> fa-rupee <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="shekel" fixedWidth /> fa-shekel <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="sheqel" fixedWidth /> fa-sheqel <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="try" fixedWidth /> fa-try</Col>
                          <Col md={3} sm={4}><I name="turkish-lira" fixedWidth /> fa-turkish-lira <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="usd" fixedWidth /> fa-usd</Col>
                          <Col md={3} sm={4}><I name="won" fixedWidth /> fa-won <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="yen" fixedWidth /> fa-yen <span className="text-muted">(alias)</span></Col>
                        </div>
                      </section>

                      <section id="text-editor">
                        <h4 className="page-header">Text Editor Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="align-center" fixedWidth /> fa-align-center</Col>
                          <Col md={3} sm={4}><I name="align-justify" fixedWidth /> fa-align-justify</Col>
                          <Col md={3} sm={4}><I name="align-left" fixedWidth /> fa-align-left</Col>
                          <Col md={3} sm={4}><I name="align-right" fixedWidth /> fa-align-right</Col>
                          <Col md={3} sm={4}><I name="bold" fixedWidth /> fa-bold</Col>
                          <Col md={3} sm={4}><I name="chain" fixedWidth /> fa-chain <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="chain-broken" fixedWidth /> fa-chain-broken</Col>
                          <Col md={3} sm={4}><I name="clipboard" fixedWidth /> fa-clipboard</Col>
                          <Col md={3} sm={4}><I name="columns" fixedWidth /> fa-columns</Col>
                          <Col md={3} sm={4}><I name="copy" fixedWidth /> fa-copy <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="cut" fixedWidth /> fa-cut <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="dedent" fixedWidth /> fa-dedent <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="eraser" fixedWidth /> fa-eraser</Col>
                          <Col md={3} sm={4}><I name="file" fixedWidth /> fa-file</Col>
                          <Col md={3} sm={4}><I name="file-o" fixedWidth /> fa-file-o</Col>
                          <Col md={3} sm={4}><I name="file-text" fixedWidth /> fa-file-text</Col>
                          <Col md={3} sm={4}><I name="file-text-o" fixedWidth /> fa-file-text-o</Col>
                          <Col md={3} sm={4}><I name="files-o" fixedWidth /> fa-files-o</Col>
                          <Col md={3} sm={4}><I name="floppy-o" fixedWidth /> fa-floppy-o</Col>
                          <Col md={3} sm={4}><I name="font" fixedWidth /> fa-font</Col>
                          <Col md={3} sm={4}><I name="header" fixedWidth /> fa-header</Col>
                          <Col md={3} sm={4}><I name="indent" fixedWidth /> fa-indent</Col>
                          <Col md={3} sm={4}><I name="italic" fixedWidth /> fa-italic</Col>
                          <Col md={3} sm={4}><I name="link" fixedWidth /> fa-link</Col>
                          <Col md={3} sm={4}><I name="list" fixedWidth /> fa-list</Col>
                          <Col md={3} sm={4}><I name="list-alt" fixedWidth /> fa-list-alt</Col>
                          <Col md={3} sm={4}><I name="list-ol" fixedWidth /> fa-list-ol</Col>
                          <Col md={3} sm={4}><I name="list-ul" fixedWidth /> fa-list-ul</Col>
                          <Col md={3} sm={4}><I name="outdent" fixedWidth /> fa-outdent</Col>
                          <Col md={3} sm={4}><I name="paperclip" fixedWidth /> fa-paperclip</Col>
                          <Col md={3} sm={4}><I name="paragraph" fixedWidth /> fa-paragraph</Col>
                          <Col md={3} sm={4}><I name="paste" fixedWidth /> fa-paste <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="repeat" fixedWidth /> fa-repeat</Col>
                          <Col md={3} sm={4}><I name="rotate-left" fixedWidth /> fa-rotate-left <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="rotate-right" fixedWidth /> fa-rotate-right <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="save" fixedWidth /> fa-save <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="scissors" fixedWidth /> fa-scissors</Col>
                          <Col md={3} sm={4}><I name="strikethrough" fixedWidth /> fa-strikethrough</Col>
                          <Col md={3} sm={4}><I name="subscript" fixedWidth /> fa-subscript</Col>
                          <Col md={3} sm={4}><I name="superscript" fixedWidth /> fa-superscript</Col>
                          <Col md={3} sm={4}><I name="table" fixedWidth /> fa-table</Col>
                          <Col md={3} sm={4}><I name="text-height" fixedWidth /> fa-text-height</Col>
                          <Col md={3} sm={4}><I name="text-width" fixedWidth /> fa-text-width</Col>
                          <Col md={3} sm={4}><I name="th" fixedWidth /> fa-th</Col>
                          <Col md={3} sm={4}><I name="th-large" fixedWidth /> fa-th-large</Col>
                          <Col md={3} sm={4}><I name="th-list" fixedWidth /> fa-th-list</Col>
                          <Col md={3} sm={4}><I name="underline" fixedWidth /> fa-underline</Col>
                          <Col md={3} sm={4}><I name="undo" fixedWidth /> fa-undo</Col>
                          <Col md={3} sm={4}><I name="unlink" fixedWidth /> fa-unlink <span className="text-muted">(alias)</span></Col>
                        </div>
                      </section>

                      <section id="directional">
                        <h4 className="page-header">Directional Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="angle-double-down" fixedWidth /> fa-angle-double-down</Col>
                          <Col md={3} sm={4}><I name="angle-double-left" fixedWidth /> fa-angle-double-left</Col>
                          <Col md={3} sm={4}><I name="angle-double-right" fixedWidth /> fa-angle-double-right</Col>
                          <Col md={3} sm={4}><I name="angle-double-up" fixedWidth /> fa-angle-double-up</Col>
                          <Col md={3} sm={4}><I name="angle-down" fixedWidth /> fa-angle-down</Col>
                          <Col md={3} sm={4}><I name="angle-left" fixedWidth /> fa-angle-left</Col>
                          <Col md={3} sm={4}><I name="angle-right" fixedWidth /> fa-angle-right</Col>
                          <Col md={3} sm={4}><I name="angle-up" fixedWidth /> fa-angle-up</Col>
                          <Col md={3} sm={4}><I name="arrow-circle-down" fixedWidth /> fa-arrow-circle-down</Col>
                          <Col md={3} sm={4}><I name="arrow-circle-left" fixedWidth /> fa-arrow-circle-left</Col>
                          <Col md={3} sm={4}><I name="arrow-circle-o-down" fixedWidth /> fa-arrow-circle-o-down</Col>
                          <Col md={3} sm={4}><I name="arrow-circle-o-left" fixedWidth /> fa-arrow-circle-o-left</Col>
                          <Col md={3} sm={4}><I name="arrow-circle-o-right" fixedWidth /> fa-arrow-circle-o-right</Col>
                          <Col md={3} sm={4}><I name="arrow-circle-o-up" fixedWidth /> fa-arrow-circle-o-up</Col>
                          <Col md={3} sm={4}><I name="arrow-circle-right" fixedWidth /> fa-arrow-circle-right</Col>
                          <Col md={3} sm={4}><I name="arrow-circle-up" fixedWidth /> fa-arrow-circle-up</Col>
                          <Col md={3} sm={4}><I name="arrow-down" fixedWidth /> fa-arrow-down</Col>
                          <Col md={3} sm={4}><I name="arrow-left" fixedWidth /> fa-arrow-left</Col>
                          <Col md={3} sm={4}><I name="arrow-right" fixedWidth /> fa-arrow-right</Col>
                          <Col md={3} sm={4}><I name="arrow-up" fixedWidth /> fa-arrow-up</Col>
                          <Col md={3} sm={4}><I name="arrows" fixedWidth /> fa-arrows</Col>
                          <Col md={3} sm={4}><I name="arrows-alt" fixedWidth /> fa-arrows-alt</Col>
                          <Col md={3} sm={4}><I name="arrows-h" fixedWidth /> fa-arrows-h</Col>
                          <Col md={3} sm={4}><I name="arrows-v" fixedWidth /> fa-arrows-v</Col>
                          <Col md={3} sm={4}><I name="caret-down" fixedWidth /> fa-caret-down</Col>
                          <Col md={3} sm={4}><I name="caret-left" fixedWidth /> fa-caret-left</Col>
                          <Col md={3} sm={4}><I name="caret-right" fixedWidth /> fa-caret-right</Col>
                          <Col md={3} sm={4}><I name="caret-square-o-down" fixedWidth /> fa-caret-square-o-down</Col>
                          <Col md={3} sm={4}><I name="caret-square-o-left" fixedWidth /> fa-caret-square-o-left</Col>
                          <Col md={3} sm={4}><I name="caret-square-o-right" fixedWidth /> fa-caret-square-o-right</Col>
                          <Col md={3} sm={4}><I name="caret-square-o-up" fixedWidth /> fa-caret-square-o-up</Col>
                          <Col md={3} sm={4}><I name="caret-up" fixedWidth /> fa-caret-up</Col>
                          <Col md={3} sm={4}><I name="chevron-circle-down" fixedWidth /> fa-chevron-circle-down</Col>
                          <Col md={3} sm={4}><I name="chevron-circle-left" fixedWidth /> fa-chevron-circle-left</Col>
                          <Col md={3} sm={4}><I name="chevron-circle-right" fixedWidth /> fa-chevron-circle-right</Col>
                          <Col md={3} sm={4}><I name="chevron-circle-up" fixedWidth /> fa-chevron-circle-up</Col>
                          <Col md={3} sm={4}><I name="chevron-down" fixedWidth /> fa-chevron-down</Col>
                          <Col md={3} sm={4}><I name="chevron-left" fixedWidth /> fa-chevron-left</Col>
                          <Col md={3} sm={4}><I name="chevron-right" fixedWidth /> fa-chevron-right</Col>
                          <Col md={3} sm={4}><I name="chevron-up" fixedWidth /> fa-chevron-up</Col>
                          <Col md={3} sm={4}><I name="exchange" fixedWidth /> fa-exchange</Col>
                          <Col md={3} sm={4}><I name="hand-o-down" fixedWidth /> fa-hand-o-down</Col>
                          <Col md={3} sm={4}><I name="hand-o-left" fixedWidth /> fa-hand-o-left</Col>
                          <Col md={3} sm={4}><I name="hand-o-right" fixedWidth /> fa-hand-o-right</Col>
                          <Col md={3} sm={4}><I name="hand-o-up" fixedWidth /> fa-hand-o-up</Col>
                          <Col md={3} sm={4}><I name="long-arrow-down" fixedWidth /> fa-long-arrow-down</Col>
                          <Col md={3} sm={4}><I name="long-arrow-left" fixedWidth /> fa-long-arrow-left</Col>
                          <Col md={3} sm={4}><I name="long-arrow-right" fixedWidth /> fa-long-arrow-right</Col>
                          <Col md={3} sm={4}><I name="long-arrow-up" fixedWidth /> fa-long-arrow-up</Col>
                          <Col md={3} sm={4}><I name="toggle-down" fixedWidth /> fa-toggle-down <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="toggle-left" fixedWidth /> fa-toggle-left <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="toggle-right" fixedWidth /> fa-toggle-right <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="toggle-up" fixedWidth /> fa-toggle-up <span className="text-muted">(alias)</span></Col>
                        </div>
                      </section>

                      <section id="video-player">
                        <h4 className="page-header">Video Player Icons</h4>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="arrows-alt" fixedWidth /> fa-arrows-alt</Col>
                          <Col md={3} sm={4}><I name="backward" fixedWidth /> fa-backward</Col>
                          <Col md={3} sm={4}><I name="compress" fixedWidth /> fa-compress</Col>
                          <Col md={3} sm={4}><I name="eject" fixedWidth /> fa-eject</Col>
                          <Col md={3} sm={4}><I name="expand" fixedWidth /> fa-expand</Col>
                          <Col md={3} sm={4}><I name="fast-backward" fixedWidth /> fa-fast-backward</Col>
                          <Col md={3} sm={4}><I name="fast-forward" fixedWidth /> fa-fast-forward</Col>
                          <Col md={3} sm={4}><I name="forward" fixedWidth /> fa-forward</Col>
                          <Col md={3} sm={4}><I name="pause" fixedWidth /> fa-pause</Col>
                          <Col md={3} sm={4}><I name="play" fixedWidth /> fa-play</Col>
                          <Col md={3} sm={4}><I name="play-circle" fixedWidth /> fa-play-circle</Col>
                          <Col md={3} sm={4}><I name="play-circle-o" fixedWidth /> fa-play-circle-o</Col>
                          <Col md={3} sm={4}><I name="random" fixedWidth /> fa-random</Col>
                          <Col md={3} sm={4}><I name="step-backward" fixedWidth /> fa-step-backward</Col>
                          <Col md={3} sm={4}><I name="step-forward" fixedWidth /> fa-step-forward</Col>
                          <Col md={3} sm={4}><I name="stop" fixedWidth /> fa-stop</Col>
                          <Col md={3} sm={4}><I name="youtube-play" fixedWidth /> fa-youtube-play</Col>
                        </div>
                      </section>

                      <section id="brand">
                        <h4 className="page-header">Brand Icons</h4>
                        <div className="alert alert-info">
                          <ul className="margin-bottom-none padding-left-lg">
                            <li>All brand icons are trademarks of their respective owners.</li>
                            <li>The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.</li>
                          </ul>
                        </div>
                        <div className="row fontawesome-icon-list">
                          <Col md={3} sm={4}><I name="500px" fixedWidth /> fa-500px</Col>
                          <Col md={3} sm={4}><I name="adn" fixedWidth /> fa-adn</Col>
                          <Col md={3} sm={4}><I name="amazon" fixedWidth /> fa-amazon</Col>
                          <Col md={3} sm={4}><I name="android" fixedWidth /> fa-android</Col>
                          <Col md={3} sm={4}><I name="angellist" fixedWidth /> fa-angellist</Col>
                          <Col md={3} sm={4}><I name="apple" fixedWidth /> fa-apple</Col>
                          <Col md={3} sm={4}><I name="behance" fixedWidth /> fa-behance</Col>
                          <Col md={3} sm={4}><I name="behance-square" fixedWidth /> fa-behance-square</Col>
                          <Col md={3} sm={4}><I name="bitbucket" fixedWidth /> fa-bitbucket</Col>
                          <Col md={3} sm={4}><I name="bitbucket-square" fixedWidth /> fa-bitbucket-square</Col>
                          <Col md={3} sm={4}><I name="bitcoin" fixedWidth /> fa-bitcoin <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="black-tie" fixedWidth /> fa-black-tie</Col>
                          <Col md={3} sm={4}><I name="btc" fixedWidth /> fa-btc</Col>
                          <Col md={3} sm={4}><I name="buysellads" fixedWidth /> fa-buysellads</Col>
                          <Col md={3} sm={4}><I name="cc-amex" fixedWidth /> fa-cc-amex</Col>
                          <Col md={3} sm={4}><I name="cc-diners-club" fixedWidth /> fa-cc-diners-club</Col>
                          <Col md={3} sm={4}><I name="cc-discover" fixedWidth /> fa-cc-discover</Col>
                          <Col md={3} sm={4}><I name="cc-jcb" fixedWidth /> fa-cc-jcb</Col>
                          <Col md={3} sm={4}><I name="cc-mastercard" fixedWidth /> fa-cc-mastercard</Col>
                          <Col md={3} sm={4}><I name="cc-paypal" fixedWidth /> fa-cc-paypal</Col>
                          <Col md={3} sm={4}><I name="cc-stripe" fixedWidth /> fa-cc-stripe</Col>
                          <Col md={3} sm={4}><I name="cc-visa" fixedWidth /> fa-cc-visa</Col>
                          <Col md={3} sm={4}><I name="chrome" fixedWidth /> fa-chrome</Col>
                          <Col md={3} sm={4}><I name="codepen" fixedWidth /> fa-codepen</Col>
                          <Col md={3} sm={4}><I name="connectdevelop" fixedWidth /> fa-connectdevelop</Col>
                          <Col md={3} sm={4}><I name="contao" fixedWidth /> fa-contao</Col>
                          <Col md={3} sm={4}><I name="css3" fixedWidth /> fa-css3</Col>
                          <Col md={3} sm={4}><I name="dashcube" fixedWidth /> fa-dashcube</Col>
                          <Col md={3} sm={4}><I name="delicious" fixedWidth /> fa-delicious</Col>
                          <Col md={3} sm={4}><I name="deviantart" fixedWidth /> fa-deviantart</Col>
                          <Col md={3} sm={4}><I name="digg" fixedWidth /> fa-digg</Col>
                          <Col md={3} sm={4}><I name="dribbble" fixedWidth /> fa-dribbble</Col>
                          <Col md={3} sm={4}><I name="dropbox" fixedWidth /> fa-dropbox</Col>
                          <Col md={3} sm={4}><I name="drupal" fixedWidth /> fa-drupal</Col>
                          <Col md={3} sm={4}><I name="empire" fixedWidth /> fa-empire</Col>
                          <Col md={3} sm={4}><I name="expeditedssl" fixedWidth /> fa-expeditedssl</Col>
                          <Col md={3} sm={4}><I name="facebook" fixedWidth /> fa-facebook</Col>
                          <Col md={3} sm={4}><I name="facebook-f" fixedWidth /> fa-facebook-f <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="facebook-official" fixedWidth /> fa-facebook-official</Col>
                          <Col md={3} sm={4}><I name="facebook-square" fixedWidth /> fa-facebook-square</Col>
                          <Col md={3} sm={4}><I name="firefox" fixedWidth /> fa-firefox</Col>
                          <Col md={3} sm={4}><I name="flickr" fixedWidth /> fa-flickr</Col>
                          <Col md={3} sm={4}><I name="fonticons" fixedWidth /> fa-fonticons</Col>
                          <Col md={3} sm={4}><I name="forumbee" fixedWidth /> fa-forumbee</Col>
                          <Col md={3} sm={4}><I name="foursquare" fixedWidth /> fa-foursquare</Col>
                          <Col md={3} sm={4}><I name="ge" fixedWidth /> fa-ge <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="get-pocket" fixedWidth /> fa-get-pocket</Col>
                          <Col md={3} sm={4}><I name="gg" fixedWidth /> fa-gg</Col>
                          <Col md={3} sm={4}><I name="gg-circle" fixedWidth /> fa-gg-circle</Col>
                          <Col md={3} sm={4}><I name="git" fixedWidth /> fa-git</Col>
                          <Col md={3} sm={4}><I name="git-square" fixedWidth /> fa-git-square</Col>
                          <Col md={3} sm={4}><I name="github" fixedWidth /> fa-github</Col>
                          <Col md={3} sm={4}><I name="github-alt" fixedWidth /> fa-github-alt</Col>
                          <Col md={3} sm={4}><I name="github-square" fixedWidth /> fa-github-square</Col>
                          <Col md={3} sm={4}><I name="gittip" fixedWidth /> fa-gittip <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="google" fixedWidth /> fa-google</Col>
                          <Col md={3} sm={4}><I name="google-plus" fixedWidth /> fa-google-plus</Col>
                          <Col md={3} sm={4}><I name="google-plus-square" fixedWidth /> fa-google-plus-square</Col>
                          <Col md={3} sm={4}><I name="google-wallet" fixedWidth /> fa-google-wallet</Col>
                          <Col md={3} sm={4}><I name="gratipay" fixedWidth /> fa-gratipay</Col>
                          <Col md={3} sm={4}><I name="hacker-news" fixedWidth /> fa-hacker-news</Col>
                          <Col md={3} sm={4}><I name="houzz" fixedWidth /> fa-houzz</Col>
                          <Col md={3} sm={4}><I name="html5" fixedWidth /> fa-html5</Col>
                          <Col md={3} sm={4}><I name="instagram" fixedWidth /> fa-instagram</Col>
                          <Col md={3} sm={4}><I name="internet-explorer" fixedWidth /> fa-internet-explorer</Col>
                          <Col md={3} sm={4}><I name="ioxhost" fixedWidth /> fa-ioxhost</Col>
                          <Col md={3} sm={4}><I name="joomla" fixedWidth /> fa-joomla</Col>
                          <Col md={3} sm={4}><I name="jsfiddle" fixedWidth /> fa-jsfiddle</Col>
                          <Col md={3} sm={4}><I name="lastfm" fixedWidth /> fa-lastfm</Col>
                          <Col md={3} sm={4}><I name="lastfm-square" fixedWidth /> fa-lastfm-square</Col>
                          <Col md={3} sm={4}><I name="leanpub" fixedWidth /> fa-leanpub</Col>
                          <Col md={3} sm={4}><I name="linkedin" fixedWidth /> fa-linkedin</Col>
                          <Col md={3} sm={4}><I name="linkedin-square" fixedWidth /> fa-linkedin-square</Col>
                          <Col md={3} sm={4}><I name="linux" fixedWidth /> fa-linux</Col>
                          <Col md={3} sm={4}><I name="maxcdn" fixedWidth /> fa-maxcdn</Col>
                          <Col md={3} sm={4}><I name="meanpath" fixedWidth /> fa-meanpath</Col>
                          <Col md={3} sm={4}><I name="medium" fixedWidth /> fa-medium</Col>
                          <Col md={3} sm={4}><I name="odnoklassniki" fixedWidth /> fa-odnoklassniki</Col>
                          <Col md={3} sm={4}><I name="odnoklassniki-square" fixedWidth /> fa-odnoklassniki-square</Col>
                          <Col md={3} sm={4}><I name="opencart" fixedWidth /> fa-opencart</Col>
                          <Col md={3} sm={4}><I name="openid" fixedWidth /> fa-openid</Col>
                          <Col md={3} sm={4}><I name="opera" fixedWidth /> fa-opera</Col>
                          <Col md={3} sm={4}><I name="optin-monster" fixedWidth /> fa-optin-monster</Col>
                          <Col md={3} sm={4}><I name="pagelines" fixedWidth /> fa-pagelines</Col>
                          <Col md={3} sm={4}><I name="paypal" fixedWidth /> fa-paypal</Col>
                          <Col md={3} sm={4}><I name="pied-piper" fixedWidth /> fa-pied-piper</Col>
                          <Col md={3} sm={4}><I name="pied-piper-alt" fixedWidth /> fa-pied-piper-alt</Col>
                          <Col md={3} sm={4}><I name="pinterest" fixedWidth /> fa-pinterest</Col>
                          <Col md={3} sm={4}><I name="pinterest-p" fixedWidth /> fa-pinterest-p</Col>
                          <Col md={3} sm={4}><I name="pinterest-square" fixedWidth /> fa-pinterest-square</Col>
                          <Col md={3} sm={4}><I name="qq" fixedWidth /> fa-qq</Col>
                          <Col md={3} sm={4}><I name="ra" fixedWidth /> fa-ra <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="rebel" fixedWidth /> fa-rebel</Col>
                          <Col md={3} sm={4}><I name="reddit" fixedWidth /> fa-reddit</Col>
                          <Col md={3} sm={4}><I name="reddit-square" fixedWidth /> fa-reddit-square</Col>
                          <Col md={3} sm={4}><I name="renren" fixedWidth /> fa-renren</Col>
                          <Col md={3} sm={4}><I name="safari" fixedWidth /> fa-safari</Col>
                          <Col md={3} sm={4}><I name="sellsy" fixedWidth /> fa-sellsy</Col>
                          <Col md={3} sm={4}><I name="share-alt" fixedWidth /> fa-share-alt</Col>
                          <Col md={3} sm={4}><I name="share-alt-square" fixedWidth /> fa-share-alt-square</Col>
                          <Col md={3} sm={4}><I name="shirtsinbulk" fixedWidth /> fa-shirtsinbulk</Col>
                          <Col md={3} sm={4}><I name="simplybuilt" fixedWidth /> fa-simplybuilt</Col>
                          <Col md={3} sm={4}><I name="skyatlas" fixedWidth /> fa-skyatlas</Col>
                          <Col md={3} sm={4}><I name="skype" fixedWidth /> fa-skype</Col>
                          <Col md={3} sm={4}><I name="slack" fixedWidth /> fa-slack</Col>
                          <Col md={3} sm={4}><I name="slideshare" fixedWidth /> fa-slideshare</Col>
                          <Col md={3} sm={4}><I name="soundcloud" fixedWidth /> fa-soundcloud</Col>
                          <Col md={3} sm={4}><I name="spotify" fixedWidth /> fa-spotify</Col>
                          <Col md={3} sm={4}><I name="stack-exchange" fixedWidth /> fa-stack-exchange</Col>
                          <Col md={3} sm={4}><I name="stack-overflow" fixedWidth /> fa-stack-overflow</Col>
                          <Col md={3} sm={4}><I name="steam" fixedWidth /> fa-steam</Col>
                          <Col md={3} sm={4}><I name="steam-square" fixedWidth /> fa-steam-square</Col>
                          <Col md={3} sm={4}><I name="stumbleupon" fixedWidth /> fa-stumbleupon</Col>
                          <Col md={3} sm={4}><I name="stumbleupon-circle" fixedWidth /> fa-stumbleupon-circle</Col>
                          <Col md={3} sm={4}><I name="tencent-weibo" fixedWidth /> fa-tencent-weibo</Col>
                          <Col md={3} sm={4}><I name="trello" fixedWidth /> fa-trello</Col>
                          <Col md={3} sm={4}><I name="tripadvisor" fixedWidth /> fa-tripadvisor</Col>
                          <Col md={3} sm={4}><I name="tumblr" fixedWidth /> fa-tumblr</Col>
                          <Col md={3} sm={4}><I name="tumblr-square" fixedWidth /> fa-tumblr-square</Col>
                          <Col md={3} sm={4}><I name="twitch" fixedWidth /> fa-twitch</Col>
                          <Col md={3} sm={4}><I name="twitter" fixedWidth /> fa-twitter</Col>
                          <Col md={3} sm={4}><I name="twitter-square" fixedWidth /> fa-twitter-square</Col>
                          <Col md={3} sm={4}><I name="viacoin" fixedWidth /> fa-viacoin</Col>
                          <Col md={3} sm={4}><I name="vimeo" fixedWidth /> fa-vimeo</Col>
                          <Col md={3} sm={4}><I name="vimeo-square" fixedWidth /> fa-vimeo-square</Col>
                          <Col md={3} sm={4}><I name="vine" fixedWidth /> fa-vine</Col>
                          <Col md={3} sm={4}><I name="vk" fixedWidth /> fa-vk</Col>
                          <Col md={3} sm={4}><I name="wechat" fixedWidth /> fa-wechat <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="weibo" fixedWidth /> fa-weibo</Col>
                          <Col md={3} sm={4}><I name="weixin" fixedWidth /> fa-weixin</Col>
                          <Col md={3} sm={4}><I name="whatsapp" fixedWidth /> fa-whatsapp</Col>
                          <Col md={3} sm={4}><I name="wikipedia-w" fixedWidth /> fa-wikipedia-w</Col>
                          <Col md={3} sm={4}><I name="windows" fixedWidth /> fa-windows</Col>
                          <Col md={3} sm={4}><I name="wordpress" fixedWidth /> fa-wordpress</Col>
                          <Col md={3} sm={4}><I name="xing" fixedWidth /> fa-xing</Col>
                          <Col md={3} sm={4}><I name="xing-square" fixedWidth /> fa-xing-square</Col>
                          <Col md={3} sm={4}><I name="y-combinator" fixedWidth /> fa-y-combinator</Col>
                          <Col md={3} sm={4}><I name="y-combinator-square" fixedWidth /> fa-y-combinator-square <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="yahoo" fixedWidth /> fa-yahoo</Col>
                          <Col md={3} sm={4}><I name="yc" fixedWidth /> fa-yc <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="yc-square" fixedWidth /> fa-yc-square <span className="text-muted">(alias)</span></Col>
                          <Col md={3} sm={4}><I name="yelp" fixedWidth /> fa-yelp</Col>
                          <Col md={3} sm={4}><I name="youtube" fixedWidth /> fa-youtube</Col>
                          <Col md={3} sm={4}><I name="youtube-play" fixedWidth /> fa-youtube-play</Col>
                          <Col md={3} sm={4}><I name="youtube-square" fixedWidth /> fa-youtube-square</Col>
                        </div>
                      </section>

                      <section id="medical">
                        <h4 className="page-header">Medical Icons</h4>
                        <div className="row">
                          <Col md={3} sm={4}><I name="ambulance" fixedWidth /> fa-ambulance</Col>
                          <Col md={3} sm={4}><I name="h-square" fixedWidth /> fa-h-square</Col>
                          <Col md={3} sm={4}><I name="heart" fixedWidth /> fa-heart</Col>
                          <Col md={3} sm={4}><I name="heart-o" fixedWidth /> fa-heart-o</Col>
                          <Col md={3} sm={4}><I name="heartbeat" fixedWidth /> fa-heartbeat</Col>
                          <Col md={3} sm={4}><I name="hospital-o" fixedWidth /> fa-hospital-o</Col>
                          <Col md={3} sm={4}><I name="medkit" fixedWidth /> fa-medkit</Col>
                          <Col md={3} sm={4}><I name="plus-square" fixedWidth /> fa-plus-square</Col>
                          <Col md={3} sm={4}><I name="stethoscope" fixedWidth /> fa-stethoscope</Col>
                          <Col md={3} sm={4}><I name="user-md" fixedWidth /> fa-user-md</Col>
                          <Col md={3} sm={4}><I name="wheelchair" fixedWidth /> fa-wheelchair</Col>
                        </div>
                      </section>
                    </div>
                  </Tab>
                  <Tab eventKey={2} title="Glyphicons">
                    <ul className="bs-glyphicons">
                      <li>
                        <Glyphicon glyph="asterisk" />
                        <span className="glyphicon-class">glyphicon glyphicon-asterisk</span>
                      </li>
                      <li>
                        <Glyphicon glyph="plus" />
                        <span className="glyphicon-class">glyphicon glyphicon-plus</span>
                      </li>
                      <li>
                        <Glyphicon glyph="euro" />
                        <span className="glyphicon-class">glyphicon glyphicon-euro</span>
                      </li>
                      <li>
                        <Glyphicon glyph="eur" />
                        <span className="glyphicon-class">glyphicon glyphicon-eur</span>
                      </li>
                      <li>
                        <Glyphicon glyph="minus" />
                        <span className="glyphicon-class">glyphicon glyphicon-minus</span>
                      </li>
                      <li>
                        <Glyphicon glyph="cloud" />
                        <span className="glyphicon-class">glyphicon glyphicon-cloud</span>
                      </li>
                      <li>
                        <Glyphicon glyph="envelope" />
                        <span className="glyphicon-class">glyphicon glyphicon-envelope</span>
                      </li>
                      <li>
                        <Glyphicon glyph="pencil" />
                        <span className="glyphicon-class">glyphicon glyphicon-pencil</span>
                      </li>
                      <li>
                        <Glyphicon glyph="glass" />
                        <span className="glyphicon-class">glyphicon glyphicon-glass</span>
                      </li>
                      <li>
                        <Glyphicon glyph="music" />
                        <span className="glyphicon-class">glyphicon glyphicon-music</span>
                      </li>
                      <li>
                        <Glyphicon glyph="search" />
                        <span className="glyphicon-class">glyphicon glyphicon-search</span>
                      </li>
                      <li>
                        <Glyphicon glyph="heart" />
                        <span className="glyphicon-class">glyphicon glyphicon-heart</span>
                      </li>
                      <li>
                        <Glyphicon glyph="star" />
                        <span className="glyphicon-class">glyphicon glyphicon-star</span>
                      </li>
                      <li>
                        <Glyphicon glyph="star-empty" />
                        <span className="glyphicon-class">glyphicon glyphicon-star-empty</span>
                      </li>
                      <li>
                        <Glyphicon glyph="user" />
                        <span className="glyphicon-class">glyphicon glyphicon-user</span>
                      </li>
                      <li>
                        <Glyphicon glyph="film" />
                        <span className="glyphicon-class">glyphicon glyphicon-film</span>
                      </li>
                      <li>
                        <Glyphicon glyph="th-large" />
                        <span className="glyphicon-class">glyphicon glyphicon-th-large</span>
                      </li>
                      <li>
                        <Glyphicon glyph="th" />
                        <span className="glyphicon-class">glyphicon glyphicon-th</span>
                      </li>
                      <li>
                        <Glyphicon glyph="th-list" />
                        <span className="glyphicon-class">glyphicon glyphicon-th-list</span>
                      </li>
                      <li>
                        <Glyphicon glyph="ok" />
                        <span className="glyphicon-class">glyphicon glyphicon-ok</span>
                      </li>
                      <li>
                        <Glyphicon glyph="remove" />
                        <span className="glyphicon-class">glyphicon glyphicon-remove</span>
                      </li>
                      <li>
                        <Glyphicon glyph="zoom-in" />
                        <span className="glyphicon-class">glyphicon glyphicon-zoom-in</span>
                      </li>
                      <li>
                        <Glyphicon glyph="zoom-out" />
                        <span className="glyphicon-class">glyphicon glyphicon-zoom-out</span>
                      </li>
                      <li>
                        <Glyphicon glyph="off" />
                        <span className="glyphicon-class">glyphicon glyphicon-off</span>
                      </li>
                      <li>
                        <Glyphicon glyph="signal" />
                        <span className="glyphicon-class">glyphicon glyphicon-signal</span>
                      </li>
                      <li>
                        <Glyphicon glyph="cog" />
                        <span className="glyphicon-class">glyphicon glyphicon-cog</span>
                      </li>
                      <li>
                        <Glyphicon glyph="trash" />
                        <span className="glyphicon-class">glyphicon glyphicon-trash</span>
                      </li>
                      <li>
                        <Glyphicon glyph="home" />
                        <span className="glyphicon-class">glyphicon glyphicon-home</span>
                      </li>
                      <li>
                        <Glyphicon glyph="file" />
                        <span className="glyphicon-class">glyphicon glyphicon-file</span>
                      </li>
                      <li>
                        <Glyphicon glyph="time" />
                        <span className="glyphicon-class">glyphicon glyphicon-time</span>
                      </li>
                      <li>
                        <Glyphicon glyph="road" />
                        <span className="glyphicon-class">glyphicon glyphicon-road</span>
                      </li>
                      <li>
                        <Glyphicon glyph="download-alt" />
                        <span className="glyphicon-class">glyphicon glyphicon-download-alt</span>
                      </li>
                      <li>
                        <Glyphicon glyph="download" />
                        <span className="glyphicon-class">glyphicon glyphicon-download</span>
                      </li>
                      <li>
                        <Glyphicon glyph="upload" />
                        <span className="glyphicon-class">glyphicon glyphicon-upload</span>
                      </li>
                      <li>
                        <Glyphicon glyph="inbox" />
                        <span className="glyphicon-class">glyphicon glyphicon-inbox</span>
                      </li>
                      <li>
                        <Glyphicon glyph="play-circle" />
                        <span className="glyphicon-class">glyphicon glyphicon-play-circle</span>
                      </li>
                      <li>
                        <Glyphicon glyph="repeat" />
                        <span className="glyphicon-class">glyphicon glyphicon-repeat</span>
                      </li>
                      <li>
                        <Glyphicon glyph="refresh" />
                        <span className="glyphicon-class">glyphicon glyphicon-refresh</span>
                      </li>
                      <li>
                        <Glyphicon glyph="list-alt" />
                        <span className="glyphicon-class">glyphicon glyphicon-list-alt</span>
                      </li>
                      <li>
                        <Glyphicon glyph="lock" />
                        <span className="glyphicon-class">glyphicon glyphicon-lock</span>
                      </li>
                      <li>
                        <Glyphicon glyph="flag" />
                        <span className="glyphicon-class">glyphicon glyphicon-flag</span>
                      </li>
                      <li>
                        <Glyphicon glyph="headphones" />
                        <span className="glyphicon-class">glyphicon glyphicon-headphones</span>
                      </li>
                      <li>
                        <Glyphicon glyph="volume-off" />
                        <span className="glyphicon-class">glyphicon glyphicon-volume-off</span>
                      </li>
                      <li>
                        <Glyphicon glyph="volume-down" />
                        <span className="glyphicon-class">glyphicon glyphicon-volume-down</span>
                      </li>
                      <li>
                        <Glyphicon glyph="volume-up" />
                        <span className="glyphicon-class">glyphicon glyphicon-volume-up</span>
                      </li>
                      <li>
                        <Glyphicon glyph="qrcode" />
                        <span className="glyphicon-class">glyphicon glyphicon-qrcode</span>
                      </li>
                      <li>
                        <Glyphicon glyph="barcode" />
                        <span className="glyphicon-class">glyphicon glyphicon-barcode</span>
                      </li>
                      <li>
                        <Glyphicon glyph="tag" />
                        <span className="glyphicon-class">glyphicon glyphicon-tag</span>
                      </li>
                      <li>
                        <Glyphicon glyph="tags" />
                        <span className="glyphicon-class">glyphicon glyphicon-tags</span>
                      </li>
                      <li>
                        <Glyphicon glyph="book" />
                        <span className="glyphicon-class">glyphicon glyphicon-book</span>
                      </li>
                      <li>
                        <Glyphicon glyph="bookmark" />
                        <span className="glyphicon-class">glyphicon glyphicon-bookmark</span>
                      </li>
                      <li>
                        <Glyphicon glyph="print" />
                        <span className="glyphicon-class">glyphicon glyphicon-print</span>
                      </li>
                      <li>
                        <Glyphicon glyph="camera" />
                        <span className="glyphicon-class">glyphicon glyphicon-camera</span>
                      </li>
                      <li>
                        <Glyphicon glyph="font" />
                        <span className="glyphicon-class">glyphicon glyphicon-font</span>
                      </li>
                      <li>
                        <Glyphicon glyph="bold" />
                        <span className="glyphicon-class">glyphicon glyphicon-bold</span>
                      </li>
                      <li>
                        <Glyphicon glyph="italic" />
                        <span className="glyphicon-class">glyphicon glyphicon-italic</span>
                      </li>
                      <li>
                        <Glyphicon glyph="text-height" />
                        <span className="glyphicon-class">glyphicon glyphicon-text-height</span>
                      </li>
                      <li>
                        <Glyphicon glyph="text-width" />
                        <span className="glyphicon-class">glyphicon glyphicon-text-width</span>
                      </li>
                      <li>
                        <Glyphicon glyph="align-left" />
                        <span className="glyphicon-class">glyphicon glyphicon-align-left</span>
                      </li>
                      <li>
                        <Glyphicon glyph="align-center" />
                        <span className="glyphicon-class">glyphicon glyphicon-align-center</span>
                      </li>
                      <li>
                        <Glyphicon glyph="align-right" />
                        <span className="glyphicon-class">glyphicon glyphicon-align-right</span>
                      </li>
                      <li>
                        <Glyphicon glyph="align-justify" />
                        <span className="glyphicon-class">glyphicon glyphicon-align-justify</span>
                      </li>
                      <li>
                        <Glyphicon glyph="list" />
                        <span className="glyphicon-class">glyphicon glyphicon-list</span>
                      </li>
                      <li>
                        <Glyphicon glyph="indent-left" />
                        <span className="glyphicon-class">glyphicon glyphicon-indent-left</span>
                      </li>
                      <li>
                        <Glyphicon glyph="indent-right" />
                        <span className="glyphicon-class">glyphicon glyphicon-indent-right</span>
                      </li>
                      <li>
                        <Glyphicon glyph="facetime-video" />
                        <span className="glyphicon-class">glyphicon glyphicon-facetime-video</span>
                      </li>
                      <li>
                        <Glyphicon glyph="picture" />
                        <span className="glyphicon-class">glyphicon glyphicon-picture</span>
                      </li>
                      <li>
                        <Glyphicon glyph="map-marker" />
                        <span className="glyphicon-class">glyphicon glyphicon-map-marker</span>
                      </li>
                      <li>
                        <Glyphicon glyph="adjust" />
                        <span className="glyphicon-class">glyphicon glyphicon-adjust</span>
                      </li>
                      <li>
                        <Glyphicon glyph="tint" />
                        <span className="glyphicon-class">glyphicon glyphicon-tint</span>
                      </li>
                      <li>
                        <Glyphicon glyph="edit" />
                        <span className="glyphicon-class">glyphicon glyphicon-edit</span>
                      </li>
                      <li>
                        <Glyphicon glyph="share" />
                        <span className="glyphicon-class">glyphicon glyphicon-share</span>
                      </li>
                      <li>
                        <Glyphicon glyph="check" />
                        <span className="glyphicon-class">glyphicon glyphicon-check</span>
                      </li>
                      <li>
                        <Glyphicon glyph="move" />
                        <span className="glyphicon-class">glyphicon glyphicon-move</span>
                      </li>
                      <li>
                        <Glyphicon glyph="step-backward" />
                        <span className="glyphicon-class">glyphicon glyphicon-step-backward</span>
                      </li>
                      <li>
                        <Glyphicon glyph="fast-backward" />
                        <span className="glyphicon-class">glyphicon glyphicon-fast-backward</span>
                      </li>
                      <li>
                        <Glyphicon glyph="backward" />
                        <span className="glyphicon-class">glyphicon glyphicon-backward</span>
                      </li>
                      <li>
                        <Glyphicon glyph="play" />
                        <span className="glyphicon-class">glyphicon glyphicon-play</span>
                      </li>
                      <li>
                        <Glyphicon glyph="pause" />
                        <span className="glyphicon-class">glyphicon glyphicon-pause</span>
                      </li>
                      <li>
                        <Glyphicon glyph="stop" />
                        <span className="glyphicon-class">glyphicon glyphicon-stop</span>
                      </li>
                      <li>
                        <Glyphicon glyph="forward" />
                        <span className="glyphicon-class">glyphicon glyphicon-forward</span>
                      </li>
                      <li>
                        <Glyphicon glyph="fast-forward" />
                        <span className="glyphicon-class">glyphicon glyphicon-fast-forward</span>
                      </li>
                      <li>
                        <Glyphicon glyph="step-forward" />
                        <span className="glyphicon-class">glyphicon glyphicon-step-forward</span>
                      </li>
                      <li>
                        <Glyphicon glyph="eject" />
                        <span className="glyphicon-class">glyphicon glyphicon-eject</span>
                      </li>
                      <li>
                        <Glyphicon glyph="chevron-left" />
                        <span className="glyphicon-class">glyphicon glyphicon-chevron-left</span>
                      </li>
                      <li>
                        <Glyphicon glyph="chevron-right" />
                        <span className="glyphicon-class">glyphicon glyphicon-chevron-right</span>
                      </li>
                      <li>
                        <Glyphicon glyph="plus-sign" />
                        <span className="glyphicon-class">glyphicon glyphicon-plus-sign</span>
                      </li>
                      <li>
                        <Glyphicon glyph="minus-sign" />
                        <span className="glyphicon-class">glyphicon glyphicon-minus-sign</span>
                      </li>
                      <li>
                        <Glyphicon glyph="remove-sign" />
                        <span className="glyphicon-class">glyphicon glyphicon-remove-sign</span>
                      </li>
                      <li>
                        <Glyphicon glyph="ok-sign" />
                        <span className="glyphicon-class">glyphicon glyphicon-ok-sign</span>
                      </li>
                      <li>
                        <Glyphicon glyph="question-sign" />
                        <span className="glyphicon-class">glyphicon glyphicon-question-sign</span>
                      </li>
                      <li>
                        <Glyphicon glyph="info-sign" />
                        <span className="glyphicon-class">glyphicon glyphicon-info-sign</span>
                      </li>
                      <li>
                        <Glyphicon glyph="screenshot" />
                        <span className="glyphicon-class">glyphicon glyphicon-screenshot</span>
                      </li>
                      <li>
                        <Glyphicon glyph="remove-circle" />
                        <span className="glyphicon-class">glyphicon glyphicon-remove-circle</span>
                      </li>
                      <li>
                        <Glyphicon glyph="ok-circle" />
                        <span className="glyphicon-class">glyphicon glyphicon-ok-circle</span>
                      </li>
                      <li>
                        <Glyphicon glyph="ban-circle" />
                        <span className="glyphicon-class">glyphicon glyphicon-ban-circle</span>
                      </li>
                      <li>
                        <Glyphicon glyph="arrow-left" />
                        <span className="glyphicon-class">glyphicon glyphicon-arrow-left</span>
                      </li>
                      <li>
                        <Glyphicon glyph="arrow-right" />
                        <span className="glyphicon-class">glyphicon glyphicon-arrow-right</span>
                      </li>
                      <li>
                        <Glyphicon glyph="arrow-up" />
                        <span className="glyphicon-class">glyphicon glyphicon-arrow-up</span>
                      </li>
                      <li>
                        <Glyphicon glyph="arrow-down" />
                        <span className="glyphicon-class">glyphicon glyphicon-arrow-down</span>
                      </li>
                      <li>
                        <Glyphicon glyph="share-alt" />
                        <span className="glyphicon-class">glyphicon glyphicon-share-alt</span>
                      </li>
                      <li>
                        <Glyphicon glyph="resize-full" />
                        <span className="glyphicon-class">glyphicon glyphicon-resize-full</span>
                      </li>
                      <li>
                        <Glyphicon glyph="resize-small" />
                        <span className="glyphicon-class">glyphicon glyphicon-resize-small</span>
                      </li>
                      <li>
                        <Glyphicon glyph="exclamation-sign" />
                        <span className="glyphicon-class">glyphicon glyphicon-exclamation-sign</span>
                      </li>
                      <li>
                        <Glyphicon glyph="gift" />
                        <span className="glyphicon-class">glyphicon glyphicon-gift</span>
                      </li>
                      <li>
                        <Glyphicon glyph="leaf" />
                        <span className="glyphicon-class">glyphicon glyphicon-leaf</span>
                      </li>
                      <li>
                        <Glyphicon glyph="fire" />
                        <span className="glyphicon-class">glyphicon glyphicon-fire</span>
                      </li>
                      <li>
                        <Glyphicon glyph="eye-open" />
                        <span className="glyphicon-class">glyphicon glyphicon-eye-open</span>
                      </li>
                      <li>
                        <Glyphicon glyph="eye-close" />
                        <span className="glyphicon-class">glyphicon glyphicon-eye-close</span>
                      </li>
                      <li>
                        <Glyphicon glyph="warning-sign" />
                        <span className="glyphicon-class">glyphicon glyphicon-warning-sign</span>
                      </li>
                      <li>
                        <Glyphicon glyph="plane" />
                        <span className="glyphicon-class">glyphicon glyphicon-plane</span>
                      </li>
                      <li>
                        <Glyphicon glyph="calendar" />
                        <span className="glyphicon-class">glyphicon glyphicon-calendar</span>
                      </li>
                      <li>
                        <Glyphicon glyph="random" />
                        <span className="glyphicon-class">glyphicon glyphicon-random</span>
                      </li>
                      <li>
                        <Glyphicon glyph="comment" />
                        <span className="glyphicon-class">glyphicon glyphicon-comment</span>
                      </li>
                      <li>
                        <Glyphicon glyph="magnet" />
                        <span className="glyphicon-class">glyphicon glyphicon-magnet</span>
                      </li>
                      <li>
                        <Glyphicon glyph="chevron-up" />
                        <span className="glyphicon-class">glyphicon glyphicon-chevron-up</span>
                      </li>
                      <li>
                        <Glyphicon glyph="chevron-down" />
                        <span className="glyphicon-class">glyphicon glyphicon-chevron-down</span>
                      </li>
                      <li>
                        <Glyphicon glyph="retweet" />
                        <span className="glyphicon-class">glyphicon glyphicon-retweet</span>
                      </li>
                      <li>
                        <Glyphicon glyph="shopping-cart" />
                        <span className="glyphicon-class">glyphicon glyphicon-shopping-cart</span>
                      </li>
                      <li>
                        <Glyphicon glyph="folder-close" />
                        <span className="glyphicon-class">glyphicon glyphicon-folder-close</span>
                      </li>
                      <li>
                        <Glyphicon glyph="folder-open" />
                        <span className="glyphicon-class">glyphicon glyphicon-folder-open</span>
                      </li>
                      <li>
                        <Glyphicon glyph="resize-vertical" />
                        <span className="glyphicon-class">glyphicon glyphicon-resize-vertical</span>
                      </li>
                      <li>
                        <Glyphicon glyph="resize-horizontal" />
                        <span className="glyphicon-class">glyphicon glyphicon-resize-horizontal</span>
                      </li>
                      <li>
                        <Glyphicon glyph="hdd" />
                        <span className="glyphicon-class">glyphicon glyphicon-hdd</span>
                      </li>
                      <li>
                        <Glyphicon glyph="bullhorn" />
                        <span className="glyphicon-class">glyphicon glyphicon-bullhorn</span>
                      </li>
                      <li>
                        <Glyphicon glyph="bell" />
                        <span className="glyphicon-class">glyphicon glyphicon-bell</span>
                      </li>
                      <li>
                        <Glyphicon glyph="certificate" />
                        <span className="glyphicon-class">glyphicon glyphicon-certificate</span>
                      </li>
                      <li>
                        <Glyphicon glyph="thumbs-up" />
                        <span className="glyphicon-class">glyphicon glyphicon-thumbs-up</span>
                      </li>
                      <li>
                        <Glyphicon glyph="thumbs-down" />
                        <span className="glyphicon-class">glyphicon glyphicon-thumbs-down</span>
                      </li>
                      <li>
                        <Glyphicon glyph="hand-right" />
                        <span className="glyphicon-class">glyphicon glyphicon-hand-right</span>
                      </li>
                      <li>
                        <Glyphicon glyph="hand-left" />
                        <span className="glyphicon-class">glyphicon glyphicon-hand-left</span>
                      </li>
                      <li>
                        <Glyphicon glyph="hand-up" />
                        <span className="glyphicon-class">glyphicon glyphicon-hand-up</span>
                      </li>
                      <li>
                        <Glyphicon glyph="hand-down" />
                        <span className="glyphicon-class">glyphicon glyphicon-hand-down</span>
                      </li>
                      <li>
                        <Glyphicon glyph="circle-arrow-right" />
                        <span className="glyphicon-class">glyphicon glyphicon-circle-arrow-right</span>
                      </li>
                      <li>
                        <Glyphicon glyph="circle-arrow-left" />
                        <span className="glyphicon-class">glyphicon glyphicon-circle-arrow-left</span>
                      </li>
                      <li>
                        <Glyphicon glyph="circle-arrow-up" />
                        <span className="glyphicon-class">glyphicon glyphicon-circle-arrow-up</span>
                      </li>
                      <li>
                        <Glyphicon glyph="circle-arrow-down" />
                        <span className="glyphicon-class">glyphicon glyphicon-circle-arrow-down</span>
                      </li>
                      <li>
                        <Glyphicon glyph="globe" />
                        <span className="glyphicon-class">glyphicon glyphicon-globe</span>
                      </li>
                      <li>
                        <Glyphicon glyph="wrench" />
                        <span className="glyphicon-class">glyphicon glyphicon-wrench</span>
                      </li>
                      <li>
                        <Glyphicon glyph="tasks" />
                        <span className="glyphicon-class">glyphicon glyphicon-tasks</span>
                      </li>
                      <li>
                        <Glyphicon glyph="filter" />
                        <span className="glyphicon-class">glyphicon glyphicon-filter</span>
                      </li>
                      <li>
                        <Glyphicon glyph="briefcase" />
                        <span className="glyphicon-class">glyphicon glyphicon-briefcase</span>
                      </li>
                      <li>
                        <Glyphicon glyph="fullscreen" />
                        <span className="glyphicon-class">glyphicon glyphicon-fullscreen</span>
                      </li>
                      <li>
                        <Glyphicon glyph="dashboard" />
                        <span className="glyphicon-class">glyphicon glyphicon-dashboard</span>
                      </li>
                      <li>
                        <Glyphicon glyph="paperclip" />
                        <span className="glyphicon-class">glyphicon glyphicon-paperclip</span>
                      </li>
                      <li>
                        <Glyphicon glyph="heart-empty" />
                        <span className="glyphicon-class">glyphicon glyphicon-heart-empty</span>
                      </li>
                      <li>
                        <Glyphicon glyph="link" />
                        <span className="glyphicon-class">glyphicon glyphicon-link</span>
                      </li>
                      <li>
                        <Glyphicon glyph="phone" />
                        <span className="glyphicon-class">glyphicon glyphicon-phone</span>
                      </li>
                      <li>
                        <Glyphicon glyph="pushpin" />
                        <span className="glyphicon-class">glyphicon glyphicon-pushpin</span>
                      </li>
                      <li>
                        <Glyphicon glyph="usd" />
                        <span className="glyphicon-class">glyphicon glyphicon-usd</span>
                      </li>
                      <li>
                        <Glyphicon glyph="gbp" />
                        <span className="glyphicon-class">glyphicon glyphicon-gbp</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sort" />
                        <span className="glyphicon-class">glyphicon glyphicon-sort</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sort-by-alphabet" />
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-alphabet</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sort-by-alphabet-alt" />
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-alphabet-alt</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sort-by-order" />
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-order</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sort-by-order-alt" />
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-order-alt</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sort-by-attributes" />
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-attributes</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sort-by-attributes-alt" />
                        <span className="glyphicon-class">glyphicon glyphicon-sort-by-attributes-alt</span>
                      </li>
                      <li>
                        <Glyphicon glyph="unchecked" />
                        <span className="glyphicon-class">glyphicon glyphicon-unchecked</span>
                      </li>
                      <li>
                        <Glyphicon glyph="expand" />
                        <span className="glyphicon-class">glyphicon glyphicon-expand</span>
                      </li>
                      <li>
                        <Glyphicon glyph="collapse-down" />
                        <span className="glyphicon-class">glyphicon glyphicon-collapse-down</span>
                      </li>
                      <li>
                        <Glyphicon glyph="collapse-up" />
                        <span className="glyphicon-class">glyphicon glyphicon-collapse-up</span>
                      </li>
                      <li>
                        <Glyphicon glyph="log-in" />
                        <span className="glyphicon-class">glyphicon glyphicon-log-in</span>
                      </li>
                      <li>
                        <Glyphicon glyph="flash" />
                        <span className="glyphicon-class">glyphicon glyphicon-flash</span>
                      </li>
                      <li>
                        <Glyphicon glyph="log-out" />
                        <span className="glyphicon-class">glyphicon glyphicon-log-out</span>
                      </li>
                      <li>
                        <Glyphicon glyph="new-window" />
                        <span className="glyphicon-class">glyphicon glyphicon-new-window</span>
                      </li>
                      <li>
                        <Glyphicon glyph="record" />
                        <span className="glyphicon-class">glyphicon glyphicon-record</span>
                      </li>
                      <li>
                        <Glyphicon glyph="save" />
                        <span className="glyphicon-class">glyphicon glyphicon-save</span>
                      </li>
                      <li>
                        <Glyphicon glyph="open" />
                        <span className="glyphicon-class">glyphicon glyphicon-open</span>
                      </li>
                      <li>
                        <Glyphicon glyph="saved" />
                        <span className="glyphicon-class">glyphicon glyphicon-saved</span>
                      </li>
                      <li>
                        <Glyphicon glyph="import" />
                        <span className="glyphicon-class">glyphicon glyphicon-import</span>
                      </li>
                      <li>
                        <Glyphicon glyph="export" />
                        <span className="glyphicon-class">glyphicon glyphicon-export</span>
                      </li>
                      <li>
                        <Glyphicon glyph="send" />
                        <span className="glyphicon-class">glyphicon glyphicon-send</span>
                      </li>
                      <li>
                        <Glyphicon glyph="floppy-disk" />
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-disk</span>
                      </li>
                      <li>
                        <Glyphicon glyph="floppy-saved" />
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-saved</span>
                      </li>
                      <li>
                        <Glyphicon glyph="floppy-remove" />
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-remove</span>
                      </li>
                      <li>
                        <Glyphicon glyph="floppy-save" />
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-save</span>
                      </li>
                      <li>
                        <Glyphicon glyph="floppy-open" />
                        <span className="glyphicon-class">glyphicon glyphicon-floppy-open</span>
                      </li>
                      <li>
                        <Glyphicon glyph="credit-card" />
                        <span className="glyphicon-class">glyphicon glyphicon-credit-card</span>
                      </li>
                      <li>
                        <Glyphicon glyph="transfer" />
                        <span className="glyphicon-class">glyphicon glyphicon-transfer</span>
                      </li>
                      <li>
                        <Glyphicon glyph="cutlery" />
                        <span className="glyphicon-class">glyphicon glyphicon-cutlery</span>
                      </li>
                      <li>
                        <Glyphicon glyph="header" />
                        <span className="glyphicon-class">glyphicon glyphicon-header</span>
                      </li>
                      <li>
                        <Glyphicon glyph="compressed" />
                        <span className="glyphicon-class">glyphicon glyphicon-compressed</span>
                      </li>
                      <li>
                        <Glyphicon glyph="earphone" />
                        <span className="glyphicon-class">glyphicon glyphicon-earphone</span>
                      </li>
                      <li>
                        <Glyphicon glyph="phone-alt" />
                        <span className="glyphicon-class">glyphicon glyphicon-phone-alt</span>
                      </li>
                      <li>
                        <Glyphicon glyph="tower" />
                        <span className="glyphicon-class">glyphicon glyphicon-tower</span>
                      </li>
                      <li>
                        <Glyphicon glyph="stats" />
                        <span className="glyphicon-class">glyphicon glyphicon-stats</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sd-video" />
                        <span className="glyphicon-class">glyphicon glyphicon-sd-video</span>
                      </li>
                      <li>
                        <Glyphicon glyph="hd-video" />
                        <span className="glyphicon-class">glyphicon glyphicon-hd-video</span>
                      </li>
                      <li>
                        <Glyphicon glyph="subtitles" />
                        <span className="glyphicon-class">glyphicon glyphicon-subtitles</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sound-stereo" />
                        <span className="glyphicon-class">glyphicon glyphicon-sound-stereo</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sound-dolby" />
                        <span className="glyphicon-class">glyphicon glyphicon-sound-dolby</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sound-5-1" />
                        <span className="glyphicon-class">glyphicon glyphicon-sound-5-1</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sound-6-1" />
                        <span className="glyphicon-class">glyphicon glyphicon-sound-6-1</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sound-7-1" />
                        <span className="glyphicon-class">glyphicon glyphicon-sound-7-1</span>
                      </li>
                      <li>
                        <Glyphicon glyph="copyright-mark" />
                        <span className="glyphicon-class">glyphicon glyphicon-copyright-mark</span>
                      </li>
                      <li>
                        <Glyphicon glyph="registration-mark" />
                        <span className="glyphicon-class">glyphicon glyphicon-registration-mark</span>
                      </li>
                      <li>
                        <Glyphicon glyph="cloud-download" />
                        <span className="glyphicon-class">glyphicon glyphicon-cloud-download</span>
                      </li>
                      <li>
                        <Glyphicon glyph="cloud-upload" />
                        <span className="glyphicon-class">glyphicon glyphicon-cloud-upload</span>
                      </li>
                      <li>
                        <Glyphicon glyph="tree-conifer" />
                        <span className="glyphicon-class">glyphicon glyphicon-tree-conifer</span>
                      </li>
                      <li>
                        <Glyphicon glyph="tree-deciduous" />
                        <span className="glyphicon-class">glyphicon glyphicon-tree-deciduous</span>
                      </li>
                      <li>
                        <Glyphicon glyph="cd" />
                        <span className="glyphicon-class">glyphicon glyphicon-cd</span>
                      </li>
                      <li>
                        <Glyphicon glyph="save-file" />
                        <span className="glyphicon-class">glyphicon glyphicon-save-file</span>
                      </li>
                      <li>
                        <Glyphicon glyph="open-file" />
                        <span className="glyphicon-class">glyphicon glyphicon-open-file</span>
                      </li>
                      <li>
                        <Glyphicon glyph="level-up" />
                        <span className="glyphicon-class">glyphicon glyphicon-level-up</span>
                      </li>
                      <li>
                        <Glyphicon glyph="copy" />
                        <span className="glyphicon-class">glyphicon glyphicon-copy</span>
                      </li>
                      <li>
                        <Glyphicon glyph="paste" />
                        <span className="glyphicon-class">glyphicon glyphicon-paste</span>
                      </li>
                      <li>
                        <Glyphicon glyph="alert" />
                        <span className="glyphicon-class">glyphicon glyphicon-alert</span>
                      </li>
                      <li>
                        <Glyphicon glyph="equalizer" />
                        <span className="glyphicon-class">glyphicon glyphicon-equalizer</span>
                      </li>
                      <li>
                        <Glyphicon glyph="king" />
                        <span className="glyphicon-class">glyphicon glyphicon-king</span>
                      </li>
                      <li>
                        <Glyphicon glyph="queen" />
                        <span className="glyphicon-class">glyphicon glyphicon-queen</span>
                      </li>
                      <li>
                        <Glyphicon glyph="pawn" />
                        <span className="glyphicon-class">glyphicon glyphicon-pawn</span>
                      </li>
                      <li>
                        <Glyphicon glyph="bishop" />
                        <span className="glyphicon-class">glyphicon glyphicon-bishop</span>
                      </li>
                      <li>
                        <Glyphicon glyph="knight" />
                        <span className="glyphicon-class">glyphicon glyphicon-knight</span>
                      </li>
                      <li>
                        <Glyphicon glyph="baby-formula" />
                        <span className="glyphicon-class">glyphicon glyphicon-baby-formula</span>
                      </li>
                      <li>
                        <Glyphicon glyph="tent" />
                        <span className="glyphicon-class">glyphicon glyphicon-tent</span>
                      </li>
                      <li>
                        <Glyphicon glyph="blackboard" />
                        <span className="glyphicon-class">glyphicon glyphicon-blackboard</span>
                      </li>
                      <li>
                        <Glyphicon glyph="bed" />
                        <span className="glyphicon-class">glyphicon glyphicon-bed</span>
                      </li>
                      <li>
                        <Glyphicon glyph="apple" />
                        <span className="glyphicon-class">glyphicon glyphicon-apple</span>
                      </li>
                      <li>
                        <Glyphicon glyph="erase" />
                        <span className="glyphicon-class">glyphicon glyphicon-erase</span>
                      </li>
                      <li>
                        <Glyphicon glyph="hourglass" />
                        <span className="glyphicon-class">glyphicon glyphicon-hourglass</span>
                      </li>
                      <li>
                        <Glyphicon glyph="lamp" />
                        <span className="glyphicon-class">glyphicon glyphicon-lamp</span>
                      </li>
                      <li>
                        <Glyphicon glyph="duplicate" />
                        <span className="glyphicon-class">glyphicon glyphicon-duplicate</span>
                      </li>
                      <li>
                        <Glyphicon glyph="piggy-bank" />
                        <span className="glyphicon-class">glyphicon glyphicon-piggy-bank</span>
                      </li>
                      <li>
                        <Glyphicon glyph="scissors" />
                        <span className="glyphicon-class">glyphicon glyphicon-scissors</span>
                      </li>
                      <li>
                        <Glyphicon glyph="bitcoin" />
                        <span className="glyphicon-class">glyphicon glyphicon-bitcoin</span>
                      </li>
                      <li>
                        <Glyphicon glyph="btc" />
                        <span className="glyphicon-class">glyphicon glyphicon-btc</span>
                      </li>
                      <li>
                        <Glyphicon glyph="xbt" />
                        <span className="glyphicon-class">glyphicon glyphicon-xbt</span>
                      </li>
                      <li>
                        <Glyphicon glyph="yen" />
                        <span className="glyphicon-class">glyphicon glyphicon-yen</span>
                      </li>
                      <li>
                        <Glyphicon glyph="jpy" />
                        <span className="glyphicon-class">glyphicon glyphicon-jpy</span>
                      </li>
                      <li>
                        <Glyphicon glyph="ruble" />
                        <span className="glyphicon-class">glyphicon glyphicon-ruble</span>
                      </li>
                      <li>
                        <Glyphicon glyph="rub" />
                        <span className="glyphicon-class">glyphicon glyphicon-rub</span>
                      </li>
                      <li>
                        <Glyphicon glyph="scale" />
                        <span className="glyphicon-class">glyphicon glyphicon-scale</span>
                      </li>
                      <li>
                        <Glyphicon glyph="ice-lolly" />
                        <span className="glyphicon-class">glyphicon glyphicon-ice-lolly</span>
                      </li>
                      <li>
                        <Glyphicon glyph="ice-lolly-tasted" />
                        <span className="glyphicon-class">glyphicon glyphicon-ice-lolly-tasted</span>
                      </li>
                      <li>
                        <Glyphicon glyph="education" />
                        <span className="glyphicon-class">glyphicon glyphicon-education</span>
                      </li>
                      <li>
                        <Glyphicon glyph="option-horizontal" />
                        <span className="glyphicon-class">glyphicon glyphicon-option-horizontal</span>
                      </li>
                      <li>
                        <Glyphicon glyph="option-vertical" />
                        <span className="glyphicon-class">glyphicon glyphicon-option-vertical</span>
                      </li>
                      <li>
                        <Glyphicon glyph="menu-hamburger" />
                        <span className="glyphicon-class">glyphicon glyphicon-menu-hamburger</span>
                      </li>
                      <li>
                        <Glyphicon glyph="modal-window" />
                        <span className="glyphicon-class">glyphicon glyphicon-modal-window</span>
                      </li>
                      <li>
                        <Glyphicon glyph="oil" />
                        <span className="glyphicon-class">glyphicon glyphicon-oil</span>
                      </li>
                      <li>
                        <Glyphicon glyph="grain" />
                        <span className="glyphicon-class">glyphicon glyphicon-grain</span>
                      </li>
                      <li>
                        <Glyphicon glyph="sunglasses" />
                        <span className="glyphicon-class">glyphicon glyphicon-sunglasses</span>
                      </li>
                      <li>
                        <Glyphicon glyph="text-size" />
                        <span className="glyphicon-class">glyphicon glyphicon-text-size</span>
                      </li>
                      <li>
                        <Glyphicon glyph="text-color" />
                        <span className="glyphicon-class">glyphicon glyphicon-text-color</span>
                      </li>
                      <li>
                        <Glyphicon glyph="text-background" />
                        <span className="glyphicon-class">glyphicon glyphicon-text-background</span>
                      </li>
                      <li>
                        <Glyphicon glyph="object-align-top" />
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-top</span>
                      </li>
                      <li>
                        <Glyphicon glyph="object-align-bottom" />
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-bottom</span>
                      </li>
                      <li>
                        <Glyphicon glyph="object-align-horizontal" />
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-horizontal</span>
                      </li>
                      <li>
                        <Glyphicon glyph="object-align-left" />
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-left</span>
                      </li>
                      <li>
                        <Glyphicon glyph="object-align-vertical" />
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-vertical</span>
                      </li>
                      <li>
                        <Glyphicon glyph="object-align-right" />
                        <span className="glyphicon-class">glyphicon glyphicon-object-align-right</span>
                      </li>
                      <li>
                        <Glyphicon glyph="triangle-right" />
                        <span className="glyphicon-class">glyphicon glyphicon-triangle-right</span>
                      </li>
                      <li>
                        <Glyphicon glyph="triangle-left" />
                        <span className="glyphicon-class">glyphicon glyphicon-triangle-left</span>
                      </li>
                      <li>
                        <Glyphicon glyph="triangle-bottom" />
                        <span className="glyphicon-class">glyphicon glyphicon-triangle-bottom</span>
                      </li>
                      <li>
                        <Glyphicon glyph="triangle-top" />
                        <span className="glyphicon-class">glyphicon glyphicon-triangle-top</span>
                      </li>
                      <li>
                        <Glyphicon glyph="console" />
                        <span className="glyphicon-class">glyphicon glyphicon-console</span>
                      </li>
                      <li>
                        <Glyphicon glyph="superscript" />
                        <span className="glyphicon-class">glyphicon glyphicon-superscript</span>
                      </li>
                      <li>
                        <Glyphicon glyph="subscript" />
                        <span className="glyphicon-class">glyphicon glyphicon-subscript</span>
                      </li>
                      <li>
                        <Glyphicon glyph="menu-left" />
                        <span className="glyphicon-class">glyphicon glyphicon-menu-left</span>
                      </li>
                      <li>
                        <Glyphicon glyph="menu-right" />
                        <span className="glyphicon-class">glyphicon glyphicon-menu-right</span>
                      </li>
                      <li>
                        <Glyphicon glyph="menu-down" />
                        <span className="glyphicon-class">glyphicon glyphicon-menu-down</span>
                      </li>
                      <li>
                        <Glyphicon glyph="menu-up" />
                        <span className="glyphicon-class">glyphicon glyphicon-menu-up</span>
                      </li>
                    </ul>
                  </Tab>
                </Tabs>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

UIIconsPage.displayName = 'UIIconsPage';

UIIconsPage.defaultProps = {
};

export default UIIconsPage;
