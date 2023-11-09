import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavBar = () => {
	const resume = "public/Kenneth Tse Resume.pdf";
	const contact = "#email";
	return (
		<nav className="navbar navbar-expand-md container justify-content-end">
			{/* toggle button for mobile nav */}
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#main-nav"
				aria-controls="main-nav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="main-nav"
				style={{ textAlign: "center" }}
			>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a
							className="nav-link"
							href={resume}
							style={{ color: "var(--colour-text-dark" }}
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href={contact}
							style={{ color: "var(--colour-text-dark" }}
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default NavBar;
