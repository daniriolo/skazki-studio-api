const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
   nombre: String,
	correo: String,
	password: String,
	clasesActivas:[{
		curso: String,
		progreso: Number
	}],
	clasesTerminadas:[String],
   createdAt:Date,
	hours:[String]
});

module.exports=mongoose.model('Student',studentSchema);