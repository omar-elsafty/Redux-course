import React, { useState } from 'react';
import Input from './Input';
import Joi from "joi";

const HocRegister = () => {
    let schema = {
        userName: Joi.string().min(3).max(5).required().label("User Name"),
        password: Joi.string().min(3).max(5).required().label("Password"),
        email: Joi.string().min(4).max(6).required().label("Email"),
    }
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
    }


    return (
        <form onSubmit={handleSubmit}>

            <Input
                label='Username'
                data={userName}
                setData={setUserName}
                validation={schema.userName}
            />

            <Input
                label='Password'
                data={password}
                type='number'
                setData={setPassword}
                validation={schema.password}
            />

            <Input
                label='Email'
                data={email}
                setData={setEmail}
                validation={schema.email}
            />

            <button type='submit' className='btn '> submit</button>
        </form>
    );
}

export default HocRegister;