import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  //const [customerPoints, setcustomerPoints] = useState('');
 const [totalPoints, setPoints] = useState(0);
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }))
  }
  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector(state => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders, myPoints } = myOrderList;
  

  //refreshing the points on the front end.
  useEffect( () => {
    setPoints(myPoints)
    console.log(myOrderList)
  }, myPoints)

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name)
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPoints(myPoints);
      setPassword(userInfo.password);
      
      //setPoints(totalPoints.totalPoints)
    }
    dispatch(listMyOrders());
    return () => {

    };
  }, [userInfo])

  
  return (
    <div>
      <hr className="line" />
       <div className="profile">
    <div className="profile-info">
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container details-action">
            <li>
              <h2><strong>User Profile</strong></h2>
            </li>
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile Saved Successfully.</div>}
            </li>
            <li>
              <label htmlFor="name">
                Name
          </label>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="email">
                Email
          </label>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li>
            
            {/* <li>
              <label htmlFor="email">
                Points
          </label>
              <input value={itemsPoints} type="points" name="points" id="points" onChange={(e) => setPoints(itemsPoints+customerPoints)}>
              </input> 
            </li> */}
           
            <li>
              <label htmlFor="totalPoints">
               Points
          </label>
<<<<<<< HEAD
              {/* <input value={totalPoints} name="totalPoints" id="totalPoints" onChange={(e) => setEmail(e.target.value)}> */}
              <input value={totalPoints} name="totalPoints" id="totalPoints" >
=======
              <input value={totalPoints} name="totalPoints" id="totalPoints" onChange={(e) => setPoints(e.target.value)}>
>>>>>>> 2369bcc020a97a3df11146f96d9730f2804cdbb0
              </input>
            </li> 

            <li>
              <label htmlFor="password">Password</label>
              <input value={password} type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li>

            <li>
              <button type="submit" className="button primary">Update</button>
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
            </li>

          </ul>
        </form>
      </div>
    </div>
    <div className="profile-orders content-margined">
      {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                  <th>PAID</th>
                  <th>POINTS</th>
                   <th>TOTAL POINTS</th>
                   <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid ? order.payment.paymentMethod : "Not Paid!"}</td>
                  <td>{order.itemsPoints}</td>
                  <td> </td>
                 

                  <td>
                    <Link to={"/order/" + order._id}>DETAILS</Link>
                  </td>
                </tr>)}
              </tbody>
            </table>
      }
    </div>
  </div>
  </div>)
}

export default ProfileScreen;