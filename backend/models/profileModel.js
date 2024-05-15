import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    institute: { type: String, required: false },
    skills: { type: String, required: false },
    interests: { type: String, required: false },
    profileImage: { type: String } // Add a field for profile image path
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
