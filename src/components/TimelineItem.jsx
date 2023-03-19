import React from 'react';

export default function TimelineItem({ year, title, duration, details }) {
	return (
		<ol className='flex flex-col text-black md:flex-row relative border-l border-stone-200'>
			<li className='mb-10 ml-4'>
				<div className='absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border border-white' />
				<p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
					<span className='inline-block px-2 py-1 font-semibold text-stone-100 bg-black rounded-md'>
						{year}
					</span>
					<h3 className='text-lg font-semibold text-stone-600'>{title}</h3>
					<div className='my-1 text-sm font-normal leading-none text-stone-600'>
						{duration}
					</div>
				</p>
				<p className='my-2 text-base font-normal text-stone-600'>{details}</p>
			</li>
		</ol>
	);
}
