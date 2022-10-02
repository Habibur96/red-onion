import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../images/logo2.png';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user

    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = async (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)
        signInWithEmailAndPassword(email, password);
        navigate('/');

    }
    return (
        <div className='container mx-auto w-25 mt-5'>
            <img className='mt-5 mb-5' src={logo} height={90} alt="" />

            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <button type="submit" class="btn btn-danger btn-lg">Login</button>

            </Form>
        </div>
    );
};

export default Login;