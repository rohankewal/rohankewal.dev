import React from "react";

export default function PortfolioItem({ title, imgUrl, stack, link }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="border-2 border-gray-200 dark:border-stone-900 rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-105"
		>
			<img
				src={imgUrl}
				alt="portfolio"
				className="object-cover w-full h-56 md:h-64"
			/>
			<div className="p-4">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-gray-800 dark:text-white">
					{title}
				</h3>
				<div className="flex flex-wrap gap-2 flex-row items-center justify-start text-sm">
					{stack.map((item) => (
						<span
							key={item}
							className="inline-block bg-gray-200 dark:bg-stone-900 text-gray-800 dark:text-white px-2 py-1 font-semibold rounded-md"
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</a>
	);
}
