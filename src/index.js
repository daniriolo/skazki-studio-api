const express = require('express');
const app=express();
const mongoose = require('mongoose');
require('dotenv').config()
const port= process.env.PORT || 4000;
const studentRoutes = require('./routes/students');
const adminRoutes = require('./routes/admins');
const classRoutes = require('./routes/classes');
const teacherRoutes = require('./routes/teachers');
const hoursRoutes = require('./routes/hours');
const path = require('path');

//middlewares
app.use(express.json());
app.use('/api/students',studentRoutes);
app.use('/api/teachers',teacherRoutes);
app.use('/api/classes',classRoutes);
app.use('/api/admins',adminRoutes);
app.use('/api/hours',hoursRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));


//mongoose connection
mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
   console.log('Connected');
}).catch((error)=>console.log(error))

app.listen(port ,()=>{
   console.log('Server listening at port:',port);
});
