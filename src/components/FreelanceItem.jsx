import React from "react";

export default function FreelanceItem({
	title,
	imgUrl,
	service,
	link,
	clientLogo,
	testimonial,
}) {
	return (
		<div className="border-2 border-gray-200 dark:border-stone-900 rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-105">
			<img
				src={imgUrl}
				alt="portfolio"
				className="object-cover w-full h-56 md:h-64"
			/>
			<div className="p-4">
				<div className="flex items-center justify-between">
					<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-gray-800 dark:text-white">
						{title}
					</h3>
					<img src={clientLogo} alt="Client Logo" className="h-8 w-auto" />
				</div>
				<div className="flex flex-wrap gap-2 flex-row items-center justify-start text-sm">
					{service.map((item) => (
						<span
							key={item}
							className="inline-block bg-gray-200 dark:bg-stone-900 text-gray-800 dark:text-white px-2 py-1 font-semibold rounded-md"
						>
							{item}
						</span>
					))}
				</div>
				<p className="mt-4 text-gray-600 dark:text-gray-300">{testimonial}</p>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
				>
					View Project
				</a>
			</div>
		</div>
	);
}
