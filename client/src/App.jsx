
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
    axios.get('http://localhost:4500/api/books/').then((res) => {
      setData([...res.data]);
      setOrginal(res.data);
    });
  }, []);
  
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
 
  // function addToBasket(item) {
  //   let basketItem = basket.find((x) => x.item._id === item._id);
  //   if (!basketItem) {
  //     let newItem = {
  //       item: item,
  //       count: 1,
  //       totalPrice: item.price,
  //     };
  //     setBasket([...basket, newItem]);
  //   } else {
  //     basketItem.count += 1;
  //     basketItem.totalPrice = basketItem.count * basketItem.item.price; // Corrected this line
  //     setBasket([...basket]);
  //   }
  // }
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
        // Remove the entire item from the basket
        return prevBasket.filter((basketItem) => basketItem.item._id !== id);
      } else {
        // Decrease the count by one
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
  
// ??????
  // function addToWishlist(item) {
  //   const target = wishlist.find((x) => x._id == item._id);
  //   if (target) {
  //     alert("Item is already in the wishlist");
  //   } else {
  //     setWishlist([...wishlist, item]);
  //     alert("Item added to the wishlist");
  //   }
  // }
  
  // function deleteFromWishlist(product) {
  //   const target = wishlist.find((x) => x._id == product._id);
  //   wishlist.splice(wishlist.indexOf(target), 1);
  //   setWishlist([...wishlist]);
  // }
    // ?????

  // function addToWishlist(item) {
  //   const target = wishlist.find((x) => x._id === item._id);
  //   if (target) {
  //     alert("Item already in the wishlist");
  //   } else {
  //     setWishlist((prevWishlist) => [...prevWishlist, item]);
  //     alert("Item added to the wishlist");
  //   }
  // }

  // function deleteFromWishlist(item) {
  //   setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== item));
  //   alert("Item removed from the wishlist");
  // }
  function addToWishlist(item) {
    const target = wishlist.find((x) => x._id === item._id);
    if (target) {
      alert("Item already in the wishlist");
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, item]);
      alert("Item added to the wishlist");
    }
  }

  function deleteFromWishlist(itemId) {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== itemId));
    alert("Item removed from the wishlist");
  }
  const contextdata = {
    data,
    setBasket,
    basket,
    setData,
    addToBasket,
    deleteFromBasket,
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
