import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/Hero-section";
import NavBar from "./components/Nav-bar";
import "./index.css";
import AboutSection from "./components/About";
import TechStack from "./components/Tech-stack";
import Projects from "./components/Projects";

export default function App() {
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
					<AboutSection />
					<TechStack />
					<Projects></Projects>
				</main>
			</div>
		</div>
	);
}
