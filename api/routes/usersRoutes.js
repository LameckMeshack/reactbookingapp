import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const usersRouter = express.Router();
usersRouter.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello you have been logged in");
});

usersRouter.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello you have been logged in can delete your account");
});

usersRouter.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello you have been loggadmmined in can delete your account");
});

//UPDATE
usersRouter.put("/:id", verifyUser, updateUser);

//DELETE
usersRouter.delete("/:id", verifyUser, deleteUser);

//GET
usersRouter.get("/:id", verifyUser, getUser);

//GET ALL
usersRouter.get("/", verifyAdmin, getUsers);

export default usersRouter;
