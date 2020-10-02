import mongoose from 'mongoose';
const shippingSchema = {
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
};

const paymentSchema = {
  paymentMethod: { type: String, required: true }
};

const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  points: { type: String, defalut:0, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
});

const pointSchema = {
  loyaltyPoints: { type: Number,default:0, required: true },

};

/* const customerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  customerPoints: {type: Number, default: 0},
  status: {type:Boolean , default: 1, required: true},
  //isAdmin: { type: Boolean, required: true, default: false },
  
}); */

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //customer: [customerSchema],
  orderItems: [orderItemSchema],
  payment: paymentSchema,
  //sumPoints: pointSchema,
  itemsPrice: { type: Number },
  itemsPoints: { type: Number },
  taxPrice: { type: Number },
  //shippingPrice: { type: Number },
  totalPrice: { type: Number },
  totalPoints: { type: Number },
  loyaltyPoints: pointSchema,
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
}, {
  timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
/* 
project.order.find().forEach(function (loyaltyPoints) {
  var totalPoints = project.order.findOne({ id: _id });
  if (doc2 != null) {
      doc1.name = doc2.name;
      db.coll01.save(doc1);
  }
  if()
}); */
export default orderModel;