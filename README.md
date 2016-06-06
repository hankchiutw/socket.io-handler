# socket.io-handler
[![npm version](https://badge.fury.io/js/socket.io-handler.svg)](https://badge.fury.io/js/socket.io-handler)
[![travis status](https://travis-ci.org/hankchiutw/socket.io-handler.svg?branch=master)](https://travis-ci.org/hankchiutw/socket.io-handler)

Init socket.io and set event handlers in a structured way.

### Features
- Used with express.js
- Callback as ES6 generator

### How to use

Boot express.js and start socket.io:
```js
const express = require('express');
const app = express();
const port = 3300;

const server = app.listen(port, function(){
    console.log('Express server started at port: ', port);
}).on('error', function(err){
    console.log('Express server fail to start.');
});

/**
 * Boot socket.io
 */
const handler = require('socket.io-handler')(server);
```

Append handlers from files:
```js
handler.require('./socketHandlers/user');
handler.require('./socketHandlers/auction');
```

Append handlers directly:
```js
handler.defineEvents({
    someEvent: function *(){...}
});

handler.defineEvent('someEvent', function *(){...});
```
**Note:** For multiple defined events, all functions will be triggered.

### APIs

##### handler.require(path)
> Append handlers from a file

##### handler.defineEvents(eventMap)
> Append handlers from a JSON object

##### handler.defineEvent(eventName, cb)
> Append a handler for an event
