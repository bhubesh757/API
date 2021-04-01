const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

// whats it does it sends  us a all the posts and grabs and send the posts from the database
router.get('/', async (req , res) => {
    // res.send('We are in posts route');
    try {
        const posts = await Post.find();
        // snding back the response
        res.json(posts)
    }catch(err) {
        res.json({msg : err})
    }
});

// by using this we can find the particular post from this code
// specic post
router.get('/:postId' , async  (req , res) => {
// we need to console it
// console.log(req.params.postId);

// lets do try catch

try {
     const post = await Post.findById(req.params.postId);
     res.json(post);
}catch(err) {
    res.json({msg : err})
}
     
})

// delete a specific post

router.delete('/:postId' , async  (req , res) => {
// we have the method called remove
try {

const deletePost = await Post.remove({_id: req.params.postId})
res.json(deletePost)
}catch(err){
    res.json({msg : err})
}
     
})

// update a post
router.patch('/:postId' , async  (req , res) => {
// we have the method called remove
try {

const updatePost = await Post.updateOne({_id: req.params.postId} , { $set : {title : req.body.title}})
res.json(updatePost)
}catch(err){
    res.json({msg : err})
}
     
})


// submit a post 

// need to post

// router.post('/' , (req , res) => {
//     // console.log(req.body);
//     // trying to post something into the database
//     const post = new Post({
//         title : req.body.title,
//         description : req.body.description,
//     });

//     post.save()
//     // .exec()
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         // if any error occurs it displays here
//         res.json({msg : err})
//     })
// })


router.post('/' , async (req , res) => {
    // console.log(req.body);
    // trying to post something into the database
    const post = new Post({
        title : req.body.title,
        description : req.body.description,
    });

// use try catch

try{

    const savedPost = await post.save();
    res.json(savedPost);
} catch(err) {
    res.json({message : err})
}
});

    


module.exports = router;
