import iconCart from '../images/carrito.jpg';

function CartWidget() {
    return (
        <>
        <div> 
          <p ><a href="" ><img width='50' src={iconCart} /></a> Cantidad: 0</p>
        </div>
        </>
    );
  }
  
  export default CartWidget;