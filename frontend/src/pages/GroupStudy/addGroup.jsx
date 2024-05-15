import React, { useState, useContext, useEffect } from "react";
import AppLayout from "../../components/AppLayout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { toast } from 'react-hot-toast';

const AddGroup = () => {
    const { spaceId } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const [topicName, setTopicName] = useState("");
    const [groupName, setGroupName] = useState("");
    const [membersAllowed, setMembersAllowed] = useState("");
    const [minutes, setMinutes] = useState(""); 
    const [creatorName, setCreatorName] = useState("");

    useEffect(() => {
        console.log("User:", user);
        if (user && user.firstName && user.lastName) {
            const defaultCreatorName = `${user.firstName} ${user.lastName}`;
            setCreatorName(defaultCreatorName);
        } else {
            console.error("User or user properties are not available.");
        }
    }, [user]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/addGroup/${spaceId}`, {
                topicName,
                groupName,
                creatorName,
                membersAllowed,
                minutes // changed days to minutes
            });
            toast.success("Group added successfully!");
            navigate(`/Details/${spaceId}`);
        } catch (error) {
            console.error('Error adding group:', error);
            toast.error("Failed to add group!");
        }
    };

    return (
        <AppLayout>

            <div className="flex flex-col items-center">
                <h1 className="mt-24 ml-64 mr-10 text-3xl">Add Group Details</h1>
                <form className="mt-6 ml-56 mr-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2">Topic Name:</label>
                        <input
                            type="text"
                            value={topicName}
                            onChange={(e) => setTopicName(e.target.value)}
                            className="border border-gray-300 rounded-md py-2 px-4 block w-40"
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Group Name:</label>
                        <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)}
                            className="border border-gray-300 rounded-md py-2 px-4 block w-40" />
                    </div>
                    <div>
                        <label className="block mb-2">Creator Name:</label>
                        <input
                            type="text"
                            value={creatorName}
                            readOnly
                            className="border border-gray-300 rounded-md py-2 px-4 block w-40"
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Members Allowed:</label>
                        <input type="text" value={membersAllowed} onChange={(e) => setMembersAllowed(e.target.value)}
                            className="border border-gray-300 rounded-md py-2 px-4 block w-40" />
                    </div>
                    <div>
                        <label className="block mb-2">Minutes:</label> {/* changed from Days to Minutes */}
                        <select value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value, 10))} className="border border-gray-300 rounded-md py-2 px-4 block w-40">
                            <option value="5">5 minutes</option>
                            <option value="10">10 minutes</option>
                            <option value="20">20 minutes</option>
                        </select>
                    </div>
                    <button type="submit" className="mt-5 mb-11 rounded-lg w-28 h-8 border border-gray-300 group hover:bg-blue-200 flex items-center justify-center">Submit</button>
                </form>
            </div>
        </AppLayout>
    );
}

export default AddGroup;
