const express = require('express');
const app=express();
const mongoose = require('mongoose');
require('dotenv').config()
const port= process.env.PORT;
const studentRoutes = require('./routes/students');

//middlewares
app.use(express.json());
app.use('/api',studentRoutes);


//Routes
app.get('/', (req,res)=>{
   res.send("API created for SkazkiStudio.com");
})

//mongoose connection
mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
   console.log('Connected');
}).catch((error)=>console.log(error))

app.listen(port ,()=>{
   console.log('Server listening at port:',port);
});
