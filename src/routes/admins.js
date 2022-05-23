const express = require('express');
const adminSchema =require('../models/Admin');
const router = express.Router();

//create student
router.post('/',(req,res)=>{
   const admin=adminSchema({
      nombre:req.body.nombre,
      correo:req.body.correo,
      password:req.body.password,
      createdAt:new Date()
   });
   admin
   .save()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//get all students
router.get('/',(req,res)=>{
   adminSchema.find()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );

//get student by id
router.get('/:id',(req,res)=>{
   const {id}=req.params;
   adminSchema.findById(id)
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );


//update student by id
router.put('/:id',(req,res)=>{
   const {id}=req.params;
   const {nombre,correo,password}=req.body;
   adminSchema.updateOne({_id:id},{$set:{nombre,correo,password}})
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );

//delete student by id
router.delete('/:id',(req,res)=>{
   const {id}=req.params;
   adminSchema.deleteOne({_id:id})
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );



module.exports = router;