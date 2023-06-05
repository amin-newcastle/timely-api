const User = require('../models/User.model');

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Private
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (e) {
    res.status(400).json({ success: false, msg: e.message });
  }
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Private
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: user });
  } catch (e) {
    res.status(400).json({ success: false, msg: e.message });
  }
};

// @desc    Create new user
// @route   POST /api/v1/users/
// @access  Private
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (e) {
    res.status(400).json({ success: false, msg: e.message });
  }
};

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = (req, res) => {
  res.status(200).json({ success: true, msg: `Update user ${req.params.id}` });
};

// @desc    Delete user
// @route   DELETE /api/v1/users/:id
// @access  Private
exports.deleteUser = (req, res) => {
  res.status(200).json({ success: true, msg: `Delete user ${req.params.id}` });
};
