const mongoose=require('mongoose');
const teacherSchema=mongoose.Schema({
   perfil:{
		idiomas:[String],
		curriculo:String,
		review:[	{
			calificacion:Number,
			comentario:String
		}]
	},
	nombre:String,
	correo:String,
	password:String,
	clasesActivas:[String],
	clasesTerminadas:[String]
});

module.exports=mongoose.model('Teacher', teacherSchema);