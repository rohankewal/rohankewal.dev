import Title from './Title';

export default function Contact() {
  return (
    <div className='max-w-5xl mx-auto py-12 px-4'>
      <Title>Contact</Title>
      <div className='border border-gray-200 dark:border-gray-800 rounded-xl p-6 mt-6'>
        <p className='text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'>
          Looking for a web developer or just want to chat? Send me a message!
        </p>
        <p className='text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
          You can also check me out on{' '}
          <a href='#' className='text-blue-600 dark:text-blue-400 hover:underline'>
            UpWork
          </a>
          .
        </p>
        <a href='mailto:rkewalramani4@gmail.com?subject=Would Love To Chat'>
          <button className='px-6 py-2.5 text-sm font-medium rounded-lg text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors'>
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
}
