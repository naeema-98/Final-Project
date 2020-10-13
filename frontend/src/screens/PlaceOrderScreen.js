import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
//import { update } from '../actions/userActions';
//import userModel from '../../../backend/models/userModel';
function PlaceOrderScreen(props) {

  const cart = useSelector(state => state.cart);
  const orderCreate = useSelector(state => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  /* const userUpdate=useSelector(state => state.userUpdate);
  const { loading, success, error, order } = userUpdate;
 */
 // const [customerPoints, setcustomerPoints] = useState('');
  /* const { cartItems, shipping, payment } = cart;
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }  */
  const { cartItems, payment, loyaltyPoints } = cart;
  if (!payment.paymentMethod) {
    console.log(loyaltyPoints);

    props.history.push("/payment");
  } 

  
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemsPoints = cartItems.reduce((a, c) => a + c.points * c.qty, 0);
  const totalPoints =  itemsPoints;
  //console.log(totalPoints);
  //const totalPoints = loyaltyPoints;
  //console.log(cartItems.loyaltyPoints);
  //const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  //const userPoints= 0;

    
  const totalPrice = itemsPrice +  taxPrice;
  //const totalPoints= itemsPoints;



  
  // const loyaltyPoints;
   //(customerPoints + totalPoints);
  //var customerPoints=  loyaltyPoints+ totalPoints ;
 // const LoyaltyPoints= {customerPoints} + itemsPoints;

  //const sumPoints= totalPoints+sumPoints;
 
  const dispatch = useDispatch();

  /* function updatePoints (){
    const [loyaltyPoints, setPoints] = useState();
    return(
      setPoints(totalPoints+ loyaltyPoints)
    );          
  } */
  const placeOrderHandler = () => {
    // create an order
     dispatch(createOrder({
      orderItems: cartItems,  payment, itemsPrice,itemsPoints, 
      taxPrice, totalPrice, totalPoints,
    })); 
   // updatePoints();
  }

  useEffect(() => {
    if (success) {
      

      props.history.push("/order/" + order._id);
    }

  }, [success]);

  return <div>
    
    <CheckoutSteps step1 step3 step4 ></CheckoutSteps>
    
    <div className="placeorder">
      <div className="placeorder-info">
        
        <div>
          <h3>Payment</h3>
          <div>
            Payment Method: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
          </h3>
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
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>
                          {item.name}
                        </Link>

                      </div>
                      <div>
                        Qty: {item.qty}
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

      
      </div>
      
      <div className="placeorder-action">
        <ul>
          <li>
            <button className="button primary full-width" onClick={placeOrderHandler} >Place Order</button>
          </li>
          <li>
            <h3>Order Summary</h3>
          </li>
          <li>
            <div>Items</div>
            <div>Rs.{itemsPrice}</div>
          </li>
          
           <li>
            <div>Tax</div>
            <div>Rs.{taxPrice}</div>
          </li>
          
                   
          <li style={{color: "black", fontSize:20, fontWeight:"bold"}}>
            <div >Order Total</div>
            <div>Rs.{totalPrice}</div>
          </li>
          <li>
            <div>Total Points</div>
            <div>Rs.{itemsPoints}</div>
          </li>
                 
              
            
          </ul>

      </div>

    </div>
  </div>

}

export default PlaceOrderScreen;