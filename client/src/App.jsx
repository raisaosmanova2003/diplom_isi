
import { useEffect, useState } from "react";
import './App.css'
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes"
import axios from "axios";
import MainContext from './context/context';

function App() {
  const [data, setData] = useState([]);
  const [orginal, setOrginal] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const router = createBrowserRouter(ROUTES);
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
 
  useEffect(() => {
    axios.get().then((res) => {
      setData([...res.data]);
      setOrginal(res.data);
    });
  }, []);
  
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);
    if (!basketItem) {
      let target = data.find((x) => x._id == id);
      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count += 1,
        basketItem.totalPrice += basketItem.price,
        setBasket([...basket]);
    }
  }
  function deleteFrombasket(id) {
    let target = basket.find((x) => x._id == id);
    console.log(target);
    if (target.count > 1) {
      target.count -= 1, 
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x._id != id)]);
    }
  }

  function addToWishlist(favorities) {
    const target = wishlist.find((x) => x._id == favorities._id);
    if (target) {
      alert("elave olunub");
    } else {
      setWishlist([...wishlist, favorities]);
      alert("elave olundu");
    }
  }
  function deleteFromWishlist(product) {
    const target = wishlist.find((x) => x._id == product._id);
    wishlist.splice(wishlist.indexOf(target), 1);
    setWishlist([...wishlist]);
  }
    

  const contextdata = {
    data,
    setBasket,
    basket,
    setData,
    addToBasket,
    deleteFrombasket,
    addToWishlist,
    deleteFromWishlist,
    // searchData,
    // sortingData,
  };
  return (
    <MainContext.Provider value={contextdata}>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </MainContext.Provider>
  )

}
export default App
