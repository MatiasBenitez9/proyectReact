import { useEffect,useState } from "react";

import Container from 'react-bootstrap/Container';

import data from "../data/products.json";

export const ItemDetailContainer = ( ) =>{
    const [product, setProduct] = useState( [ null] );

    useEffect(() => { 
        const get = new Promise((resolve) => { 
            setTimeout( ( ) => resolve(data)); //simulate a delay for loading the data
        });
        get.then((data) => {
            setProduct(data[0]);
        });
    },  []); 

    if (!product)  return <div>Cargando...</div>;

    return( 
    <Container className="mt-4">
        <h1>{product.name}</h1>
        <img src={product.img} alt="s"/>
    </Container>
    );
};