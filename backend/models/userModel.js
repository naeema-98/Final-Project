import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
  customerPoints: {type: Number, default: 0, required: true},
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
