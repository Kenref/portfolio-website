import { createRef, forwardRef, useImperativeHandle, useRef } from "react";

const Projects = forwardRef((props, ref) => {
	const projects = [
		{
			title: "Memory Card Game",
			src: "src/assets/memory-mockup.png",
			alt: "Memory Card Game mockup",
			description:
				"Memory card game built with the RESTful Poke API. Objective is to click on all unique cards until all have been selected. Able to select from 4 diificulties and play with different cards each time",
			skills: ["HTML", "CSS", "JS", "React", "Bootstrap"],
		},
		{
			title: "Calculator",
			src: "src/assets/calculator-mockup.png",
			alt: "Calculator",
			description:
				"A working calculator built using plain Javascript with keyboard functionality and the ability to do consecutive calculations.",
			skills: ["HTML", "CSS", "JS"],
		},
	];

	return (
		<div className="row justify-content-center" style={{ minHeight: "100vh" }}>
			<h1
				className="col-lg-4 text-center text-lg-end"
				style={{ color: "var(--colour-text-light)" }}
			>
				Projects
			</h1>
			{/* TODO add links to project demo and code */}
			<div className="row col-lg-8">
				{projects.map((project, index) => (
					<div
						className="text-center custom-scroll-animation-hidden"
						style={{ minHeight: "100vh" }}
						key={index}
						ref={ref[index]}
					>
						<h3 style={{ color: "var(--colour-text-dark)" }}>
							{project.title}
						</h3>

						<div>
							{project.skills.map((skill, index) => (
								<span className="badge mx-2 text-bg-primary" key={index}>
									{skill}
								</span>
							))}
						</div>

						<img
							className="w-100"
							style={{ marginTop: "-2rem", marginBottom: "-2rem" }}
							src={project.src}
							alt={project.alt}
						/>
						<p className="col-8 mx-auto">{project.description}</p>
					</div>
				))}
			</div>
		</div>
	);
});

Projects.displayName = "Projects";
export default Projects;
