const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", authController.registerUser);

// test routes: get => /test
// router.get("/test", (req, res)=>{
//     console.log("Cookie:", req.cookies);

//     res.json({
//         message: "Test route",
//         cookies: req.cookies
//     });
// })



module.exports = router;