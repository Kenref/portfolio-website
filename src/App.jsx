import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/Hero-section";
import NavBar from "./components/Nav-bar";
import "./index.css";
import AboutSection from "./components/About";
import TechStack from "./components/Tech-stack";
import Projects from "./components/Projects";

export default function App() {
	const aboutRef = useRef(null);
	const techStackRef = useRef(null);
	// const projectsRefs = useRef([]);
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
				// else {
				// 	entry.target.classList.remove("custom-scroll-animation-show");
				// }
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
					<HeroSection
						headline={"Kenneth Tse"}
						description={"Software Developer"}
					/>
					<AboutSection ref={aboutRef} />
					<TechStack ref={techStackRef} />
					<Projects ref={projectsRefs} />
				</main>
			</div>
		</div>
	);
}
