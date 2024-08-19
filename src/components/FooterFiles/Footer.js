
import React from 'react';
import Media from './Media';
import Signature from './Signature';





const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 mt-8">
      <Media />
      <div className="w-full md:w-3/4 flex justify-center">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2168.0741885597145!2d32.81971795131058!3d39.78186405760228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3423274e2f30b%3A0x47bfec2be9776ed5!2zQW5rYXJhIMOcbml2ZXJzaXRlc2kgQmlsZ2lzYXlhciBNw7xoZW5kaXNsacSfaSBCw7Zsw7xtw7w!5e0!3m2!1sen!2str!4v1722704870021!5m2!1sen!2str"
          style={{ border: 0, width:"100%", height:"100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Signature></Signature>
    </footer>
  );
};

export default Footer;
