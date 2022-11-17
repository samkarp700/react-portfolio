import React from 'react';
import bookNook from '../../assets/book-nook.png';
import noteTaker from '../../assets/note-taker.png';
import socialThoughts from '../../assets/social-thoughts.jpg';
import teamProfile from '../../assets/team-profile.jpg';
import workDay from '../../assets/work-day.png';
import nextGame from '../../assets/your-next-game.png';
import bookNook2 from '../../assets/booknook2.png';

function Projects() {
    return (
        <div class="h-screen bg-light p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 flex-1 overflow-y-auto">
            <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full object-contain" src={bookNook} alt="web application Book Nook"></img>
                <div class="px-6 py-4">
                    <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://booknook-stars.herokuapp.com/">Book Nook </a>
                     </div>
                    <p class="text-dark text-base">
                    Version 1 of this application was presents a user with seeded books using MySQL. 
                    This application is designed to provide a platform and community for parents 
                    and/or teachers of young readers. The main features of the application include account registration, access to database of books, 
                    and post comments reviewing the existing books.
                    The application was built using HTML, JavaScript, jQuery, Node.js, and MySQL.
                    Can't wait for you to see version 2! 
                    </p>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full object-contain" src={bookNook2} alt="web application Book Nook v2"></img>
                <div class="px-6 py-4">
                    <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://book-nook2.herokuapp.com/">Book Nook Volume 2 </a>
                     </div>
                    <p class="text-dark text-base">
                    Version 2 of this application is completely revamped from a UI perspective as well as the technologies used. 
                    The application uses the full MERN stack giving the user the ability to create accounts, set and track reading goals, 
                    search books using GoogleBooksAPI and save them to their reading list. Additionally, a user can add comments to books saved
                    and find and add friends to their profile. 
                    </p>
                </div>
                </div>

                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full object-contain" src={noteTaker} alt="note taking application"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://floating-river-07736.herokuapp.com/">Note Taker </a>
                     </div>
                    <p class="text-dark text-base">
                    In this application, a user can add new notes with titles and text. Each new note is saved and available for viewing by clicking the title shown on the left side of the screen. Users can also delete notes.
                    </p>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-fit" src={socialThoughts} alt="technology"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://github.com/samkarp700/social-thoughts">Social Thoughts </a>
                    <p class="text-dark text-base">
                    This application was created using MongoDB and Express.js. In this project, I created an API for a social network application where users can create a friend list, post their thoughts and react to other user thoughts.
                    This application was built with MongoDB, Mongoose, Express and Node. 
                    I created a short video example showing how the application works on the backend using Insomnia. <a class="hover:font-bold" href="https://youtu.be/1qoW1ygK76M">Check it out!</a> 
                    </p>
                </div>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full object-contain" src={teamProfile} alt="team profile meeting"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://github.com/samkarp700/team-profile">Team Profile Builder </a>
                    <p class="text-dark text-base">
                    Using Node and Inquirer, a user can add employees from their team, their role, ID, email, and additional information tailored to their individual role to publish.
                    In this example, I created an employee database using characters from The Office. <a class="hover:font-bold" href="https://samkarp700.github.io/team-profile/dist/index.html">Check it out!</a>
                    </p>
                </div>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full object-contain" src={workDay} alt="workday scheduler application"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://samkarp700.github.io/workday-scheduler/">Work Day Scheduler </a>
                    <p class="text-dark text-base">
                    This application allows users to add schedule events throughout their day by simply adding the event within the text entry box. 
                    The application was built using HTML, CSS, JavaScript and jQuery. 
                    </p>
                </div>
                </div>
                </div>
                <div class="rounded overflow-visible shadow-lg border-2 border-green">
                <img class="w-full object-contain" src={nextGame} alt="application for your next game"></img>
                <div class="px-6 py-4">
                <div class="mb-2">
                     <a class="font-italic hover:font-bold text-xl" href="https://samkarp700.github.io/your-next-game/">Your Next Game</a>
                    <p class="text-dark text-base">
                    This project allows you to search a game and see relevant information such as genre, game systems that it is available for, and see reviews, and ratings. You also have similar games listed that you may also be interested in.
                    
                    </p>
                </div>
                </div>
                </div>
            </div>
    )
    
}


export default Projects;