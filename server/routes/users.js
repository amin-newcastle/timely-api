const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all users' });
});
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Show user ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new user' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Update user ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete user ${req.params.id}` });
});

module.exports = router;
