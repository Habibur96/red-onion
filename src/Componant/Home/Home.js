

import React from 'react';
import './Home.css'
import logo from '../../images/bannerbackground.png'
import { Button, Form, InputGroup } from 'react-bootstrap';
// mport logo from '../../images/logo.png'
const Home = () => {
    return (

        <div class='pic'>

            <img src={logo} alt="" />
            <div class='text'>

                <h1 className='mb-5'>Best food waiting for your belly</h1>
                <InputGroup className='container w-25 mx-auto '>
                    <Form.Control
                        placeholder=""
                        aria-label=""
                        aria-describedby=""
                    />
                    <Button variant="dark" id="">
                        Search
                    </Button>
                </InputGroup>

            </div>
        </div>
    );
};

export default Home;