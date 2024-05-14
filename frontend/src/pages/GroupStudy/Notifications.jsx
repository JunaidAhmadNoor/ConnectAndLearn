import React, { useState, useEffect } from "react";
import axios from "axios";

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('/getNotifications');
                console.log("API Response:", response.data);  // Make sure this is an array
                setNotifications(response.data.data || []); // Adjust this based on your actual API response structure
            } catch (error) {
                console.error("Failed to fetch notifications:", error);
            }
        };

        fetchNotifications();
    }, []);

    console.log("Notifications state:", notifications); // Check what you're setting here

    return (
        <div>
            <h1>Notifications</h1>
            <ul>
                {Array.isArray(notifications) ? notifications.map((notification, index) => (
                    <li key={index}>{notification.message}</li>
                )) : <li>No notifications found or data is not an array.</li>}
            </ul>
        </div>
    );
};

export default Notifications;
