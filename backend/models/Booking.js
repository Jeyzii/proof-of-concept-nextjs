const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookingId: String,
  details: String,
  attachments: [String]
});

module.exports = mongoose.model('Booking', BookingSchema);
