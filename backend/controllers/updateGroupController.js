// UpdateGroupController.js

import AddGroupModel from '../models/addGroup.js';

const updateGroupMembers = async (req, res) => {
    const { groupId } = req.params;
    const { userId } = req.body;

    console.log("Updating group members:", { groupId, userId });

    try {
        const group = await AddGroupModel.findById(groupId);
        console.log("Group found:", group);

        if (!group) {
            console.log("Group not found:", groupId);
            return res.status(404).json({ message: 'Group not found' });
        }

        if (group.connectedUsers.includes(userId)) {
            console.log("User has already connected:", userId);
            return res.status(409).json({ message: 'User has already connected to this group' });
        }

        if (group.membersAllowed > 0) {
            group.membersAllowed--;
            group.connectedUsers.push(userId);
            await group.save();
            console.log("Group updated successfully:", group);
            res.status(200).json({ message: 'Connected successfully', group });
        } else {
            console.log("No more slots available:", groupId);
            res.status(400).json({ message: 'No more slots available' });
        }
    } catch (error) {
        console.error('Error updating group:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};

export default updateGroupMembers;
