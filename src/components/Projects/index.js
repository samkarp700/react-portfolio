import React from 'react';
import bookNook from '../../assets/book-nook.png';
import noteTaker from '../../assets/note-taker.png';
import socialThoughts from '../../assets/social-thoughts.jpg';
import teamProfile from '../../assets/team-profile.jpg';
import workDay from '../../assets/work-day.png';
import nextGame from '../../assets/your-next-game.png';

function Projects() {
    return (
        <div class="h-screen bg-light p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 flex-1 overflow-y-auto">
            <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full" src={bookNook} alt="web application Book Nook"></img>
                <div class="px-6 py-4">
                    <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://booknook-stars.herokuapp.com/">Book Nook </a>
                     </div>
                    <p class="text-dark text-base">
                    This application is designed to provide a platform and community for parents 
                    and/or teachers of young readers. The main features of the application include account registration, access to database of books, 
                    and post comments reviewing the existing books.
                    The application was built using HTML, JavaScript, jQuery, Node.js, and MySQL.
                    </p>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full" src={noteTaker} alt="note taking application"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://floating-river-07736.herokuapp.com/">Note Taker </a>
                     </div>
                    <p class="text-dark text-base">
                    This application is designed to provide a platform and community for parents 
                    and/or teachers of young readers. The main features of the application include account registration, access to database of books, 
                    and post comments reviewing the existing books.
                    The application was built using HTML, JavaScript, jQuery, Node.js, and MySQL.
                    </p>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full" src={socialThoughts} alt="technology"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://github.com/samkarp700/social-thoughts">Social Thoughts </a>
                    <p class="text-dark text-base">
                    This application is designed to provide a platform and community for parents 
                    and/or teachers of young readers. The main features of the application include account registration, access to database of books, 
                    and post comments reviewing the existing books.
                    The application was built using HTML, JavaScript, jQuery, Node.js, and MySQL.
                    </p>
                </div>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full" src={teamProfile} alt="team profile meeting"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://github.com/samkarp700/team-profile">Team Profile Builder </a>
                    <p class="text-dark text-base">
                    This application is designed to provide a platform and community for parents 
                    and/or teachers of young readers. The main features of the application include account registration, access to database of books, 
                    and post comments reviewing the existing books.
                    The application was built using HTML, JavaScript, jQuery, Node.js, and MySQL.
                    </p>
                </div>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full" src={workDay} alt="workday scheduler application"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://samkarp700.github.io/workday-scheduler/">Work Day Scheduler </a>
                    <p class="text-dark text-base">
                    This application is designed to provide a platform and community for parents 
                    and/or teachers of young readers. The main features of the application include account registration, access to database of books, 
                    and post comments reviewing the existing books.
                    The application was built using HTML, JavaScript, jQuery, Node.js, and MySQL.
                    </p>
                </div>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full" src={nextGame} alt="application for your next game"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://samkarp700.github.io/your-next-game/">Your Next Game</a>
                    <p class="text-dark text-base">
                    This application is designed to provide a platform and community for parents 
                    and/or teachers of young readers. The main features of the application include account registration, access to database of books, 
                    and post comments reviewing the existing books.
                    The application was built using HTML, JavaScript, jQuery, Node.js, and MySQL.
                    </p>
                </div>
                </div>
                </div>
            </div>
    )
    
}


export default Projects;