/* eslint-disable react/prop-types */
import {createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({children}) => {
    const [items, setItems] = useState([{ chistes: true, id: 1}]);

    const clear = ( )  => setItems({ });

    const removeItem = (id) => {
        const filtered = items.filter((item) => item.id !== id);
        setItems(filtered);
    };

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <CartContext.Provider value={{addItem, clear, items, removeItem}}>
            {children}
        </CartContext.Provider>
    );

};