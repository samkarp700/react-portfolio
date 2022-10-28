import React from 'react';

function Navigation({setPage, Contact, About, Resume, Projects}) {
    return (
        <header class="sticky top-0 w-full px-2 py-4 bg-green sm:px-4 shadow-xl">
        <div class="flex items-center grid justify-items-end mx-auto max-w-7xl">
            <span class="text-2xl italic text-dark">Samantha Karpovck</span>
            <div class="flex items-center space-x-1">
            <ul class="space-x-2 md:inline-flex">
                <li class="px-4 py-2 text-dark hover:w-full italic hover:font-bold">
                    <a href="#about" onClick={() => setPage(<About/>)}>About Me </a>
                </li>
                <li className="px-4 py-2 text-dark hover:w-full italic hover:font-bold">
                    <span a href="#projects" onClick={() => setPage(<Projects/>)}>Portfolio </span>
                </li>
                <li className="px-4 py-2 text-dark hover:w-full italic hover:font-bold">
                    <span a href="#resume" onClick={() => setPage(<Resume/>)}>Resume </span>
                </li>
                <li className="px-4 py-2 text-dark hover:w-full italic hover:font-bold">
                    <span a href="#contact" onClick={() => setPage(<Contact/>)}>Contact Me! </span>
                </li>
            </ul>
        </div>
        </div>
        </header>

    )
}


export default Navigation;