import React, { useState, useEffect } from 'react';
import AppLayout from '../../components/AppLayout';
import axios from 'axios'; // Import Axios
import { Card, Button, Space, Input, Flex } from 'antd'; // Import Card and Button components from Ant Design
import { Link } from 'react-router-dom'; // Import Link component from React Router
import { ArrowRightOutlined } from '@ant-design/icons';
import { toast } from 'react-hot-toast';

const GroupStudy = () => {
    const [inputValue, setInputValue] = useState('');
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get('/spaces');
                setSpaces(response.data.spaces);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Run this effect only once when the component mounts

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to create a new space
            const response = await axios.post('/newSpace', { Name: inputValue });
            // If the request is successful, show success toast and update the spaces
            toast.success('Space Entered Successfully');
            setInputValue('');
            fetchSpaces(); // Fetch updated list of spaces
        } catch (error) {
            // Handle errors if any
            if (error.response && error.response.data && error.response.data.error) {
                // If the error response contains a custom error message, show it
                console.log(error.response)
                toast.error(error.response.message);
            } else {
                // If no custom error message, log the error to the console\
                console.log(error);
                console.error(error.message);
                toast.error(error.response.data.message);
            }
        }
    };

    const fetchSpaces = async () => {
        try {
            const response = await axios.get('/spaces');
            setSpaces(response.data.spaces);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <AppLayout>

            <div>
                <form onSubmit={handleSubmit} >

                    <div className='mt-24 flex items-center'>
                        <div className="flex">
                            <Input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Enter New Space"
                                className="mr-2 ml-72 w-72"
                            />
                            <button type="submit" className="ml-6 rounded-lg w-20 h-8 border border-gray-300 group hover:bg-blue-200 flex items-center justify-center" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>

                </form>
            </div>
            

                <div className='grid grid-cols-3 gap-4 ml-64 mr-10 mb-4 mt-10'>
                    {spaces.map((space) => (
                        <Card key={space._id}>
                            <div>
                                <span>{space.Name}</span>
                            </div>
                            <div>
                                <Link to={`/Details/${space._id}`}>
                                    <Button className='mt-4'>
                                        OPEN <ArrowRightOutlined className="ml-1" />
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>

        </AppLayout>
    );
};

export default GroupStudy;
