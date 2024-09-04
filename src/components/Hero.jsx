import React from 'react';
import HeroImage from '../assets/hero-image.png';
import Header from './Header';
const Hero = () => {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1DgsD8J4zFA6DDVmszXhRG2vDaNDbBSnX/view?usp=drivesdk ', '_blank');
  };

  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={HeroImage}
        alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
<Header/>


      <div className='mt-8 space-x-4'>
 
        <button
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          onClick={handleResumeClick}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
