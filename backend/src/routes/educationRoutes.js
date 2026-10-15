const express = require('express');
const router = express.Router();

router.use((req, res) => {
  res.status(501).json({ error: 'Education endpoints removed (DB-free backend)' });
});

module.exports = router;
