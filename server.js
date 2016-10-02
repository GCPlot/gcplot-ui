/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
const env = process.env;
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

new WebpackDevServer(webpack(config), config.devServer)
.listen(server_port, server_ip_address, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});
