import express from "express"
import { DeleteProduct, GetAllProducts, PostProduct } from "../Controllers/productController.js";
export const productRouter = express.Router();

productRouter.get("/", GetAllProducts)
productRouter.post("/", PostProduct)
productRouter.delete("/:id", DeleteProduct)


