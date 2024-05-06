import Container from 'react-bootstrap/Container';
import { useContext, useState } from 'react';

import { CartContext } from '../contexts/CartContext';
import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";

const initialValues  =  {
    name: " ",
    phone: " ",
    email: " ",
};

export const Cart = () =>  {
    const  [ values,  setValues ]  = useState(initialValues)
    const {clear, items, removeItem } = useContext(CartContext);

    const total = () => items.reduce( ( acc, item )  =>  acc + item.quantity * item.price, 0 );

    const handleChange  =  (ev)  => {
        setValues( ( prev )  =>  {
            return {
                ...prev,
                [ev.target.name]:  ev.target.value,
            };
        });
    };
    const handleSubmit  =  ( )  =>{
        const order  =  {
            buyer: values,
            items: items,
            total: total ( ),
        };

     const db  =  getFirestore();
     const orderCollection  =  collection (db, "orders");

     addDoc(orderCollection, order).then(  (  { id }  )  => {
         if ( id ) {
             alert("Su orden:"+ " " +  id  +" "+  "ha sido realizada con exito!");
          }
     } )
     .finally( (  )  => {
        clear ( );
        setValues(initialValues);
    });
};

    const handleClear = ( id )  =>  clear (id );
    const handleRemove = ( id )  =>  removeItem (id );

    return( 
    <Container className='mt-4'>
    <h1>Productos</h1>
    { items.map( ( i ) => { 
        return (
        <ul key={i.title}>
            <li>Producto: {i.title}</li>
            <li>Cantidad: {i.quantity}</li>
            <li>$ {i.price}</li>
            <button className='btnborrar' onClick={ ( )  => handleRemove( i.id) }>Eliminar</button>
        </ul>
        );
    } ) }

    <div>Total : {total ( ) }</div>
    <button className='btnborrar' onClick={ (handleClear )}>Vaciar todo</button>
   { items?.length  > 0 &&
    <form className="form">
        <div className="input-container">
          <input placeholder="Ingresar Nombre" type="text" value={ values.name } name="name" onChange={handleChange }/>
      </div>
      <div className="input-container">
          <input placeholder="Ingresar Telefono" type="text" value={ values.phone } name="phone"  onChange={handleChange }/>
        </div>
        <div className="input-container">
          <input placeholder="Ingresar Email" type="email" value={ values.email } name="email"  onChange={handleChange }/>
        </div>
         <button className="submit" type="button"  onClick={handleSubmit}>
            ENVIAR
      </button>
   </form>

    }
    </Container>
    );
}; 