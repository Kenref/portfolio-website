import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import "./index.css";
import AboutSection from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
	const resume = "/Kenneth Tse Resume.pdf";
	const contact = "#email";
	const headline1 = "Kenneth Tse";
	const headline2 = "Software Developer";
	const darkFont = { color: "var(--colour-text-normal)" };
	const aboutContent = [
		<>
			I am a <strong style={darkFont}>software developer</strong> who began my
			journey into the world of code in early 2022. Prior to this I graduated
			with a{" "}
			<strong style={darkFont}>
				Bachelors of Business at Macquarie University
			</strong>
			. I was also a <strong style={darkFont}>digital marketer</strong> on
			platforms such as <strong style={darkFont}>Amazon</strong>, specialising
			in ad campaign creation and management, understanding customer behaviour
			and SEO.
		</>,
		<>
			Nowadays my love for programming has taken over as I enjoy the constant
			sense of achievement I feel in leveling up my skills. Discovering new
			design philosophies such as test driven development and SOLID really makes
			writing code feel like an artform as each will transform the way I write
			and think about code.
		</>,
		<>
			<strong style={darkFont}>When I am not in front of a computer</strong> I
			enjoy BBQ, playing chess and reading.
		</>,
	];
	const email = "kenneth.tseee@gmail.com";
	const aboutRef = useRef(null);
	const techStackRef = useRef(null);
	function useArrayOfRefs(length) {
		const refsArray = Array.from({ length }, () => useRef(null));
		return refsArray;
	}
	const projectsRefs = useArrayOfRefs(2);
	const contactRef = useRef(null);
	const skills = [
		{ src: "/HTML-Icon.png", alt: "HTML logo", title: "HTML" },
		{ src: "/CSS-Icon.png", alt: "CSS logo", title: "CSS" },
		{
			src: "/JS-Icon.png",
			alt: "JavaScript logo",
			title: "JavaScript",
		},
		{ src: "/React-Icon.png", alt: "React logo", title: "React" },
		{ src: "/Nodejs-Icon.png", alt: "Node logo", title: "Node.js" },
		{ src: "/Vite-Icon.png", alt: "Vite logo", title: "Vite" },
		{ src: "/Jest-Icon.png", alt: "Jest logo", title: "Jest" },
		{ src: "/Vitest-Icon.png", alt: "Vitest logo", title: "Vitest" },
		{
			src: "/Bootstrap-Icon.png",
			alt: "Bootstrap logo",
			title: "Bootstrap",
		},
		{
			src: "/Python-Icon.png",
			alt: "Python logo",
			title: "Python",
		},
		{
			src: "/Github-Icon.png",
			alt: "Github logo",
			title: "Github",
		},
	];

	const projects = [
		{
			title: "Memory Card Game",
			src: "/memory-mockup.png",
			alt: "Memory Card Game mockup",
			description:
				"Memory card game built with the RESTful Poke API. Objective is to click on all unique cards until all have been selected. Able to select from 4 diificulties and play with different cards each time",
			skills: ["HTML", "CSS", "JS", "React", "Bootstrap"],
			github: "https://github.com/Kenref/memory-card-game",
			demo: "https://kenneth-memory-card-game.netlify.app/",
		},
		{
			title: "Calculator",
			src: "/calculator-mockup.png",
			alt: "Calculator",
			description:
				"A working calculator built using plain Javascript with keyboard functionality and the ability to do consecutive calculations.",
			skills: ["HTML", "CSS", "JS"],
			github: "https://github.com/Kenref/calculator",
			demo: "https://kenref.github.io/calculator/",
		},
	];

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("custom-scroll-animation-show");
				}
			});
		});

		if (aboutRef.current) {
			observer.observe(aboutRef.current);
		}
		if (techStackRef.current) {
			observer.observe(techStackRef.current);
		}
		projectsRefs.forEach((projectRef) => {
			if (projectRef.current) {
				observer.observe(projectRef.current);
			}
		});
		if (contactRef.current) {
			observer.observe(contactRef.current);
		}

		return () => {
			if (aboutRef.current) {
				observer.unobserve(aboutRef.current);
			}
			if (techStackRef.current) {
				observer.unobserve(techStackRef.current);
			}
			projectsRefs.forEach((projectRef) => {
				if (projectRef.current) {
					observer.observe(projectRef.current);
				}
			});
			if (contactRef.current) {
				observer.unobserve(contactRef.current);
			}
		};
	}, []);

	return (
		<div style={{ backgroundColor: "var(--colour-background-primary)" }}>
			<div className="container">
				<header>
					<NavBar className="navbar" resume={resume} contact={contact} />
				</header>
				<main>
					<HeroSection headline1={headline1} headline2={headline2} />
					<AboutSection ref={aboutRef} aboutContent={aboutContent} />
					<TechStack skills={skills} ref={techStackRef} />
					<Projects projects={projects} ref={projectsRefs} />
					<Contact email={email} ref={contactRef} />
				</main>
			</div>
		</div>
	);
}
