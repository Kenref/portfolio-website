import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/Hero-section";
import NavBar from "./components/Nav-bar";
import "./index.css";
import AboutSection from "./components/About-me";

export default function App() {
	return (
		<div style={{ backgroundColor: "var(--colour-background-primary)" }}>
			<div className="container-xxl px-5">
				<header>
					<NavBar className="navbar" />
				</header>
				<main>
					<HeroSection
						headline={"Hello Hello Hello"}
						description={"Software Developer"}
					/>
					<AboutSection
						headline="Skills"
						body="Do proident elit minim ad ad. Excepteur dolor nostrud id voluptate ea et ut. Irure ad excepteur officia ipsum enim do consectetur. Nostrud ex do labore nostrud et nulla fugiat sunt adipisicing reprehenderit ipsum ea et reprehenderit dolor. Minim id cupidatat non sit. Quis tempor velit occaecat officia id aliquip voluptate id incididunt. Anim cupidatat qui ut duis nulla culpa commodo qui velit mollit."
					/>
				</main>
			</div>
		</div>
	);
}
