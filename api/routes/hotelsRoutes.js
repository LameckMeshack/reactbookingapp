import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotelsRouter = express.Router();
//CREATE
hotelsRouter.post("/", verifyAdmin, createHotel);

//UPDATE
hotelsRouter.put("/:id", verifyAdmin, updateHotel);
//DELETE
hotelsRouter.delete("/:id", verifyAdmin, deleteHotel);
//GET

hotelsRouter.get("/find/:id", getHotel);
//GET ALL

hotelsRouter.get("/", getHotels);
hotelsRouter.get("/countByCity", countByCity);
hotelsRouter.get("/countByType", countByType);
hotelsRouter.get("/room/:id", getHotelRooms);

export default hotelsRouter;
