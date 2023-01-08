import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

export const ContextProvider = ({children}) => {

    const value = {
        example: 'jello'
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}