const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// import routes
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')

dotenv.config();

// connct to databse
mongoose.connect(
    process.env.DB_CONNECTION
    , { useNewUrlParser: true, useCreateIndex: true }, () => console.log('Connected to Database'))

// Lets have middleware 
app.use(express.json());

// route middleware

app.use('/api/user' , authRoutes)
app.use('/api/posts' , postRoutes)



// need to listen the port number
app.listen(5000 , () => console.log('Server is Running '))
