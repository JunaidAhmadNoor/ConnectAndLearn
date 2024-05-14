// getSpacesController.js

import Space from '../models/space.js';

const getSpaces = async (req, res) => {
  try {
    // Fetch all spaces from the database
    const spaces = await Space.find();

    // Send the spaces as a response
    res.status(200).json({ spaces });
  } catch (error) {
    // Handle errors if any
    console.error('Error fetching spaces:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getSpaces;
