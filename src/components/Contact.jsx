import { useState } from 'react';
import Title from './Title';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:rkewalramani4@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className='max-w-5xl mx-auto py-12 px-4'>
      <Title>Contact</Title>
      <div className='border border-gray-200 dark:border-gray-800 rounded-xl p-6 mt-6'>
        <p className='text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
          Looking for a web developer or just want to chat? Send me a message!
        </p>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='Name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 transition-colors'
            />
            <input
              type='email'
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 transition-colors'
            />
          </div>
          <textarea
            placeholder='Message'
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 transition-colors resize-none'
          />
          <button
            type='submit'
            className='px-6 py-2.5 text-sm font-medium rounded-lg text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors'
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
