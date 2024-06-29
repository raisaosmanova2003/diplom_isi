import React, { useContext } from 'react'
import { Helmet } from "react-helmet";
import { Formik } from 'formik';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import MainContext from "../../../context/context"
const baseURL = 'http://localhost:4500/api/books/';
import "./Add.scss"
const Add = () => {
  const { data, setData } = useContext(MainContext);
  return (
    <section className='add_page'>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div>
      <h1 className='add_h1'>Add product</h1>
      <Formik
       initialValues={{ author: '', category: '', desc: '' , price: '', image: '' ,title:'' }}
  
       onSubmit={(values, { setSubmitting,resetForm }) => {
        const formData = new FormData();
            formData.append('id', uuidv4());
            formData.append('title', values.title);
            formData.append('image', values.image);
            formData.append('desc', values.desc);
            formData.append('price', values.price);
            formData.append('category', values.category);
            formData.append('author', values.author);
        axios
            .post(baseURL, formData,{
              name: values.author,
              title: values.title,
              desc: values.desc,
              price: values.price,
              image: values.image,
              category: values.category
            })
            .then((res) => {
              setData([...data, res.data]);
              resetForm();
            })
            .catch((error) => {
              console.error("There was an error adding the product!", error);
            });
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         
       }) => (
         <form className='add container p-5 gap-3 d-flex flex-column w-50  rounded-3 mb-4 ' onSubmit={handleSubmit}>
         <label htmlFor="name" className="form-label ">
              Author name
            </label>
           <input
             type="text"
             name="author"
             placeholder="Enter Author name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.author}
           />
           {errors.author && touched.author && errors.author}
           <label htmlFor="category" className="form-label ">
              Product category
            </label>
           <input
             type="text"
             name="category"
             placeholder="Enter category"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.category}
           />
           {errors.category && touched.category && errors.category}
           <label htmlFor="desc" className="form-label ">
              Product Description
            </label>
           <input
             type="text"
             name="desc"
             placeholder="Enter description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.desc}
           />
           {errors.desc && touched.desc && errors.desc}
           <label htmlFor="price" className="form-label ">
              Product Price
            </label>
           <input
             type="number"
             name="price"
             placeholder="Enter price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
           <label htmlFor="image" className="form-label ">
              Product Image
            </label>
           <input
             type="text"
             name="image"
             placeholder="Enter Image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}
           <div className='add_btton'>
           <button type="submit" className="sbmt" disabled={isSubmitting}>
             Submit
           </button>
           </div>
           
         </form>
       )}
     </Formik>
      </div>
      
    </section>
  )
}

export default Add
