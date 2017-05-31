'use strict';

/**
 * Event handlers for User events
 */
module.exports = {
  userLogin,
  userUpdate
};

/**
 * userLogin handler
 * Emit userLoginOk event if success
 * @param {String} username Data passed from event source
 * @fires user#userLoginOk
 */
function *userLogin(username) {
  const socket = this;
  socket.emit('userLoginOk', 'ok');
}

/**
 * userUpdate handler
 * @param {Object} params
 */
function *userUpdate(params) {
  const socket = this;
}
