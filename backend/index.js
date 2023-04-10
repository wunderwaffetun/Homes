import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import cors from "cors";
import { db } from "./config/db.js";
import * as mongoose from "mongoose";
import { authRouter } from "./routers/auth.router.js";
import { userRouter } from "./routers/user.router.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //not use, need for handle form's action
app.use(bodyParser.json());
app.use("/", authRouter);
app.use("/", userRouter);

const start = async () => {
  try {
    console.log(db.url);
    await mongoose.connect(db.url);
    app.listen(PORT, () => {
      console.log("start server " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
