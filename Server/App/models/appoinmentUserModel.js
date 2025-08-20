const mongoose=require('mongoose');

const appoinmentByUserSchema=new mongoose.Schema({
      userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, 
      },
      userName:{
        type:String,
        required:true,
      },
      userEmail:{
        type:String,
        required:true,
      },
      date: { 
        type: String,
        required: true,
      },
      slot: { 
        type: String,
        required: true, 
      },
      status: {
            type: String,
            enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'], // Example statuses
            default: 'Pending'
        }
});

const appoinmentByUser=new mongoose.model("appointmentByUser",appoinmentByUserSchema);
module.exports=appoinmentByUser;