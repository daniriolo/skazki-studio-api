const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
   nombre: String,
	correo: {type : String , unique : true, required : true},
	password: String,
	clasesActivas:[{
		curso: String,
		progreso: Number
	}],
	clasesTerminadas:[
		curso:String
	],
   createdAt:Date,
	hours:[String]
});

module.exports=mongoose.model('Student',studentSchema);