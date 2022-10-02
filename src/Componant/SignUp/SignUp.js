import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import logo from '../../images/logo2.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value

        await createUserWithEmailAndPassword(email, password);
        navigate('/login');
    }


    return (

        <div className='container mx-auto w-25 mt-5'>
            <img className='mt-5 mb-5' src={logo} height={90} alt="" />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Name" required />
                    <Form.Text className="text-muted" >

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <button type="submit" class="btn btn-danger btn-lg"> Register</button>

            </Form>


        </div >
    );
};

export default SignUp;
