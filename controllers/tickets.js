const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('tickets/new', { title: 'Add Ticket', flight });
  });
}

function create(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.create(req.body, function (err, ticket) {
      ticket.flight.push(flight._id);
      ticket.save(function () {
        if (err) console.log(err);
        res.redirect(`/flights/${req.params.id}`);
      });
    });
  });
}
