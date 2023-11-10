import { forwardRef } from "react";

const TechStack = forwardRef((props, ref) => {
	const skills = [
		{ src: "/src/assets/HTML-Icon.png", alt: "HTML logo", title: "HTML" },
		{ src: "/src/assets/CSS-Icon.png", alt: "CSS logo", title: "CSS" },
		{
			src: "/src/assets/JS-Icon.png",
			alt: "JavaScript logo",
			title: "JavaScript",
		},
		{ src: "/src/assets/React-Icon.png", alt: "React logo", title: "React" },
		{ src: "/src/assets/Nodejs-Icon.png", alt: "Node logo", title: "Node.js" },
		{ src: "/src/assets/Vite-Icon.png", alt: "Vite logo", title: "Vite" },
		{ src: "/src/assets/Jest-Icon.png", alt: "Jest logo", title: "Jest" },
		{ src: "/src/assets/Vitest-Icon.png", alt: "Vitest logo", title: "Vitest" },
		{
			src: "/src/assets/Bootstrap-Icon.png",
			alt: "Bootstrap logo",
			title: "Bootstrap",
		},
		{
			src: "/src/assets/Python-Icon.png",
			alt: "Python logo",
			title: "Python",
		},
		{
			src: "/src/assets/Github-Icon.png",
			alt: "Github logo",
			title: "Github",
		},
	];
	return (
		<div className="row justify-content-center">
			<h2
				className="col-2 text-center"
				style={{ color: "var(--colour-text-light)" }}
			>
				Skills
			</h2>
			<div
				ref={ref}
				className="col-lg-6 custom-scroll-animation-hidden"
				style={{ minHeight: "100vh" }}
			>
				<div className=" row text-center justify-content-center">
					{skills.map((skill, index) => (
						<div className="col-3" key={index}>
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
});

TechStack.displayName = "TechStack";
export default TechStack;
