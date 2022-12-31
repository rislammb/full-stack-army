const Ticket = require('./Ticket');
const { readFile, writeFile } = require('./utils');

const tickets = Symbol('tickets');

class TicketCollection {
  constructor() {
    (async function () {
      this[tickets] = await readFile();
    }.call(this));
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
      const ticket = new Ticket(username, price);
      this[tickets].push(ticket);
      result.push(ticket);
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
      ticket.updatedAt = new Date();
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

    if (userTickets) {
      const updatedTickets = userTickets.map(
        /**
         * @param (Ticket) ticket
         */
        (ticket) => {
          ticket.username = body.username ?? ticket.username;
          ticket.price = body.price ?? ticket.price;
          ticket.updatedAt = new Date();

          return ticket;
        }
      );

      writeFile(this[tickets]);
      return updatedTickets;
    } else return [];
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

    if (index < 0) {
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

    if (userTickets.length > 0) {
      const deletedResult = userTickets.map(
        /**
         * @param {Ticket} ticket
         */
        (ticket) => {
          const index = this[tickets].findIndex(
            /**
             * @param {Ticket} dbTicket
             */
            (dbTicket) => dbTicket.id === ticket.id
          );

          if (index > -1) {
            this[tickets].splice(index, 1);
            return true;
          }
        }
      );

      writeFile(this[tickets]);
      return deletedResult;
    } else return [false];
  }

  /**
   * find winners
   * @param {number} winnerCount
   * @returns {Ticket[]}
   */
  draw(winnerCount) {
    const arrayLength =
      this[tickets].length > +winnerCount ? +winnerCount : this[tickets].length;

    const winnerIndexes = new Array(arrayLength);

    let winnerIndex = 0;
    while (winnerIndex < winnerIndexes.length) {
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
