
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const EmailVerification = () => {
    const [email, setEmail] = useState('');
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    return (
        <Container>
            <h2 className='text-center py-3'>Email Verify</h2>

            <button
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Verify email
            </button>
        </Container >
    );
};

export default EmailVerification;