const Ticket = require('./Ticket');
const { readFile, writeFile } = require('./utils');

const tickets = Symbol('tickets');

class TicketCollection {
  constructor() {
    this[tickets] = [];
  }

  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket}
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this[tickets].push(ticket);

    return ticket;
  }

  // create multiple ticket
  bulkCreate() {}

  /**
   * return all tickets from db
   * @returns {[Ticket]}
   */
  find() {
    return this[tickets];
  }

  /**
   * find single ticket by id
   * @param {string} id
   * @returns {Ticket}
   */
  findTicketById(id) {
    const ticket = this[tickets].find(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === id
    );

    return ticket;
  }

  // update ticket info
  updateById() {}

  // delete ticket from db
  deleteById() {}

  // draw
  draw() {}
}

const collection = new TicketCollection();
module.exports = collection;
