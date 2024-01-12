import { Service } from "../Models/productSchema.js";

export const GetAllProducts = async (req, res) => {
  const data = await Service.find({});
  res.send(data);
};

export const PostProduct = async (req, res) => {
  try {
    const newProduct = new Service({ ...req.body });
    await newProduct.save()
    res.status(200).json("product added successfully!")
  } catch (error) {
    res.status(500).json("couldn't add product!")
  }
};

export const DeleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const deleteProduct = await Service.findByIdAndDelete(id)
        res.send(deleteProduct)
   
    } catch (error) {
        res.status(500).json("couldn't delete product!")
    }
}
