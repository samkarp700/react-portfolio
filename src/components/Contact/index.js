import React from 'react';

function Contact() {
    return (
        <section class="bg-light">
        <form class="h-screen container mx-auto grid gap-4 place-content-center static">
            <div class="container-md bg-green shadow-lg rounded px-20 py-20">
            <h1 class="italic font-bold text-center">Contact Me!</h1>
            <div>
                <label for='name'
                class="font-medium text-dark mr-4"
                >Name:</label>
                <input type="text"/>
            </div>
            <div>
                <label for='email'
                class="font-medium text-dark mr-4"
                >Email:</label>
                <input type="email"></input>
            </div>
            <div>
                <label for="message"
                class="font-medium text-dark mr-4"
                >Message:</label>
                <textarea name="message"></textarea>
            </div>
            <button type="submit"
            class="hover:bg-yellow bg-light relative mt-2 w-full inline-flex items-center justify-center px-6 rounded-full shadow-lg"
            >Submit</button>
            </div>
        </form>
        </section>
    )
}

export default Contact;