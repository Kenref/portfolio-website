import { PropTypes } from "prop-types";
import { forwardRef } from "react";

const Contact = forwardRef(({ email }, ref) => {
	return (
		<div
			id="email"
			className="row justify-content-center align-items-start"
			style={{ paddingBottom: "20rem" }}
		>
			<h2
				className="col-3 text-center"
				style={{ color: "var(--colour-text-alert)" }}
			>
				Contact
			</h2>
			<h2
				ref={ref}
				className="col-lg-6 text-center custom-scroll-animation-hidden"
				style={{ color: "var(--colour-text-dark)" }}
			>
				👉 <a href={`mailto:${email}`}>{email}</a> 👈
			</h2>
		</div>
	);
});

Contact.propTypes = {
	email: PropTypes.string,
};
Contact.displayName = "Contact";
export default Contact;
