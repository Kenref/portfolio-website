export default function AboutSection() {
	const darkFont = { color: "var(--colour-text-normal)" };
	return (
		//about me
		<div
			className=" row justify-content-center gap-3"
			// style={{ minHeight: "100vh" }}
		>
			<h3 className="col-2" style={{ color: "var(--colour-text-light)" }}>
				About
			</h3>
			<div
				className="col-lg-5"
				style={{ minHeight: "100vh", color: "var(--colour-text-dark)" }}
			>
				{/* TODO potentially make the hand wave */}
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
					When I am not in front of a computer I enjoy BBQ, playing chess and
					reading (highly recommend Atomic Habits by James Clear)
				</p>
			</div>
		</div>
	);
}

{
	/* <h1
					className="text-center"
					style={{ color: "var(--colour-text-dark)" }}
				>
					👋 Hey there! I'm
					<span style={{ color: "var(--colour-text-alert)" }}> Kenneth</span>
				</h1> */
}

// <p className="" style={{ color: "var(--colour-text-normal)" }}>
// 	I am a{" "}
// 	<span style={{ color: "var(--colour-text-dark)" }}>
// 		self-taught developer {/* TODO insert cat typing gif here */}
// 	</span>
// 	who made the leap into the world of programming in 2022 by quitting my
// 	job to learn to code full time. Prior to this I was a{" "}
// 	<span style={{ color: "var(--colour-text-dark)" }}>
// 		digital marketer
// 	</span>{" "}
// 	who specialised on platforms such as Amazon and working with SEO, so
// 	user experience and customer engagement is nothing new to me. Nowadays
// 	my love for the code has taken over as it gives me a strong sense of
// 	accomplishment when create somehing and feel myself{" "}
// 	<span style={{ color: "var(--colour-text-dark)" }}>levelling up</span>
// 	.
// </p>;
