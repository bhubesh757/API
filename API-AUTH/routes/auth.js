// use router

const router = require('express').Router();
const User = require('../model/User')
const bcrypt = require('bcryptjs')
// importting the validation

const {registerValidation  , loginValidation} = require('../routes/validation')

// jwt

const jwt = require('jsonwebtoken')
// passing the router

// remember its a post request

router.post('/register' , async (req , res) => {
    // res.send('Register')

    // lets validate the data before we make the data

    //------------------------- here we are validating the data ---------------------------------------->>>>>>>>>>
   const {error} = registerValidation(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    // res.send(error.details[0].message);

    // checking the user is already in te database or not

    const emailExist = await User.findOne({email : req.body.email});
    if(emailExist) {
        return res.status(400).send('Email Already exists')
    }

    // ================= Hash the Passwords==================

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);  

    // ------>>Here we are creating a new user---------->>>>>>>>
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    });
    try {
        const savedUser = await user.save(); // we are saving the file in json()
        res.send({user : user._id});
    }catch(err) {
        res.status(400).send(err)
    }
})


// Login

router.post('/login' , async (req , res) => {

    const {error} = loginValidation(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    const user = await User.findOne({email : req.body.email});
    if(!user) {
        return res.status(400).send('Invlaid Email')
    }

    // checking the password is correct
    
    const validPass = await bcrypt.compare(req.body.password , user.password)
    if(!validPass) return res.status(400).send('Invalid password');

    // creata and assign the token

    const token = jwt.sign({_id : user._id} , process.env.TOKEN_SECRET);
    res.header('auth-token' , token).send(token);

    res.send('Successfully Logggend In')
})
module.exports = router;

