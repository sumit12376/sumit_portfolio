import React, { useState, useEffect } from 'react';

const Header = () => {
  const [role, setRole] = useState('frontend developer');

  useEffect(() => {
    const roles = ['frontend developer />','backend developer />', 'full-stack developer />','UI/UX designer />'];
    const interval = setInterval(() => {
      const randomRole = roles[Math.floor(Math.random() * roles.length)];
      setRole(randomRole);
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-white">
        I'm
        <span className="mx-2"></span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Sumit Vikram Singh
        </span>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300'>, a {role}</span>



      </h1>
    </div>
  );
};

export default Header;
