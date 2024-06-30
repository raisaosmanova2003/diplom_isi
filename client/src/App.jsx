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
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("false");
  const router = createBrowserRouter(ROUTES);
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
 
  useEffect(() => {
    axios.get('http://localhost:4500/api/books/').then((res) => {
      setData([...res.data]);
      setOrginal(res.data);
    });
  }, []);
  
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToBasket(item, quantity = 1) {
    setBasket((prevBasket) => {
      const basketItem = prevBasket.find((x) => x.item._id === item._id);
      if (!basketItem) {
        let newItem = {
          item: item,
          count: quantity,
          totalPrice: item.price * quantity,
        };
        return [...prevBasket, newItem];
      } else {
        basketItem.count += quantity;
        basketItem.totalPrice = basketItem.count * basketItem.item.price;
        return [...prevBasket];
      }
    });
  }
  const deleteFromBasket = (id, removeAll = false) => {
    setBasket((prevBasket) => {
      if (removeAll) {
       
        return prevBasket.filter((basketItem) => basketItem.item._id !== id);
      } else {
       
        const newBasket = prevBasket.reduce((acc, basketItem) => {
          if (basketItem.item._id === id) {
            if (basketItem.count > 1) {
              acc.push({
                ...basketItem,
                count: basketItem.count - 1,
                totalPrice: (basketItem.count - 1) * basketItem.item.price,
              });
            }
          } else {
            acc.push(basketItem);
          }
          return acc;
        }, []);
        return newBasket;
      }
    });
  };
  
  const [wishItems,setWishItems]=useState(localStorage.getItem('wishItems')?JSON.parse(localStorage.getItem('wishItems')):[])
  const addToWishlist = (item) => {
    const target = wishItems.find((x) => x.item._id === item._id);
    let newWishItems;
  
    if (!target) {
      const newItem = { item: item };
      newWishItems = [...wishItems, newItem];
      alert('Added To Wishlist');
    } else {
      newWishItems = wishItems.filter((x) => x.item._id !== item._id);
      alert('Removed From Wishlist');
    }
  
    setWishItems(newWishItems);
    localStorage.setItem('wishItems', JSON.stringify(newWishItems));
  };
  
  
  const contextdata = {
    data,
    setBasket,
    basket,
    setData,
    addToBasket,
    deleteFromBasket,
    addToWishlist,
    wishItems,
    loading,
     setLoading,
     error, 
     setError,
   
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