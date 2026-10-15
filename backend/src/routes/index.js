const express = require('express');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'API Portfolio operationnelle (no DB)' });
});

module.exports = router;
