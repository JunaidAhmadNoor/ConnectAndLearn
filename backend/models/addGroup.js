import mongoose from "mongoose";
const { Schema } = mongoose;

const AddGroupSchema = new Schema({
    spaceId: {
        type: Schema.Types.ObjectId,
    },
    topicName: {
        type: String,
        required: true,
    },
    groupName: {
        type: String,
        required: true,
    },
    creatorName: {
        type: String,
        required: true,
    },
    membersAllowed: {
        type: Number,
        required: true,
    },
    minutes: {
        type: Number,
        enum: [5, 10, 20], 
        required: true,
    },
    connectedUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    
    createdAt: {
        type: Date,
        default: () => new Date(),
    },
    expirationDate: {
        type: Date,
        default: function() {
            return new Date(this.createdAt.getTime() + this.minutes * 60000);
        },
    },
});

const AddGroupModel = mongoose.model('AddGroup', AddGroupSchema);
export default AddGroupModel;
