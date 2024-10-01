import React, { useState } from 'react';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className="flex items-center justify-center min-h-[35rem] bg-gray-100">
            <div className="rounded-lg border border-gray-300 p-6 w-[36em]">
                <form id="signup-form">
                    <h2 className="text-2xl font-semibold text-center mb-4">Create Account</h2>
                    <div className="mb-4">
                        <label htmlFor="new-username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="new-username"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="new-password"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Sign Up
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Already have an account?
                            <a href="/Login" onClick={toggleForm} className="text-blue-500 hover:underline"> Log In</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
