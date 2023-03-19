import React from 'react';

export default function Intro() {
	return (
		<div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
			<img src='/public/rohan.png' className='rounded-full w-36 h-36' />
			<h1 className='pt-4 text-4xl md:text-6xl mb-1 md:mb-3 font-bold'>
				I'm Rohan!
			</h1>
			<p className='text-base text-stone-600 md:text-xl mb-3 font-medium'>
				Full-Stack Web Developer
			</p>
			<p className='text-md max-w-xl mb-6 font-bold'>
				I am a fullstack web developer. I work with WordPress, Shopify and
				ReactJS. In my spare time, I love to play video games and work out.
			</p>
			<br />
			<p className='text-md max-w-xl mb-6 font-bold'>
				I will be documenting my journey as a developer and all other business
				ventures on this blog and share thm with you. Here's to the future!
			</p>
		</div>
	);
}
