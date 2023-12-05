// components/ContactInfo.tsx
import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow text-center mb-20 mt-20">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Reach Us</h1>

      <div className="flex items-center justify-center space-x-4">
        {/* Replace the following URLs with your actual social media URLs */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.png" alt="Facebook" className="h-8 w-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.png" alt="Twitter" className="h-8 w-8" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.png" alt="Instagram" className="h-8 w-8" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.png" alt="linkedin" className="h-8 w-8" />
        </a>
        {/* Add more social media icons as needed */}
      </div>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Connect with us on social media to stay updated!
      </p>
    </div>
  );
};

export default ContactInfo;
