import React from 'react';
import './About.css';

export default function About() {
	return (
		<div className="aboutContainer">
			<h1 style={{ color: 'blue' }}>WEATHER APP</h1>
			<div className="textoAbout">
				<p>
					Es una pequeña app desarrollada con <b>React</b>.
					<br />
					Conectada con la <b>API OpenWeather</b>, que nos permite obtener
					datos en tiempo real acerca del clima de las ubicaciones que el
					usuario desee a lo largo de todo el mundo.
					<br />
					Esta app nos permite tener en pantalla los datos de varias
					ciudades y poder encontrar mas detalles al hacer click en la
					ciudad correpondiente
				</p>
			</div>
		</div>
	);
}
