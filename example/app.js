'use strict';

const express = require('express');
const app = express();
const port = 3300;

const server = app.listen(port, function() {
  console.log('Express server started at port: ', port);
}).on('error', function(err) {
  console.log('Express server fail to start:', err);
});

/**
 * Boot socket.io
 */
const handler = require('../index.js')(server);
handler.require('./socketHandlers/user');
handler.require('./socketHandlers/auction');
