import React from "react";
import Title from "./Title";

export default function Services() {
	return (
		<div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<Title>Services</Title>
			<div className="mt-10">
				<div className="flex flex-wrap -mx-4">
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="text-2xl font-semibold mb-4">
								WordPress Development
							</h3>
							<p className="text-gray-700">
								We build fast, responsive, and secure websites using WordPress
								and all the latest themes and plugins
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="text-2xl font-semibold mb-4">
								Shopify Development
							</h3>
							<p className="text-gray-700">
								We develop mobile apps for iOS and Android using the latest
								technologies.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h3 className="text-2xl font-semibold mb-4">
								ClickFunnels Development
							</h3>
							<p className="text-gray-700">
								We design modern and user-friendly interfaces for web and mobile
								apps.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
