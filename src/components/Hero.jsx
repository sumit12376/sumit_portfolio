import React from 'react';
import HeroImage from '../assets/hero-image.png';

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
<h1 className="text-5xl font-extrabold text-white">
  I'm
  <span className="mx-2"></span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
    Sumit Vikram Singh
  </span>
  , a frontend developer
</h1>

<p className="mt-6 text-lg text-gray-300 leading-relaxed">
  I specialize in crafting modern, responsive web applications.
</p>


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
