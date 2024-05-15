import jwt from 'jsonwebtoken';
import Usermodel from '../../models/register.js'; // Adjust the path as necessary

const getUserDetails = async (req, res) => {
    try {
        console.log()
        const { token } = req.body;
        const decodedToken = jwt.verify(token,  process.env.JWT_SECRET); // Replace 'your_secret_key' with your actual JWT secret key
        console.log("jashuiodhasohaoho")
        console.log(decodedToken);
        // Retrieve the user record based on the user ID
        const user = await Usermodel.findById(decodedToken.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Send the user record back in the response
        res.status(200).json(user);
    } catch (error) {
        console.error('Error retrieving user details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default getUserDetails;
