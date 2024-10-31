import React from 'react';
import './SplashScreen.css'; 

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="text-4xl font-bold text-white">Welcome to My portfolio Website</h1>
        <p className="text-lg text-white">Loading...</p>
      </div>
    </div>
  );
};

export default SplashScreen;