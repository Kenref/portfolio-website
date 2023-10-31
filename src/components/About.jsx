import { forwardRef } from "react";

const AboutSection = forwardRef((props, ref) => {
	const darkFont = { color: "var(--colour-text-normal)" };
	return (
		<div
			className="row justify-content-center gap-3 custom-scroll-animation-hidden"
			ref={ref}
		>
			<h3
				className="col-2 text-center"
				style={{ color: "var(--colour-text-light)" }}
			>
				About
			</h3>
			<div
				className="col-lg-6"
				style={{ color: "var(--colour-text-dark)", minHeight: "50em" }}
			>
				<p>
					I am a <strong style={darkFont}>software developer</strong> who began
					my journey into the world of code in 2022. Prior to this I graduated
					with a{" "}
					<strong style={darkFont}>
						Bachelors of Business at Macquarie University
					</strong>
					. I was also a <strong style={darkFont}>digital marketer</strong> on
					platforms such as <strong style={darkFont}>Amazon</strong>,
					specialising in ad campaign creation and management, understanding
					customer behaviour and SEO.
				</p>
				<p>
					Nowadays my love for programming has taken over as I enjoy the
					constant sense of achievement I feel in leveling up my skills.
					Discovering new concepts such as test driven development and SOLID
					really makes writing code feel like an artform as each will transform
					the way I write and think about code.
				</p>
				<p>
					<strong style={darkFont}>When I am not in front of a computer</strong>{" "}
					I enjoy BBQ, playing chess and reading (highly recommend Atomic Habits
					by James Clear)
				</p>
			</div>
		</div>
	);
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
