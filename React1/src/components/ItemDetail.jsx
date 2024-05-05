import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ItemListContainer from './ItemListContainer'; // Importa ItemListContainer si no lo has hecho

const ItemDetail = () => {
    const [cartItemCount, setCartItemCount] = useState(0);
    const [showItemList, setShowItemList] = useState(true);
    const history = useHistory();

    const handleAddToCart = (count) => {
        setCartItemCount(count);
        setShowItemList(false); // Ocultar ItemListContainer cuando se agrega un item
    };

    const handleFinishPurchase = () => {
        // Aquí puedes agregar cualquier lógica adicional antes de navegar a '/cart'
        history.push('/cart');
    };

    return (
        <div>
            {/* Contenido del detalle del item */}
            <p>Cantidad en el carrito: {cartItemCount}</p>
            <button onClick={handleFinishPurchase}>Terminar mi compra</button>
            {showItemList && <ItemListContainer />}
            <ItemListContainer onAdd={handleAddToCart} />
        </div>
    );
};

export default ItemDetail;
