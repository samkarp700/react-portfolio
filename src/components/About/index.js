import React from 'react';
import aboutImage from "../../assets/me.jpeg";


function About() {
    return (
        <div class="bg-light">
            <div class="md:py-5 xl:py-32 pb-10 md:p-0 p-5">
                <div class="max-w-5xl mx-auto">
                    <div class="lg:grid lg:grid-cols-2">
                    <img class="w-fit h-96 rounded-lg" src={aboutImage} alt="author of page"></img>
                    <div class="mt-8  md:py-0 pb-20">
                        <h1 class="italic px-12 md:px-0 md:text-4xl text-2xl font-medium tracking-light md:space-y-2 pl-10 pb-6  md:pl-0">
                            <span class="block">About Me</span>
                        </h1>
                        <p class='italic leading-relaxed'>
                    Welcome to my portfolio. I began coding in the middle of 2022 when I enrolled in UCF's Full Stack Web Engineering Bootcamp. 
                    I currently work as a customer success engineer where I am responsible for configuring and implementing clients into our platform. 
                    My previous experience ranges from teaching to being a customer success manager as well as a self-taught vegan baker on the side. 
                    I love to stretch my creativity by finding new and efficient ways to solve problems. 
                    Take a look at my portfolio and resume for additional information about me and what I've worked on!
            </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default About