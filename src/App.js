import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

//import header - with nav
//import footer - links


function App() {
  const [page, setPage] = useState(<About/>);

  return (
    <div class="bg-light">
    <Navigation
    setPage = {setPage}
    Contact = {Contact}
    About = {About}
    Projects = {Projects}
    >
    </Navigation>
  <div class="bg-light">
  <div className="flex flex-col items-center mt-16">
  <h1 className="text-4xl text-center">
  </h1>
  {page}
  <button className="bg-black text-white p-2.5 w-fit mt-9 ">
  </button>
  </div>
  </div>
  </div>
  );
 }

export default App;
