import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';

//import header - with nav
//import footer - links


function App() {
  const [page, setPage] = useState(<About/>);

  return (
    <div>
    <Navigation
    setPage = {setPage}
    Contact = {Contact}
    About = {About}
    Projects = {Projects}
    Resume = {Resume}
    >
    </Navigation>
  
  {page}
  <Footer 
  setPage = {setPage}
  Contact = {Contact}
  About = {About}
  />
  </div>
  );
 }

export default App;
