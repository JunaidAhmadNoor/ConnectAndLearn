import express from "express";
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
import saveUserProfile from '../controllers/saveUserProfileController.js';
import getUserData from '../controllers/user/get.js';
import addSubjectToList from "../controllers/Teacher/listSubjectController.js";
import getListSubject from "../controllers/Teacher/getListSubjectController.js";
import editListSubject from "../controllers/Teacher/editListSubjectController.js";
import deleteListSubject from "../controllers/Teacher/deleteListSubjectController.js";

const { test, registerUser } = authController;
const { loginUser } = loginController;
 

const router = express.Router();


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

router.post('/sendprofile', saveUserProfile);
router.post('/getUserData',getUserData);

router.post('/listSubject', addSubjectToList)

router.get('/getListSubject', getListSubject)
router.put('/editListSubject', editListSubject)
router.delete('/deleteListSubject/:id', deleteListSubject)



export default router;