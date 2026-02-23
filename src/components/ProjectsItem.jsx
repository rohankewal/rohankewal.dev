export default function ProjectsItem({ title, description, stack, link, liveUrl }) {
	return (
		<div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 flex flex-col">
			<h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
				{title}
			</h3>
			{description && (
				<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
					{description}
				</p>
			)}
			<div className="flex flex-wrap gap-1.5 mb-4">
				{stack.map((item) => (
					<span
						key={item}
						className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
					>
						{item}
					</span>
				))}
			</div>
			<div className="mt-auto flex items-center gap-4">
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
				>
					Source &rarr;
				</a>
				{liveUrl && (
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
					>
						Live demo &rarr;
					</a>
				)}
			</div>
		</div>
	);
}
