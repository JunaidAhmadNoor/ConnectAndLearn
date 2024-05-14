// addGroupController.js

import AddGroupModel from '../models/addGroup.js';

const AddGroup = async (req, res) => {
    try {
        const { spaceId } = req.params;
        const { topicName, groupName, creatorName, membersAllowed, minutes  } = req.body;

        // Create a new group document with the received data
        const newGroup = new AddGroupModel({
            spaceId,
            topicName,
            groupName,
            creatorName,
            membersAllowed: Number(membersAllowed), // Ensure this is treated as a number
            minutes: Number(minutes)
        });

        // Save the new group to the database
        await newGroup.save();

        // Send success response
        res.status(201).json({ message: 'New group created successfully', group: newGroup });
    } catch (error) {
        // Handle errors if any
        console.error('Error creating new group:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default AddGroup;
