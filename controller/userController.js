import User from "../models/User.js";

export const addUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    if (!name || !email || !role) {
      return res.status(400).json({ error: "Please fill the fields." });
    }
    const newUser = await User.create({ name, email, role });
    return res.json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, role } = req.body;

    if (!name || !role) {
      return res.status(400).json({ error: "Please provide name and role." });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, { name, role });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.json({ message: "Internal server error", error });
  }
};
