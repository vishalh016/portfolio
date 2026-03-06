import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-light-secondary dark:bg-secondary py-6 mt-20">
      <div className="container mx-auto px-6 text-center text-gray-500 dark:text-gray-500">
        <p>&copy; {currentYear} Bishal Halder. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;