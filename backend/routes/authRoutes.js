import express from "express";
const router = express.Router();
import cors from "cors"
import authController from '../controllers/authController.js';
import getProfile from "../controllers/profileController.js";
import loginUser from "../controllers/loginController.js";

const { test, registerUser } = authController;
 
//middleware
router.use(
    cors({ 
        credentials: true, 
        origin: 'http://localhost:5173'
    }))

router.get('/',test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)

export default router;