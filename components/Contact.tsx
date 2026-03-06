import React, { useState } from 'react';

import AnimatedSection from './AnimatedSection';
import SectionHeader from './SectionHeader';
import { Send, Loader, AlertCircle, CheckCircle } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');
    setError('');

    try {
      // Create a FormData object to send to Web3Forms
      // The access_key here should ideally be in a .env file locally as VITE_WEB3FORMS_KEY
      // But for a static frontend site like a CV, it's public anyway.
      // You must replace 'YOUR_ACCESS_KEY_HERE' with an actual Web3Forms access key.
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
      data.append('access_key', 'd1008a40-0202-4819-b670-e11c2f37c51a'); // Replace with your actual Access Key

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage("Thank you for reaching out! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }

    } catch (err) {
      console.error(err);
      setError('Sorry, something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection id={id}>
      <SectionHeader title="Contact Me" subtitle="Get In Touch" />
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-light-secondary dark:bg-secondary border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-light-secondary dark:bg-secondary border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="john.doe@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-light-secondary dark:bg-secondary border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="Hi Bishal, I'd like to connect with you."
            />
          </div>
          <div>
            <button
              data-cursor-pointer
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-rose-600 transition-all duration-300 disabled:bg-rose-400 disabled:cursor-not-allowed"
            >
              {loading ? <><Loader className="animate-spin" size={20} /> Sending...</> : <><Send size={20} /> Send Message</>}
            </button>
          </div>
        </form>
        {error && (
          <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-3">
            <AlertCircle />
            <span>{error}</span>
          </div>
        )}
        {responseMessage && (
          <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-700 dark:text-green-300 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle />
              <h4 className="font-semibold">Message Sent Successfully!</h4>
            </div>
            <div className="pl-6 text-sm">
              <p className="whitespace-pre-wrap">{responseMessage}</p>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default Contact;