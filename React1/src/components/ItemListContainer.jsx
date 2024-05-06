/* eslint-disable no-unused-vars */
import { useEffect,useState } from "react";

import Container from 'react-bootstrap/Container';
import {ItemList} from "./ItemList";
import {useParams} from "react-router-dom";

import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
  } from "firebase/firestore";
  

import data from "../data/products.json";

export const ItemListContainer = ( ) =>{
    const [products, setProducts] = useState( [ ] );

    const { id } = useParams();

    useEffect(() => { 
        const db = getFirestore( );

        let refCollection;

        if( !id ){
            refCollection = collection(db, "items");
        } else{
            refCollection = query(
                collection(db,"items"), 
                where("categoryId", "==", id)
            );
        }
        
        getDocs(refCollection).then((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => {
                    return {  id: doc.id, ...doc.data()  };
                })
              );
        });
    },  [id]);

    return( 
        <Container className="mt-4">
            <ItemList products={products}/>
        </Container>
    );
};

   
