import React, {useState} from 'react';
import Nav from '../components/nav'; // Import the Nav component
import axios from 'axios';

import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = formData


        // Validation
        const errors = {};
        if (!formData.email.trim()) errors.email = 'Email is required';
        if (!formData.password.trim()) errors.password = 'Password is required';

        if (Object.keys(errors).length === 0) {
            // Handle form submission
            console.log('Form submitted:', formData);
        } else {
            setErrors(errors);
        }

        try{
            const response = await axios.post('/login',{
                email,
                password
            });
            if(response.data.error){
                toast.error(response.data.error)
            }else{
                setFormData({
                });
                navigate('/groupStudy')
            }

        }catch(error){
            console.error('Error:', error);
        }


    };
    return (
        <>
            <Nav />
            <div className="mt-14 relative h-screen bg-cover bg-center flex items-start justify-center">
                {/* Background Image */}
                <img src="/signin.jpeg" alt="Background Image" className="absolute inset-0 w-full h-full object-cover" />

                {/* Transparent Card */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-opacity-50 rounded-lg p-8 border w-96">
                        <h1 className="text-2xl font-bold mb-4">Sign In</h1>

                        <form onSubmit={handleSubmit}>
                            
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border p-2 w-56 bg-gray-300 rounded-lg"
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>

                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="border p-2 w-56 bg-gray-300 rounded-lg"
                                />
                                {errors.password && <p className="text-red-500">{errors.password}</p>}
                            </div>

                            <button
                            type='submit'
                                className="mt-4 px-6 py-2 rounded-lg bg-gray-300 text-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                            >
                                Sign In
                            </button>




                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
