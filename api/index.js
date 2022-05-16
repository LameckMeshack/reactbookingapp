import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import usersRouter from "./routes/usersRoutes.js";
import hotelsRouter from "./routes/hotelsRoutes.js";
import roomsRouter from "./routes/roomsRoutes.js";

const app = express();
dotenv.config();

//connecting to mongo database
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

//trying to reconnect automatically
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

//middleware
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// starting express server
// const PORT = process.env.PORT || 8800;
const PORT = 5000;
app.listen(PORT, () => {
  connect();
  console.log(`Running on port : ${PORT}`);
});
