import React, { useContext } from 'react';
import './Products.scss';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import MainContext from '../../../context/context';
const baseURL = 'http://localhost:4500/api/books/';

const Products = () => {

  const { data, setData } = useContext(MainContext);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };
  function deleteItem(id) {
    axios.delete(`${baseURL}${id}`).then((res) => {
      setData([...data.filter((item) => item._id !== id)]);
    });
  }

  return (
    <div className="product">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div className="container">
        <div className="row">
        <h2 className='add_h1'>All Products</h2>
          <table className="table table-sm table-hover table-dark table-striped-columns">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td><img src={`http://localhost:4500/public/images/${item.image}`} alt="" width="100px" height="100px" /></td>
                  <td>{item.bookname}</td>
                  <td>{item.category}</td>
                  <td>{truncateText(item.title, 40)}</td>
                  <td>{item.price}</td>
                  <td><button onClick={() => { deleteItem(item._id) }} className="btn btn-danger">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
