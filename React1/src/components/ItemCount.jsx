/* eslint-disable react/prop-types */
import { useState } from "react";

export const ItemCount  = ( { onAdd, stock } )  =>  {
    const [ quantity, setQuantity ]  = useState(1);

    const handleDecrease = (  ) => {
        if ( quantity  > 1 ) setQuantity( ( prev )  =>  prev  - 1 );
    };

    const handleIncrease  =  (  )  =>  {
        if ( stock  > quantity ) setQuantity( ( prev )  =>  prev  + 1 );
    };

    const handleAdd  =  (  )  =>  {
        onAdd(quantity);
        setQuantity(1);
    };    

    return(
    <div className="">
        <div style={{padding:  "0 10px", color: "green", fontWeight: 900}}  onClick={handleDecrease}>-</div>
        <input type="number"  value={quantity}/>
        <div style={{padding:  "0 10px", color: "green", fontWeight: 900}}  onClick={handleIncrease}>+</div>
        <button  type="button"  onClick={handleAdd}>Agregar al Carrito</button>
    </div>
    );
};