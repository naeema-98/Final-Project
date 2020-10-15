import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  };
  return (
    
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container details-action">
            <li>
              <h2><strong>Payment</strong></h2>
            </li>

            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
<<<<<<< HEAD
                  id="paymentMethod"
                  value="cash"
=======
                  id="paymentMethodCash"
                  value="paypal"
>>>>>>> 2369bcc020a97a3df11146f96d9730f2804cdbb0
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label for="paymentMethodCash">&nbsp; &nbsp;Cash</label>
                
              </div>
            </li>

            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
<<<<<<< HEAD
                  id="paymentMethod"
                  value="points"
=======
                  id="paymentMethodRedeem"
                  value="redeem"
>>>>>>> 2369bcc020a97a3df11146f96d9730f2804cdbb0
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                <label for="paymentMethodRedeem">&nbsp; &nbsp;Points</label>
              </div>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default PaymentScreen;
