import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	console.log(active);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/project-portfolio/home">Home</Link>
							</li>

							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/project-portfolio/projects">
									Projects
								</Link>
							</li>
							<li
								className={
									active === "work-experience"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/project-portfolio/work-experience">
									Work Experience
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
