import express from "express";
const router = express.Router();
import cors from "cors"
import authController from '../controllers/authController.js';
import getProfile from "../controllers/profileController.js";
import loginController from "../controllers/loginController.js";
import createNewSpace from "../controllers/newSpaceController.js";
import getSpaces from "../controllers/getSpaceController.js";
import AddGroup from "../controllers/addGroupCOntroller.js";
import getAddGroup from "../controllers/getAddGroupController.js";
// const notificationController = require('../controllers//notificationController.js');
import notificationController from "../controllers//notificationController.js"
import updateGroupMembers from "../controllers/updateGroupController.js";
import getNotifications from "../controllers/getNotificationController.js";

const { test, registerUser } = authController;
const { loginUser } = loginController;
 
//middleware
router.use(
    cors({ 
        credentials: true, 
        origin: 'http://localhost:5173'
    }))

router.get('/',test)
router.post('/signup', registerUser)
router.post('/SignIn', loginUser)
router.get('/profile', getProfile)
router.post('/newSpace', createNewSpace);
router.get('/spaces', getSpaces);
router.post('/addGroup/:spaceId', AddGroup);
router.get('/getAddGroup', getAddGroup);
router.post('/sendNotification', notificationController.createNotification);

router.post('/updateGroup/:groupId', updateGroupMembers);
router.get('/getNotifications', getNotifications);

export default router;