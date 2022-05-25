const express = require('express');
const classSchema =require('../models/Class');
const router = express.Router();

//create student
router.post('/',(req,res)=>{
   const clase=classSchema({
      title:req.body.title,
      idioma:req.body.idioma,
      nivel:req.body.nivel,
      horario:{
         domingo:req.body.horario.domingo,
         lunes:req.body.horario.lunes,
         martes:req.body.horario.martes,
         miercoles:req.body.horario.miercoles,
         jueves:req.body.horario.jueves,
         viernes:req.body.horario.viernes,
         sabado:req.body.horario.sabado
      },
      precio: req.body.precio,
      datetoStart: new Date(),
      datetoEnd: new Date(),
      duracion:req.body.duracion
   });
   clase
   .save()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//get all students
router.get('/',(req,res)=>{
   classSchema.find()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );

//get student by id
router.get('/:id',(req,res)=>{
   const {id}=req.params;
   classSchema.findById(id)
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );


//update student by id
router.put('/:id',(req,res)=>{
   const {id}=req.params;
   const {nombre,correo,password,}=req.body;
   studentSchema.updateOne({_id:id},{$set:{nombre,correo,password,horas}})
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );

//delete student by id
router.delete('/:id',(req,res)=>{
   const {id}=req.params;
   classSchema.deleteOne({_id:id})
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );



module.exports = router;