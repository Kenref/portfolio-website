import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-md" style={{ height: "55px" }}>
			<a href="#" className="navbar-brand">
				<span className="fw-bold" style={{ color: "var(--colour-secondary)" }}>
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
							href="#"
							style={{ color: "var(--colour-primary" }}
						>
							About
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="#"
							style={{ color: "var(--colour-primary" }}
						>
							Tech Stack
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="#"
							style={{ color: "var(--colour-primary" }}
						>
							Projects
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="#"
							style={{ color: "var(--colour-primary" }}
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
