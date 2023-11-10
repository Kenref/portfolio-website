import { useEffect, useRef, useState } from "react";
import { PropTypes } from "prop-types";

export default function HeroSection({ headline1, headline2 }) {
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const [heroText, setHeroText] = useState(headline1);
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
				setHeroText(headline1);
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
		<div
			className="d-flex flex-column pb-5 justify-content-center align-items-center"
			style={{ minHeight: "100vh" }}
		>
			<h1
				onMouseEnter={startAnimation}
				className="text-center"
				style={{
					fontSize: "calc(1rem + 8vmin)",
					fontFamily: "Space Mono, monospace",
					color: "var(--colour-text-alert)",
				}}
			>
				{heroText}
			</h1>
			<h2
				className="text-center"
				style={{
					fontFamily: "Space Mono, monospace",
					color: "var(--colour-text-light)",
				}}
			>
				{headline2}
			</h2>
		</div>
	);
}

HeroSection.propTypes = {
	headline1: PropTypes.string,
	headline2: PropTypes.string,
};
