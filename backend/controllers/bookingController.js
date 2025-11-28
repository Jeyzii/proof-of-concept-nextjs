const Booking = require('../models/Booking');
const axios = require('axios');

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.query.userId });
    res.json(bookings);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Example ServiceM8 integration
exports.fetchServiceM8Bookings = async (req, res) => {
  try {
    const response = await axios.get('https://api.servicem8.com/api_1.0/allocationwindow.json', {
      headers: { Authorization: `Bearer ${process.env.SERVICEM8_TOKEN}` }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).send('ServiceM8 API error');
  }
};

exports.getBookingById = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ msg: 'Booking not found' });
  res.json(booking);
};
