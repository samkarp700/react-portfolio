import React from 'react';

function Navigation({setPage, Contact, About, Projects}) {
    return (
        <div className="flex flex-row bg-green grid justify-items-end rounded-lg">
            <ul className="flex-row p-8 ">
                <li className="flex-1 w-24 hover:w-full italic hover:font-bold">
                    <a href="#about" onClick={() => setPage(<About/>)}>About Me </a>
                </li>
                <li className="flex-1 w-24 hover:w-full italic hover:font-bold">
                    <span a href="#projects" onClick={() => setPage(<Projects/>)}>Portfolio </span>
                </li>
                <li className="flex-1 w-24 hover:w-full italic hover:font-bold">
                    <span a href="#contact" onClick={() => setPage(<Contact/>)}>Contact Me! </span>
                </li>
            </ul>
        </div>
    )
}


export default Navigation;