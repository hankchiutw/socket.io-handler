'use strict';
/** @module */

const co = require('co');
const Server = require('socket.io');
const callsite = require('callsite');
const path = require('path');

function IO(server) {
  return Server.call(this, server);
}

IO.prototype = Object.create(Server.prototype);

/**
 * require an event map to set to connection event listeners
 * @param {String} mapPath Same as node.js require() syntax
 */
IO.prototype.require = function(mapPath) {
  if (!path.isAbsolute(mapPath)) {
    const stack = callsite();
    const calleePath = path.dirname(stack[1].getFileName());
    mapPath = path.join(calleePath, mapPath);
  }
  const eventMap = require(mapPath);
  this.on('connection', _handlerBuilder(eventMap));
};

/**
 * Define handlers from JSON object
 * @param {Object} eventMap Key as the event name and value as the callback function
 */
IO.prototype.defineEvents = function(eventMap) {
  this.on('connection', _handlerBuilder(eventMap));
};

/**
 * Define a handler an event
 * @param {String} eventName Event name
 * @param {Function} cb Callback function
 */
IO.prototype.defineEvent = function(eventName, cb) {
  const eventMap = {};
  eventMap[eventName] = cb;
  this.on('connection', _handlerBuilder(eventMap));
};


module.exports = function(server) {
  const io = new IO(server);
  io.on('connection', () => {
    console.info(`(socket.io-handler)[${new Date().toISOString()}] client connected.`);
  });
  return io;
};
module.exports.IO = IO;

/**
 * Build socket handlers from eventMap, which has keys as event name, values as callback function(ES6 generator)
 * @param {Object} eventMap Map object with key as event name, value as callback function(ES6 generator)
 * @param {generatorCallback} eventMap.* ES6 generator to be wrapped as a socket event handler.
 * @return {returnCallback}
 */
function _handlerBuilder(eventMap) {

  /**
   * Set event handlers of the socket
   * @callback returnCallback
   * @param {Object} socket Target socket object of socket.io
   */
  return function(socket) {
    Object.keys(eventMap).forEach(function(eventName) {
      socket.on(eventName, co.wrap(function*() {
        const args = Array.prototype.slice.call(arguments);
        console.info(`(socket.io-handler)[${new Date().toISOString()}] on ${eventName}:`, args);

        try {
          yield eventMap[eventName].apply(socket, args);
        } catch (e) {
          console.error(`(socket.io-handler) ${eventName}Fail:`, JSON.stringify(e), e);
          socket.emit(`${eventName}Fail`, e.toString());
        }
      }));
    });
  };
}

/**
 * Handler for a socket event implemented as an ES6 generator
 * @callback generatorCallback
 * @param {Object} data Data passed from event source
 */

