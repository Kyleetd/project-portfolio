import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import CustomizedTimeline from "../components/work-experience/mui-timeline";

import INFO from "../data/user";
import { WORK_INFO } from "../data/work";

import "./styles/work_experience.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="keywords" />
			</Helmet>

			<div className="page-content">
				<NavBar active="work-experience" />
				<div className="content-wrapper">
					<div className="work-container">
						<div className="work-image">
							<img
								src={WORK_INFO.details.logo}
								alt="Work Logo"
								className="cat-image"
							/>
						</div>
						<div className="work-main">
							<CustomizedTimeline timeLineData={WORK_INFO.work} />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
