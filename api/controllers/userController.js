import User from "../models/UserModel.js";

// UPDATE
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
// DELETE
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id);
    res.status(200).json("User has been delete");
  } catch (err) {
    next(err);
  }
};

// GET
export const getUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
