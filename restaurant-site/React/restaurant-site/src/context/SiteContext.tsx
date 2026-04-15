import {createContext, useState} from 'react';
import type {CartData} from "../utilities/cart_data_type.ts";

type CartDataContext = {
    cartData: CartData[]
    setCartData : React.Dispatch<React.SetStateAction<CartData[]>>
}

export const SiteContext = createContext<CartDataContext | undefined>(undefined);
export const SiteContextProvider = ({children}:{children: React.ReactNode}) =>{
    const [cartData, setCartData] = useState<CartData[]>([]);
    return(
        <SiteContext.Provider value={{cartData, setCartData}}>
            {children}
        </SiteContext.Provider>
    )
}