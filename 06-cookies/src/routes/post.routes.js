const express = require('express');
const userModel = require('../models/user.model');

const jwt = require('jsonwebtoken');
const router = express.Router();

router.post("/create", async (req, res)=>{

    console.log(req.body);

    console.log(req.cookies);

    const token = req.cookies.testCookie;
    if(!token) {
         return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        const user = await userModel.findOne({
            _id: decoded.id,
        })

        console.log(user);

    } catch (err) {
        return res.status(401).json({
            message: "Token is invalid."
        })
    }

    res.send("post created successfully.");

})

module.exports = router