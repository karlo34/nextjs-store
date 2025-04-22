import { useState } from 'react';
import Navbar from './navbar';

const logIn = () => {
    const [logIn, setLogIn] = useState(true);
    const changeForm = () => {
        if (logIn) {
            setLogIn(false);
        }
        else {
            setLogIn(true);
        }
    }
    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex flex-col justify-center items-center"> {/* Center container */}


                {logIn ? (
                    <div id="login" className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-md"> {/* Form container */}
                        <h1 className="text-2xl font-bold text-center mb-6">Log in</h1>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1">Email:</label>
                                <input
                                    className="w-full p-2 border rounded"
                                    type="email"
                                />
                            </div>

                            <div>
                                <label className="block mb-1">Password:</label>
                                <input
                                    className="w-full p-2 border rounded"
                                    type="password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                                Log in
                            </button>
                            <br />
                            <button
                                type="button"
                                onClick={changeForm}
                                className="w-full text-blue-500 hover:underline">
                                Don't have an account?
                            </button>
                        </form>
                    </div>
                ) : (
                    <div id="signup" className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-md">

                        <h1>Sign up</h1>
                        <label htmlFor="">Username:</label><br />
                        <input className="bg-white" type="text" placeholder='username' /><br />

                        <label htmlFor="">Email:</label><br />
                        <input className="bg-white" type="email" name="" id="" /><br />

                        <label htmlFor="">Password</label><br />
                        <input className="bg-white" type="password" /><br />

                        <label htmlFor="">Confirm password</label><br />
                        <input className="bg-white" type="password" /><br />

                        <button type="submit">Sign in</button><br />
                        <button onClick={changeForm}>Already have an account</button>

                    </div>
                )}
            </div>
        </div>
    )
}

export default logIn;