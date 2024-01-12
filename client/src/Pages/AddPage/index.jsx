import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ServicesSchema = Yup.object().shape({
  image: Yup.string().required("bos qoyma"),

  title: Yup.string().required("bos qoyma"),

  description: Yup.string().required("bos qoyma"),
});

const AddPage = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const AddProduct = async (data) => {
    const response = await axios.post("http://localhost:4000/products/",data);
    console.log(response);
  };
  const [product, setProduct] = useState("");
  async function axiosData() {
    const response = await axios.get("http://localhost:4000/products/");
    setProduct(response.data);
  }
  useEffect(() => {
    axiosData();
  }, []);

 const deleteProduct = async (id) => {
    const response = await axios.delete(`http://localhost:4000/products/${id}`);
    console.log(response);
    axiosData()
}
  return (
    <main className="addPage">
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <div className="addInputs">
        <Formik
          validationSchema={ServicesSchema}
          initialValues={{
            image: "",
            title: "",
            description: "",
          }}
          onSubmit={(values) => AddProduct(values)} 
        >
          <Form>
            <Field
              id="image"
              name="image"
              placeholder="Your image URL here... "
            />
            <ErrorMessage name="image" />
            <Field id="title" name="title" placeholder="Doe" />
            <ErrorMessage name="title" />
            <Field id="description" name="description" placeholder="Doe" />
            <ErrorMessage name="description" />
            <button type="submit">
              Add Product
            </button>
          </Form>
        </Formik>
        <div className="cards"></div>
      </div>
      <div className="productTable">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {product &&
              product.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td className="productImg">
                    <img src={item.image} />
                  </td>
                  <td className="productTitle">
                    <p>{item.title}</p>
                  </td>
                  <td className="productDesc">{item.description}</td>
                  <button onClick={()=>deleteProduct(item._id)}>X</button>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AddPage;
