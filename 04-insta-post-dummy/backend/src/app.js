const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// to read file.
const upload = multer({ storage: multer.memoryStorage() })


// post /create-post => create a post.
app.post('/create-post', upload.single("image"), async (req, res)=>{

    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);

    // console.log(result);
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,
    })

    return res.status(201).json({
        message: "Post created successfully.",
        post
    });

})

app.get('/posts', async (req, res) => {

    const posts = await postModel.find();

    return res.status(200).json({
        message: "Posts fetched successfully.",
        posts
    });

})






module.exports = app;