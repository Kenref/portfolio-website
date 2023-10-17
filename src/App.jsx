import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/hero-section";
import NavBar from "./components/nav-bar";
import "./index.css";

export default function App() {
	return (
		<header className="container-xxl">
			<NavBar className="navbar"></NavBar>
			<HeroSection headline={"Hello wassup"}></HeroSection>
		</header>
	);
}
