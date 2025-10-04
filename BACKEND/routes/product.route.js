
import express from "express";
import mongoose from 'mongoose';
import Product  from '../models/Product.model.js'
import { createProduct, deleteProduct, getProducts, updatedProduct } from "../controller/product.controller.js";


const router = express.Router();


router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct)



export default router;

