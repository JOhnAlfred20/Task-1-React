// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Before footer.css"

const BeforeFooter = () => {
  return (
    <div className="container1 mx-auto px-4 py-8  bottom-12 ">
    <div className="flex flex-wrap -mx-4">
      {/* Location Section */}
      <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
        <h3 className="text-xl font-semibold mb-4 text-center" >LOCATION</h3>
        <p className="text-white text-center">2215 John Daniel Drive</p>
        <p className="text-white text-center">Clark, MO 65243</p>
      </div>

      {/* Around the Web Section */}
       {/* Around the Web Section */}
       <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4 text-center">AROUND THE WEB</h3>
          <div className="flex justify-center gap-4">
            <i className="fab fa-facebook text-white hover:text-blue-600 transition-colors duration-300 text-xl"></i>
            <i className="fab fa-twitter text-white hover:text-blue-400 transition-colors duration-300 text-xl"></i>
            <i className="fab fa-linkedin text-white hover:text-blue-700 transition-colors duration-300 text-xl"></i>
            <i className="fa-solid fa-globe  text-white hover:text-green-500 transition-colors duration-300 text-xl"></i>
          </div>
        </div>

      {/* About Freelancer Section */}
      <div className="w-full md:w-1/3 px-4">
        <h3 className="text-xl font-semibold mb-4">ABOUT FREELANCER</h3>
        <p className="text-white">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
  </div>
  );
};

export default BeforeFooter;
