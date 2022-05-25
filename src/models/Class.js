const mongoose=require('mongoose');
const classSchema=mongoose.Schema({
   title:String,
   idioma:String,
   nivel:String,
   horario:{
      domingo:String,
      lunes:String,
      martes:String,
      miercoles:String,
      jueves:String,
      viernes:String,
      sabado:String
   },
   precio: Number,
   datetoStart: Date,
   datetoEnd:Date,
   duracion: Number
});

module.exports=mongoose.model('Class',classSchema);