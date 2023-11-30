import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Logo from "../components/common/logo";
import NavBar from "../components/common/navBar";
import Socials from "../components/common/socials";

import INFO from "../data/user";

import "./styles/homepage.css";

const Homepage = () => {
	const logoStyle = {
		display: "flex",
		zIndex: 999,
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="keywords" />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={80} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<div className="work-socials">
								<Socials />
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
