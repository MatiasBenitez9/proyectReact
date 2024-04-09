import { useEffect,useState } from "react";

import Container from 'react-bootstrap/Container';
import {useParams} from "react-router-dom";

import data from "../data/products.json";

export const ItemDetailContainer = ( ) =>{
    const [product, setProduct] = useState( [ null] );

    const {id} = useParams();

    useEffect(() => { 
        const get = new Promise((resolve) => { 
            setTimeout( ( ) => resolve(data)); //simulate a delay for loading the data
        });

        
        get.then((data) => {
            const filter = data.find((p) => p.id === id);
            setProduct(filter);
            // setProduct(data[0]);
        });
    },  [id]); 

    if (!product)  return <div>Cargando...</div>;

    return( 
    <Container className="mt-4">
        <h1>{product.name}</h1>
        <img src={product.img} alt="s"/>
    </Container>
    );
};