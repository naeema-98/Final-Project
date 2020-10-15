import {
  ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAIL,
  MY_ORDER_LIST_REQUEST, MY_ORDER_LIST_SUCCESS, MY_ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL, ORDER_DELETE_REQUEST, ORDER_DELETE_SUCCESS, ORDER_DELETE_FAIL, ORDER_REDEEM_FAIL, ORDER_REDEEM_SUCCESS, ORDER_REDEEM_REQUEST
} from "../constants/orderConstants";


function orderCreateReducer(state = {}, action) {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, order: action.payload, success: true };
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}


function orderDetailsReducer(state = {
  order: {
    orderItems: [],
    shipping: {},
    payment: {},
   // sumPoints: {},
  }
}, action) {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}


function myOrderListReducer(state = {
  orders: [],
  myPoints: 0 //points calculate on run-time
}, action) {
  switch (action.type) {
    case MY_ORDER_LIST_REQUEST:
      return { loading: true };
    case MY_ORDER_LIST_SUCCESS:
      //extracting the points from the payload
      let _points = action.payload.splice(0, 1)[0]
      let _orders = action.payload
      return { loading: false, orders: _orders, myPoints: _points };
    case MY_ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function orderListReducer(state = {
  orders: []
}, action) {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function orderPayReducer(state = {
  order: {
    orderItems: [],
    shipping: {},
    payment: {}
  }
}, action) {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}


//redeemeing reducer
function orderRedeemReducer(state = {
  order: {
    loading: false,
    error: null,
    success: null
  }
}, action) {
  switch (action.type) {
    case ORDER_REDEEM_REQUEST:
      return { loading: true };
    case ORDER_REDEEM_SUCCESS:
      return { loading: false, success: true };
    case ORDER_REDEEM_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function orderDeleteReducer(state = {
  order: {
    orderItems: [],
    shipping: {},
    payment: {}
  }
}, action) {
  switch (action.type) {
    case ORDER_DELETE_REQUEST:
      return { loading: true };
    case ORDER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ORDER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export {
  orderCreateReducer, orderDetailsReducer,
  orderPayReducer, myOrderListReducer, orderListReducer, orderDeleteReducer,
  orderRedeemReducer
}