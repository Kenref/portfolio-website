export default function AboutSection() {
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
					In 2022, I made the life changing decision to pursue the life of a
					developer by leaving my old career behind to pursue programming full
					time. Prior to this I was a digital marketer who specialised on
					platforms such as Amazon and working with SEO, so user experience and
					customer behaviours are nothing new to me.
				</p>
				<p>
					Nowadays my love for code has taken over as I have really come to
					enjoy the constant sense of achievement that I feel as I continue to
					level up my skills. To me the ethos of lifelong learning is not just
					another career path but unlocks a new way to live which can also be
					applied to other areas of my life.
				</p>
				<p>
					When I am not in fronnt of a computer I enjoy smoking meats, solving
					puzzles and reading (highly recommend Atomic Habits by James Clear)
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
