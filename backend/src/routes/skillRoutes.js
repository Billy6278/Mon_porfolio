const express = require('express');
const router = express.Router();

router.use((req, res) => {
  res.status(501).json({ error: 'Skill endpoints removed (DB-free backend)' });
});

module.exports = router;
