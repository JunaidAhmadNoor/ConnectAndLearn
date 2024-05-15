import React, { useEffect, useState } from 'react';
import Nav from '../components/nav'; // Import the Nav component
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import Cookies from 'js-cookie';

const Home = () => {
    const [userData,setUserData]=useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    useEffect(()=>{
        if(userData?.role==="Student"){
            console.log("This conditon was classified as true");
            navigate("/groupStudy");
        }
        else if(userData?.role==="Teacher"){
            navigate("/subjectService");
        }
    },[userData]);

    useEffect(()=>{
        const getUserData=async ()=>{
            let token=Cookies.get("token")
            if(token)
            {
                console.log(token);
                try{
                let response=await axios.post('/getUserData',{token});
                setUserData(response.data);
                }catch(error){
                    console.log(error);
                }
            }

        }
        getUserData();
    },[])

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
        const { email, password } = formData;

        // Validation
        const errors = {};
        if (!formData.email.trim()) errors.email = 'Email is required';
        if (!formData.password.trim()) errors.password = 'Password is required';

        if (Object.keys(errors).length === 0) {
            try {
                // Make axios POST request
                const response = await axios.post('/SignIn', {
                    email,
                    password,
                });

                // Handle response
                if (response.data.error) {
                    toast.error(response.data.error);
                } else {
                    setFormData({});
                    toast.success('Sign In Successful.');
                    navigate('/groupStudy');
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
                    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 rounded bg-white mt-4 ">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md px-3 py-3 bg-white shadow-xl">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                Sign In
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Don't have an account?{' '}
                                <Link
                                    to="/signup" // Redirect to the sign-up page
                                    className="font-semibold text-black transition-all duration-200 hover:underline"
                                >
                                    Create a free account
                                </Link>
                            </p>
                            <form onSubmit={handleSubmit} className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            />
                                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-base font-medium text-gray-900">
                                                Password
                                            </label>
                                            <Link
                                                to="#" // Add link for Forgot password page
                                                className="text-sm font-semibold text-black hover:underline"
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            />
                                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Sign In
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="ml-2"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            className="h-6 w-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </span>
                                    Sign in with Google
                                </button>
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            className="h-6 w-6 text-[#2563EB]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </span>
                                    Sign in with Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full rounded">
                        <img
                            className="mx-auto h-full w-full rounded-md object-cover"
                            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
