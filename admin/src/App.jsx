import React,{useContext} from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Orders from './pages/Orders'
import Lists from './pages/Lists'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { adminDataContext } from './context/AdminContext'
import { toast } from 'react-toastify';

function App() {
    let { adminData } = useContext(adminDataContext)
    return (
        <>
        <ToastContainer />
            {!adminData ? <Login /> : <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/lists" element={<Lists />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </>
            }
        </>
    )
}
export default App