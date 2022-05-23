const mongoose=require('mongoose');
const adminSchema=mongoose.Schema({
   nombre: String,
	correo: String,
	password: String,
   createdAt:Date
});

module.exports=mongoose.model('Admin',adminSchema);