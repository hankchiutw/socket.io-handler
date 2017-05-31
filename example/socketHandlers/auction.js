'use strict';

/**
 * Event handlers for Auction events
 */
module.exports = {
  auctionCreate,
  auctionUpdate
};

/**
 * auctionCreate handler
 * @param {Object} params Data passed from event source
 * @param {String} params.sellerId
 * @param {String} params.sellerName
 * @param {String} params.item
 * @param {Number} params.quantity
 * @param {Number} params.currentBid
 * @fires auction#auctionUpdate
 */
function *auctionCreate(params) {
  const socket = this;

  socket.broadcast.emit('auctionUpdate', 'broadcasts');
  socket.emit('auctionUpdate', 'broadcasts2');
}

/**
 * auctionUpdate handler
 * @param {Object} params Data passed from event source
 * @param {String} params.id
 * @param {String} params.sellerId
 * @param {String} params.sellerName
 * @param {String} params.item
 * @param {String} params.quantity
 * @param {String} params.currentBid
 * @fires auction#auctionUpdate
 */
function *auctionUpdate(params) {
  const socket = this;
}
