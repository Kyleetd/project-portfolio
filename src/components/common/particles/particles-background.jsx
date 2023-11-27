import { useCallback } from "react";
import Particles from "react-particles";
import options from "./particle-options";
import { loadSlim } from "tsparticles-slim";

export const ParticlesBackground = () => {
	const particlesInit = useCallback(async (Engine) => {
		await loadSlim(Engine);
	}, []);

	const particlesLoaded = useCallback(async (Container) => {
		await console.log(Container);
	}, []);

	return (
		<Particles
			id="jsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={options()}
		/>
	);
};
