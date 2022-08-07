import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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
    const navigateSignUp = event => {
        navigate('/signup')
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
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New to genius car? <span onClick={navigateSignUp} className="text-primary" style={{ cursor: 'pointer' }}>Create New Account</span></p>
            </div>

        </Container>
    );
};

export default Login;