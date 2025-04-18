import { useState } from 'react';
const logIn = () => {
    const [logIn, setLogIn] = useState(true);
    const changeForm = ()  => {
        if(logIn){
            setLogIn(false);
        }
        else{
            setLogIn(true);
        }
    }
    return (
        <div>
            {
                logIn ? (
                    <div id="login">
                        <h1>Log in</h1>
                        <label htmlFor="">Email:</label><br />
                        <input className="bg-white" type="email" name="" id="" /><br />

                        <label htmlFor="">Password</label><br />
                        <input className="bg-white" type="password" /><br />

                        <button type="submit">Log in</button><br />
                        <button onClick={changeForm}>Dont have an account</button>
                    </div>
                ) : (
                    <div id='signup'>
                        <h1>Sign up</h1>
                        <label htmlFor="">Username:</label><br />
                        <input className="bg-white" type="text" placeholder='username'/><br />

                        <label htmlFor="">Email:</label><br />
                        <input className="bg-white" type="email" name="" id="" /><br />
                        
                        <label htmlFor="">Password</label><br />
                        <input className="bg-white" type="password" /><br />

                        <label htmlFor="">Confirm password</label><br />
                        <input className="bg-white" type="password" /><br />

                        <button type="submit">Sign in</button><br />
                        <button onClick={changeForm}>Already have an account</button>
                    </div>
                   )
            }

        </div>
    )
}

export default logIn;