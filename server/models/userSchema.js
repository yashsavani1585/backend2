const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        // unique: true,
        // trim: true,
        // minlength: 3,
        // maxlength: 50,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
            message: 'Please enter a valid email address'
        }
    },
    Age: {
        type: Number,
        required: true,
        min: 18,
        max: 150,
    },
    Mobile: {
        type: String,
        required: true,
        // validate: {
        //     validator: (value) => /^\+[0-9]{1,3}\s?[0-9]{10}$/.test(value),
        //     message: 'Please enter a valid mobile number'
        // }
    },
    Work: {
        type: String,
        required: true,
        // enum: ['Developer', 'Designer', 'Tester', 'Project Manager', 'Other'],
    },
    Address: {
        type: String,
        required: true,
        trim: true,
        // minlength: 10,
        // maxlength: 255,
    },
    Description: {
        type: String,
        required: true,
        trim: true,
        // minlength: 20,
        // maxlength: 500,
    },
}

)

const User =new mongoose.model('User', userSchema);

module.exports = User;



