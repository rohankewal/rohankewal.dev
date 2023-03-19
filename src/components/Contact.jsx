import React from 'react';
import Title from './Title';

export default function Contact() {
	return (
		<div className='flex flex-col mb-10 mx-auto'>
			<div className='flex justify-center items-center'>
				<form
					action='https://getform.io/f/(customSlugHere)'
					method='POST'
					className='flex flex-col w-full md:w-7/12'
				>
					<Title>Contact</Title>
					<p className='pb-4'>
						Looking for a web devloper? Just want to chat? Send me a message!
					</p>
					<input
						type='text'
						name='name'
						placeholder='Name'
						className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
					/>
					<input
						type='text'
						name='email'
						placeholder='Email'
						className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
					/>
					<textarea
						name='message'
						placeholder='Message'
						rows='10'
						className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
					/>
					<button
						type='button'
						className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-stone-100 bg-black hover:stroke-white'
					>
						Get in touch with me
					</button>
				</form>
			</div>
		</div>
	);
}
