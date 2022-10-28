import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value })
            console.log('Form', formState);
        }

    };

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your Email is invalid.');
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
    }

    return (
        <section class="bg-light">
            <div class="h-screen flex flex-col items-center justify-center bg-light shadow-lg rounded px-20 py-20">
            <h1 class="italic font-bold text-center">Contact Me!</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'
                class="font-medium text-dark w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                >Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>
            </div>
            <div>
                <label htmlFor='email'
                class="font-medium text-dark w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                >Email:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email"/>
            </div>
            <div>
                <label htmlFor="message"
                class="font-medium text-dark w-full mr-3 py-5 px-4 h-2 rounded mb-2"
                >Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
            </div>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button type="submit"
            class="hover:bg-yellow bg-green relative mt-2 w-full inline-flex items-center justify-center px-6 rounded-full shadow-lg"
            >Submit</button>
            
        </form>
        </div>
        </section>
        
    )
}

export default Contact;