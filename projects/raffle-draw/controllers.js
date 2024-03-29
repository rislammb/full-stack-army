const ticketCollection = require('./tickets');

// ticket selling controllers
exports.sellSingleTicket = (req, res) => {
  const { username, price } = req.body;
  if (username && price) {
    const ticket = ticketCollection.create(username, price);
    res.status(201).json({
      message: 'Ticket created successfully',
      ticket,
    });
  } else res.status(400).json({ message: 'Something wrong in your request!' });
};

exports.sellBulkTicket = (req, res) => {
  const { username, price, quantity } = req.body;
  if (username && price && quantity) {
    const tickets = ticketCollection.createBulk(username, price, quantity);

    res.status(201).json({
      message: 'Ticket created successfully',
      tickets,
    });
  } else res.status(400).json({ message: 'Something wrong in your request!' });
};

// find tickets controlllers
exports.findAll = (_req, res) => {
  const tickets = ticketCollection.find();
  res.status(200).json({ tickets, total: tickets.length });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  const ticket = ticketCollection.findById(id);

  if (!ticket) {
    return res.status(404).json({ message: '404 not found!' });
  } else {
    return res.status(200).json(ticket);
  }
};

exports.findByUsername = (req, res) => {
  const username = req.params.username;
  const tickets = ticketCollection.findByUsername(username);

  if (tickets.length > 0) {
    return res.status(200).json({ tickets, total: tickets.length });
  } else res.status(404).json({ message: '404 not found!' });
};

// update controllers
exports.updateById = (req, res) => {
  const id = req.params.id;
  const ticket = ticketCollection.updateById(id, req.body);

  if (!ticket) {
    return res.status(404).json({ message: '404 not found!' });
  } else res.status(200).json(ticket);
};

exports.updateByUsername = (req, res) => {
  const username = req.params.username;
  const tickets = ticketCollection.updateBulk(username, req.body);

  if (!tickets) {
    return res.status(404).json({ message: '404 not found!' });
  } else res.status(200).json({ tickets, total: tickets.length });
};

// delete controllers
exports.deleteById = (req, res) => {
  const id = req.params.id;
  const isDeleted = ticketCollection.deleteById(id);

  if (!isDeleted) {
    return res.status(400).json({ message: 'Delete operation faild!' });
  } else res.status(204).send();
};

exports.deleteByUsername = (req, res) => {
  const username = req.params.username;
  ticketCollection.deleteBulk(username);

  res.status(204).send();
};

// draw controller
exports.drawWinners = (req, res) => {
  const wc = req.query.wc ?? 3;
  const winners = ticketCollection.draw(wc);

  res.status(200).json(winners);
};
