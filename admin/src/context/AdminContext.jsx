import React from "react";
import axios from "axios";
import { createContext } from "react";
import { useContext, useState ,useEffect} from "react";
import { authDataContext } from "./AuthContext";
export const adminDataContext = createContext()
function AdminContext({ children }) {
    let [adminData, setAdminData] = useState(null)
    let { serverUrl } = useContext(authDataContext)

    const getAdmin = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/user/getadmin", { withCredentials: true })
            setAdminData(result.data)
            console.log(result.data)
        }
        catch (error) {
            setAdminData(null)
            console.log(error)
        }
    }
    useEffect(()=>{
        getAdmin()
    },[])
    let value = {
        adminData,setAdminData,getAdmin
    }
    return (
        <div>
            <adminDataContext.Provider value={value}>
                {children}
            </adminDataContext.Provider>
        </div>
    )
}
export default AdminContext