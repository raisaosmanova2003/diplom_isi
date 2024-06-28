import React, { useContext } from 'react'
import { Helmet } from "react-helmet";
import { Formik } from 'formik';
import axios from 'axios';
import MainContext from "../../../context/context"
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
       initialValues={{ name: '', category: '', desc: '' , price: '', image: ''  }}
    //    validate={values => {
    //      const errors = {};
    //      if (!values.name) {
    //        errors.name = 'Required';
    //      } else if (
    //        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //      ) {
    //        errors.email = 'Invalid email address';
    //      }
    //      return errors;
    //    }}
       onSubmit={(values, { setSubmitting }) => {
        //  setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        //    setSubmitting(false);
        //  }, 400);
        axios
            .post("url", {
              name: values.name,
              title: values.category,
              desc: values.desc,
              price: values.price,
              image: values.image,
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
         /* and other goodies */
       }) => (
         <form className='add container p-5 gap-3 d-flex flex-column w-50  rounded-3 mb-4 ' onSubmit={handleSubmit}>
         <label htmlFor="name" className="form-label ">
              Product Name
            </label>
           <input
             type="text"
             name="name"
             placeholder="Enter Name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}
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
