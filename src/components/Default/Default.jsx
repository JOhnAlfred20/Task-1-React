// src/components/Default/Default.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Default.css';
import avatar from "../../assets/avataaars (1).svg"; // تأكد من المسار الصحيح للصورة

const Default = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex-column">
          <div>
            <img src={avatar} alt="Avatar" className="avatar-img" />
          </div>
          <div>
            <h2 className="heading">Lorem ipsum dolor sit amet.</h2>
          </div>
          <div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolorem?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Default;

