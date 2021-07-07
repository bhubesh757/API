const express = require('express');   //30 march 2021
const app = express();
const mongoose = require('mongoose')
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

// middlewares
// ?
// lets use middlware for the purpose

const postsRoute = require('./routes/posts') ;

app.use('/posts' , postsRoute)
// app.use('/about' , () => {
//     console.log('Hey  i am middleware');
// })

// Create routes
// get request it gives something 


app.get('/' , (req , res) => {
    res.send('I am Learning Express js')
});

app.get('/about' , (req , res) => {
    res.send('I am Learning Restful api')
});


// lets connect the database to mongodb
mongoose.connect(
    process.env.DB_CONNECTION
    , {useNewUrlParser : true }, () => console.log('Connected to Database'))


// listen to the server

app.listen(3000);