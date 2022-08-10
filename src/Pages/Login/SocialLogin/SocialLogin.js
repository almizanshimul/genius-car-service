import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userG, loadingG, errorG] = useSignInWithGithub(auth);
    const location = useLocation();
    const navigate = useNavigate();

    // const from = location.state?.from?.pathname || "/";
    // if (user) {
    //     navigate(from, { replace: true })
    // }

    let userMessage;
    let errorMessage;
    let loadingMessage;
    if (user || userG) {
        console.log(user.auth);
        userMessage = <p>User Email: {user?.email}{userG?.email}</p>
    }
    if (error || errorG) {
        errorMessage = <p className='text-danger'>Error: {error?.message}{errorG?.message}</p>
    }
    if (loading || loadingG) {
        loadingMessage = <p>Loading...</p>;
    }




    return (
        <div>
            {userMessage}
            {errorMessage}
            {loadingMessage}
            <Link to="/login" className='connect-social connect-goggle' onClick={() => { signInWithGoogle() }}><img alt="Google" src="https://i.ibb.co/txyDHDN/google.png" /> Connect with Goggle</Link>
            <Link to="/login" className='connect-social connect-github' onClick={() => { signInWithGithub() }}><img alt="GitHub" src="https://i.ibb.co/M8hYGyn/github.png" /> Connect with GitHub</Link>
            <Link to="/login" className='connect-social connect-facebook'><img alt="GitHub" src="https://i.ibb.co/xqzRbsf/facebook.png" /> Connect with Facebook</Link>
        </div>
    );
};

export default SocialLogin;