const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.servicem8.com/api_1.0/company.json',
      {
        auth: {
          username: process.env.SERVICEM8_TOKEN,
          password: ''
        }
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
});

module.exports = router;
