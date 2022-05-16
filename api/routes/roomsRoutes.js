import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const roomsRouter = express.Router();

//CREATE
roomsRouter.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
roomsRouter.put("/availability/:id", updateRoomAvailability);
roomsRouter.put("/:id", verifyAdmin, updateRoom);
//DELETE
roomsRouter.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

roomsRouter.get("/:id", getRoom);
//GET ALL

export default roomsRouter;
