const express = require('express');
const studentSchema =require('../models/Student');
const router = express.Router();

//create student
router.post('/',(req,res)=>{
   const student=studentSchema({
      nombre:req.body.nombre,
      correo:req.body.correo,
      password:req.body.password,
      createdAt:new Date()
   });
   student
   .save()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//get all students
router.get('/',(req,res)=>{
   studentSchema.find()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );

//get student by id
router.get('/:id',(req,res)=>{
   const {id}=req.params;
   studentSchema.findById(id)
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );


//update student by id
router.put('/:id',(req,res)=>{
   const {id}=req.params;
   const {nombre,correo,password,horas}=req.body;
   studentSchema.updateOne({_id:id},{$set:{nombre,correo,password,horas}})
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );

//delete student by id
router.delete('/:id',(req,res)=>{
   const {id}=req.params;
   studentSchema.deleteOne({_id:id})
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );



module.exports = router;