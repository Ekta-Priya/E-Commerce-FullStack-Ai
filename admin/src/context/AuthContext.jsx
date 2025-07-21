import React, { createContext } from "react";
export const authDataContext=createContext()
function AuthContext({children}){
    let serverUrl="http://localhost:8000"
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