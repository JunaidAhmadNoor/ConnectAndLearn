// newSpaceController.js

// Import necessary modules
import Space from '../models/space.js';

// Define the controller function to handle /newSpace endpoint
const createNewSpace = async (req, res) => {
  try {
    // Extract data from request body
    const { Name } = req.body;

    // Create a new space document
    const newSpace = new Space({ Name });

    // Save the new space to the database
    await newSpace.save();

    res.status(201).json({ message: 'New space created successfully', space: newSpace });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Space already exists' });
    } else {
      console.error('Error creating new space:', error);
      res.status(500).json({ message: 'Juniad Error' });
    }
  }
};

export default createNewSpace;
