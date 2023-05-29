import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import NewUser from "./Pages/Newuser/NewUser";
import Products from './Pages/Products/Products'
import ChangeProduct from "./Pages/Change product/ChangeProduct";


let Routes = [
     { path: '/', element: <Home></Home> },
     { path: '/users', element: <Users></Users> },
     { path: '/new-user', element: <NewUser></NewUser> },
     { path: '/products', element: <Products></Products> },
     { path: '/products/:id', element: <ChangeProduct></ChangeProduct> },
]

export { Routes }