import React, { useState } from "react";

import './Home.css'
import { Light } from "./Light";

//create your first component
const Home = () => {
	const [active, setActive] = useState(null)
	const colors = [
		{ id: 1, class: 'red' },
		{ id: 2, class: 'yellow' },
		{ id: 3, class: 'green' }
	]
	const [color, setColor] = useState(colors)
	const updateColors = () => {
		const colorExist = color.some(purple => purple.class === 'purple')
		if (!colorExist) {
			const newColor = {
				id: color.length + 1,
				class: 'purple'
			}
			setColor([...color, newColor])
		}

	}
	const click = (id) => {
		setActive(id)
	}
	const randomColor = () => {
		let indexOn;
		do {
			const index = Math.floor(Math.random() * color.length)
			indexOn = color[index].id
		} while (indexOn === active)

		click(indexOn)
	}
	return (
		<>
			<div className="container d-flex justify-content-center flex-column align-items-center">
				<div className="trafic-light container bg-dark mt-3 p-3 d-flex  align-items-center flex-column">
					{
						color.map(color => (
							<Light key={color.id} id={color.id} nameClass={color.class} active={active === color.id} onclick={click} />
						))
					}
				</div>
				<div className="bg-dark poster"></div>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<button className="btn btn-dark text-uppercase" onClick={() => randomColor()}>Aleatorio</button>
			</div>
			<div className="d-flex justify-content-center mt-3">
				<button className="btn button" onClick={() => updateColors()}>Añadir Color Morado</button>
			</div>

		</>
	);
};

export default Home;