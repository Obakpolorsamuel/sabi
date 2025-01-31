import React, { useState } from 'react';
import axios from 'axios';
import { MainContainer } from './style'
import { Link, useNavigate } from 'react-router-dom'



const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post('http://[::1]:8080/v1/api/auth/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Login successful', response.data);

                localStorage.setItem('authToken', response.data.token); 

                navigate('/dashboard');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Login failed');
        }
    };
    return (
        <MainContainer>
            <div className='main_container'>
                <div className='input_container'>
                    <div className='header'>
                        <span>Login</span>
                        <h1>Welcome Back</h1>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className='inputs'>
                            <input type="email" placeholder='Enter your email address' value={email}
                                onChange={(e) => setEmail(e.target.value)}></input>
                            <input type="password" placeholder='Password' value={password}
                                onChange={(e) => setPassword(e.target.value)}></input>
                            <input type='submit' value={'Login'}></input>
                        </div>
                    </form>
                    <div className='register'>
                        <span className='account'>Dont have an account? <Link to='/register'>Register</Link></span>
                        <span><a href=''>Forgot Password ?</a></span>
                    </div>
                </div>
                <div className='register'>
                    <h2>Copyright 2023 SabiPay</h2>
                    <div className='spans'>
                        <span>Privacy Policy</span>
                        <span>Terms of use</span>
                    </div>
                </div>
            </div>

        </MainContainer>
    )
}

export default Home