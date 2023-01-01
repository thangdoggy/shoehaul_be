const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

// @desc    Save cart
// @route   PUT /api/users/cart
// @access  Private
const saveCart = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if(!user)
  {
    res.status(400)
    throw new Error('Can not found User')
    return
  }
  if (!req.body.cartItems || req.body.cartItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const {cartItems}= req.body;
    user.cartItems= cartItems;
    const updatedUser = await user.save();
    res.status(201).json(updatedUser.cartItems)
  }
})

module.exports = {
    saveCart
  };
