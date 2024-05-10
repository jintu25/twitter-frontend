import { useState } from "react";
import logo from "../../assets/logo.png"
import axios from "axios"
import { USER_API_END } from "../../utils/constant";
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../../redux/action";
import { getUser } from "../../redux/userSlice";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // import { loginSuccess, loginFailure } from './actions';

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Inside handleSubmit function

        try {
            const response = await axios.post(`${USER_API_END}/login`, { email, password }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });

            if (response.data.success) {
                dispatch(getUser(response?.data?.user));
                console.log(response)
                toast.success(`${response?.data?.user?.name} login successfully`)
                navigate("/")
            } else {
                dispatch(loginFailure('Invalid email or password'));
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                // toast.error(error)
                toast.error(error.response.data.message)
                dispatch(loginFailure(error.response.data.message));
            } else {
                dispatch(loginFailure('Failed to submit form'));
            }
            console.error('Failed to submit form:', error);
        }

    };
    return (
        <div>
            <div className="min-h-screen  text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center items-center flex-1">
                    <div className="flex-1 text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-5/12 p-4 sm:p-12">
                        <div className="mt-8 flex flex-col items-center">
                            <div className="w-full flex-1 mt-8">
                                <div className="mb-6">
                                    <h2 className="text-gray-800 font-bold text-5xl">Happening Now.</h2>
                                    <h3 className="text-xl font-serif mt-4 ">Join Twitter Today</h3>
                                </div>
                                <div className="flex mb-5 flex-col items-center">
                                    <button
                                        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                        <div className="bg-white p-2 rounded-full">
                                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4" />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853" />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04" />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335" />
                                            </svg>
                                        </div>
                                        <span className="ml-4">
                                            Sign In with Google
                                        </span>
                                    </button>
                                </div>

                                <div className="mx-auto max-w-xs">
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        />
                                        <button
                                            type="submit"
                                            className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                        >
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-">Sign In</span>
                                        </button>
                                        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                                    </form>
                                    <p className="mt-2">
                                        Create an new account please
                                        <Link to="/signup" className="text-blue-500 underline"> sign Up</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;