import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import WorkExperience from "./pages/work_experience";
import Notfound from "./pages/404";

import { ParticlesBackground } from "./components/common/particles/particles-background";
import "./app.css";

function App() {
	return (
		<>
			<div style={{ position: "absolute", zIndex: -1 }}>
				<ParticlesBackground />
			</div>
			<div className="App" style={{ zIndex: 10000 }}>
				<Routes>
					<Route path="/project-portfolio">
						<Route
							path=""
							element={<Navigate to="home" replace />}
						/>
						<Route path="home" element={<Homepage />} />
						<Route path="projects" element={<Projects />} />
						<Route path="work" element={<WorkExperience />} />
					</Route>
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
