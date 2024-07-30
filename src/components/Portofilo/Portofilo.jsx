// eslint-disable-next-line no-unused-vars
import React from 'react';

// Import images if they are in the `src` directory
import port1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

const Portfolio = () => {
  return (
    <section className='portfolio h-auto bg-white mt-12'>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="relative group">
          <img className="h-auto max-w-full rounded-lg" src={port1} alt="Portfolio 1" />
          <div className="overlay absolute inset-0 flex items-center justify-center bg-teal-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl font-bold">+</span>
          </div>
        </div>
        <div className="relative group">
          <img className="h-auto max-w-full rounded-lg" src={port2} alt="Portfolio 2" />
          <div className="overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl font-bold">+</span>
          </div>
        </div>
        <div className="relative group">
          <img className="h-auto max-w-full rounded-lg" src={port3} alt="Portfolio 3" />
          <div className="overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl font-bold">+</span>
          </div>
        </div>
        <div className="relative group">
          <img className="h-auto max-w-full rounded-lg" src={port3} alt="Portfolio 3" />
          <div className="overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl font-bold">+</span>
          </div>
        </div>
        <div className="relative group">
          <img className="h-auto max-w-full rounded-lg" src={port1} alt="Portfolio 1" />
          <div className="overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl font-bold">+</span>
          </div>
        </div>
        <div className="relative group">
          <img className="h-auto max-w-full rounded-lg" src={port2} alt="Portfolio 2" />
          <div className="overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-4xl font-bold">+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
