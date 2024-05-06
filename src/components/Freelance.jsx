import React from "react";
import freelance from "../data/freelance";
import FreelanceItem from "./FreelanceItem";
import Title from "./Title";

export default function Freelance() {
	return (
		<div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<Title>Freelance Porjects</Title>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{freelance.map((project) => (
					<FreelanceItem
						key={project.title}
						imgUrl={project.imgUrl}
						title={project.link}
						stack={project.service}
						link={project.clientLogo}
						testimonial={project.tesimonial}
					/>
				))}
			</div>
		</div>
	);
}
