import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/Hero-section";
import NavBar from "./components/Nav-bar";
import "./index.css";
import AboutSection from "./components/About-me";

export default function App() {
	return (
		<div style={{ backgroundColor: "var(--colour-background-primary)" }}>
			<header className="container-xxl">
				<NavBar className="navbar" />
			</header>
			<main className="container-xxl">
				<HeroSection
					headline={"Hello Hello Hello"}
					description={"Software Developer"}
				/>
				<AboutSection headline="Tech stack" />
			</main>
		</div>
	);
}
