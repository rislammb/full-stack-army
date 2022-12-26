const ticketCollection = require('./tickets');

// ticket selling controllers
exports.sellSingleTicket = (req, res) => {
  const { username, price } = req.body;
  const ticket = ticketCollection.create(username, price);

  res.status(201).json({
    message: 'Ticket created successfully',
    ticket,
  });
};

exports.sellBulkTicket = (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = ticketCollection.createBulk(username, price, quantity);

  res.status(201).json({
    message: 'Ticket created successfully',
    tickets,
  });
};
