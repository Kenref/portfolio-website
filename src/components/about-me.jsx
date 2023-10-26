export default function AboutSection({}) {
	return (
		//about me
		<div
			className="col-lg-7 mx-auto"
			// style={{ minHeight: "100vh" }}
		>
			<div style={{ minHeight: "100vh" }}>
				<h1
					className="text-center"
					style={{ color: "var(--colour-text-dark)" }}
				>
					👋 Hey there! I'm
					<span style={{ color: "var(--colour-text-alert)" }}> Kenneth</span>
				</h1>
				{/* TODO potentially make the hand wave */}
				<p className="" style={{ color: "var(--colour-text-normal)" }}>
					I am a{" "}
					<span style={{ color: "var(--colour-text-dark)" }}>
						self-taught developer {/* TODO insert cat typing gif here */}
					</span>
					who made the leap into the world of programming in 2022 by quitting my
					job to learn to code full time. Prior to this I was a{" "}
					<span style={{ color: "var(--colour-text-dark)" }}>
						digital marketer
					</span>{" "}
					who specialised on platforms such as Amazon and working with SEO, so
					user experience and customer engagement is nothing new to me. Nowadays
					my love for the code has taken over as it gives me a strong sense of
					accomplishment when create somehing and feel myself{" "}
					<span style={{ color: "var(--colour-text-dark)" }}>levelling up</span>
					.
				</p>
			</div>
		</div>
	);
}

// 	<h2
// 		className="text-decoration-underline my-4"
// 		style={{ color: "var(--colour-text-dark)" }}
// 	>
// 		Interests
// 	</h2>
// 	<ul>
// 		<li>PROGRAMMING</li>
// 		<li>Reading</li>
// 		<li>UFC</li>
// 		<li>smoking meat</li>
// 	</ul>
// </div>;
