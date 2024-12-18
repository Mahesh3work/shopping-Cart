import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { increaseQuantity,decreaseQuantity, removeFromCart } from "../ShopCart/cartSlice";

function Cart() {

 const {items:cartItems,tempItems,totalPrice} = useSelector(state => state.cart);
 const dispatch = useDispatch();
 const navigate = useNavigate()

 const handleRemoveItem = (id) =>{
  dispatch(removeFromCart(id))
 }

//  const handlequantity = (id,quantity)=>{
//      console.log(id,quantity);
//  }
  return (
    <div className="wrapper">

    
    <div className="cart-page-container">
      <div className="cart-container">
        <h2>Your Cart</h2>
       { cartItems.map( (item) => (
      <div className="cart-item" key={item.id}>
      <img src={item.image} alt={item.title} />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <div>
          {/* <input type="number" min="1" value={tempItems.find((tempItem) =. tempItem.id === item.id)?.quantity || item.quantity} onChange={(e) => handlequantity(item.id,parseInt(e.target.value))}/>
          <button>Update</button> */}
     
     <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
     {item.quantity}
            {/* <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button> */}
         
            <button
  onClick={() => {
    if (item.quantity === 1) {
      const confirmRemove = window.confirm(
        "Quantity is 1. Do you want to remove this item?"
      );
      if (confirmRemove) {
        dispatch(removeFromCart(item.id));
      }
    } else {
      dispatch(decreaseQuantity(item.id));
    }
  }}
>
  -
</button>


          {/* <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button> */}
          <button onClick={() =>handleRemoveItem(item.id)}>Remove</button>
        </div>
      </div>
    </div>

       ))}
        <div className="cart-total">
          <p>Total : ${totalPrice.toFixed(2)}</p>
        </div>
        <button className="back-button" onClick={() => navigate("/")}>Back to Shopping</button>
      </div>
    </div>
    </div>
  )
}

export default Cart