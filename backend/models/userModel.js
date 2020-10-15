import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
  customerPoints: {type: Number, default: 0, required: true},
<<<<<<< HEAD
=======
  //we don't need this.
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: false },
>>>>>>> 2369bcc020a97a3df11146f96d9730f2804cdbb0
  isAdmin: { type: Boolean, required: true, default: false },
  status: {type: Boolean, requiredPaths:true, default: true} 
});



const userModel = mongoose.model('User', userSchema);

/* //write query ere .
//db.orders.find().forEach()
project.orders.find().forEach(
  doc=>
      project.users.update(
        {"_id": doc._id},
        {$set: {"field_to_update": doc.customerPoints}}
      )
) */
export default userModel;
