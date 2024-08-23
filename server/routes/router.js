const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');


// register data
router.post('/Register', async (req, res) => {
    const { Name, Email, Age, Mobile, Work, Address, Description } = req.body;

    // Check for missing fields
    if (!Name || !Email || !Age || !Mobile || !Work || !Address || !Description) {
        return res.status(400).json('All fields are required.');
    }

    try {
        // Check if user already exists
        const preuser = await User.findOne({ Email:Email });
        console.log(preuser);
        if (preuser) {
            return res.status(400).json('User already exists.');
        }else{

        // Create a new user
        const newUser = new User({
            Name,
            Email,
            Age,
            Mobile,
            Work,
            Address,
            Description
        });
    
        // Save the user to the database
        await newUser.save();
        res.status(201).json(newUser);
        console.log(newUser);
    } 
    } catch (error) {
        console.error(error);
        res.status(500).json('Server Error');
    }
});

// Get all users

router.get('/getdata', async (req, res) => {
    try {
        const users = await User.find();
        // res.json(user);
        res.status(201).json(users);
        console.log(users);
    } catch (error) {
        console.error(error);
        res.status(500).json('Server Error');
    }
});

// get individual users

router.get("/getUser/:id", async(req, res) => {
    try {
        console.log(req.params);
        const{id}=req.params;  

        const userindividual = await User.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual);
    } catch (error) {
        res.status(422).json(error);
    }
});

// update the user

router.patch("/updateuser/:id",async(req, res) => {
    try {
        // console.log(req.params);
        // console.log(req.body);
        const{id}=req.params;
        const updatedUser = await User.findByIdAndUpdate({_id:id}, req.body, {new: true});
        console.log(updatedUser);
        res.status(201).json(updatedUser);
    } catch {
        res.status(422).json(error);
    }
})

// delete the user

router.delete("/deleteuser/:id",async(req, res) => {
    try {
        const{id}=req.params;
        const deletedUser = await User.findByIdAndDelete({_id:id});
        console.log(deletedUser);
        res.status(201).json(deletedUser);
    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports = router;
