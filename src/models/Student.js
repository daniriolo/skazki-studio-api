const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
   nombre: String,
	correo: String,
	password: String,
	clasesActivas:[{
		curso: String,
		progreso: Number
	}],
	clasesTerminadas:[{
		curso: String,
      finishedAt: Date
	}],
	horas: Number,
   createdAt:Date
});

module.exports=mongoose.model('Student',studentSchema);