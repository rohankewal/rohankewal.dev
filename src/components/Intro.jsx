export default function Intro() {
  return (
    <div className='bg-gray-100 dark:bg-stone-800 py-10 md:py-20 text-center'>
      <div className='max-w-3xl mx-auto p-4 md:p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 dark:text-white'>
        <img src='/profile-pic.jpg' className='rounded-full w-24 md:w-36 h-24 md:h-36 mx-auto mb-2 md:mb-4' alt='Profile Picture' />
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-stone-900 dark:text-stone-900 mb-2'>
          Hi, I'm Rohan!
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl text-stone-600 font-medium mb-2 md:mb-4'>
          WordPress Web Developer
        </p>
        <p className='text-base md:text-lg lg:text-xl text-stone-700 mb-4 lg:mb-6 font-normal leading-relaxed'>
          I'm a full-stack web developer based in New Jersey with expertise in WordPress, Shopify, and SquareSpace. In my free time, I enjoy gaming, working out, and spending time with family.
        </p>
        <a href="/about" className='text-blue-500 no-underline hover:underline text-lg'>Learn More</a>
      </div>
    </div>
  );
}
