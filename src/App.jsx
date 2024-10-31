
import React, { useState, useEffect } from 'react';
import './App.css'; 
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SplashScreen from './components/SplashScreen';


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      
    }, 4000); 

   
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
     
      {!showSplash && (
        <div>
          <Navbar />
          <Hero />
          <About />
          
          <Projects />
          <Contact />
          <Footer />
        
        </div>
      )}
    </>
  );
}

export default App;
