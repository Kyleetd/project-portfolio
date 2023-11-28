import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import WorkExperience from "./pages/work-experience";
import Notfound from "./pages/404";

import { ParticlesBackground } from "./components/common/particles/particles-background";
import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<>
			<div style={{ position: "absolute", zIndex: -1 }}>
				<ParticlesBackground />
			</div>
			<div className="App" style={{ zIndex: 1000 }}>
				<Routes>
					<Route path="/project-portfolio">
						<Route path="home" element={<Homepage />} />
						<Route path="projects" element={<Projects />} />
						<Route
							path="work-experience"
							element={<WorkExperience />}
						/>
					</Route>
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
