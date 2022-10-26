import React from 'react';

function Navigation({setPage, Contact, About, Projects}) {
    return (
        <div>
            <button onClick={() => setPage(<Projects/>)}> test </button>
        </div>
    )
}


export default Navigation;