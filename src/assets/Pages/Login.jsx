import React, { useState } from 'react';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className="flex items-center justify-center min-h-[35rem] bg-gray-100">
            <div className="rounded-lg border border-gray-300 p-6 w-[36em]">
                <form id="login-form">
                    <h2 className="text-2xl font-semibold text-center mb-4">Welcome Back</h2>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Log In
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Don't have an account? 
                            <a href="Signup" onClick={toggleForm} className="text-blue-500 hover:underline"> Sign Up</a>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;
