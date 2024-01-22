// import React from 'react';

export default function Intro() {
  return (
    <div className='bg-gray-100 dark:bg-stone-800 py-20 text-center'>
      <div className='max-w-3xl mx-auto p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 dark:text-white'>
        <img src='/profile-pic.jpg' className='rounded-full w-36 h-36 mx-auto mb-4' alt='Profile Picture' />
        <h1 className='text-4xl md:text-6xl font-bold text-stone-900 dark:text-stone-900 mb-2'>
          Hi, I'm Rohan!
        </h1>
        <p className='text-xl md:text-2xl text-stone-600 font-medium mb-4'>
          WordPress Web Developer
        </p>
        <p className='text-lg text-stone-700 mb-6 font-normal leading-relaxed'>
          I'm a full-stack web developer based in New Jersey with expertise in WordPress, Shopify and SquareSpace. In my free time, I enjoy gaming, working out and spending time with family.
        </p>
        <a href="/about" className='text-blue-500 no-underline hover:underline text-lg'>Learn More</a>
      </div>
    </div>
  );
}
