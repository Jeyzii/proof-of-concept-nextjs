const router = require('express').Router();
const { getBookings, getBookingById, fetchServiceM8Bookings } = require('../controllers/bookingController');

router.get('/', getBookings);
router.get('/:id', getBookingById);
router.get('/servicem8/list', fetchServiceM8Bookings);

module.exports = router;
