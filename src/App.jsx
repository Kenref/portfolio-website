import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/Hero-section";
import NavBar from "./components/Nav-bar";
import "./index.css";
import AboutSection from "./components/About";
import TechStack from "./components/Tech-stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
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

	const aboutRef = useRef(null);
	const techStackRef = useRef(null);
	function useArrayOfRefs(length) {
		const refsArray = Array.from({ length }, () => useRef(null));
		return refsArray;
	}
	const projectsRefs = useArrayOfRefs(2);

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
		};
	}, []);

	return (
		<div style={{ backgroundColor: "var(--colour-background-primary)" }}>
			<div className="container">
				<header>
					<NavBar className="navbar" />
				</header>
				<main>
					<HeroSection headline={headline1} description={headline2} />
					<AboutSection ref={aboutRef} aboutContent={aboutContent} />
					<TechStack ref={techStackRef} />
					<Projects ref={projectsRefs} />
					<Contact />
				</main>
			</div>
		</div>
	);
}
