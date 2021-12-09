const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  create,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add new flight' });
}

function create(req, res) {
  let flight = new Flight(req.body);
  console.log(flight);
  flight.save(function (err) {
    console.log(err);
    if (err) return res.redirect('./flights/new');
    res.redirect('./flights');
  });
}
