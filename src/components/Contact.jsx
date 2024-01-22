import React from 'react';
import Title from './Title';

export default function Contact() {
  return (
    <div className='max-w-6xl mx-auto my-20 px-4'>
      <Title>Contact</Title>
      <div className='bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6'>
        <p className='text-lg md:text-xl mb-4 text-stone-700'>
          Looking for a web developer or just want to chat? Send me a message!
        </p>
        <p className='text-lg md:text-xl mb-4 text-stone-700'>
          You can also check me out on{' '}
          <a href='#' className='text-green-500 underline'>
            UpWork
          </a>
          !
        </p>
        <a href='mailto:rkewalramani4@gmail.com?subject=Would Love To Chat'>
          <button className='block w-full md:w-max px-8 py-3 text-lg font-medium rounded-md text-white bg-stone-500 hover:bg-stone-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500'>
            Get in touch with me
          </button>
        </a>
      </div>
    </div>
  );
}

