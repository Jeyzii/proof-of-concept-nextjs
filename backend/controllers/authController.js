const User = require('../models/User');

exports.login = async (req, res) => {
  const { email, phone } = req.body;
  if (!email || !phone) return res.status(400).json({ msg: 'Email and phone required' });

  let user = await User.findOne({ email, phone });
  if (!user) user = await User.create({ email, phone });

  res.json({ userId: user._id, email: user.email, phone: user.phone });
};
