import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        axios.get('/profile', { withCredentials: true })
            .then(({ data }) => {
                setUser(data);
                setLoading(false); // Set loading to false after user data is fetched
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

    const sendNotification = (message) => {
        // Function to send notification
    };

    return (
        <UserContext.Provider value={{ user, loading, sendNotification }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
