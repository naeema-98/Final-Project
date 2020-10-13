import express from 'express';
import Order from '../models/orderModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const orders = await Order.find({}).populate('user');
  res.send(orders);
});

//runtime-calculation of points.
const PAYMENT_METHOD_REDEEM = "redeem"
const PAYMENT_METHOD_CASH = "cash"

const userPoints = async (user_id) => {
  try {

    const orders = await Order.find({ user: user_id })
    //calculating points
    let points = 0
    for (let order of orders) {
      if (
        order.isPaid 
        // && order.payment.paymentMethod != PAYMENT_METHOD_REDEEM
        ) {
        points += order.totalPoints
      }
    }
    return points
  } catch (ex) {
    return 0
  }
}


// routes
// ------ NOTICE -------
/*
  prepending total points the user has right now, in the array. 
*/
router.get("/mine", isAuth, async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  let points = await userPoints(req.user._id)
  //prepending the total points the user has to orders
  res.send([points, ...orders]);
});


router.put("/:id/redeem", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);

  const points = await userPoints(req.user._id)

  console.log(order.totalPoints > points, order.totalPoints, points)
  if (order) {
    if(order.isPaid){
      res.status(403) //forbidden
      res.send("Already paid!") 
      return

    }else if (order.totalPoints > points) {
      res.status(403) //forbidden
      res.send("Not enough points to redeem this order")
      return
    }
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      paymentMethod: PAYMENT_METHOD_REDEEM,
      paymentResult: {
        payerID: req.body.payerID,
        orderID: req.body.orderID,
        paymentID: req.body.paymentID
      }
    }
    const updatedOrder = await order.save();
    res.send({ message: 'Order Redeemed!.', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order not found.' })
  }

})


//write specific routes first, then the generic ones.
router.put("/:id/pay", isAuth, async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      paymentMethod: PAYMENT_METHOD_CASH,
      paymentResult: {
        payerID: req.body.payerID,
        orderID: req.body.orderID,
        paymentID: req.body.paymentID
      }
    }
    const updatedOrder = await order.save();
    res.send({ message: 'Order Paid.', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order not found.' })
  }
});

router.get("/:id", isAuth, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.")
  }
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.")
  }
});

router.post("/", isAuth, async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems,
    user: req.user._id,
    customer: req.customerPoints,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    itemsPoints: req.body.itemsPoints,
    taxPrice: req.body.taxPrice,
    //shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
    totalPoints: req.body.totalPoints,
    loyaltyPoints: req.body.point,
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({ message: "New Order Created", data: newOrderCreated });
});


export default router;