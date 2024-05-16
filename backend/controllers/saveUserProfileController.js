import Profile from "../models/profileModel.js";
import cloudinaryUpload from "../helpers/cloudinary.js";
// Controller function to handle profile data and image upload
const saveUserProfile = async (req, res) => {
    try {
            const { username, email, institute, skills, interests,profileImage } = req.body;
            const link = await cloudinaryUpload(profileImage);
            console.log(link);
            const newProfileData = { 
                username, 
                email, 
                institute, 
                skills, 
                interests,
                profileImage:link,
            };

            const newProfile = new Profile(newProfileData);
            await newProfile.save();
            res.status(201).send('Profile saved successfully!');
    } catch (error) {
        res.status(400).send('Error saving profile: ' + error.message);
    }
};


export default saveUserProfile;
