import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder, payOrder } from '../actions/orderActions';
//import PaypalButton from '../components/PaypalButton';
function OrderScreen(props) {

  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
  }, [successPay]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <hr className="line" />
      <div className="placeorder">
        <div className="placeorder-info">
          
          <div>
            <h3>Payment</h3>
            <div>
              Payment Method: {order.payment.paymentMethod}
            </div>
            <div>
              {order.isPaid ? "Paid at " + order.paidAt : "Paid."}
            </div>
          </div>

          {/* <div>
            <h3>Points</h3>
            <div>
              points: {order.point.loyaltyPoints}
            </div>
            <div>
              
            </div>
          </div>
 */}
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Shopping Cart
          </h3>
                <div>
                  Price
               </div>
               <div>
                  Points
               </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Cart is empty
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
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
            
            {/* <li className="placeorder-actions-payment">
              {loadingPay && <div>Finishing Payment...</div>}
              {!order.isPaid &&
                <PaypalButton
                  amount={order.totalPrice}
                  onSuccess={handleSuccessPayment} />
              }
            </li> */}
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>Rs.{order.itemsPrice}</div>
            </li>
            <li>
              <div>Points</div>
              <div>Rs.{order.itemsPoints}</div>
            </li>
          
            <li>
              <div>Tax</div>
              <div>Rs.{order.taxPrice}</div>
            </li>
            
            <li style={{color: "black", fontSize:20, fontWeight:"bold"}}>
              <div>Order Total</div>
              <div>${order.totalPrice}</div>
            </li>
             <li>
              <div>Customer Points</div>
              <div>Rs.{order.itemsPoints}</div>
            </li> 
          </ul>



        </div>

      </div>
    </div>

}

export default OrderScreen;