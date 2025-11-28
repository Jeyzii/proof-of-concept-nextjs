require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const clientsRoute = require('./routes/clients');
const jobsRoute = require('./routes/jobs');


const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
connectDB();
// app.use(cors());


app.use('/api/clients', clientsRoute);
app.use('/api/jobs', jobsRoute);
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/messages', require('./routes/messages'));
app.use('/api/clients', require('./routes/clients'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
