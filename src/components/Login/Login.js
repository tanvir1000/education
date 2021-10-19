import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from 'react';
import { Link } from "react-router-dom";
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const auth = getAuth();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)

        .then((result) => {
            const user = result.user;
            console.log(user);
          })

    }
    

    

    return (
        <div className="App">

            <div>
            <h1>Please login</h1>
            <form>
                    <input type="email" name="" id="" placeholder="email" />
                    <br />
                    <input type="password" name="" id=""  placeholder="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to Revulation Dental & Care website? <Link to="/register">Create Account</Link></p>
            </div>
            
            
            <button onClick={handleGoogleSignIn}>Google sign In</button>

         



            
        </div>
    );
};

export default Login;