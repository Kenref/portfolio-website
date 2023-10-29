export default function Projects() {
	const projects = [
		{
			title: "Memory Card Game",
			src: "src/assets/memory-mockup.png",
			alt: "Memory Card Game mockup",
			description:
				"Ad ad aute nisi et ad deserunt sit laboris esse occaecat aliqua labore enim.",
			skills: "Html, CSS, JS, React, Bootstrap",
		},
		{
			title: "Calculator",
			src: "src/assets/calculator-mockup.png",
			alt: "Calculator",
			description: "Cillum ullamco excepteur anim cupidatat ipsum nulla.",
			skills: "HTML, CSS, JS",
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
						className="text-center"
						style={{ minHeight: "100vh" }}
						key={index}
					>
						<h3 style={{ color: "var(--colour-text-dark)" }}>
							{project.title}
						</h3>
						<img
							className="w-100"
							style={{ marginTop: "-3rem", marginBottom: "-2rem" }}
							src={project.src}
							alt={project.alt}
						/>
						<p>{project.description}</p>
						<p>{project.skills}</p>
					</div>
				))}
			</div>
		</div>
	);
}
