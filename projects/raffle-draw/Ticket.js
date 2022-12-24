const shortid = require('shortid');

class Ticket {
  /**
   * Ticket constructor will receive username and price
   * @param {string} username
   * @param {number} price
   */
  constructor(username, price) {
    this.id = shortid.generate();
    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
