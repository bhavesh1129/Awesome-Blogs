const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//Register
router.post("/register", async(req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        const user = await newUser.save();
        res.status(200).json({
            message: "User has been successfully registered!",
            user
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

//Login
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        !user && res.status(400).json("Wrong Crendials!");
        //Compare Password
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Crendials!");

        const { password, ...others } = user._doc;
        res.status(200).json({
            message: "User has been loged in successfully!",
            others
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;