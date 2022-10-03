import React from 'react';
import google from '../../images/google.png';
import github from '../../images/gitHub.png';

const SocialLogin = () => {
    return (

        <div >


            <div className='d-flex align-items-center mt-5 mb-4'>
                <div style={{ height: '3px' }} className='bg-danger w-50'></div>
                <p className='mt-3 px-3 fs-4'>Or</p>
                <div style={{ height: '3px' }} className='bg-danger w-50'></div>
            </div>

            <div>
                <button type="button" class="btn btn-dark btn-lg fs-5 fw-bolder"> <img height={41} src={google} alt="" />  SignIn Google</button> <br /><br />
                <button type="button" class="btn btn-danger btn-lg fs-5 fw-bolder "><img height={45} src={github} alt="" style={{ height: '40' }} /> SignIn Github</button>
            </div>



        </div>

    );
};

export default SocialLogin;