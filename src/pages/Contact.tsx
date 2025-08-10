import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="flex-grow flex items-center justify-center p-4 md:p-8">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Us
        </h1>
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-500" />
            <a href="mailto:support@backgroundremover.com" className="text-blue-500 hover:text-blue-600">
              support@backgroundremover.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MessageSquare className="h-5 w-5 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-300">
              Response time: Within 24 hours
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;