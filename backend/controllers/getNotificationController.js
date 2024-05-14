

// NotificationController.js
import Notification from "../models/notification.js";

const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({}); // Fetches all notifications
        res.status(200).json({ success: true, data: notifications });
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export default getNotifications;
