import React, { createContext } from "react";
export const authDataContext=createContext()
function AuthContext({children}){
    let serverUrl="https://e-commerce-fullstack-ai-backend.onrender.com"
    let value={
        serverUrl
    }
    return(
        <div className="text-[px] text-[red]">
           <authDataContext.Provider value={value}>
            {children}
           </authDataContext.Provider>
        </div>
    )
}
export default AuthContext
