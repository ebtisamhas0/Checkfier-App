const mongoose = require ('mongoose');
const UserSchema =new mongoose.Schema({
    phone:{
      type:String,
      required:true
    } 
}) 

this.phone = this.phone ? this.phone : undefined;
mongoose.model("user", UserSchema);