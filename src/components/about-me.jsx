export default function AboutSection({ headline, body }) {
	const skills = [
		{ src: "src/assets/HTML-Icon.png", alt: "HTML logo", title: "HTML" },
		{ src: "src/assets/CSS-Icon.png", alt: "CSS logo", title: "CSS" },
		{
			src: "src/assets/JS-Icon.png",
			alt: "JavaScript logo",
			title: "JavaScript",
		},
		{ src: "src/assets/React-Icon.png", alt: "React logo", title: "React" },
		{ src: "src/assets/Nodejs-Icon.png", alt: "Node logo", title: "Node.js" },
		{
			src: "src/assets/Bootstrap-Icon.png",
			alt: "Bootstrap logo",
			title: "Bootstrap",
		},
		{ src: "src/assets/Python-Icon.png", alt: "Python logo", title: "Python" },
		{ src: "src/assets/Github-Icon.png", alt: "Github logo", title: "Github" },
	];
	return (
		//about me
		<div
			className="col-lg-7 justify-content-center mx-auto"
			// style={{ minHeight: "100vh" }}
		>
			<div className="text-center" style={{ minHeight: "100vh" }}>
				<h1 className="" style={{ color: "var(--colour-text-dark)" }}>
					👋 Hey there! I'm
					<span style={{ color: "var(--colour-text-alert)" }}> Kenneth</span>
				</h1>
				{/* TODO potentially make the hand wave */}
				<p className="" style={{ color: "var(--colour-text-normal)" }}>
					I am a{" "}
					<span style={{ color: "var(--colour-text-dark)" }}>
						self-taught developer {/* TODO insert cat typing gif here */}
					</span>
					who made the leap into the world of programming in 2022 by quitting my
					job to learn to code full time. Prior to this I was a{" "}
					<span style={{ color: "var(--colour-text-dark)" }}>
						digital marketer
					</span>{" "}
					who specialised on platforms such as Amazon and working with SEO, so
					user experience and customer engagement is nothing new to me. Nowadays
					my love for the code has taken over as it gives me a strong sense of
					accomplishment when create somehing and feel myself{" "}
					<span style={{ color: "var(--colour-text-dark)" }}>levelling up</span>
					.
				</p>
			</div>

			<div className="text-center my-auto" style={{ minHeight: "100vh" }}>
				<h2
					className="text-decoration-underline mb-4"
					style={{ color: "var(--colour-text-alert)" }}
				>
					Skills
				</h2>
				<div className="col-lg-7 row gap-md-3 justify-content-center mx-auto">
					{skills.map((skill, index) => (
						<div className="col-4 col-md-3" key={index}>
							<img className="img-fluid" src={skill.src} alt={skill.alt} />
							<h5 style={{ color: "var(--colour-text-dark)" }}>
								{skill.title}
							</h5>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
//
// </div>
// <div className="d-flex flex-column align-items-center">

// 	<h2
// 		className="text-decoration-underline my-4"
// 		style={{ color: "var(--colour-text-dark)" }}
// 	>
// 		Interests
// 	</h2>
// 	<ul>
// 		<li>PROGRAMMING</li>
// 		<li>Reading</li>
// 		<li>UFC</li>
// 		<li>smoking meat</li>
// 	</ul>
// </div>;
