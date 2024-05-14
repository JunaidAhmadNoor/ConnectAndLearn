import mongoose from "mongoose";
import {Schema} from 'mongoose';

const SpaceSchema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
    },

})

const SpaceModel = mongoose.model('Space', SpaceSchema)

export default SpaceModel;