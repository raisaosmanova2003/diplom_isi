import SiteRoot from '../../src/pages/site/SiteRoot'
import Home from '../../src/pages/site/Home/Home'
import Basket from '../pages/site/Basket/Basket';
import Detail from '../pages/site/Detail/Detail'
import Wishlist from '../pages/site/Wishlist/Wishlist';
import Bookstore from '../pages/site/Bookstore/Bookstore';
import Contact from '../pages/site/Contact/Contact';
import About from '../pages/site/About/About';
import Blog from '../pages/site/Blog/Blog';
import Faq from '../pages/site/Faq/Faq';
import AdminRoot from '../pages/admin/AdminRoot';
import Products from '../pages/admin/Dashboard/Products';
import Add from '../pages/admin/Add/Add';
import Login from '../pages/site/Login/Login';
import Signup from '../pages/site/Signup/Signup';
import Error from '../pages/Error/Error';





const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
              path:"/basket",
              element:<Basket/>
            },
            {
              path:"/detail/:id",
              element:<Detail/>
            }, {
                path: "/bookstore",
                element: <Bookstore/>
            }, {
                path: "/contact",
                element: <Contact />
            } ,{
                path: "/about",
                element: <About />
            },{
                path: "/blog",
                element: <Blog />
            },{
                path: "/wishlist",
                element: <Wishlist />
            },{
                path: "/faq",
                element: <Faq />
            },{
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Signup />
            },
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:"",
                element:<Products/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
    ,{
        path: "*",
        element: <Error />
    }
]
export default ROUTES;