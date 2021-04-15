const router = require('express').Router();
const verify = require('./verifytoken.js');

router.get('/' ,verify , (req, res) => {
    res.json({posts : {
        title : 'i am Bhubesh this is my first post ',
        description : 'this post is posted pn when i was at the age  of 18, This remebers my young age memories!!',

    }})
})

module.exports = router;
