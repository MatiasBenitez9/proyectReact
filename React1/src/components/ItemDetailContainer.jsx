/* eslint-disable no-unused-vars */
import { useEffect,useState } from "react";

import {useParams} from "react-router-dom";

import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = ( ) =>{
    const [product, setProduct] = useState( [ null] );

    const {id} = useParams();

    useEffect(() => { 
        const db = getFirestore();

        const refDoc = doc(db, "items",id);
    
        getDoc(refDoc).then((snapshot) => {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        });
    },  [id]); 

    if (!product.id)  
      return <div className="loader">
    <div className="justify-content-center jimu-primary-loading"></div>
  </div>;

    return <ItemDetail product={product} />;
};