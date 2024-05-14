// getAddGroupController.js

import AddGroupModel from '../models/addGroup.js';

const getAddGroup = async (req, res) => {
    const { spaceId } = req.query; 
    try {
        // Fetch all groups from the database
        // const groups = await AddGroupModel.find();/
        const groups = await AddGroupModel.find({ spaceId });

        // Send the groups data as a response
        res.status(200).json({ groups });
        
        if (!spaceId) {
            return res.status(400).json({ error: 'spaceId is required' });
        }
    } catch (error) {
        // Handle errors if any
        console.error('Error fetching groups:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default getAddGroup;
