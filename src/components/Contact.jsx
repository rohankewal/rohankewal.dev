import React from 'react';
import Title from './Title';

export default function Contact() {
	return (
		<div className='flex flex-col mb-10 mx-auto'>
			<div className='flex justify-center items-center'>
				<form className='flex flex-col w-full md:w-7/12'>
					<Title>Contact</Title>
					<p className='pb-4'>
						Looking for a web devloper? Just want to chat? Send me a message!
					</p>
					<a href='mailto:rkewalramani4@gmail.com?subject=Would Love To Chat'>
						<button
							type='submit'
							className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-stone-100 bg-black hover:stroke-white'
						>
							Get in touch with me
						</button>
					</a>
				</form>
			</div>
		</div>
	);
}
