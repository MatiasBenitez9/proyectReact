/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';

import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';



export const ItemDetail = ( { product } )  =>  {
    const {addItem} = useContext(CartContext);

        const add =  (quantity)  =>  {
            addItem(product, quantity);
        };

    return ( 
        <Container className="mt-4">
            <h2>{product.title}</h2>
            <img 
            src={product.imageId} 
            style={{height: 300,width:300}} 
            alt={product.title}
            />
            <p>{product.description}</p>
            <div>{`Stock: ${product.stock}`}</div>
            <div>{`Precio: $ ${product.price}`}</div>
            <ItemCount stock={product.stock} onAdd={add}/>
    </Container>
    );
};