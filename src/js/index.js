//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own compotents
import { SecondsCounter } from "./component/home.js";

//counter function
let counter = 0;

setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	counter++;

	//start render your react application
	ReactDOM.render(
		<SecondsCounter
			numberOne={one}
			numberTwo={two}
			numberThree={three}
			numberFour={four}
			numberFive={five}
			numberSix={six}
		/>,
		document.querySelector("#app")
		//end render your react application
	);
}, 1000);
