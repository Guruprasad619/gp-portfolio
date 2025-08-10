import React from 'react';

const About: React.FC = () => {
  return (
    <main className="flex-grow flex items-center justify-center p-4 md:p-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Background Remover
        </h1>
        <div className="prose dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Background Remover is a powerful tool that helps you remove backgrounds from images instantly.
            Perfect for e-commerce products, profile pictures, or any creative project that needs
            transparent backgrounds.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Our AI-powered technology ensures high-quality results while maintaining the fine details
            of your images. Best of all, it's free to use and requires no sign-up!
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;