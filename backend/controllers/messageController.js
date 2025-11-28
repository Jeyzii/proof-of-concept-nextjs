const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  const messages = await Message.find({ booking: req.params.bookingId });
  res.json(messages);
};

exports.sendMessage = async (req, res) => {
  const { bookingId, content } = req.body;
  const msg = await Message.create({ booking: bookingId, content });
  res.json(msg);
};
