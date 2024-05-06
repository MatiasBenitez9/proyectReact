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
        <button className="button-39" role="button" onClick={handleDecrease}>-</button>
        <input placeholder="Enter your text..." className="input" type="number" value={quantity}></input>
        <button className="button-39" role="button" onClick={handleIncrease}>+</button>
        <button  type="button"  onClick={handleAdd}>Agregar al Carrito</button>
    </div>
    );
};