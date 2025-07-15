import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (<>
    <footer className="border-t-4 border-orange-650 mt-2 pt-3 text-center text-black bg-white">
      <div className="flex justify-center space-x-6 mb-2">
        <a 
          href="https://github.com/devrahul7/DevHire-Galaxy.git" 
          aria-label="Visit our GitHub profile" 
          className="hover:text-orange-600 transition-colors duration-300"
        >
          <Github size={24} />
        </a>
        <a 
          href="https://linkedin.com" 
          aria-label="Connect with us on LinkedIn" 
          className="hover:text-orange-600 transition-colors duration-300"
        >
          <Linkedin size={24} />
        </a>  
        <a 
          href="https://twitter.com" 
          aria-label="Follow us on Twitter" 
          className="hover:text-orange-600 transition-colors duration-300"
        >
          <Twitter size={24} />
        </a>
      </div>
      <p className="text-lg font-semibold">
        &copy; 2025 DevHire Galaxy. All rights reserved.
      </p>
    </footer>
      <div className="border-t-4 border-orange-650 mt-2 pt-3 text-center text-black bg-white"></div>
  </>);
};

export default Footer;
