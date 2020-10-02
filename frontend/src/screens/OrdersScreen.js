import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listOrders, deleteOrder } from '../actions/orderActions';

function OrdersScreen(props) {
  const orderList = useSelector(state => state.orderList);
  const { loading, orders, error } = orderList;

  const orderDelete = useSelector(state => state.orderDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = orderDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
    return () => {
      //
      
    };
  }, [successDelete]);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  }
  
  return loading ? <div>Loading...</div> :
    <div className="content content-margined">
      <br></br>
      <div className="order-header">
        <h1><strong> Orders</strong> </h1>
      </div>
      <br></br>
      <div className="order-list">

        

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>POINTS ADDED</th>
              <th>Total AMOUNT</th>
              <th>USER</th>
              <th>customer points</th>
              <th>PAID</th>
       
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (<tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.createdAt}</td>
              <td>{order.itemsPoints}</td>
              <td>{order.totalPrice}</td>
              <td>{order.user.name}</td>
              <td>{order.user.customerPoints+order.itemsPoints}</td>
              <td>{order.isPaid.toString()}</td>
              {/*<td>{order.paidAt}</td>
              <td>{order.isDelivered.toString()}</td>
              <td>{order.deliveredAt}</td> */}
              <td>
                <Link to={"/order/" + order._id} className="button secondary" >Details</Link>
                {' '}
                <button type="button" onClick={() => deleteHandler(order)} className="button secondary">Delete</button>
              </td>
            </tr>))
            }
          </tbody>
          
        </table>
       
      </div>
    </div>
    
}

export default OrdersScreen;