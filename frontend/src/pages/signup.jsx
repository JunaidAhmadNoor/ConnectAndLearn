// Update the import statement to include Link
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import Nav from '../components/nav';

const SignUp = () => {
    const navigate = useNavigate();
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

        const { firstName, lastName, role, email, password, confirmPassword } = formData;

        // Validation
        const errors = {};
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.email.trim()) errors.email = 'Email is required';
        if (!formData.password.trim()) errors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';

        if (Object.keys(errors).length === 0) {
            try {
                // Make axios POST request
                const response = await axios.post('/register', {
                    firstName,
                    lastName,
                    role,
                    email,
                    password,
                    confirmPassword,
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
                    toast.success('Sign Up Successful.');
                    navigate('/SignIn');
                }
            } catch (error) {
                console.error('Error:', error);
                // Handle error
            }
        } else {
            setErrors(errors);
        }
    };

    return (
        <>
            <Nav />
            <section>
                <div className="mt-13 grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col justify-center items-center lg:flex-row lg:px-8 lg:py-24 bg-white mt-10">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md bg-white px-5 py-5 shadow-xl">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
                            <p className="mt-2 text-base text-gray-600">
                                Already have an account?{' '}
                                <Link to="/SignIn" className="font-medium text-black transition-all duration-200 hover:underline">
                                    Sign In
                                </Link> {/* Use Link for navigation */}
                            </p>
                            <form onSubmit={handleSubmit} className="mt-8 space-y-5 w-full lg:w-auto">
                                <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="firstName" className="text-base font-medium text-gray-900">
                                            {' '}
                                            First Name{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="First Name"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="lastName" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Last Name{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Last Name"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="role" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Role{' '}
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                name="role"
                                                id="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                            >
                                                <option value="Student">Student</option>
                                                <option value="Teacher">Teacher</option>
                                                <option value="Investor">Investor</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="password" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Password{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="password"
                                                placeholder="Password"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="confirmPassword" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Confirm Password{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="password"
                                                placeholder="Confirm Password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                            />
                                            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        Create Account <ArrowRight className="ml-2" size={16} />
                                    </button>
                                </div>
                                </form>
                        </div>
                    </div>
                    <div className="h-full w-full">
                        <img
                            className="mx-auto h-full w-full rounded-md object-cover"
                            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;