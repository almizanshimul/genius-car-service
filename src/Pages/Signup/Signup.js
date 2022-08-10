import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';


const Signup = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


    const handleCreateAccount = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassowrd = event.target.confirmPassword.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

    }
    if (user) {
        navigate('/');
    }



    return (
        <Container>
            <h2 className='text-center py-3'>Register</h2>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleCreateAccount}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
                    </Form.Group>
                    <div className="terms-group d-flex align-content-center my-2">
                        <input onClick={() => { setAgree(!agree) }} type="checkbox" name="terms" id="" className='me-2' />
                        <label className={agree ? 'text-dark' : 'text-danger'} htmlFor="terms">Accept Genius Car terms and conditions</label>
                    </div>
                    <Button disabled={!agree} variant="primary" type="submit" className='w-50 mx-auto d-block mb-3'>
                        Sign Up
                    </Button>
                </Form>
                <p className='text-center'>Already have an account? <Link to="/login" className="text-primary text-decoration-none " style={{ cursor: 'pointer' }}>Login</Link></p>
                <p className='or-text text-center'><span>Or</span></p>
                <SocialLogin></SocialLogin>
            </div>

        </Container>
    );
};

export default Signup;