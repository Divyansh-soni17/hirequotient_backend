import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/addUser", addUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.get("/getUsers", getUsers);

export default router;
