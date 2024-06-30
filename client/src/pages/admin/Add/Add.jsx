import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import { Formik } from 'formik';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import MainContext from "../../../context/context";
import "./Add.scss";

const baseURL = 'http://localhost:4500/api/books/';

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
          initialValues={{ author: '', category: '', desc: '', price: '', image: '', title: '',}}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            formData.append('id', uuidv4());
            formData.append('title', values.title);
            formData.append('image', values.image); 
            formData.append('desc', values.desc);
            formData.append('price', values.price);
            formData.append('category', values.category);
            formData.append('author', values.author);
           

            axios.post(baseURL, formData)
              .then((res) => {
                setData([...data, res.data]);
                resetForm();
              })
              .catch((error) => {
                console.error("There was an error adding the product!", error);
              })
              .finally(() => {
                setSubmitting(false);
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
            setFieldValue
          }) => (
            <form className='add container p-5 gap-3 d-flex flex-column w-50  rounded-3 mb-4 ' onSubmit={handleSubmit}>
              <label htmlFor="author" className="form-label">Author name</label>
              <input className='p-2'
                type="text"
                name="author"
                placeholder="Enter Author name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
                
              />
              {errors.author && touched.author && errors.author}

              <label htmlFor="category" className="form-label">Product category</label>
              <input className='p-2'
                type="text"
                name="category"
                placeholder="Enter category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              {errors.category && touched.category && errors.category}

              <label htmlFor="desc" className="form-label">Product Description</label>
              <input className='p-2'
                type="text"
                name="desc"
                placeholder="Enter description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desc}
              />
              {errors.desc && touched.desc && errors.desc}

              <label htmlFor="price" className="form-label">Product Price</label>
              <input className='p-2'
                type="number"
                name="price"
                placeholder="Enter price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
              {errors.price && touched.price && errors.price}

              <label htmlFor="image" className="form-label">Product Image</label>
              <input 
                type="file"
                name="image"
                placeholder="Upload Image"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
              />
              {errors.image && touched.image && errors.image}

              <div className='add_button d-flex justify-content-center align-items-center'>
                <button type="submit" className="sbmt" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Add;