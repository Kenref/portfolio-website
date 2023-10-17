import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/hero-section";
import NavBar from "./components/nav-bar";

export default function App() {
	return (
		<header className="container-xxl">
			<NavBar className="navbar"></NavBar>
			<HeroSection></HeroSection>
		</header>
	);
}
