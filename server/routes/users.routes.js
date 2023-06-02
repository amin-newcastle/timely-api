const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../server/controllers/users.controller');

const router = express.Router();

// prettier-ignore
router
    .route('/')
    .get(getUsers)
    .post(createUser);

// prettier-ignore
router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
