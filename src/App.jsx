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
					<AboutSection ref={aboutRef} />
					<TechStack ref={techStackRef} />
					<Projects ref={projectsRefs} />
					<Contact />
				</main>
			</div>
		</div>
	);
}
