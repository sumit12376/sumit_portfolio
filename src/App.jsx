
import React, { useState, useEffect } from 'react';
import './App.css'; 
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './ThemeContext';
import Education from './components/education';
import Certifications from './components/certification ';

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
            <ThemeProvider>
          <Navbar />
          <Hero />
          <About />
          
          <Projects />
          <Education/>
          <Certifications/>
          <Contact />
          <Footer />
          </ThemeProvider>
        </div>
      )}
    </>
  );
}

export default App;
