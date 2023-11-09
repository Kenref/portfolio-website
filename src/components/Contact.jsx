const Contact = () => {
	const email = "kenneth.tseee@gmail.com";
	return (
		<div
			id="email"
			className="row justify-content-center"
			style={{ minHeight: "20rem" }}
		>
			<h2
				className="col-3 text-center"
				style={{ color: "var(--colour-text-alert)" }}
			>
				Contact
			</h2>
			<h2
				className="col-lg-6 text-center"
				style={{ color: "var(--colour-text-dark)" }}
			>
				👉 <a href="mailto:kenneth.tseee@gmail.com">{email}</a> 👈
			</h2>
		</div>
	);
};
export default Contact;
