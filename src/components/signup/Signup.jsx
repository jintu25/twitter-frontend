import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useState } from "react";
import axios from "axios"
import { USER_API_END } from "../../utils/constant";
import toast from "react-hot-toast";
const Signup = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to the backend endpoint
            const response = await axios.post(`${USER_API_END}/register`, formData, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            },
            );
            console.log(response.data);
            if (response.data.success) {
                navigate("/login")
                toast.success(response.data.message)
            }
            // Handle successful signup (e.g., show a success message to the user)
        } catch (error) {
            console.error('Signup failed:', error.response.data);
            setErrorMessage(error.response.data.message);

            toast.error(error.response.data.message)
            // Handle signup failure (e.g., display an error message to the user)
        }
    };

    // Function to update form data as user types
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <div className="h-ful">
            <div className="mx-auto">
                <div className="flex justify-center px-1 md:px-6 py-6 md:py-8">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex items-center">
                        <div className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                            <img src={logo} alt="" />
                        </div>
                        <div className="w-full lg:w-7/12 p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="py-4 text-2xl text-center text-gray-800">Create an Account!</h3>

                            <form className="px-8 pt-6 pb-8 mb-4 rounded" onSubmit={handleSubmit}>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">Your Name</label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label htmlFor="username" className="block mb-2 text-sm font-bold text-gray-700">Username</label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="username"
                                            type="text"
                                            placeholder="Username"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email</label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Password</label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="text-center">
                                    <Link to="/login" className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
                                        Already have an account? Login!
                                    </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;