import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function CartScreen(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const points = props.points;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, points));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  return (
    <div>
      <hr className="line"/>
    <div className="cart ">
    <div className="cart-list">
    
      <ul className="cart-list-container ">
      
        <li>
        <div>
        
          <h3>
            Shopping Cart
          </h3>
        </div>        
        <div >  
          Price          
        </div>
        <div>          
          Points
        </div>
        </li>
       
    {
          cartItems.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name" style={{marginLeft: "5rem"}}>
                  <div>
                    <Link to={"/product/" + item.product}>
                      {item.name}
                    </Link>

                  </div>
                  <div >
                  <br/>
                    Quantity:
                  <select style={{width: "5rem"}} value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                      
                    </select>
                    <br/>

                    <button style={{backgroundColor: "turquoise" , color:"white" , fontWeight: "bolder"}} type="button" className="button " onClick={() => removeFromCartHandler(item.product)} >
                      Delete
                    </button>
                    </div>
                    
                </div>
                <div className="cart-price">
                  Rs.{item.price}
                </div>
                <div className="cart-points">
                 Rs.{item.points}
                </div>
                
              </li>
            )
        }
      </ul>

    </div>

    <div className="cart-action">
      
      <h3>
        {/* Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) */}
        Subtotal 
        :
         Rs. {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>

      <h3>
        {/* Total Points ( {cartItems.reduce((a, c) => a + c.qty, 0)} items) */}
        Total Points 
        :
         Rs. {cartItems.reduce((a, c) => a + c.points * c.qty, 0)}
      </h3>

      <br/>
      <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>

    </div>

  </div>
  </div>
  )
}


export default CartScreen;