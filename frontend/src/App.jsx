import React, { useContext } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nav from "./component/Nav";
import { userDataContext } from "./context/UserContext";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import PlaceOrder from "./pages/PlaceOrder";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Ai from "./component/Ai";
import Chatbot from "./component/Chatbot";

function App() {
  const { userData } = useContext(userDataContext);
  const location = useLocation();

  return (
    <>
      <ToastContainer />
      {userData && <Nav />}
      <Routes>
        <Route
          path="/login"
          element={
            userData ? <Navigate to={location.state?.from || "/"} /> : <Login />
          }
        />
        <Route
          path="/signup"
          element={
            userData ? <Navigate to={location.state?.from || "/"} /> : <Registration />
          }
        />
        <Route
          path="/"
          element={userData ? <Home /> : <Navigate to="/login" state={{ from: location.pathname }} />}
        />
        <Route
          path="/about"
          element={userData ? <About /> : <Navigate to="/login" state={{ from: location.pathname }} />}
        />
        <Route
          path="/collections"
          element={userData ? <Collections /> : <Navigate to="/login" state={{ from: location.pathname }} />}
        />
        <Route
          path="/product"
          element={userData ? <Product /> : <Navigate to="/login" state={{ from: location.pathname }} />}
        />
        <Route
          path="/contact"
          element={userData ? <Contact /> : <Navigate to="/login" state={{ from: location.pathname }} />}
        />
        <Route
          path="/productdetail/:productId"
          element={userData ? <ProductDetail /> : <Navigate to="/login" state={{ from: location.pathname }} />}
        />
        <Route
          path="/cart"
          element={userData ? <Cart /> : <Navigate to="/login" state={{ from: location.pathname }} />}
        />
        <Route
          path="/placeorder"
          element={userData ? <PlaceOrder /> : <Navigate to="/login" state={{ from: location.pathname }} />}
        />
        <Route
          path="/order"
          element={userData ? <Order /> : <Navigate to="/login" state={{ from: location.pathname }} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Chatbot />
      <Ai />
    </>
  );
}

export default App;
