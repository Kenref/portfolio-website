import { useEffect, useRef, useState } from "react";

export default function HeroSection({ headline }) {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const [heroText, setHeroText] = useState(headline);
	const iterationsRef = useRef(0);
	const intervalIDRef = useRef(null);

	const startAnimation = () => {
		iterationsRef.current = 0;
		intervalIDRef.current = setInterval(() => {
			iterationsRef.current += 1 / 3;
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
				setHeroText(headline);
			}
		}, 30);
	};

	useEffect(() => {
		startAnimation();
		return () => {
			clearInterval(intervalIDRef.current);
		};
	}, []);

	return (
		//TODO when the screen is on mobile the header needs to be centered
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: "calc(100vh - 55px)" }}
		>
			<h1
				onMouseEnter={startAnimation}
				style={{
					fontSize: "5rem",
					fontFamily: "Space Mono, monospace",
					marginBottom: "300px",
					color: "var(--font-colour)",
				}}
			>
				{heroText}
			</h1>
		</div>
	);
}
