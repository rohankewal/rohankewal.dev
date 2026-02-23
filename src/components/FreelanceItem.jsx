export default function FreelanceItem({
	title,
	imgUrl,
	service,
	link,
	clientLogo,
	testimonial,
}) {
	return (
		<div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
			<img
				src={imgUrl}
				alt={title}
				className="object-cover w-full h-48"
			/>
			<div className="p-4">
				<div className="flex items-center justify-between mb-2">
					<h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
						{title}
					</h3>
					{clientLogo && <img src={clientLogo} alt="Client Logo" className="h-6 w-auto" />}
				</div>
				{service && (
					<div className="flex flex-wrap gap-1.5 mb-3">
						{service.map((item) => (
							<span
								key={item}
								className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
							>
								{item}
							</span>
						))}
					</div>
				)}
				{testimonial && (
					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{testimonial}</p>
				)}
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
					>
						View project &rarr;
					</a>
				)}
			</div>
		</div>
	);
}
