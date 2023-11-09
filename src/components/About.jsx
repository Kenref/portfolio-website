import { forwardRef } from "react";
import { PropTypes } from "prop-types";

const AboutSection = forwardRef(({ aboutContent }, ref) => {
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
				{aboutContent &&
					aboutContent.map((paragraph, index) =>
						paragraph ? <p key={index}>{paragraph}</p> : null
					)}
			</div>
		</div>
	);
});

AboutSection.propTypes = {
	aboutContent: PropTypes.array,
};
AboutSection.displayName = "AboutSection";
export default AboutSection;
