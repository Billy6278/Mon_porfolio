const express = require('express');
const router = express.Router();

router.use((req, res) => {
  res.status(501).json({ error: 'Public endpoints removed (DB-free backend)' });
});

module.exports = router;
