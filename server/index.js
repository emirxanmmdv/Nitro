import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import { productRouter } from "./Routers/productRouter.js";
dotenv.config()
const port = 4000;
const app = express()
app.use(cors())
app.use(express.json())
const PASSWORD = process.env.PASSWORD;
const URL = process.env.URL.replace("<password>", PASSWORD);
const PORT = process.env.PORT;
app.use("/products", productRouter)
mongoose.connect(URL).then(() => console.log("WELCOME!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
