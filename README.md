# socket.io-handler
[![npm version](https://badge.fury.io/js/socket.io-handler.svg)](https://badge.fury.io/js/socket.io-handler)

Init socket.io and set event handlers in a structured way.

### Features
- Used with express.js

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
const handler = require('../index.js')(server);
```

Set handlers:
```js
handler.require('./socketHandlers/user');
handler.require('./socketHandlers/auction');
```

### APIs

##### handler.require
> Append handlers

### ToDos
- Append handlers from JSON
