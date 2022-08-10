import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorElement;
    const emailRef = useRef('')
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }
    if (user) {
        navigate(from, { replace: true })
    }
    if(loading){
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p>Error: {error.message}</p>
    }
    const navigateSignUp = event => {
        navigate('/signup')
    }
    const resetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
    }



    return (
        <Container>
            <h2 className='text-center py-3'>Login</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept genius car terms and conditions" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mx-auto d-block w-50 mb-3">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p className='text-center'>Forget Password? <span onClick={resetPassword} className="text-primary" style={{ cursor: 'pointer' }}>Reset Password</span></p>
                <p className='text-center'>New to genius car? <span onClick={navigateSignUp} className="text-primary" style={{ cursor: 'pointer' }}>Create New Account</span></p>
                <p className='or-text text-center'><span>Or</span></p>
                <SocialLogin></SocialLogin>
            </div>

        </Container>
    );
};

export default Login;