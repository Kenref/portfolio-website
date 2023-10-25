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
		<div className="text-center">
			<h1 className="mb-5 text-decoration-underline display-3">About</h1>
			{/* TODO potentially make the hand wave */}
			<h5>
				👋 Hey there! I'm <span className="text-danger">Kenneth</span>.
				<br />I am a <span className="text-danger">self-taught developer </span>
				who made the leap into the world of programming in 2022 by quitting my
				job to learn to code full time. Prior to this I was a digital marketer
				who specialised on platforms such as Amazon and working with SEO, so
				user experience and customer engagement is nothing new to me. Nowadays
				my love for the code has taken over as it gives me a strong sense of
				accomplishment when create somehing and feel myself levelling up.
			</h5>
			<h2 className="text-decoration-underline">Interests</h2>
			<ul>Reading, ufc</ul>
			<h2 className="text-decoration-underline">Skills</h2>
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
