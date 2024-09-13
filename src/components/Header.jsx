import React from 'react';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

const Header=() => {
  const [text]=useTypewriter({
    words: [
      'frontend developer',
      'UI/UX designer',
      'backend developer',
     " Creative Coder",
      'full-stack developer',
      "Software Whiz"
      
    ],
    loop: true,
    typeSpeed: 80,// Speed at which characters are typed
    deleteSpeed: 80,// Speed at which characters are deleted
    delaySpeed: 1200  // Delay before starting to delete
  });

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-white">
        I'm
        <span className="mx-2"></span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Sumit Vikram Singh
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">
          , a {text}
          <Cursor />
        </span>
      </h1>
    </div>
  );
};

export default Header;
