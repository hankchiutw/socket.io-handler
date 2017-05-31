'use strict';

const User = require('../models/User');

/**
 * Event handlers for User events
 */
module.exports = {
  userLogin,
  userUpdate,
  userInfo
};

console.log('Listening for the socket.io events:', Object.keys(module.exports));

/**
 * userLogin handler
 * Emit userLoginOk event if success
 * @param {String} username Data passed from event source
 * @fires user#userLoginOk
 */
function *userLogin(username) {
  const socket = this;
  const aUser = User.create({
    username
  });
  socket.emit('userLoginOk', aUser);
}

/**
 * userUpdate handler
 * @param {Object} params
 */
function *userUpdate(userId, params) {
  const socket = this;
  User.update(userId, params);
}

/**
 * userInfo handler
 * @param {Object} userId
 */
function *userInfo(userId) {
  const socket = this;
  const aUser = User.findById(userId);
  socket.emit('userInfoOk', aUser);
}
