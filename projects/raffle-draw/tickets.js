const Ticket = require('./Ticket');
const { readFile, writeFile } = require('./utils');

const tickets = Symbol('tickets');

class TicketCollection {
  constructor() {
    (async function () {
      this[tickets] = await readFile();
    }.bind(this));
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
    writeFile(this[tickets]);

    return ticket;
  }

  /**
   * create bulk tickets
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Ticket[]}
   */
  createBulk(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      result.push(this.create(username, price));
    }
    writeFile(this[tickets]);

    return result;
  }

  /**
   * return all tickets from db
   * @returns {Ticket[]}
   */
  find() {
    return this[tickets];
  }

  /**
   * find single ticket by id
   * @param {string} id
   * @returns {Ticket}
   */
  findById(id) {
    const ticket = this[tickets].find(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === id
    );

    return ticket;
  }

  /**
   * find tickets by username
   * @param {string} username
   * @returns {Ticket[]}
   */
  findByUsername(username) {
    const userTickets = this[tickets].filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );

    return userTickets;
  }

  /**
   * update by id
   * @param {string} id
   * @param {{username: string, price: number}} body
   * @returns {Ticket}
   */
  updateById(id, body) {
    const ticket = this.findById(id);

    if (ticket) {
      ticket.username = body.username ?? ticket.username;
      ticket.price = body.price ?? ticket.price;
      writeFile(this[tickets]);
    }

    return ticket;
  }

  /**
   * bulk update by username
   * @param {string} username
   * @param {{username: string, price: number}} body
   * @returns {Ticket[]}
   */
  updateBulk(username, body) {
    const userTickets = this.findByUsername(username);
    let updatedTickets;
    if (userTickets) {
      updatedTickets = userTickets.map(
        /**
         * @param (Ticket) ticket
         */
        (ticket) => this.updateById(ticket.id, body)
      );
      writeFile(this[tickets]);
    }

    return updatedTickets;
  }

  /**
   * delete ticket by id
   * @param {string} id
   * @returns {boolean}
   */
  deleteById(id) {
    const index = this[tickets].findIndex(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === id
    );

    if (index === -1) {
      return false;
    } else {
      this[tickets].splice(index, 1);
      writeFile(this[tickets]);
      return true;
    }
  }

  /**
   * bulk delete by username
   * @param {string} username
   * @returns {boolean[]}
   */
  deleteBulk(username) {
    const userTickets = this.findByUsername(username);
    let deletedResult;
    if (userTickets) {
      deletedResult = userTickets.map(
        /**
         * @param {Ticket} ticket
         */
        (ticket) => this.deleteById(ticket.id)
      );
      writeFile(this[tickets]);
    }
    return deletedResult;
  }

  /**
   * find winners
   * @param {number} winnerCount
   * @returns {Ticket[]}
   */
  draw(winnerCount) {
    const winnerIndexes = new Array(winnerCount);

    let winnerIndex = 0;
    while (winnerIndex < winnerCount) {
      const ticketIndex = Math.floor(Math.random() * this[tickets].length);
      if (!winnerIndexes.includes(ticketIndex)) {
        winnerIndexes[winnerIndex++] = ticketIndex;
        continue;
      }
    }

    const winners = winnerIndexes.map(
      /**
       * @param {number} index
       */
      (index) => this[tickets][index]
    );

    return winners;
  }
}

const ticketCollection = new TicketCollection();
module.exports = ticketCollection;
