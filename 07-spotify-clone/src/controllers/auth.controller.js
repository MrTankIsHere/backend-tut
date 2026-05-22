const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

async function registerUser(req, res) {

    const { username, email, password, role='user' } = req.body;

    const ifUserAlreadyExists = await userModel.findOne({

        $or:[
            { username },
            { email }
        ]

    })

    if ( ifUserAlreadyExists ) {
        return res.status(409).json({
            message: "User already exists."
        })
    }

    // encrypt the password to store in the database.
    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    // remember to atleast use one unique value in jwt.sign({}) method.
    // i used id as unique value.
    const token = jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully.",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })

}

async function loginUser(req, res) {

    const { username, email, password } = req.body;

    const user = await userModel.findOne(
        {
            $or:[
                { username },
                { email }
            ]
        }
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials."
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid credentials."
        })
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(200).json({
        message: "Logged in successfully.",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })

}

module.exports = { registerUser, loginUser };