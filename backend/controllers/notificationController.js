// controllers/NotificationController.js
import Notification from "../models/notification.js";

export const createNotification = async (req, res) => {
    const { userId, groupId, message } = req.body;
    try {
        const notification = new Notification({
            userId,
            groupId,
            message
        });
        await notification.save();
        res.status(201).json({ success: true, data: notification });
    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).json({ success: false, error: error.message || 'Internal server error' });
    }
};

// Optionally, you can add more functions here
export const readNotification = async (req, res) => {
    // Implementation for reading a notification
};

// Using export default with an object containing all functions
export default {
    createNotification,
    readNotification
};
