import { forwardRef } from "react";
import { PropTypes } from "prop-types";

const TechStack = forwardRef(({ skills }, ref) => {
	return (
		<div className="row justify-content-center">
			<h2
				className="col-md-4 col-lg-2 text-center"
				style={{ color: "var(--colour-text-light)" }}
			>
				Skills
			</h2>
			<div
				ref={ref}
				className="col-md-9 col-lg-6 custom-scroll-animation-hidden"
				style={{ minHeight: "100vh" }}
			>
				<div className=" row text-center justify-content-center">
					{skills.map((skill, index) => (
						<div className="col-3" key={index}>
							<img className="img-fluid" src={skill.src} alt={skill.alt} />
							<h5 style={{ color: "var(--colour-text-dark)" }}>
								{skill.title}
							</h5>
						</div>
					))}
				</div>
			</div>
		</div>
	);
});

TechStack.propTypes = { skills: PropTypes.array };
TechStack.displayName = "TechStack";
export default TechStack;
