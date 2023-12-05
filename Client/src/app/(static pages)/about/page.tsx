import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white" style={{ color: '#2563eb' }}>
        About 
      </h1>

      <div className="flex items-center justify-center mb-2 sm:mb-0 space-x-2 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6" alt="Flowbite Logo" />
          <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">E_Learning</span>
        </div>

      <p className="mb-4 mt-4 text-gray-700 dark:text-gray-300">
        E_Learning is an online platform dedicated to providing high-quality education through a
        variety of courses and learning materials. Our mission is to make learning accessible
        worldwide.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Whether you&apos;re a student, professional, or a lifelong learner, E_Learning has courses
        covering technology, business, arts, and sciences.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Key Features:
        <ul className="list-disc list-inside">
          <li>Wide range of courses across disciplines.</li>
          <li>Experienced and knowledgeable instructors.</li>
          <li>Interactive and engaging learning materials.</li>
          <li>Flexible scheduling to fit your lifestyle.</li>
          <li>Community forums for collaboration and discussion.</li>
        </ul>
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        At E_Learning, we believe in the power of education to transform lives. Join us on this
        journey of continuous learning and skill development.
      </p>
    </div>
  );
};

export default About;
