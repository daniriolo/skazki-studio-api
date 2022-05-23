const mongoose=require('mongoose');
const hoursSchema=mongoose.Schema({
   createdAt: Date,
   destroyAt: Date
});

module.exports=mongoose.model('Hour',hoursSchema);