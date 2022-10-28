import React from 'react';


function Footer({setPage, Contact, About}) {
    return (
        <footer class="sticky bottom-0 w-full p-4 bg-green rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <span class="text-sm text-dark sm:text-center">Copyright 2022</span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-dark sm:mt-0">
            <li class="mr-4 hover:font-bold md:mr-6">
                <a href="#contact" onClick={() => setPage(<Contact/>)}>Contact</a>
            </li>
            <li class="mr-4 hover:font-bold md:mr-6">
                <a href="#about" onClick={() => setPage(<About/>)} >Home</a>
            </li>
        </ul>
        </footer>
    )
}


export default Footer;