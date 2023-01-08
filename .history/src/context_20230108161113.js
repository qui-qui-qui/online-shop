import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value] = useReducer(reducer, initialState);

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}