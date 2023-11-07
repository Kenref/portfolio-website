import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavBar = () => {
	const resume = "public/Kenneth Tse Resume.pdf";
	const contact = "/contact/#email";
	return (
		//TODO make navbar scroll with the page or only appear when scrolling up
		<nav className="navbar navbar-expand-md container">
			<a href="#" className="navbar-brand">
				<span className="fw-bold" style={{ color: "var(--colour-text-light)" }}>
					Name logo here
				</span>
			</a>
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
					{/* <li className="nav-item">
						<a
							className="nav-link"
							href="#"
							style={{ color: "var(--colour-text-dark" }}
						>
							Books
						</a>
					</li> */}
				</ul>
			</div>
		</nav>
	);
};
export default NavBar;
