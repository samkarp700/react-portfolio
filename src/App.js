import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
  <div class="bg-light mb-auto">
  <div className="flex flex-col items-center">
  <h1 className="text-4xl text-center">
  </h1>
  {page}
  </div>
  <div class='w-full h-10'>
  <Footer />
  </div>
  </div>
  </div>
  );
 }

export default App;
