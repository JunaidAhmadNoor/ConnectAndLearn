import Profile from "../models/profileModel.js";
import multer from 'multer';

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Controller function to handle profile data and image upload
const saveUserProfile = async (req, res) => {
    try {
        upload.single('profileImage')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(400).send('Error uploading file: ' + err.message);
            } else if (err) {
                return res.status(500).send('Error uploading file: ' + err.message);
            }

            const { username, email, institute, skills, interests } = req.body;
            const newProfileData = { 
                username, 
                email, 
                institute, 
                skills, 
                interests
            };

            if (req.file) {
                newProfileData.profileImage = req.file.path; // Save the path to the uploaded image
            }

            const newProfile = new Profile(newProfileData);
            await newProfile.save();
            res.status(201).send('Profile saved successfully!');
        });
    } catch (error) {
        res.status(400).send('Error saving profile: ' + error.message);
    }
};


export default saveUserProfile;
