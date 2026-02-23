import freelance from "../data/freelance";
import FreelanceItem from "./FreelanceItem";
import Title from "./Title";

export default function Freelance() {
	return (
		<div className="max-w-5xl mx-auto py-12 px-4">
			<Title>Freelance Projects</Title>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
				{freelance.map((project) => (
					<FreelanceItem
						key={project.title}
						imgUrl={project.imgURL}
						title={project.title}
						service={project.service ? [project.service] : null}
						link={project.link}
						clientLogo={project.clientLogo}
						testimonial={project.tesimonial}
					/>
				))}
			</div>
		</div>
	);
}
