import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const [heroText, setHeroText] = useState("Kenneth");
	const iterationsRef = useRef(0);
	const intervalIDRef = useRef(null);

	const handleOnHover = () => {
		// Reset the iteration count on hover
		iterationsRef.current = 0;
		// Start the animation
		intervalIDRef.current = setInterval(() => {
			iterationsRef.current += 1 / 3; // Adjust the increment value to match your desired animation speed
			setHeroText((prevHeroText) =>
				prevHeroText
					.split("")
					.map((letter, index) => {
						if (index < iterationsRef.current) {
							return heroText[index];
						}
						return letters[Math.floor(Math.random() * 26)];
					})
					.join("")
			);
			if (iterationsRef.current >= heroText.length) {
				clearInterval(intervalIDRef.current);
				// Reset the text after the animation completes
				setHeroText("Kenneth");
			}
		}, 30);
	};

	// Cleanup the interval on component unmount
	useEffect(() => {
		return () => {
			clearInterval(intervalIDRef.current);
		};
	}, []);

	return (
		<div
			className="border d-flex justify-content-center align-items-center"
			style={{ height: "calc(100vh - 55px)" }}
		>
			<h1
				onMouseEnter={handleOnHover}
				style={{ fontSize: "5rem", fontFamily: "Space Mono, monospace" }}
			>
				{heroText}
			</h1>
		</div>
	);
}
