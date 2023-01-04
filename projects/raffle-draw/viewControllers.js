const ticketCollection = require('./tickets');

// ticket selling controllers
exports.sellTicket = (req, res) => {
  const { username, price, quantity } = req.body;

  if (username && price) {
    if (isNaN(quantity) || quantity < 2) {
      const ticket = ticketCollection.create(username, price);

      return res.redirect('/tickets/t/' + ticket.id);
    } else {
      const tickets = [];
      for (let i = 0; i < quantity; i++) {
        tickets.push(ticketCollection.create(username, price));
      }

      return res.redirect('/tickets/u/' + username);
    }
  } else res.render('buy');
};

exports.buyTicket = (_req, res) => {
  res.render('buy');
};

// find tickets controlllers
exports.findAll = (_req, res) => {
  const tickets = ticketCollection.find();

  res.render('tickets', { tickets, total: tickets.length });
};

exports.findById = (req, res) => {
  const id = req.params.id;

  const ticket = ticketCollection.findById(id);
  if (!ticket) {
    return res.render('not-found');
  } else {
    return res.render('details', { ticket });
  }
};

exports.findByUsername = (req, res) => {
  const username = req.params.username;

  const tickets = ticketCollection.findByUsername(username);
  if (tickets.length > 0) {
    return res.render('user-tickets', { tickets, total: tickets.length });
  } else return res.render('not-found');
};

// update controllers
exports.updateById = (req, res) => {
  const id = req.params.id;

  const ticket = ticketCollection.updateById(id, req.body);
  if (!ticket) {
    return res.render('not-found');
  } else res.redirect('/tickets/t/' + id);
};

exports.updateByUsername = (req, res) => {
  const username = req.params.username;
  const tickets = ticketCollection.updateBulk(username, req.body);

  if (!tickets) {
    return res.render('not-found');
  } else res.redirect('/tickets/u/' + tickets[0].username);
};

// delete controllers
exports.deleteById = (req, res) => {
  const id = req.params.id;
  const isDeleted = ticketCollection.deleteById(id);

  if (!isDeleted) {
    return res.redirect('/tickets/t/' + id);
  } else res.redirect('/tickets');
};

exports.deleteByUsername = (req, res) => {
  const username = req.params.username;
  ticketCollection.deleteBulk(username);

  res.redirect('/tickets');
};

// draw controller
exports.drawWinners = (req, res) => {
  const validWc = req.query.wc
    ? !isNaN(req.query.wc) && req.query.wc > 0
      ? req.query.wc
      : 3
    : 3;

  const winners = ticketCollection.draw(validWc);
  res.render('draw', { winners });
};
