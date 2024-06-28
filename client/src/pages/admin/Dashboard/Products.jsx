import React, { useContext } from 'react'
import "./Products.scss"
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import MainContext from "../../../context/context"
const Products = () => {
  const {data,setData}=useContext(MainContext)
  function deleteItem(id){

    axios.delete().then((res)=>{
      setData([...data.filter((item)=>item._id!= id)])
    })
    }
  return (
    <div className="product">
    <Helmet>
      <title>
    Products
      </title>
    </Helmet>
<div className='container'>
    <div className="row">
    <table class="table table-sm table table-hover table-dark table-striped-columns">
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td><button onClick={()=>{deleteItem(item._id)}} className='btn btn-danger'>Delete</button></td>
    </tr>
  
   
  </tbody>
</table>
    </div>
      
    </div>
    </div>
    
  )
}

export default Products
