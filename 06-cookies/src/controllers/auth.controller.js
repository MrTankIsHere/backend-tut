const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {

    const { username, email, password } = req.body;

    // find user with same email id and store it...
    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    // check if user with same email id already registered...
    if(isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists."
        })
    }

    const user = await userModel.create({
        username, email, password
    });

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    // res.cookie(<name-of-cookie>, token) => to save cookie in the browser
    // storing something inside the cookie. 
    // below, we stored token inside testCookie named cookie.
    // generally we name cookie "token".
    res.cookie("testCookie", token);

    res.status(201).json({
        message: "User Registered Successfully.",
        user, 
        token,
    })

}

module.exports = { registerUser };