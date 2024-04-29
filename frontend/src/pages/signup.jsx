import React, { useState } from 'react';
import Nav from '../components/nav';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: 'Student',
        email: '',
        password: '',
        confirmPassword: '',
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

        const {firstName, lastName, role, email, password, confirmPassword } = formData
       
        // Validation 
        const errors = {};
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        // if (!formData.email.trim()) errors.email = 'Email is required';
        if (!formData.password.trim()) errors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';

        if (Object.keys(errors).length === 0) {
            // Handle form submission
            console.log('Form submitted:', formData);
        } else {
            setErrors(errors);
        }

        
        try {
            // Make axios POST request
            const response = await axios.post('/register', {
                firstName,
                lastName,
                role,
                email,
                password,
                confirmPassword
            });
    
            // Handle response
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                setFormData({
                    firstName: '',
                    lastName: '',
                    role: 'Student',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                toast.success('SignUp Successful.');
                navigate('/signin');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
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
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="border p-2 w-56 bg-gray-300 rounded-lg "
                                />
                                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="border p-2 w-56 bg-gray-300 rounded-lg"
                                />
                                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                            </div>

                            <div className="mb-4">
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="border p-2 w-56 bg-gray-300 rounded-lg"
                                >
                                    <option value="Student">Student</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Investor">Investor</option>
                                </select>
                            </div>

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

                            <div className="mb-4">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="border p-2 w-56 bg-gray-300 rounded-lg"
                                />
                                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                            </div>


                            <button
                            type='submit'
                                className="mt-4 px-6 py-2 rounded-lg bg-gray-300 text-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                            >
                                Sign Up
                            </button>




                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
