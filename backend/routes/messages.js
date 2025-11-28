const router = require('express').Router();
const { getMessages, sendMessage } = require('../controllers/messageController');

router.get('/:bookingId', getMessages);
router.post('/', sendMessage);

module.exports = router;
