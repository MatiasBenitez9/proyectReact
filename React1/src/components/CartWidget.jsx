import cart from "../assets/imgcarrito.png"

export const CartWidget = () =>{

    return (
        <div id="widget-cart"> 
        <img src={cart} alt="Cart" width={40}/>
        <span>46</span>
        </div>
    );
};