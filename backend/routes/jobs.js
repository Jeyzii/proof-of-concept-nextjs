const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const servicem8 = require('@api/servicem8');
const router = express.Router();

servicem8.auth(process.env.SERVICEM8_API_KEY);

router.get('/', async (req, res) => {
  try {
    const { data } = await servicem8.listJobs();
    res.json(data);
  } catch (err) {
    console.error('ServiceM8 SDK Error:', err);
    res.status(500).json({ error: 'Failed to fetch jobs', details: err.data || err.message });
  }
});

router.get('/:uuid', async (req, res) => {
  const { uuid } = req.params;

  try {
    const { data } = await servicem8.getJob({ uuid });
    res.json(data);
  } catch (err) {
    console.error('ServiceM8 SDK Error:', err);
    res.status(err.status || 500).json({ error: 'Failed to fetch job', details: err.data || err.message });
  }
});

module.exports = router;
