import mongoose from "mongoose";
import {Schema} from 'mongoose';

const registerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Student', 'Teacher'], 
        default: 'Student' 
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
})

const Usermodel = mongoose.model('User', registerSchema)

export default Usermodel;