import React, { useState, useEffect, useContext,createContext } from "react";

export const Context = createContext()


export const GetContext = ({ children }) => {
    const [saveText, setSaveText] = useState(JSON.parse(localStorage.getItem("notes"))||[])
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(saveText))
    },[saveText])
    return (
        <Context.Provider value={{
            saveText, setSaveText
        }}>
            {children}
        </Context.Provider>
    )
    
}

export const useStateContext = () => useContext(Context)