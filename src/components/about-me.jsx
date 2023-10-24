export default function AboutSection({ headline, body }) {
	const skills = [
		{ src: "src/assets/HTML.png", alt: "HTML logo", title: "HTML" },
		{ src: "src/assets/CSS.png", alt: "CSS logo", title: "CSS" },
		{ src: "src/assets/JS.png", alt: "JavaScript logo", title: "JavaScript" },
		{ src: "src/assets/React.png", alt: "React logo", title: "React" },
		{ src: "src/assets/node.png", alt: "Node logo", title: "Node.js" },
		{ src: "src/assets/Python.png", alt: "Python logo", title: "Python" },
		{
			src: "src/assets/Bootstrap.png",
			alt: "Bootstrap logo",
			title: "Bootstrap",
		},
		{ src: "src/assets/Github.png", alt: "Github logo", title: "Github" },
	];
	return (
		<div className="text-center">
			<h1 className="mb-5 text-decoration-underline">{headline}</h1>
			<p>{body}</p>
			<div className=" row">
				{skills.map((skill, index) => (
					<div className="col-3" key={index}>
						<img className="img-fluid" src={skill.src} alt={skill.alt} />
						<h5>{skill.title}</h5>
					</div>
				))}
			</div>
		</div>
	);
}
