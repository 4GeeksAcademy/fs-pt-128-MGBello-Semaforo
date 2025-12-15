import React, { useState } from "react";

import './Home.css'
import { Light } from "./Light";
//create your first component
const Home = () => {
	const [active, setActive] = useState(null)

	const [color, setColor] = useState([
		{ id: 1, class: 'red' },
		{ id: 2, class: 'yellow' },
		{ id: 3, class: 'green' }
	])
	
	const updateColors = () => {
		const newColor = {
			id: color.length + 1,
			class: 'purple'
		}
		setColor([...color, newColor])
	}
	const click = (id) => {
		setActive(id)
	}

	return (
		<>
			<div className="container d-flex justify-content-center flex-column align-items-center">
				<div className="trafic-light container bg-dark mt-5 p-3 d-flex  align-items-center flex-column">
					{
						color.map(color => (
							<Light key={color.id} id={color.id} nameClass={color.class} active={active === color.id} onclick={click} />
						))
					}
				</div>
				<div className="bg-dark poster"></div>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<button className="btn button" onClick={updateColors}>Aleatorio</button>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<button className="btn button" onClick={updateColors}>Añadir Color Morado</button>
			</div>

		</>
	);
};

export default Home;