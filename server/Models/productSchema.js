import mongoose from "mongoose";
const { Schema } = mongoose

const ServicesSchema = new Schema({
    image: String,
    title: String,
    description: String,
  });


export const Service  = mongoose.model("nitro", ServicesSchema)