const express = require('express');
const hoursSchema =require('../models/Hours');
const router = express.Router();

//create student
router.post('/',(req,res)=>{
   const x=new Date();
   const hour=hoursSchema({
      createdAt:x,
      destroyAt:new Date(x.getFullYear(),x.getMonth()+6,x.getDay())
   });
   hour
   .save()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
});

//get all students
router.get('/',(req,res)=>{
   hoursSchema.find()
   .then((data)=>res.json(data))
   .catch((error)=>res.json({message:error}));
} );

//get student by id
router.get('/:id',(req,res)=>{
   const {id}=req.params;
   hoursSchema.findById(id)
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