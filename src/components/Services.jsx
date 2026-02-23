import Title from "./Title";

export default function Services() {
	return (
		<div className="max-w-5xl mx-auto py-12 px-4">
			<Title>Services</Title>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
				<div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
						WordPress Development
					</h3>
					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						Fast, responsive, and secure websites using WordPress
						and all the latest themes and plugins.
					</p>
				</div>
				<div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
						Shopify Development
					</h3>
					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						Custom Shopify storefronts and themes built for
						performance and conversion.
					</p>
				</div>
				<div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
						ClickFunnels Development
					</h3>
					<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
						Modern and user-friendly sales funnels and landing pages
						designed for results.
					</p>
				</div>
			</div>
		</div>
	);
}
